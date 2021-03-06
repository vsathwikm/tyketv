//function to check if user is signed in, if not: reroute to index.htm
$(function(){
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/')+1);
  if(localStorage.login=="false" && (filename != 'login.htm' || filename != 'signup.htm'))
    window.location.href = "/index.htm";
}) ;

//Function to handle the tab button click: Events
$(function(){
  $('#BookEventsButton').on('click',function(){
    window.location.href="/BookEventsPg1.htm";
  })
})

//Function to handle the tab button cick: History
$(function(){
  $('#checkActivityButton').on('click',function(){
    var parentEmail=localStorage.getItem('login-email');
    window.location.href=`/history.htm/${parentEmail}`;
  })
})

/*--function to get event details on click of any event data
 -- stores data temporarily in localStorage*/
$(function(){
  $('.clickAction').on('click',function(){
    var eventTitle=document.getElementsByClassName('eventTitle');
    var eventName;
    if( $('#firstslide').css('display')=='block'){
      eventName=eventTitle[0].innerHTML;
    }
    else{
      var mySlides=document.getElementsByClassName('mySlides');
      for (var k = 1; k < mySlides.length; k ++) {
        if(mySlides[k].style.display=='block'){
          eventName=eventTitle[k].innerHTML;
        }
      }
    }
    console.log(eventName);
    localStorage.setItem('eventName',eventName.trim());
    //enable button
    document.getElementById('continue-page1Button').disabled = false;
  })
})

//function to move to page 2 on click of continue button
$(function(){
  $('#continue-page1Button').on('click',function(){
    window.location.href="/BookEventsPg2.htm";
  })
});
