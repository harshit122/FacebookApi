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

         
         $.ajax('https://graph.facebook.com/me?fields=picture.width(250).height(250),id,name,first_name,last_name,birthday,about,hometown,languages,gender,education,work,relationship_status,quotes,family,website,email,cover&access_token=' + myFacebookToken, {

             success: function(response) {
                 //console.log(response);
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
                 $("#myWebsite").html(response.website);
                 $("#myRelation").html(response.relationship_status);

                 $("#myName").show();
                 $("#Welcome").hide();
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
                 var education = response.education;
                 var myEducation = $.map(education, function(index) {
                     return index.school.name;
                 });
                 $("#myEducation").text(myEducation);

                 // for family
                 var family = response.family.data;
                 var myFamily = $.map(family, function(index) {
                     return index.name;
                 });
                 $("#myFamily").text(myFamily);

                 $("#mainPic").show();
                 $(".basic").show("scale");
                 $(".feed6").show();
                 $(".work").show("scale");
                 $(".feed1").show();
                 $(".family").show("scale");
                 $(".feed2").show();
                 $(".about").show("scale");
                 $(".feed3").show();
                 $(".contact").show("scale");
                 $(".feed4").show();
                 $(".experience").show("scale");
                 $(".feed5").show();
                 $("#post").show(1000);
                 $("#basic").show();
                 $("#About").hide(1000);
                 $(".form-group").hide();

                 $("#sign_out").show(1000);
                 $("#postt").hide();
                 $(".pp").hide();
             }, //end of success

             //error handling
             error: function(jqXHR) {
                 alert(jqXHR.responseJSON.error.message + " Plz Reload the page and try again");

             },
             //Loader
             timeout: 1000,
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

         //$(".form-group").show();
         //Ajax for gettting Feed
         $.ajax("https://graph.facebook.com/me?fields=posts{created_time,type,full_picture,story,message,source},name,picture&access_token=" + myFacebookToken, {
             success: function(response) {
                 //var counter = 0

                 //console.log(counter);
                 var o = 0
                 $.each(response.posts.data, function(i, showValue) {
                     $(".form-group").hide("scale");
                     $("#mainPic").show();
                     $(".basic").hide("scale");
                     $(".feed6").show();
                     $(".work").hide("scale");
                     $(".feed1").show();
                     $(".family").hide("scale");
                     $(".feed2").show();
                     $(".about").hide("scale");
                     $(".feed3").show();
                     $(".contact").hide("scale");
                     $(".feed4").show();
                     $(".experience").hide("scale");
                     $(".feed5").show();
                     //$("#post").show();
                     $("#basic").show();
                     $("#About").show(1000);
                     $("#post").hide(1000);
                     $("#Welcome").hide();
                     $("#postt").show();
                     $(".pp").show();
                     // console.log(showValue);
                     //console.log(showValue.story)
                        //check for post type
                     if (showValue.type == "photo")
                         //console.log(showValue)
                         //console.log(showValue.type)
                         $(".pp").append("<li> Post:" + showValue.story + "</li>" + "<h6>Posted on:" + showValue.created_time + "\n</h6>" + "<img src=" + showValue.full_picture + " " + "class=" + " img-responsive " + ">");

                     else if (showValue.type == "video")
                         $(".pp").append("<li> Post:" + showValue.story + "</li>" + "<h6>Posted on:" + showValue.created_time + "</h6>" + "<video controls> <source  src=" + "" + showValue.source + " " + "type= " + "video/mp4" + "></video>")

                     else if (showValue.type == "status") {
                        // console.log(showValue.videos);
                         $(".pp").append("<li> Post:" + showValue.story + "</li>" + "<h6>Posted on:" + showValue.created_time + "\n</h6>")
                     }


                 }); //end of each loop
             }, //end success function
             //error handling
             error: function(jqXHR) {
                 //alert(jqXHR.responseJSON.error.message + " Plz Reload the page and try again");

             },
             //Loader
             timeout: 1000,
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
         $("#mainPic").hide();
         $("#token").val(null);
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
         $("#postt").hide();
         $("#myName").hide();
         $("#sign_out").hide();
         $("#About").hide();
         $("#Welcome").show();
         $("#postt").hide();
         $(".pp").hide();
     }
     //sign out button on click
     $("#sign_out").on('click', signout)
 }); // end doc ready