$(document).on("ready", arranque);
var urls_contenidos=[];
var titulos=[];
var btn=0;
var contenidos=0;
function arranque(){
	console.log($("h1").attr("id"));
	urls_contenidos=[["1_bienvenida"],
					["2_texto1","3_contenido1","4_himnoUnisangil","5_historia","6_texto2","7_contenido2","8_contenido3","9_contenido4","10_texto3","11_contenido5"],
					["12_contenido6","13_contenido7","14_texto4"],
					["15_texto5","16_reglamentoInterno","17_reglamentoDocente"],
					["18_texto6","19_contenido8","20_texto7","21_contenido9","22_contenido10","23_contenido11","24_contenido12","25_contenido13","26_texto8","27_contenido14","28_texto9","29_contenido15","29_contenido15_conclusion","30_texto10","31_contenido16"],
					["32_contenido17"],
					["33_texto11","34_contenido18","35_contenido19","36_texto12","37_contenido20","38_contenido21","39_contenido22","40_contenido23","41_texto13","42_texto14"]];
	//window.alert(urls_contenidos);
	titulos=["Bienvenido a Unisangil","El sentido de nuestro quehacer","Así nos organizamos","Pautas y Medidas orientadoras","Nuestro Ideal Educativo","Medios de Información y Comunicación","Salud ocupacional"];
	$("#menu_lateral2").on("click",clic_menu);
	$(".botones").on("click",clic_btns);
	$("#st_nav_der").on("click",clic_h_der);
	$("#st_nav_izq").on("click",clic_h_izq);
	$("#menu_interno1").on("click",clic_t_izq);
	$("#menu_interno2").on("click",clic_t_der);
	$(".botones").on("mouseover",pasar);
	$(".st_navs").css("visibility","hidden");
	$("#menu_interno1").css("visibility","hidden");

	$(".prevs1").css("display","none");
	$(".prevs2").css("display","none");
}

function pasar(datos){
	$("#prevs1_0").css("display","none");
	$("#prevs2_0").css("display","none");
	$(".prevs1").css("display","none");
	$(".prevs2").css("display","none");
	var temp=""+datos.target.id;
	var num=temp.charAt(temp.length-1);
	$("#prevs1_"+num).fadeIn();
	$("#prevs2_"+num).fadeIn();
}

function clic_btns(datos){
	btn=parseInt($(datos.target).attr("id").charAt($(datos.target).attr("id").length-1));//del id del botón presionado, se saca el último caracter y éste se convierte en número
	console.log(btn);
	contenidos=0;
	if(btn==6){
		$("#st_nav_der").css("visibility","hidden");
	}else{
		$("#st_nav_der").css("visibility","visible");
	}
	$("#frame").fadeIn();
	$("#frame").attr("src", "contenidos/"+urls_contenidos[btn-1][contenidos]+"/index.html");
	$("#menu_central p").text(titulos[btn-1]);
	$("#menu_interno1").css("visibility","visible");
	$("#menu_interno2").css("visibility","visible");
	if(btn==1){
		$("#menu_interno1").css("visibility","hidden");
		$("#st_nav_der").css("visibility","hidden");
	}
	if(btn==urls_contenidos.length){
		$("#menu_interno2").css("visibility","hidden");
	}
}

function clic_h_der(datos){
	console.log("el derecho: "+contenidos);
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
	btn++;
	contenidos=0;
	$("#st_nav_der").css("visibility","visible");
	$("#st_nav_izq").css("visibility","hidden");
	$("#menu_interno1").css("visibility","visible");
	$("#frame").fadeIn();
	$("#frame").attr("src", "contenidos/"+urls_contenidos[btn-1][contenidos]+"/index.html");
	$("#menu_central p").text(titulos[btn-1]);
	if(btn==6){
		$("#st_nav_der").css("visibility","hidden");
	}else{
		$("#st_nav_der").css("visibility","visible");
	}
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
	if(btn==6){
		$("#st_nav_der").css("visibility","hidden");
	}else{
		$("#st_nav_der").css("visibility","visible");
	}
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