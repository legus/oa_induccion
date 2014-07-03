$(document).on("ready", arranque);
function arranque(){	
	var aud=0;
	$(".botones_cont5").click(function(){
		$(".recuadros").slideUp();
		$(".botones_cont5").css("background-color","#cc6633");
		$(this).css("background-color","#cc0000");
		switch($(this).attr("id")){
			case 'btn1':
				$("#rec1").slideDown();
				aud=0;
			break;
			case 'btn2':
				$("#rec2").slideDown();
				aud=1;
			break;
			case 'btn3':
				$("#rec3").slideDown();
				aud=2;
			break;
			case 'btn4':
				$("#rec4").slideDown();
				aud=3;
			break;
			case 'btn5':
				$("#rec5").slideDown();
				aud=4;
			break;
			case 'btn6':
				$("#rec6").slideDown();
				aud=5;
			break;
			case 'btn7':
				$("#rec7").slideDown();
				aud=6;
			break;
			case 'btn8':
				$("#rec8").slideDown();
				aud=7;
			break;
			case 'btn9':
				$("#rec9").slideDown();
				aud=8;
			break;
			case 'btn10':
				$("#rec10").slideDown();
				aud=9;
			break;
			case 'btn11':
				$("#rec11").slideDown();
				aud=10;
			break;
			case 'btn12':
				$("#rec12").slideDown();
				aud=11;
			break;
			case 'btn13':
				$("#rec13").slideDown();
				aud=12;
			break;
			case 'btn14':
				$("#rec14").slideDown();
				aud=13;
			break;
		}
		reproducir(aud);
	});
}

function reproducir(a){
		for(var i=0;i<=13;i++){
			$("video")[i].pause();
		}
		$("video")[a].currentTime=0;
		$("video")[a].play();
	}