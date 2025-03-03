<script type="text/javascript">
/* <![CDATA[ */

	( function() {
		var query = document.location.search;

		if ( query && query.indexOf( 'preview=true' ) !== -1 ) {
			window.name = 'wp-preview-29';
		}

		if ( window.addEventListener ) {
			window.addEventListener( 'pagehide', function() { window.name = ''; } );
		}
	}());
	



	( function() {
		var query = document.location.search;

		if ( query && query.indexOf( 'preview=true' ) !== -1 ) {
			window.name = 'wp-preview-29';
		}

		if ( window.addEventListener ) {
			window.addEventListener( 'pagehide', function() { window.name = ''; } );
		}
	}());


	(function() {

					/*	check if webfonts are disabled by user setting via cookie - or user must opt in.	*/
					var html = document.getElementsByTagName('html')[0];
					var cookie_check = html.className.indexOf('av-cookies-needs-opt-in') >= 0 || html.className.indexOf('av-cookies-can-opt-out') >= 0;
					var allow_continue = true;
					var silent_accept_cookie = html.className.indexOf('av-cookies-user-silent-accept') >= 0;

					if( cookie_check && ! silent_accept_cookie )
					{
						if( ! document.cookie.match(/aviaCookieConsent/) || html.className.indexOf('av-cookies-session-refused') >= 0 )
						{
							allow_continue = false;
						}
						else
						{
							if( ! document.cookie.match(/aviaPrivacyRefuseCookiesHideBar/) )
							{
								allow_continue = false;
							}
							else if( ! document.cookie.match(/aviaPrivacyEssentialCookiesEnabled/) )
							{
								allow_continue = false;
							}
							else if( document.cookie.match(/aviaPrivacyGoogleWebfontsDisabled/) )
							{
								allow_continue = false;
							}
						}
					}

					if( allow_continue )
					{
						var f = document.createElement('link');

						f.type 	= 'text/css';
						f.rel 	= 'stylesheet';
						f.href 	= '//fonts.googleapis.com/css?family=Lato:300,400,700&display=auto';
						f.id 	= 'avia-google-webfont';

						document.getElementsByTagName('head')[0].appendChild(f);
					}
				})();

				/* <![CDATA[ */
window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/svg\/","svgExt":".svg","source":{"concatemoji":"http:\/\/localhost\/final%20project\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.7.2"}};
/*! This file is auto-generated */
!function(i,n){var o,s,e;function c(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function p(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data),r=(e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0),new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data));return t.every(function(e,t){return e===r[t]})}function u(e,t,n){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\uddfa\ud83c\uddf3","\ud83c\uddfa\u200b\ud83c\uddf3")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!n(e,"\ud83d\udc26\u200d\u2b1b","\ud83d\udc26\u200b\u2b1b")}return!1}function f(e,t,n){var r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):i.createElement("canvas"),a=r.getContext("2d",{willReadFrequently:!0}),o=(a.textBaseline="top",a.font="600 32px Arial",{});return e.forEach(function(e){o[e]=t(a,e,n)}),o}function t(e){var t=i.createElement("script");t.src=e,t.defer=!0,i.head.appendChild(t)}"undefined"!=typeof Promise&&(o="wpEmojiSettingsSupports",s=["flag","emoji"],n.supports={everything:!0,everythingExceptFlag:!0},e=new Promise(function(e){i.addEventListener("DOMContentLoaded",e,{once:!0})}),new Promise(function(t){var n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),p.toString()].join(",")+"));",r=new Blob([e],{type:"text/javascript"}),a=new Worker(URL.createObjectURL(r),{name:"wpTestEmojiSupports"});return void(a.onmessage=function(e){c(n=e.data),a.terminate(),t(n)})}catch(e){}c(n=f(s,u,p))}t(n)}).then(function(e){for(var t in e)n.supports[t]=e[t],n.supports.everything=n.supports.everything&&n.supports[t],"flag"!==t&&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,n.DOMReady=!1,n.readyCallback=function(){n.DOMReady=!0}}).then(function(){return e}).then(function(){var e;n.supports.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))}))}((window,document),window._wpemojiSettings);
/* ]]> */
	
