sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/m/MessageToast"
], function (Controller, Fragment, MessageToast) {
    "use strict";

    return Controller.extend("application1.controller.View1", {
        onInit: function () {
        },
        onOpenDialog: function () {
            var oView = this.getView();
            if (!this.byId("dialogId")) {
                Fragment.load({
                    id: oView.getId(),
                    name: "fragment.FragmentModule.fragments.dialogFragment",
                    controller: this
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
            } else {
                this.byId("dialogId").open();
            }
        },
        onCloseDialog: function () {
            this.byId("dialogId").close();
        }
    });
});

