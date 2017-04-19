//function find() { 
  // let c=document.getElementById("input").value;
   //console.log(c);
//}
         function find() {//ищет текст на странице, в параметр передается ID поля для ввода
		     var c=  document.getElementById("input").value; 
             console.log(c);
			 window.location.hash=c;
         }

//9 prakticheskaya
 
var html = document.documentElement;

var w= html.clientWidth;
var h= html.clientHeight;

/*
var resize = function(e){
	var wn=html.clientWidth;
	var hn=html.clientHeight;
	console.log(e);
	alert("Размер окна изменился.Размер вьюпорта: "+ wn +"х"+ hn);
	html.clientHeight=h;console.log("Высота");
	html.width(w);console.log("Ширина");
	


};



(function(){
	var time;
	
	window.onresize = function(e){
		if(time) clearTimeout (time);
		time=setTimeout(function(){resize(e);},1000);
	}
})();

*/
