$(document).on("ready", arranque);
function arranque(){
	$("#pagina1").slideToggle('slow', function(){
		$("#btn1").animate({
			top: ['+=312', 'swing'],
			right: ['-=10', 'swing']
		}, 1000);
		$("#btn2").animate({
			top: ['+=278', 'swing'],
			right: ['-=14', 'swing']
		}, 1500);
		$("#btn3").animate({
			top: ['+=295', 'swing'],
			right: ['-=15', 'swing']
		}, 2500);
		$("#btn4").animate({
			top: ['+=295', 'swing'],
			right: ['-=19', 'swing']
		}, 2000);
		$("#btn5").animate({
			top: ['+=278', 'swing'],
			right: ['-=23', 'swing']
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
		}
		reproducir(aud);
	});
}

function reproducir(a){
		for(var i=0;i<=4;i++){
			$("audio")[i].pause();
		}
		$("audio")[a].currentTime=0;
		$("audio")[a].play();
	}