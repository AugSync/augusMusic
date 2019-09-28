const button = document.getElementById('button');
const gunga = document.getElementById('audio')


window.onload = function(){
		button.addEventListener('click', hacerVibrar)
		function hacerVibrar(){
			if (gunga.paused) {
				window.navigator.vibrate([0,2300,300,1900,300,2100,200,230,200,230,200,230,200,50,200,450,200,230,200,230,200,230,200,50,200,410,200,230,200,230,200,230,200,50,200,410,200,230,200,230,200,230,200,50,200,410,200,230,200,230,200,230,200,50,200,410,200,230,200,230,200,230,200,50,200,410,200,230,200,230,200,230,200,50,200,410,200,230,200,230,200,230,200,50,200,410,1800,300,500,330,500,330,500,2,500,330,500,330,500])
				gunga.play()	
			}else if (gunga.played){
				window.navigator.vibrate(0)
				gunga.pause()
			}
		}
	}

