﻿$(document).on("ready", arranque);
function arranque(){
	$("#pagina1").slideToggle('slow');
	
	$(".botones").click(function(){
		$(".recuadros").slideUp();
		switch($(this).attr("id")){
			case 'btn1':
				$("#rec1").slideDown();
				//aud=0;
			break;
			case 'btn2':
				$("#rec2").slideDown();
				//aud=1;
			break;
			case 'btn3':
				$("#rec3").slideDown();
				//aud=2;
			break;
			case 'btn4':
				$("#rec4").slideDown();
				//aud=3;
			break;
			case 'btn5':
				$("#rec5").slideDown();
				//aud=4;
			break;
			
			case 'btn6':
				$("#rec6").slideDown();
				//aud=5;
			break;
			
			case 'btn7':
				$("#rec7").slideDown();
				//aud=6;
			break;
			case 'btn8':
				$("#rec8").slideDown();
				//aud=0;
			break;
			case 'btn9':
				$("#rec9").slideDown();
				//aud=1;
			break;
			case 'btn10':
				$("#rec10").slideDown();
				//aud=2;
			break;
			case 'btn11':
				$("#rec11").slideDown();
				//aud=3;
			break;
			case 'btn12':
				$("#rec12").slideDown();
				//aud=4;
			break;
			
			case 'btn13':
				$("#rec13").slideDown();
				//aud=5;
			break;
			
			case 'btn14':
				$("#rec14").slideDown();
				//aud=6;
			break;
			case 'btn15':
				$("#rec15").slideDown();
				//aud=0;
			break;
			case 'btn16':
				$("#rec16").slideDown();
				//aud=1;
			break;
			case 'btn17':
				$("#rec17").slideDown();
				//aud=2;
			break;
			case 'btn18':
				$("#rec18").slideDown();
				//aud=3;
			break;
			case 'btn19':
				$("#rec19").slideDown();
				//aud=4;
			break;
			
			case 'btn20':
				$("#rec20").slideDown();
				//aud=5;
			break;
			
			case 'btn21':
				$("#rec21").slideDown();
				//aud=6;
			break;
		}
		//reproducir(aud);
	});
}

/*function reproducir(a){
		for(var i=0;i<=6;i++){
			$("audio")[i].pause();
		}
		$("audio")[a].currentTime=0;
		$("audio")[a].play();
	}*/