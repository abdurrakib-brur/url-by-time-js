  function urlByTime(set_h, set_m, set_url){
    var d = new Date("July 21, 1983 01:15:00");
    var hour = d.getUTCHours();
      function addZero(i) {
        if (i < 10) {
            i = "0" + i
          }
      return i;
    }

      var d = new Date();
      var h = addZero(d.getUTCHours());
      var m = addZero(d.getUTCMinutes());
      var s = addZero(d.getUTCSeconds());
      //var time = h + ":" + m + ":" + s;
      
      
      //var set_h, set_m, set_url;
      
    
      if(h>=set_h && m>=set_m){
        window.open(set_url, '_blank');
      }else{
      
        alert("It's not time yet!");
      }
  }
