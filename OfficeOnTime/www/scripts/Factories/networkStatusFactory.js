'use strict';
ootApp.factory('networkStatus', function ($rootScope, cordovaReady) {
    return {
        checkNetworkConnection: cordovaReady(function () {
            try {

                if (navigator && navigator.connection && navigator.connection.type != Connection.NONE) {
                    return navigator.connection.type;
                }
            } catch (e) {
                alert(e);
                $.each(navigator, function (key, value) {
                    return value;
                });
            }
        })
    };
});