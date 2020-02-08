"use strict";
exports.__esModule = true;
exports["default"] = {
    install: function (Vue) {
        Vue.mixin({
            beforeCreate: function () {
                this.$C = this.$options.C;
            }
        });
    }
};
