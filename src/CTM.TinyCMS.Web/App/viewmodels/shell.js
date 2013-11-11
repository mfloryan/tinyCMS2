define(['plugins/router'], function (router) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', moduleId: 'viewmodels/index', nav: false },
                { route: 'home/brands(/:brandcode)', moduleId: 'viewmodels/home/index', title:"Home", nav: true, hash:"#home/brands"}
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});