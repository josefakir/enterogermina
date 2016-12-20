$(document).ready(function(){
	$('#menu').click(function(e){
		e.preventDefault();
		$('#contenedormenu').toggle();
	})
	var hijos = $('#areadetrabajo').children();
	var cont = 1;
	animaciones = [
		//'pulse',
		//'rubberBand',
		//'tada',
		//'jello',
		'fadeIn',
		'fadeInDown',
		'fadeInDownBig',
		'fadeInLeft',
		'fadeInLeftBig',
		'fadeInRight',
		'fadeInRightBig',
		'fadeInUp',
		'fadeInUpBig',
		//'flipInX',
		//'flipInY',
		//'lightSpeedIn',
		//'rotateIn',
		//'rotateInDownLeft',
		//'rotateInDownRight',
		//'rotateInUpLeft',
		//'rotateInUpRight',
		//'rollIn',
		//'zoomIn',
		//'zoomInDown',
		//'zoomInLeft',
		//'zoomInRight',
		//'zoomInUp',
		'slideInDown',
		'slideInLeft',
		'slideInRight',
		'slideInUp'
	];
	hijos.each(function( index ) {
		//console.log( index + ": " + $( this ));
		if($( this ).is( "img" )){
			if($(this).hasClass( "fadeIzquierda" )){
				$( this ).addClass('animated');
				$( this ).addClass('fadeInLeft');
			}else{
				$( this ).addClass('animated');
				var item = animaciones[Math.floor(Math.random()*animaciones.length)];
				$( this ).addClass(item);
				delay = 'delay'+cont;
				$( this ).addClass(delay);
				cont++;
			}
			
		}else if($( this ).is( "table" )){
			$( this ).addClass('animated');
			$( this ).addClass('fadeIn');
		}else if($( this ).is( ".m2conteo" )){
			$( this ).addClass('animated');
			$( this ).addClass('fadeInLeft');
			//console.log('conteo');
		}else if($(this).hasClass( "botonanimado" )){
				$( this ).addClass('animated');
			$( this ).addClass('pulse');
			console.log('boton')
		}
		else{
			$( this ).addClass('animated');
			$( this ).addClass('fadeInLeft');
			
		}

		

		
	});
})