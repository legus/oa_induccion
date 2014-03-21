$(document).on("ready", arranque);
var urls_contenidos=[];
var titulos=[];
var btn=0;
var contenidos=0;
function arranque(){
	console.log($("h1").attr("id"));
	urls_contenidos=[["bienvenida"],
					["cont2","cont3","cont4","cont5","cont6","cont7","cont8","cont9","cont10","cont11"],
					["cont12","cont13","cont14"],
					["cont15","cont16","cont17"],
					["cont18","cont19","cont20","cont21","cont22","cont23","cont24","cont25","cont26","cont27","cont28","cont29","cont30","cont31"],
					["cont32"],
					["cont33","cont34","cont35","cont36","cont37","cont38","cont39","cont40","cont41","cont42"]];
	//window.alert(urls_contenidos);
	titulos=["Bienvenido a Unisangil","El sentido de nuestro quehacer","Así nos organizamos","Pautas y Medidas orientadoras","Nuestro Ideal Educativo","Medios de Información y Comunicación","Salud ocupacional"];
	/*$("#menu_lateral2").on("click",clic_menu);
	$(".botones").on("click",clic_btns);
	$("#st_nav_der").on("click",clic_h_der);
	$("#st_nav_izq").on("click",clic_h_izq);
	$("#menu_interno1").on("click",clic_t_izq);
	$("#menu_interno2").on("click",clic_t_der);*/
	$(".botones").on("mouseover",pasar);
	$(".st_navs").css("visibility","hidden");
	$("#menu_interno1").css("visibility","hidden");

	$(".prevs1").css("display","none");
	$(".prevs2").css("display","none");
}

function pasar(datos){
	$(".prevs1").css("display","none");
	$(".prevs2").css("display","none");
	var temp=""+datos.target.id;
	var num=temp.charAt(temp.length-1);
	$("#prevs1_"+num).fadeIn();
	$("#prevs2_"+num).fadeIn();
}

function clic_btns(datos){
	btn=parseInt($(datos.target).attr("id").charAt($(datos.target).attr("id").length-1));//del id del botón presionado, se saca el último caracter y éste se convierte en número
	contenidos=0;
	$("#st_nav_der").css("visibility","visible");
	$("#frame").fadeIn();
	$("#frame").attr("src", "contenidos/"+urls_contenidos[btn-1][contenidos]+"/index.html");
	$("#menu_central p").text(titulos[btn-1]);
	$("#menu_interno1").css("visibility","visible");
	$("#menu_interno2").css("visibility","visible");
	if(btn==1){
		$("#menu_interno1").css("visibility","hidden");
	}
	if(btn==urls_contenidos.length){
		$("#menu_interno2").css("visibility","hidden");
	}
}

function clic_h_der(datos){
	//window.alert("el derecho: "+contenidos);
	contenidos++;
	$("#st_nav_izq").css("visibility","visible");
	$("#frame").fadeIn();
	$("#frame").attr("src", "contenidos/"+urls_contenidos[btn-1][contenidos]+"/index.html");
	if(contenidos==urls_contenidos[btn-1].length-1){
		$("#st_nav_der").css("visibility","hidden");
		//window.alert("final derecho");
	}
}

function clic_h_izq(datos){
	//window.alert("el izquierdo: "+contenidos);
	contenidos--;
	$("#st_nav_der").css("visibility","visible");
	$("#frame").fadeIn();
	$("#frame").attr("src", "contenidos/"+urls_contenidos[btn-1][contenidos]+"/index.html");
	if(contenidos==0){
		$("#st_nav_izq").css("visibility","hidden");
		//window.alert("final izquierdo");
	}
}

function clic_t_der(datos){
	//window.alert("el topic derecho: "+btn+" - "+urls_contenidos[btn][0]);
	btn++;
	contenidos=0;
	$("#st_nav_der").css("visibility","visible");
	$("#st_nav_izq").css("visibility","hidden");
	$("#menu_interno1").css("visibility","visible");
	$("#frame").fadeIn();
	$("#frame").attr("src", "contenidos/"+urls_contenidos[btn-1][contenidos]+"/index.html");
	$("#menu_central p").text(titulos[btn-1]);
	if(btn==urls_contenidos.length){
		$("#menu_interno2").css("visibility","hidden");
		console.log("final topic derecho");
	}
}

function clic_t_izq(datos){
	//window.alert("el topic izquierdo: "+(btn-2)+" - "+urls_contenidos[btn-2][0]);
	btn--;
	contenidos=0;
	$("#st_nav_der").css("visibility","visible");
	$("#st_nav_izq").css("visibility","hidden");
	$("#menu_interno2").css("visibility","visible");
	$("#frame").fadeIn();
	$("#frame").attr("src", "contenidos/"+urls_contenidos[btn-1][contenidos]+"/index.html");
	$("#menu_central p").text(titulos[btn-1]);
	if(btn==1){
		$("#menu_interno1").css("visibility","hidden");
		//window.alert("final topic izquierdo");
	}
}

function clic_menu(datos){
	btn=0;
	$("#frame").css("display","none");
	$("#frame").attr("src", "");
	$("#menu_central p").text("");
	$(".st_navs").css("visibility","hidden");
	$("#menu_interno1").css("visibility","hidden");
	$("#menu_interno2").css("visibility","visible");
}