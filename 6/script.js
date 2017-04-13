function m() {
	
let mas = {
	name:[],
	age:[]
};
	let n=document.getElementsByName("tt")[0];
	 let y=document.getElementsByName("yy")[0];
	 
mas['name']=n.value;
mas['age']=y.value;
alert(mas.name);
alert(mas.age);
let mm=[];
 for(var i in mas){
 	 mm=["Name:"+mas.name+"; age:"+mas.age];
 	
 }
alert(mm);

}





