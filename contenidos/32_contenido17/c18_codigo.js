$(document).on("ready", arranque);
function arranque(){
	$("#pagina1").slideToggle('slow', function(){
		$("#btn1").animate({
			top: ['+=214', 'swing'],
			right: ['-=1', 'swing']
		}, 1000);
		$("#btn2").animate({
			top: ['+=214', 'swing'],
			right: ['-=1', 'swing']
		}, 1500);
		$("#btn3").animate({
			top: ['+=231', 'swing'],
			right: ['-=1', 'swing']
		}, 2500);
		$("#btn4").animate({
			top: ['+=248', 'swing'],
			right: ['-=1', 'swing']
		}, 2000);
		$("#btn5").animate({
			top: ['+=231', 'swing'],
			right: ['-=1', 'swing']
		}, 1500);
		$("#btn6").animate({
			top: ['+=231', 'swing'],
			right: ['-=1', 'swing']
		}, 2000);
		$("#btn7").animate({
			top: ['+=248', 'swing'],
			right: ['-=1', 'swing']
		}, 1500);
	});
	
	$(".botones").click(function(){
		$(".recuadros").slideUp();
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
		}
		reproducir(aud);
	});
}

function reproducir(a){
		for(var i=0;i<=6;i++){
			$("audio")[i].pause();
		}
		$("audio")[a].currentTime=0;
		$("audio")[a].play();
	}