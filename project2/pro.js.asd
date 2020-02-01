window.addEventListener("load",function(){
  let x= { type : 'load event page' , target : 'show page ' , time_date : new Date()}
  localStorage.setItem('load',JSON.stringify(x));

  setInterval(function()
  {
    $.ajax({
      type : "POST",
      url  : "proj.php",
      data : { localStorage :JSON.stringify(localStorage)},
      success : function(data){
          //console.log(data);
      }
     
  });
 
      localStorage.clear();
  },5000);

});

window.addEventListener("unload",function(){
  let y= { type : 'unload event page' , target : 'close page ' , time_date : new Date()}
  localStorage.setItem('unload',JSON.stringify(y));
});
$(function() {                

    $.ajax({
      type : "GET",
      url  : "proj.php",
      data : {"v_event": ""},
      success : function(response){
        if(response)
      {
       var data=JSON.parse(response);
       $("#responsecontainer").html(data.length);
       var k='';
       for(var i=0 ;i<data.length;i++){
        k += '<tr>';
        k += '<td>' + data[i]["_key"] + '</td>';
        k += '<td>' + data[i]["_value"] + '</td>';
        k += '</tr>';
        // k+='<br/>';
        // k+='<br/>';
       }
       $("#responsecontainer").html(k);
       }
       else {
         alert ("Waitting");
       }
      }
   });
  
  }); 