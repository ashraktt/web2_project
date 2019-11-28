window.addEventListener("load",function(){
    let x= { type : 'load' , target : 'show page ' , time_date : new Date()}
    localStorage.setItem('load',JSON.stringify(x));
    setInterval(function(){
        localStorage.clear();
    },5000);
});
window.addEventListener("unload",function(){
    let y= { type : 'unload' , target : 'close page ' , time_date : new Date()}
    localStorage.setItem('unload',JSON.stringify(y));
});

function getRandomvalue(min,max){
	return Math.floor(Math.random()*(max-min)+min);
} 
var button = document.getElementById("button");


button.addEventListener("click",function(){

let z= { type : 'Generate_click' , target : 'get_Random_Letters ' , time_date : new Date()}
localStorage.setItem('G_click',JSON.stringify(z));

   gen();

});

function gen()
{
    var letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var num=parseInt(document.getElementById("input").value);
    var div=document.getElementById("but");
    if(div.textContent!="")
    {
        var e = document.querySelector("div");  
        var child = e.lastElementChild;  
        while (child) 
        { 
            e.removeChild(child); 
            child = e.lastElementChild; 
        } 
    }
  document.body.removeChild(document.getElementById("img") );

        var x= document.createElement("div");
        x.setAttribute("id","img");
        document.body.appendChild(x);

    for (i = 0; i < num; i++)
    {
       var index=getRandomvalue(0,25);
       var element=document.createElement("button");
       var text=document.createTextNode(letter[index]);
       element.appendChild(text);
       element.setAttribute("class","child");
       element.setAttribute("style","padding: 15px 20px;font-size: 30px; border-radius: 12px; margin-left:5px; margin-top :5px;")
       div.appendChild(element);
    }

        

      var t=document.getElementsByClassName("child");
      for(var i=0 ;i<t.length;i++)
      {
        t[i].addEventListener("click",function(e){
        let a= { type : 'Letter_click' , target : 'show photo' , time_date : new Date()}
        localStorage.setItem('L_click',JSON.stringify(a));

        document.body.removeChild(document.getElementById("img") );
        var x= document.createElement("div");
        x.setAttribute("id","img");


        document.body.appendChild(x);
            var it = document.createElement("img");      
            it.setAttribute("src","letter\\"+ e.target.textContent +".jpg");
            it.setAttribute("width","200px");
            it.setAttribute("height","200px");
            document.getElementById("img").appendChild(it);
        });
      }



}

