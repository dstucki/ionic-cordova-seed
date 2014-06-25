'use strict';

utilModule.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
	       StatusBar.styleLightContent();
           StatusBar.overlaysWebView(false);
           StatusBar.backgroundColorByHexString("#43cee6");
        }
    });
});
