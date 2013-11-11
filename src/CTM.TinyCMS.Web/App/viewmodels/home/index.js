define(['knockout'], function (ko) {
    return {
        brand: ko.observable(""),
        brands: ko.observableArray(['A', 'B', 'C']),

        activate: function (brandCode) {
            this.brand = brandCode;
        }
    };
});