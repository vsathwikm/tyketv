<!-- Javascript for video popup generation -->

  function startVideo(srcUrl){
  document.getElementById('popup2').style.display ='block';
  document.getElementById('vid_frame').src=srcUrl;
  updateHistory(srcUrl);
  }

  function toggleVideo(state) {
      var url=document.getElementById("vid_frame").src;
      document.getElementById("vid_frame").src=url;
      document.getElementById('popup2').style.display ='none';
     }

 var updateHistory=function(srcUrl){
   var email=localStorage.getItem('login-email');
   var kidname=localStorage.getItem('kid-name');
   $.ajax({
     url: '/updateHistory.htm',
     type: 'POST',
     data: {
       email:email,
       fname:kidname,
       Link:srcUrl
     },
     dataType: 'json',
     success: function(data) {
       console.log(data);
   }
 })
 }
