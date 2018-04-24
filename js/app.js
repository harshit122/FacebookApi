 // main document ready function to check if dom is loaded fully or not
 //var myFacebookToken = $("#token").val();
 //myFacebookToken='EAACEdEose0cBAM1CiR4WG5IU3DzhaQKi2UmcyNZCVBZAkHBZBhp0lcyabIakm7t0BJJx7gQeHZCIyTZBNXtAtZCXR2QIXDjlZBCwdo53vv0v7K5dZCt8kzWcs5YqDYO2B8iFwOTVZB9bOi0lPgOGnHEZASYpKA59UHMlKG4gT5TTI4Om4zcEkFHWVBGAnmCIQQyMj3TewOLrXgpgZDZD'
 $(window).load(function() {
     $('.preloader').delay(100).fadeOut("slow"); // set duration in brackets    
 });
 $(document).ready(function() {

     //Backgroung images transition
     jQuery(document).ready(function() {
         $('body').backstretch([
             "images/tm-bg-slide-1.jpg",
             "images/tm-bg-slide-2.jpg"
         ], {
             duration: 3200,
             fade: 1300
         });
     });


     $("#postt").hide();
     // $(".form-group").hide("scale");
     $("#mainPic").hide();
     $(".basic").hide("scale");
     $(".feed6").hide();
     $(".work").hide("scale");
     $(".feed1").hide();
     $(".family").hide("scale");
     $(".feed2").hide();
     $(".about").hide("scale");
     $(".feed3").hide();
     $(".contact").hide("scale");
     $(".feed4").hide();
     $(".experience").hide("scale");
     $(".feed5").hide();
     $("#post").hide();
     $("#basic").hide();
     $("#post").hide();
     $("#About").hide();

     $("#sign_out").hide();

     // var myFacebookToken="";

     function getAboutInfo() {
         var myFacebookToken = $("#token").val();

         //myFacebookToken
         $.ajax('https://graph.facebook.com/me?fields=picture.width(250).height(250),id,friends,name,first_name,last_name,birthday,about,hometown,languages,gender,education,work,relationship_status,quotes,family,website,favorite_athletes,favorite_teams,email,cover&access_token=' + myFacebookToken, {

             success: function(response) {
                 console.log(response);
                 //console.log(typeof(response));
                 $("#myEmail").text(response.email);
                 //console.log(response.email);
                 $("#myProfileId").html('<a target="blank" href="https://facebook.com/' + response.id + '">https://facebook.com/' + response.id + '</a>');
                 $("#myHomeTown").text(response.hometown.name);
                 $(".myProfilePic").attr("src", "" + response.picture.data.url + "");
                 $(".myCoverPic").attr("src", "" + response.cover.source + "");
                 $("#myName").html(response.name);
                 $("#Namee").html(response.name);
                 $("#myBirthday").html(response.birthday);
                 $("#myGender").html(response.gender);
                 $("#myAbout").html(response.about);
                 $("#myWebsite").html(response.website || "Not Available");
                 $("#myRelation").html(response.relationship_status || "Not Available");
                 $("#myName").show(500);
                 $("#Welcome").hide(500);
                 $("#howWorks").hide(500);
                 //for language 
                 var languages = response.languages;
                 var myLanguage = $.map(languages, function(index) {
                     return index.name;
                 });
                 $("#myLanguage").text(myLanguage);

                 // for work
                 var work = response.work;
                 var myWork = $.map(work, function(index) {
                     return index.employer.name;
                 });
                 $("#myWork").text(myWork);

                 //for education
                 var favoriteAthletes = response.favorite_athletes;
                 var myfavoriteAthletes = $.map(favoriteAthletes, function(index) {
                     return index.name;
                 });
                 $("#favoriteAthletes").text(myfavoriteAthletes);

                 // for family
                 var family = response.friends.data;
                 var myFamily = $.map(family, function(index) {
                     return index.name;
                 });

                 $("#friends").text(myfavoriteAthletes);

                 // for familyfavorite_teams
                 var favoriteTeams = response.favorite_teams;
                 console.log(favoriteTeams)
                 var myfavoriteTeams = $.map(favoriteTeams, function(index) {
                     return index.name;
                 });

                 $("#favoriteTeams").text(myfavoriteTeams);


                 $("#myFamily").text(myFamily);

                 $("#mainPic").show(500);
                 $(".basic").show("scale");
                 $(".feed6").show(500);
                 $(".work").show("scale");
                 $(".feed1").show(500);
                 $(".family").show("scale");
                 $(".feed2").show(500);
                 $(".about").show("scale");
                 $(".feed3").show(500);
                 $(".contact").show("scale");
                 $(".feed4").show(500);
                 $(".experience").show("scale");
                 $(".feed5").show(500);
                 $("#post").show(200);
                 $("#basic").show(500);
                 $("#About").hide(200);
                 $(".form-group").hide(500);

                 $("#sign_out").show(200);
                 $("#postt").hide();
                 $(".pp").hide();
             }, //end of success

             //error handling
             error: function(req, status, error) {
                //alert("error")
                console.log('Error occured', status, error);
                alert("Just Refresh Again yet not solved then There's Something Wrong With Your TOKEN. Either not inserted or it is expired.");

             },
             //Loader
             timeout: 4000,
             beforeSend: function() {
                 // move();
                 $('.preloader').show();
             },
             complete: function() {
                 $('.preloader').hide();

             }

             //end argument list 


         }); // end ajax call 



     }; //end of info button
     $("#info").on('click', getAboutInfo)

     $("#About").on('click', getAboutInfo)


     function postValues() {
         var myFacebookToken = $("#token").val();
        //myFacebookToken="EAACEdEose0cBACK62UZCgUy8EhoQL4aRDQGYpycDZCV06alIVKkhXhQi1vEzxhJ0hKkfGBiBbtxgz1TM1no9tAX4KzLAs2pMHUQbZAztI4i7dZCy2SEAP8msSUOzl6Detf71iiByaCQStdhUcZAadjlBqM2smpwPg3eb7vGolrktJpLG9KP7Fl6LsoXwZAJiv1Pd8plZAeIoQZDZD";
         //$(".form-group").show();
         //Ajax for gettting Feed
         $.ajax("https://graph.facebook.com/me?fields=posts{created_time,type,full_picture,story,message,source},name,picture&access_token=" + myFacebookToken, {
             success: function(response) {
                 //var counter = 0

                 //console.log(counter);
                 var o = 0
                 $.each(response.posts.data, function(i, showValue) {
                     $(".form-group").hide("scale");
                     $("#mainPic").show(500);
                     $(".basic").hide("scale");
                     $(".feed6").show(500);
                     $(".work").hide("scale");
                     $(".feed1").show(500);
                     $(".family").hide("scale");
                     $(".feed2").show(500);
                     $(".about").hide("scale");
                     $(".feed3").show(500);
                     $(".contact").hide("scale");
                     $(".feed4").show(500);
                     $(".experience").hide("scale");
                     $(".feed5").show(500);
                     //$("#post").show();
                     $("#basic").show(500);
                     $("#About").show(700);
                     $("#post").hide(100);
                     $("#Welcome").hide(500);
                     $("#postt").show(200);
                     $(".pp").show(500);
                     $("#howWorks").hide(500);
                     // console.log(showValue);
                     //console.log(showValue.story)
                        //check for post type
                     if (showValue.type == "photo")
                         //console.log(showValue)
                         //console.log(showValue.type)
                         $(".pp").append("<li> Post:" + showValue.story + "</li>" + "<h6>Posted on:" + showValue.created_time + "\n</h6>" + "<img src=" + showValue.full_picture + " " + "class=" + " img-responsive " + ">");

                     else if (showValue.type == "video")
                         $(".pp").append("<li> Post:" + showValue.story + "</li>" + "<h6>Posted on:" + showValue.created_time + "</h6>" + "<video controls> <source  src=" + "" + showValue.source + " " + "type= " + "video/mp4" + " " + "class =" + " video_reposive " + " ></video>")

                     else if (showValue.type == "status") {
                        // console.log(showValue.videos);
                         $(".pp").append("<li> Post:" + showValue.story + "</li>" + "<h6>Posted on:" + showValue.created_time + "\n</h6>")
                     }


                 }); //end of each loop
             }, //end success function
             //error handling
             error: function(req, status, error) {
                console.log('Error occured', status, error);
                alert("Just Refresh Again yet not solved then There's Something Wrong With Your TOKEN. Either not inserted or it is expired.");

             },
             //Loader
             timeout: 4000,
             beforeSend: function() {
                 // move();
                 $('.preloader').show();
             },
             complete: function() {
                 $('.preloader').hide();

             }
         }); // ajax call

     }; //post button

     $("#post").on('click', postValues)
     //Hiding and showing Ui

     //function of signout button
     function signout() {

         myFacebookToken = null
         $(".form-group").show("scale");
         $("#mainPic").hide(500);
         $("#token").val(null);
         $(".basic").hide("scale");
         $(".feed6").hide(500);
         $(".work").hide("scale");
         $(".feed1").hide(500);
         $(".family").hide("scale");
         $(".feed2").hide(500);
         $(".about").hide("scale");
         $(".feed3").hide(500);
         $(".contact").hide("scale");
         $(".feed4").hide(500);
         $(".experience").hide("scale");
         $(".feed5").hide(500);
         $("#post").hide(500);
         $("#basic").hide(500);
         $("#postt").hide(500);
         $("#myName").hide(500);
         $("#sign_out").hide(500);
         $("#About").hide(500);
         $("#Welcome").show(500);
         $("#postt").hide(500);
         $("#howWorks").show(500);
         $(".pp").hide(500);
     }
     //sign out button on click
     $("#sign_out").on('click', signout)
 }); // end doc ready