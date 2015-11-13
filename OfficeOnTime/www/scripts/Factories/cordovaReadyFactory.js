ootApp.factory('cordovaReady', function () {
    return function (fn) {

        var queue = [];

        var impl = function () {
            queue.push(Array.prototype.slice.call(arguments));
        };

        document.addEventListener('deviceready', function () {
            queue.forEach(function (args) {
                fn.apply(this, args);
            });
            impl = fn;
            // double back button 
            var exitApp = false, intval = setInterval(function () { exitApp = false; }, 1000);
            document.addEventListener("backbutton", function (e) {
                e.preventDefault();
                if (exitApp) {
                    clearInterval(intval)
                    (navigator.app && navigator.app.exitApp()) || (device && device.exitApp())
                }
                else {
                    exitApp = true
                    history.back(1);
                }
            }, false);
        }, false);

        return function () {
            return impl.apply(this, arguments);
        };
    };
});