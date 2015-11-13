'use strict';
ootApp.factory('SpinnerDialog', function () {

    return {
        show: function () {
            cordova.plugin.pDialog.init({
                theme: 'HOLO_DARK',
                progressStyle: 'SPINNER',
                cancelable: true,
                title: 'Please Wait...',
                message: 'Contacting server ...'
            });            
        },
        hide: function () {
            cordova.plugin.pDialog.dismiss();
        }
    };
});

