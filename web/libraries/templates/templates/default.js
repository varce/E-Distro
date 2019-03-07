/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// Register a templates definition set named "default".
CKEDITOR.addTemplates( 'default', {
	// The name of sub folder which hold the shortcut preview images of the
	// templates.
	imagesPath: CKEDITOR.getUrl( CKEDITOR.plugins.getPath( 'templates' ) + 'templates/images/' ),

	// The templates definitions.
	templates: [ {
		title: 'SD-B001-A',
		image: 'SD-B001-A.png',
		description: 'SD-B001-A block template.',
		html:
				'<div class="col-md-6 panel-panel">' +
					'<div class="panel-panel-inner">' +
						'<div data-block-id="89a7def1-c986-4519-90e3-96241621e849" class="block-content-type-sd_b001 block--view-mode-sd_b001_a block block-block-content block-block-content80dc1062-d772-454b-b6c8-edcbca97920c">' +
        		'<div class="field field--name-field-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/2018-09/alarma-sentinel_0.jpg" width="193" height="380" alt="Alarma anti-inhibición Sentinel" typeof="foaf:Image">' +
    				'</div>' +
    				'<div class="field field--name-field-new field--type-list-string field--label-hidden field__item">New</div>' +
						'<div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><h2>Alarma anti-inhibición Sentinel</h2>' +
  						'<p>Nuestra alarma anti-inhibición Sentinel nos ayuda a proteger a nuestros clientes frente a los robos con inhibidor. Además nos permite cuidar también de su confort detectando posibles riesgos y emergencias en sus hogares o negocios, monitorizando en todo momento la temperatura, humedad y calidad del aire.</p>' +
  					'</div>' +
						'</div>' +
					'</div>' +
				'</div>'
	},
	{
		title: 'SD-B001-B',
		image: 'SD-B001-B.png',
		description: 'SD-B001-B block template.',
		html: '<div class="col-md-6 panel-panel">' +
					'<div data-block-id="5be67976-a368-4565-b60c-b8332fc9d6a4" class="block-content-type-sd_b001 block--view-mode-sd_b001_b block block-block-content block-block-content6f266d70-f580-4e18-9539-4db7de49b259">' +
					'<div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><h2><a href="https://www.securitasdirect.es/es/alarmas-hogar" target="_self"><span>Para&nbsp;</span>tu hogar</a></h2>' +
					'<p>La alarma de Securitas Direct ofrece la mejor protección para tu hogar. Más de 5.000 profesionales que velan por tu seguridad y la de los tuyos 24 horas, los 365 días.</p>' +
					'<p><a href="https://www.securitasdirect.es/es/alarmas-hogar" target="_self">&nbsp;Más información</a></p>' +
					'</div>' +
					'<div class="field field--name-field-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/2018-09/m_component_1_new_0.jpg" width="400" height="166" alt="Para tu hogar" typeof="foaf:Image">' +
					'</div>' +
					'</div>' +
					'</div>'
	},
	{
		title: 'SD-B001-C',
		image: 'SD-B001-C.png',
		description: 'SD-B001-C block template.',
		html: '<div class="col-md-12 panel-panel">' +
					'<div data-block-id="8d294189-1c7a-46bc-8dd4-c937cd7adfa7" class="block-content-type-sd_b001 block--view-mode-sd_b001_c block block-block-content block-block-content3109c0a7-6591-4b14-a947-4885453e4008">' +
					'<div class="field field--name-field-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/2018-09/consejos-seguridad-h.png" width="360" height="270" alt=" Consejos de seguridad" typeof="foaf:Image">' +
					'</div>' +
					'<div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><p><a href="https://www.securitasdirect.es/es/consejos-y-ayuda/videos" target="_self"><strong>Consejos de seguridad</strong></a></p>' +
					'<p><a href="https://www.securitasdirect.es/es/consejos-y-ayuda/seguridad" target="_self">Descubre los mejores trucos y consejos para mantener protegido tu hogar o tu negocio.</a></p>' +
					'<p><a href="https://www.securitasdirect.es/es/consejos-y-ayuda/seguridad" target="_self">Ver consejos de seguridad</a></p></div>' +
					'</div>'+
					'</div>'
	},
	{
		title: 'SD-B001-C-group',
		image: 'SD-B001-C.png',
		description: 'SD-B001-C block template.',
		html: '<div class="SD-B001-C-group"><h2><a href="https://www.securitasdirect.es/es/consejos-y-ayuda" target="_self">Consejos y ayuda de seguridad</a></h2>' +
        	'<div data-block-id="8d294189-1c7a-46bc-8dd4-c937cd7adfa7" class="block-content-type-sd_b001 block--view-mode-sd_b001_c block block-block-content block-block-content3109c0a7-6591-4b14-a947-4885453e4008">' +
    			'<div class="field field--name-field-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/2018-09/consejos-seguridad-h.png" width="360" height="270" alt=" Consejos de seguridad" typeof="foaf:Image">' +
    			'</div>' +
					'<div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><p><a href="https://www.securitasdirect.es/es/consejos-y-ayuda/videos" target="_self"><strong>Consejos de seguridad</strong></a></p>' +
					'<p><a href="https://www.securitasdirect.es/es/consejos-y-ayuda/seguridad" target="_self">Descubre los mejores trucos y consejos para mantener protegido tu hogar o tu negocio.</a></p>' +
					'<p><a href="https://www.securitasdirect.es/es/consejos-y-ayuda/seguridad" target="_self">Ver consejos de seguridad</a></p></div>' +
					'</div><div data-block-id="afa06c56-f3f5-454d-83f9-1ec2b879bc76" class="block-content-type-sd_b001 block--view-mode-sd_b001_c block block-block-content block-block-content9f240cba-e5c2-4c6b-950d-dea2d3a73c58">' +
					'<div class="field field--name-field-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/2018-09/videos-informativos-h.png" width="360" height="270" alt="Videos informativos" typeof="foaf:Image">' +
					'</div>' +
					'<div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><p>&nbsp;</p>' +
					'<p><a href="https://www.securitasdirect.es/es/consejos-y-ayuda/videos" target="_self"><strong>Vídeos informativos</strong></a></p>' +
					'<p><a href="https://www.securitasdirect.es/es/consejos-y-ayuda/videos" target="_self">Consulta las respuestas a las dudas más habituales sobre nuestros productos y servicios de seguridad.</a></p>' +
					'<p><a href="https://www.securitasdirect.es/es/consejos-y-ayuda/videos" target="_self">Ver vídeos informativos</a></p></div>' +
					'</div><div data-block-id="c69b6787-19c4-4e42-9ec8-04646b3e90dd" class="block-content-type-sd_b001 block--view-mode-sd_b001_c block block-block-content block-block-content5a1485d2-3dda-467e-9f37-8f6488c85dcf">' +
					'<div class="field field--name-field-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/2018-09/faq-h.png" width="360" height="270" alt="Preguntas frecuentes" typeof="foaf:Image">' +
					'</div>' +
					'<div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><p><a href="https://www.securitasdirect.es/es/consejos-y-ayuda/preguntas-frecuentes" target="_self"><strong>Preguntas frecuentes</strong></a></p>' +
					'<p><a href="https://www.securitasdirect.es/es/consejos-y-ayuda/preguntas-frecuentes" target="_self">Respuestas a las dudas más habituales sobre los productos de Securitas Direct.</a></p>' +
					'<p><a href="https://www.securitasdirect.es/es/consejos-y-ayuda/preguntas-frecuentes" target="_self">Ver preguntas frecuentes</a></p></div>' +
					'</div></div>'
	},
	{
		title: 'SD-B001-D',
		image: 'SD-B001-D.png',
		description: 'SD-B001-D block template.',
		html: '<div class="col-md-12 panel-panel">' +
					'<div data-block-id="21dc90db-4221-49dc-b92d-2f98fc18aee6" class="block-content-type-sd_b001 block--view-mode-sd_b001_d block block-block-content block-block-content2b6a196c-d800-426c-8bb6-cafa5a3fc559">' +
					'<div class="field field--name-field-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/2018-09/video-chalet.jpg" width="1580" height="457" alt="Alarma con detección anticipada" typeof="foaf:Image">' +
					'</div>' +
					'<div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><h2>ALARMA CON DETECCIÓN ANTICIPADA</h2>' +
					'<h3><strong>Detecta al intruso antes de que entre</strong></h3>' +
					'<p>La alarma de Securitas Direct con detección anticipada localiza los intentos de intrusión y de inhibición incluso antes de que el intruso haya conseguido entrar. Así, disuadimos antes a los intrusos y, si lo necesitas, podemos avisar más rápidamente a la policía.</p>' +
					'<div class="modal" id="ex1">' +
					'<article class="embedded-entity"><div>' +
					'<div class="field field--name-field-media-video-embed-field field--type-video-embed-field field--label-hidden field__item"><div class="video-embed-field-provider-youtube video-embed-field-responsive-video"><iframe width="854" height="480" frameborder="0" allowfullscreen="allowfullscreen" src="https://www.youtube.com/embed/Gr_a-9GE8pQ?autoplay=0&amp;start=0&amp;rel=0"></iframe>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'</article></div>' +
					'<p><a href="#ex1" rel="modal:open">Ver vídeo</a></p>' +
					'</div>' +
					'</div>' +
					'</div>'
	},
	{
		title: 'SD-B001-E',
		image: 'SD-B001-E.png',
		description: 'SD-B001-E block template.',
		html: '<div class="col-md-12 panel-panel">' +
					'<div class="panel-panel-inner">' +
					'<div class="block-region-middle" data-region-name="middle"><div data-block-id="3c370aa1-ec14-4db0-9b4c-121b0a1b7998" class="block-content-type-sd_b001 block--view-mode-sd_b001_e block block-block-content block-block-content99fa6b01-a667-4f41-99a4-eb7cd39f8a7f">' +
					'<div class="field field--name-field-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/2018-09/sentinel-home5-compressor.png" width="960" height="575" alt="Tu día a día fuera de peligros" typeof="foaf:Image">' +
					'</div>' +
					'<div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><h2><strong>Tu día a día fuera de peligros</strong></h2>' +
					'<h3>ALARMA ANTI-INHIBICIÓN SENTINEL&nbsp;&nbsp;<div class="field field--name-field-new field--type-list-string field--label-hidden field__item">New</div></h3>' +
					'<p>La nueva alarma anti-inhibición Sentinel de Securitas Direct vela por tu protección y bienestar como si de un centinela se tratara. Detecta cualquier intento de inhibición de la alarma y envía la alerta a la Central Receptora de Alarmas a través de nuestra exclusiva Red ATN inmune a inhibidores. Y si te encuentras en una situación de emergencia, con tan solo pulsar el botón SOS te atenderemos de inmediato y avisaremos a la policía, ambulancia o bomberos, en caso necesario.</p>' +
					'<p>Además, te protege de otros peligros que pueden poner en riesgo tu bienestar, alertándote en caso de que la temperatura, la humedad o la calidad del aire alcancen niveles de riesgo.</p>' +
					'<p><a href="https://www.securitasdirect.es/es/verisure/sentinel">DESCUBRE CÓMO FUNCIONA&nbsp;</a></p>' +
					'<p>o llámanos al&nbsp;<strong>902 195 195</strong></p></div>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'</div>'
	},
	{
		title: 'SD-B001-F',
		image: 'SD-B001-F.png',
		description: 'SD-B001-F block template.',
		html: '<div class="col-md-12 panel-panel">' +
					'<div data-block-id="e13b6d46-3c68-4edf-a90a-fcfc538624d9" class="block-content-type-sd_b001 block--view-mode-sd_b001_f block block-block-content block-block-content6b79013d-6aa7-459a-9ba4-e5a5060d2ead">' +
					'<div class="field field--name-field-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/2018-10/caras-A-mod1.jpg" width="687" height="548" alt="Nueva alarma ZeroVision" typeof="foaf:Image">' +
					'</div>' +
					'<div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><h3>Nueva alarma ZeroVision</h3>' +
					'<h2><strong>Impide la visión al ladrón para evitar el robo</strong></h2>' +
					'<p>En Securitas Direct llevamos 25 años innovando para ponérselo cada día más difícil a los ladrones y sabemos que cuando se produce un robo cada segundo cuenta. Hoy, con la nueva alarma ZeroVision, se lo hacemos imposible: por primera vez, somos capaces de actuar de inmediato en el inmueble protegido para evitar el robo.</p>' +
					'<p>En caso de intento de robo, nuestros expertos de la Central Receptora de Alarmas generarán de inmediato una situación de visibilidad cero en la estancia protegida, impidiendo la visión al ladrón. Tu hogar o negocio quedará protegido hasta que llegue la policía.</p>' +
					'<p><a href="https://www.securitasdirect.es/es/verisure/zerovision">Más información</a></p>' +
					'<div class="modal" id="ex1">' +
	    		'<article class="embedded-entity"><div>' +
					'<div class="field field--name-field-media-video-embed-field field--type-video-embed-field field--label-hidden field__item"><div class="video-embed-field-provider-youtube video-embed-field-responsive-video"><iframe width="854" height="480" frameborder="0" allowfullscreen="allowfullscreen" src="https://www.youtube.com/embed/Gr_a-9GE8pQ?autoplay=0&amp;start=0&amp;rel=0"></iframe>' +
    			'</div>' +
    			'</div>' +
    			'</div>' +
    			'</article></div>' +
					'<p><a href="#ex1" rel="modal:open">Ver vídeo</a></p>' +
					'</div>' +
					'</div>' +
					'</div>'
	},
	{
		title: 'SD-B001-G',
		image: 'SD-B001-G.png',
		description: 'SD-B001-G block template.',
		html: '<div class="col-md-12 panel-panel">' +
					'<div data-block-id="5ffb4a7a-31ba-4323-86e9-a873447bafc1" class="block-content-type-sd_b001 block--view-mode-default block block-block-content block-block-content74671620-0f29-4baf-9e82-fa44846803a9">' +
					'<div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><h2>Conoce la tecnología de&nbsp;la mejor alarma</h2>' +
					'<p>Protege lo que más importa con la alarma ZeroVision de Securitas Direct, capaz de generar una situación de cero visibilidad&nbsp;<br>' +
					'que impide la visión al ladrón para evitar el robo.</p>' +
					'</div>' +
					'<div class="field field--name-field-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/2018-09/kit.png" width="1310" height="490" alt="Conoce la tecnología de la mejor alarma" typeof="foaf:Image">' +
					'</div>' +
					'</div>' +
					'</div>'
	},
	{
		title: 'SD-B001-H',
		image: 'SD-B001-H.png',
		description: 'SD-B001-H block template.',
		html:	'<div class="col-md-12 panel-panel">' +
					'<div data-block-id="63b076a8-5dc4-492f-88e4-76d0440ffecb" class="block-content-type-sd_b001 block--view-mode-sd_b001_h block block-block-content block-block-content9cf2a378-87cb-4e6a-8fbd-4bfc99508cd9">' +
					'<div class="field field--name-field-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/2018-09/world_map.gif" width="1920" height="575" alt="Delegaciones Securitas Direct" typeof="foaf:Image">' +
					'</div>' +
					'<div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><h2>Delegaciones&nbsp;<strong>Securitas Direct</strong></h2>' +
					'<p>Encuentra la oficina comercial de Securitas Direct más cercana a ti. Disponemos de más de 60 delegaciones en toda España.</p>' +
					'<p><a href="https://www.securitasdirect.es/es/empresa/oficinas">&nbsp;Encuentra la oficina más cercana</a></p>' +
					'<p><a href="https://www.securitasdirect.es/alarmas/calculadora/index.html?camp=seo" target="_blank">CALCULA ONLINE&nbsp;</a></p>' +
					'<p>o llámanos al&nbsp;<strong>902 195 195</strong></p></div>' +
					'</div>' +
					'</div>'
	},
	{
		title: 'SD-B001-I',
		image: 'SD-B001-I.png',
		description: 'SD-B001-I block template.',
		html:	'<div class="col-md-12 panel-panel">' +
					'<div data-block-id="1a8b9013-987a-4faa-a7de-015bc67ced8a" class="block-content-type-sd_b001 block--view-mode-sd_b001_i block block-block-content block-block-contentbad782d0-adc0-435d-9840-f1934e196be0">' +
					'<div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><p><strong>Tu seguridad, estés donde estés</strong></p>' +
					'<p>Controla tu alarma estés donde estés gracias a la nueva aplicación My Verisure de Securitas Direct. Con más funcionalidades y un diseño mejorado, gestionar tu alarma desde cualquier lugar del mundo es aún más cómodo, seguro y fácil.</p>' +
					'<p><a href="https://www.securitasdirect.es/es/servicios/myverisure" target="">&nbsp;Más información</a></p>' +
				 	'<article class="embedded-entity"><div>' +
					'<div class="field field--name-field-media-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/styles/panopoly_images_quarter/public/upload/2018-10/640px-available_on_the_app_store_black_0.png?itok=DL44VVI6" width="240" height="71" alt="available_on_the_app_store_black" typeof="foaf:Image" class="image-style-panopoly-images-quarter"></div>' +
					'</div>' +
    			'</article><article class="embedded-entity"><div>' +
					'<div class="field field--name-field-media-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/styles/panopoly_images_quarter/public/upload/2018-10/descarga.png?itok=ELYNky82" width="240" height="81" alt="appStore" typeof="foaf:Image" class="image-style-panopoly-images-quarter"></div>' +
					'</div>' +
    			'</article></div>' +
					'<div class="field field--name-field-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/2018-09/aplicacion-my-verisure-securitas-direct_1.jpg" width="575" height="575" alt="Tu seguridad, estés donde estés" typeof="foaf:Image">' +
					'</div>' +
					'</div>' +
					'</div>'
	},
	{
		title: 'SD-B001-K',
		image: 'SD-B001-K.png',
		description: 'SD-B001-K block template.',
		html:	'<div class="col-md-12 panel-panel">' +
					'<div data-block-id="b9f87584-3a94-4b31-943b-5ade693f85b5" class="block-content-type-sd_b001 block--view-mode-sd_b001_k block block-block-content block-block-content65dfc690-a19d-4f37-9183-e0b3ea3d9351 ui-draggable ui-draggable-handle">' +
					'<div class="field field--name-field-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/2018-09/m_section_1_1_0.png" width="360" height="270" alt="Trabaja con nosotros" typeof="foaf:Image">' +
					'</div>' +
					'<div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><p><a href="https://www.securitasdirect.es/empleo/" target="_blank"><strong>Trabaja con nosotros</strong></a></p>' +
					'<p><a href="https://www.securitasdirect.es/empleo/" target="_blank">Únete al equipo de Securitas Direct y trabajarás en una empresa líder. Envíanos tu CV o consulta las ofertas de empleo disponibles.</a></p>' +
					'<p><a href="https://www.securitasdirect.es/empleo/" target="_blank">Empleo Securitas Direct</a></p></div>' +
					'</div>' +
					'<div data-block-id="1f571a02-976f-4855-a8ce-e7d14caca805" class="block-content-type-sd_b001 block--view-mode-sd_b001_k block block-block-content block-block-content4056afff-a1b6-45f2-8048-1b269b61c59d ui-draggable ui-draggable-handle">' +
					'<div class="field field--name-field-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/2018-09/programa_amigos_regalos.jpg" width="360" height="270" alt="Recomiéndanos" typeof="foaf:Image">' +
					'</div>' +
					'<div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><p><a href="https://www.securitasdirect.es/es/programa-amigos" target="_self"><strong>Recomiéndanos</strong></a></p>' +
					'<p><a href="https://www.securitasdirect.es/es/programa-amigos" target="_self">Recomienda nuestros productos y servicios a tus familiares y amigos, ¡conseguirás fantásticos regalos!</a></p>' +
					'<p><a href="https://www.securitasdirect.es/es/programa-amigos" target="_self">Ver ofertas disponibles</a></p></div>' +
					'</div><div data-block-id="749c12d9-93b1-4b96-b256-f78e612e01d3" class="block-content-type-sd_b001 block--view-mode-sd_b001_k block block-block-content block-block-content3225f6ce-efb4-4019-bf61-997b0088cdcd ui-draggable ui-draggable-handle">' +
					'<div class="field field--name-field-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/2018-09/m_section_3_1_0.png" width="360" height="269" alt="Hazte socio distribuidor" typeof="foaf:Image">' +
					'</div>' +
					'<div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><p><a href="https://www.securitasdirect.es/es/socios-distribuidores" target="_self"><strong>Hazte socio distribuidor</strong></a></p>' +
					'<p><a href="https://www.securitasdirect.es/es/socios-distribuidores" target="_self">Buscamos equipos comerciales dedicados a la venta de nuestros productos en toda España, ¡esta es tu oportunidad!</a></p>' +
					'<p><a href="https://www.securitasdirect.es/es/socios-distribuidores" target="_self">Ver más información</a></p></div>' +
					'</div>' +
					'</div>'
	},
	{
		title: 'SD-B001-L',
		image: 'SD-B001-L.png',
		description: 'SD-B001-L block template.',
		html:	'<div class="col-md-12 panel-panel">' +
					'<div data-block-id="976bb0cc-f2f5-4604-b4bc-5bca294c70ea" class="block-content-type-sd_b001 block--view-mode-sd_b001_l block block-block-content block-block-content228bef89-cfd5-4e48-9ab7-e5e601d252bc">' +
					'<div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><p>Contrata ahora protección para tu hogar</p>' +
					'<p><strong>con 200€ de descuento</strong></p>' +
					'<p><a href="https://www.securitasdirect.es/alarmas/calculadora/index.html?camp=seo" target="_blank">CALCULA ONLINE&nbsp;</a></p></div>' +
					'<div class="field field--name-field-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/2018-09/fotodetector_alarma_securitas_direct.png" width="1920" height="500" alt="Contrata ahora protección para tu hogar con 200€ de descuento" typeof="foaf:Image">' +
					'</div>' +
					'</div>' +
					'</div>'
	},
	{
		title: 'SD-B001-services',
		image: 'SD-B001-services.png',
		description: 'SD-B001-6-icons block template.',
		html:	'<div class="col-md-12 panel-panel">' +
					'<div class="wrap-services-column">' +
        	'<h2>Servicios de la alarma Securitas Direct</h2>' +
					'<div class="item-services">' +
        	'<article class="embedded-entity"><div>' +
					'<div class="field field--name-field-media-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/styles/panopoly_images_original/public/upload/2018-10/service_clock_1.png?itok=fm3bpz7B" width="30" height="37" alt="service_clock_1.png" typeof="foaf:Image" class="image-style-panopoly-images-original"></div>' +
					'</div>' +
        	'</article><h3>Respuesta en 29 segundos</h3>' +
					'<p>Nuestra Central Receptora atiende los saltos de alarma en un tiempo medio de 29 segundos. Verifica la alerta y activa el protocolo de seguridad.</p>' +
    			'</div>' +
					'<div class="item-services">' +
        	'<article class="embedded-entity"><div>' +
					'<div class="field field--name-field-media-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/styles/panopoly_images_original/public/upload/2018-10/service_guards_1.png?itok=gUrBiOEc" width="30" height="38" alt="service_guards_1.png" typeof="foaf:Image" class="image-style-panopoly-images-original"></div>' +
					'</div>' +
        	'</article><h3>Aviso a policía y vigilante</h3>' +
					'<p>Una vez verificado el intento de robo o la situación de emergencia, avisamos a la policía y enviamos a un vigilante Securitas.</p>' +
		    	'</div>' +
					'<div class="item-services">' +
        	'<article class="embedded-entity"><div>' +
        	'<div class="field field--name-field-media-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/styles/panopoly_images_original/public/upload/2018-10/icono-inhibidor.png?itok=9uS-a8HI" width="30" height="37" alt="icono-inhibidor.png" typeof="foaf:Image" class="image-style-panopoly-images-original"></div>' +
	        '</div>' +
        	'</article><h3>Red ATN inmune a la inhibición</h3>' +
					'<p>Securitas Direct te ofrece la única alarma con Red ATN inmune a la inhibición, una red exclusiva imposible de inhibir. La máxima protección frente a sabotajes.</p>' +
    			'</div>' +
					'<div class="item-services">' +
        	'<article class="embedded-entity"><div>' +
					'<div class="field field--name-field-media-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/styles/panopoly_images_original/public/upload/2018-10/service_protection_0-1_0.png?itok=BtNuCF09" width="30" height="36" alt="service_protection_0-1_0.png" typeof="foaf:Image" class="image-style-panopoly-images-original"></div>' +
					'</div>' +
        	'</article><h3>Botón SOS para emergencias</h3>' +
					'<p>El botón SOS de las alarmas Securitas Direct permite solicitar ayuda inmediata en cualquier situación de emergencia. Enviaremos a policía, bomberos o servicios sanitarios.</p>' +
    			'</div>' +
					'<div class="item-services">' +
        	'<article class="embedded-entity"><div>' +
					'<div class="field field--name-field-media-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/styles/panopoly_images_original/public/upload/2018-10/services_mobile_1.png?itok=itWUjORR" width="23" height="36" alt="services_mobile_1.png" typeof="foaf:Image" class="image-style-panopoly-images-original"></div>' +
					'</div>' +
        	'</article><h3>Control desde tu móvil</h3>' +
					'<p>Con la nueva aplicación My Verisure de Securitas Direct, controlar tu alarma desde cualquier lugar del mundo es aún más cómodo, fácil y seguro.</p>' +
    			'</div>' +
					'<div class="item-services">' +
        	'<article class="embedded-entity"><div>' +
					'<div class="field field--name-field-media-image field--type-image field--label-hidden field__item">  <img src="/sites/default/files/styles/panopoly_images_original/public/upload/2018-10/services_maintenance_1_0_1.png?itok=jxa7F6wV" width="30" height="29" alt="services_maintenance_1_0_1" typeof="foaf:Image" class="image-style-panopoly-images-original"></div>' +
					'</div>' +
        	'</article><h3>Garantía y mantenimiento, de por vida</h3>' +
					'<p>Los dispositivos de nuestra alarma cuentan con garantía de por vida y un servicio técnico las 24 horas del día. Tu alarma, siempre en perfectas condiciones.</p>' +
    			'</div>' +
    			'</div>' +
					'</div>'
	},
	{
		title: 'SD-comparison table',
		image: 'SD-comparison.png',
		description: 'SD-comparison table of services',
		html: '<div class="col-md-12">' +
					'<div class="wrapper">' +
					'    <h2 class="m_title">' +
					'    <span>La mejor alarma del mercado,</span> en tu casa  </h2>' +
					'    <div class="m_text">' +
					'  		<div class="m_text_content">' +
					'       <p><span style="line-height: 1.538em;">Securitas Direct es sinónimo de protección para tu familia y tu vivienda. Consulta nuestra comparativa de las <a class="m_link_label" href="/comparativa-alarmas-hogar">alarmas para hogar</a> y descubre por qué nuestro sistema es el más completo y eficaz.</span></p>' +
					'     </div>' +
					'</div>      <div class="m_comparison">' +
					'  <div class="m_comparison_wrapper">' +
					'    <table class="m_comparison_table start_animation">' +
					'      <thead>' +
					'        <tr>' +
					'          <th>&nbsp;</th>' +
					'          <th><img alt="Alarmas locales" src="//www.securitasdirect.es/alarmas/assets/imagenes-web/locales.png"></th>' +
					'          <th><img alt="Tyco" src="//www.securitasdirect.es/alarmas/assets/imagenes-web/tyco.png"></th>' +
					'          <th><img alt="Prosegur" src="//www.securitasdirect.es/alarmas/assets/imagenes-web/prosegur.png"></th>' +
					'          <th><img alt="Direct" src="//www.securitasdirect.es/alarmas/assets/imagenes-web/direct.png"></th>' +
					'        </tr>' +
					'      </thead>' +
					'      <tbody>' +
					'       <tr>' +
					'          <th>Sensores con cámara</th>' +
					'          <td data-company="Alarmas locales" class="m_comparison_local"><span class="m_comparison_available">Disponible</span></td>' +
					'          <td data-company="Tyco" class="m_comparison_adt"><span class="m_comparison_available">Disponible</span></td>' +
					'          <td data-company="Prosegur" class="m_comparison_prosegur"><span class="m_comparison_available">Disponible</span></td>' +
					'          <td data-company="Direct" class="m_comparison_direct"><span class="m_comparison_available">Disponible</span></td>' +
					'        </tr>' +
					'        <tr>' +
					'          <th>Conexión con Central Receptora y aviso a policía</th>' +
					'          <td data-company="Alarmas locales" class="m_comparison_local"><span class="m_comparison_opt_in">No incluido</span></td>' +
					'          <td data-company="Tyco" class="m_comparison_adt"><span class="m_comparison_available">Disponible</span></td>' +
					'          <td data-company="Prosegur" class="m_comparison_prosegur"><span class="m_comparison_available">Disponible</span></td>' +
					'          <td data-company="Direct" class="m_comparison_direct"><span class="m_comparison_available">Disponible</span></td>' +
					'        </tr>' +
					'        <tr>' +
					'          <th>Servicio de envío de vigilante</th>' +
					'          <td data-company="Alarmas locales" class="m_comparison_local"><span class="m_comparison_opt_in">No disponible</span></td>' +
					'          <td data-company="Tyco" class="m_comparison_adt"><span class="m_comparison_unavailable">No incluido</span></td>' +
					'          <td data-company="Prosegur" class="m_comparison_prosegur"><span class="m_comparison_opt_in">No incluido</span></td>' +
					'          <td data-company="Direct" class="m_comparison_direct"><span class="m_comparison_available">Disponible</span></td>' +
					'        </tr>' +
					'        <tr>' +
					'          <th>Sirena independiente para mayor seguridad</th>' +
					'          <td data-company="Alarmas locales" class="m_comparison_local"><span class="m_comparison_unavailable">No incluido</span></td>' +
					'          <td data-company="Tyco" class="m_comparison_adt"><span class="m_comparison_opt_in">No disponible</span></td>' +
					'          <td data-company="Prosegur" class="m_comparison_prosegur"><span class="m_comparison_opt_in">No incluido</span></td>' +
					'          <td data-company="Direct" class="m_comparison_direct"><span class="m_comparison_available">Disponible</span></td>' +
					'        </tr>' +
					'        <tr>' +
					'          <th>Panel móvil<sup>*</sup> con habla-escucha</th>' +
					'          <td data-company="Alarmas locales" class="m_comparison_local"><span class="m_comparison_unavailable">No disponible</span></td>' +
					'          <td data-company="Tyco" class="m_comparison_adt"><span class="m_comparison_unavailable">No disponible</span></td>' +
					'          <td data-company="Prosegur" class="m_comparison_prosegur"><span class="m_comparison_unavailable">No disponible</span></td>' +
					'          <td data-company="Direct" class="m_comparison_direct"><span class="m_comparison_available">Disponible</span></td>' +
					'        </tr>' +
					'        <tr>' +
					'          <th>Detección anticipada<sup>**</sup></th>' +
					'          <td data-company="Alarmas locales" class="m_comparison_local"><span class="m_comparison_unavailable">No disponible</span></td>' +
					'          <td data-company="Tyco" class="m_comparison_adt"><span class="m_comparison_unavailable">No disponible</span></td>' +
					'          <td data-company="Prosegur" class="m_comparison_prosegur"><span class="m_comparison_unavailable">No disponible</span></td>' +
					'          <td data-company="Direct" class="m_comparison_direct"><span class="m_comparison_available">Disponible</span></td>' +
					'        </tr>' +
					'' +
					'<tr>' +
					'          <th>Alarma anti-inhibidores + disuasorio anti-inhibición </th>' +
					'          <td data-company="Alarmas locales" class="m_comparison_local"><span class="m_comparison_unavailable">No disponible</span></td>' +
					'          <td data-company="Tyco" class="m_comparison_adt"><span class="m_comparison_unavailable">No disponible</span></td>' +
					'          <td data-company="Prosegur" class="m_comparison_prosegur"><span class="m_comparison_unavailable">No disponible</span></td>' +
					'          <td data-company="Direct" class="m_comparison_direct"><span class="m_comparison_available">Disponible</span></td>' +
					'        </tr>' +
					'' +
					'' +
					' <tr>' +
					'          <th>Mantenimientos 24h, 365 días+ repuestos y consumibles<sup>***</sup></th>' +
					'          <td data-company="Alarmas locales" class="m_comparison_local"><span class="m_comparison_unavailable">No disponible</span></td>' +
					'          <td data-company="Tyco" class="m_comparison_adt"><span class="m_comparison_unavailable">No disponible</span></td>' +
					'          <td data-company="Prosegur" class="m_comparison_prosegur"><span class="m_comparison_unavailable">No disponible</span></td>' +
					'          <td data-company="Direct" class="m_comparison_direct"><span class="m_comparison_available">No incluido</span></td>' +
					'        </tr>' +
					'' +
					'        <tr>' +
					'          <th>ZeroVision: impide la visión al ladrón para evitar el robo<sup>****</sup></th>' +
					'          <td data-company="Alarmas locales" class="m_comparison_local"><span class="m_comparison_unavailable">No disponible</span></td>' +
					'          <td data-company="Tyco" class="m_comparison_adt"><span class="m_comparison_unavailable">No disponible</span></td>' +
					'          <td data-company="Prosegur" class="m_comparison_prosegur"><span class="m_comparison_unavailable">No disponible</span></td>' +
					'          <td data-company="Direct" class="m_comparison_direct"><span class="m_comparison_opt_in">Disponible</span></td>' +
					'        </tr>' +
					'' +
					'    <tr>' +
					'          <th>Detección de peligros ambientales y emergencias&nbsp; &nbsp; <span style="color:red">NUEVO</span></th>' +
					'          <td data-company="Alarmas locales" class="m_comparison_local"><span class="m_comparison_unavailable">No disponible</span></td>' +
					'          <td data-company="Tyco" class="m_comparison_adt"><span class="m_comparison_unavailable">No disponible</span></td>' +
					'          <td data-company="Prosegur" class="m_comparison_prosegur"><span class="m_comparison_unavailable">No disponible</span></td>' +
					'          <td data-company="Direct" class="m_comparison_direct"><span class="m_comparison_available">Disponible</span></td>' +
					'        </tr>' +
					'' +
					'      </tbody>' +
					'    </table>' +
					'  </div>' +
					'  <p class="m_comparison_footnote">(*) En caso de emergencia podrá coger el panel de control y encerrarse en un lugar seguro, manteniendo la comunicación.</p>' +
					' <p class="m_comparison_footnote">(**) Única alarma con tecnología Shocksensor (detección sísmica, inercial o microfónica y sin retardo) para puertas y ventanas integrada en un único dispositivo incluido en cuota. Comparativa realizada con las principales empresas de alarmas.</p>' +
					' <p class="m_comparison_footnote">(***) Repuestos y consumibles sin coste alguno durante toda la duración del contrato.</p>' +
					' <p class="m_comparison_footnote">(****) Único sistema de humo certificado de Grado II integrado en un sistema de seguridad.</p>' +
					'' +
					' ' +
					'' +
					'  <dl class="m_comparison_legend">' +
					'    <dt class="m_comparison_legend_available">' +
					'      Disponible' +
					'    </dt>' +
					'    <dd>' +
					'      Incluido' +
					'    </dd>' +
					'    <dt class="m_comparison_legend_opt_in">' +
					'      No incluido' +
					'    </dt>' +
					'    <dd>' +
					'      Opcional' +
					'    </dd>' +
					'    <dt class="m_comparison_legend_unavailable">' +
					'      No disponible' +
					'    </dt>' +
					'    <dd>' +
					'      No disponible' +
					'    </dd>' +
					'  </dl>' +
					'</div>  </div>' +
					'</div>'
	},
	{
    title: 'Departamento Comunicación',
    image: 'SD-comunicacion.png',
    description: 'Bloque Departamento de comunicación de Securitas Direct',
		html:'<div class="contact_row">' +
        '  <div class="m_contact" itemscope="" itemtype="http://schema.org/Person">' +
        '	   <strong class="m_contact_title" itemprop="jobTitle">Contacto Departamento de Comunicación</strong>' +
        '    <p class="m_contact_address">Tel.&nbsp;<span itemprop="telephone">91 709 75 14</span>&nbsp;Ext. 76504 - 73893 - 76555 &nbsp;</p>' +
        '    <a data-cke-saved-href="https://www.securitasdirect.es/" href="https://www.securitasdirect.es/" class="m_link">' +
        '    <span class="m_link_ico ico_go_small"></span>' +
        '  	 <span class="m_link_label"></span></a>' +
				'	   <a class="m_link_label" href="mailto:comunicacion@securitasdirect.es">comunicacion@securitasdirect.es</a>' +
        '  </div>'+
        '</div>'
	},
	{
		title: 'Menú Consejos y Ayuda',
		image: 'SD-consejos.png',
		description: 'Bloque Menú consejos y ayuda de Securitas Direct',
		html:'<div class="m_text">' +
        '<div class="m_text_content">' +
        '<div class="description_row">' +
        '<div class="m_text">' +
        '<div class="m_text_content">' +
        '<p>Descubre nuestras mejores recomendaciones para proteger tu hogar y garantizar la seguridad de tu negocio. Aquí encontrarás consejos y vídeos prácticos, así como respuestas a las preguntas más habituales sobre la alarma de Securitas Direct.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '' +
        '<div class="section_list_row">' +
        '<drupal-entity data-embed-button="panopoly_media_wysiwyg_media_embed" data-entity-embed-display="view_mode:media.embed_large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;entity:node\\/294&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="528e2518-6018-4fe2-b180-ee159a828d4f"></drupal-entity>' +
        '<a class="m_sections m_sections_line" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="0d61003f-e3b5-4d57-893f-09e50042da37" href="/node/294"><strong class="m_sections_title">Consejos</strong> </a>' +
        '' +
        '<p class="m_sections_description"><a class="m_sections m_sections_line" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="0d61003f-e3b5-4d57-893f-09e50042da37" href="/node/294">Reducir el riesgo de robo en tu hogar o negocio es fácil. Con algunos simples consejos podrás garantizar tu seguridad y la de los tuyos. Descubre nuestras mejores recomendaciones.</a></p>' +
        '<a class="m_sections m_sections_line" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="0d61003f-e3b5-4d57-893f-09e50042da37" href="/node/294"> <span class="m_btn_link"> Ver preguntas frecuentes </span> </a> <a class="m_sections m_sections_line" href="/es/consejos-y-ayuda/preguntas-frecuentes"> </a>' +
        '' +
        '<drupal-entity data-embed-button="panopoly_media_wysiwyg_media_embed" data-entity-embed-display="view_mode:media.embed_large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;entity:node\\/288&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="91fcae4c-f5de-4d63-9b67-8780227eaeed"></drupal-entity>' +
        '<a class="m_sections m_sections_line" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="b4064200-3f45-4795-92ec-0d92adbffda0" href="/node/288"> <strong class="m_sections_title">Preguntas frecuentes</strong> </a>' +
        '' +
        '<p class="m_sections_description"><a class="m_sections m_sections_line" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="b4064200-3f45-4795-92ec-0d92adbffda0" href="/node/288">¿Necesitas información extra sobre la alarma de Securitas Direct? ¿Tienes dudas sobre su funcionamiento? A continuación, puedes encontrar las respuestas a las preguntas más habituales.</a></p>' +
        '<a class="m_sections m_sections_line" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="b4064200-3f45-4795-92ec-0d92adbffda0" href="/node/288"> <span class="m_btn_link"> Ver preguntas frecuentes </span> </a> <a class="m_sections m_sections_line" href="/es/consejos-y-ayuda/videos"> </a>' +
        '' +
        '<drupal-entity data-embed-button="panopoly_media_wysiwyg_media_embed" data-entity-embed-display="view_mode:media.embed_large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="805dd133-8d64-443b-b884-de64b2b280f8"></drupal-entity>' +
        '<a class="m_sections m_sections_line" href="/es/consejos-y-ayuda/videos"> <strong class="m_sections_title">Vídeos</strong> </a>' +
        '' +
        '<p class="m_sections_description"><a class="m_sections m_sections_line" href="/es/consejos-y-ayuda/videos">Consejos para tu seguridad personal, explicaciones detalladas de la alarma de Securitas Direct, guías prácticas y mucho más. Descubre nuestros mejores vídeos.</a></p>' +
        '<a class="m_sections m_sections_line" href="/es/consejos-y-ayuda/videos"> <span class="m_btn_link"> Ver preguntas frecuentes </span> </a></div>' +
        '</div>' +
        '</div>'
	},
	{
		title: 'Componente Servicios Securitas Direct',
		image: 'SD-servicios.png',
		description: 'Componente tipo Servicios de Securitas Direct',
		html:'<div class="image-and-text-group">' +
        '<div class="image-group">' +
        '<drupal-entity data-embed-button="panopoly_media_wysiwyg_media_embed" data-entity-embed-display="view_mode:media.embed_large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;entity:node\\/265&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="c7c0c587-099f-4946-a194-ff9fc25b05fa"></drupal-entity>' +
        '</div>' +
        '<div class="text-group">' +
        '<h3>Conexión 24h con Central Receptora</h3>' +
        '<p>La Central Receptora de Alarmas de Securitas Direct, la más grande y avanzada de Europa, está en funcionamiento las 24 horas del día, los 365 días del año. En ella, atendemos cada salto de alarma en un tiempo de respuesta medio de solo 29 segundos.</p>' +
        '<p>Una vez verificada la situación de peligro (robo, intrusión, incendio, etc.), avisamos a las fuerzas de seguridad, los bomberos o una ambulancia.<br />' +
        '<a class="m_btn_link" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="5743006c-7b8c-400c-a8f5-81061a92c0db" href="/node/265">Leer más</a></p>' +
        '</div>' +
        '</div>'
	},
	{
    title: 'Bloque Contacto formularios',
    image: 'SD-contacto.png',
    description: 'Bloque Contacto de formularios Securitas Direct',
    html:'<div class="m_contact_us">' +
        '  <div class="m_contact_us_main">' +
        '    <p class="m_contact_us_text">Si deseas más información ponte en <strong>contacto con nosotros</strong></p>' +
        '    <drupal-entity data-embed-button="panopoly_media_wysiwyg_media_embed" data-entity-embed-display="view_mode:media.embed_large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="cde1f4c5-0773-45d5-b4c9-f00b6f557c14"></drupal-entity>' +
				'    <p class="m_contact_us_info">Llámanos al <a class="contact_info_tel" href="tel:+34902111194">902 111 194</a></p>' +
        '  </div>' +
        '  <div class="m_contact_us_more">  ' +
        '  <div class="m_contact_us_more"><a class="m_contact_us_link" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="c2fd8a4c-159a-4a41-865f-78b0ffd374ca" href="/node/171" html="1" target="_blank">Ver Política de Privacidad</a></div>' +
        '  </div>' +
        '</div>'
	}
	]
} );
