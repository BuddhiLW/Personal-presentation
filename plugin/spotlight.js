Reveal.initialize({
	dependencies: [
		{ src: '../js/spotlight.js' },
	]
});

Reveal.initialize({
	spotlight: {

			// size of the spotlight
			size: 60,
			
			// true: Locks the mouse pointer inside the presentation
			// there is by design (Pointer Lock API) no spotlightCursor and presentingCursor 
			// displayed regardless of the configured values 
			lockPointerInsideCanvas: false,

			// toggle spotlight by holding down the mouse key
			toggleSpotlightOnMouseDown: true,

			// the keyCode pressed and held to turn on spotlight, disabled when set to false
			// Problems with this config? Maybe your touchpad is disabled on keypress? 
			spotlightOnKeyPressAndHold: false,

			// choose the cursor when spotlight is on. Maybe "crosshair"?
			spotlightCursor: 'none',

			// choose the cursor when spotlight is off and in presentation mode. Maybe "default"?
			presentingCursor: 'none', 

			// true: initially in presentation mode, will also be ture if this is not set and toggleSpotlightOnMouseDown is true
			initialPresentationMode: true,

			// true: disable selecting in presentation mode
			disablingUserSelect: true,

			// set to a number as transition duration in ms to enable fade in and out, disabled when set to false
			fadeInAndOut: 100,

			// enable pointer mode
			useAsPointer: false,

			// pointer color (If pointer mode enabled)
			pointerColor: 'red'
	},
	keyboard: {	
			// alternative to toggleSpotlightOnMouseDown: 
			// toggle spotlight by pressing key 'c'
			67: function() { RevealSpotlight.toggleSpotlight() },

			// enter/leave presentation mode by pressing key 'p'
			80: function() { 
				RevealSpotlight.togglePresentationMode(); 
			},
	},
}