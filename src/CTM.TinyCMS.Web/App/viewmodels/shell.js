define(['plugins/router'], function (router) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', moduleId: 'viewmodels/index', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});