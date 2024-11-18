sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
    "use strict";
    var that;
    return Controller.extend("application1.controller.View1", {
        onInit: function () {
            // var oJSONModel = new sap.ui.model.json.JSONModel();
            // Setting local model to controller and view
            // this.getView.setModel(oJSONModel,"LocalJSONModel");
            // Setting Global model on component level
            // this.getOwnerComponent().setModel(oJSONModel,"GlobalJSONModel")
            // var oResource = this.getView().getModel("i18n").getResourceBundle();
            that = this;
            // that.i18n = this.getView().getModel("i18n").getResourceBundle();
            var oText = this.getView().byId("idTxt");
            // oText.setText(oResource.getText("txtField"));
            
            var oMobile = new JSONModel();
            oMobile.setData({
                EmpId: "BPSH144",
                Name: "ShanmukhiRepaka"
            });
            this.getView().setModel(oMobile);
            var oModel = new JSONModel();
            // var oJSONData = {
            //     company: {
            //         name: "SBP Consulting",
            //         employees: [
            //             {`
            //                 EmpId: "BPSH144",
            //                 Name: "ShanmukhiRepaka"
            //             },
            //             {
            //                 EmpId: "BPSH1443",
            //                 Name: "Ravali"
            //             }
            //         ]
            //     }
            // };
            var oJSONData = 
                    [
                         {
                            EmpId: "BPSH144",
                            Name: "ShanmukhiRepaka"
                        },
                        {
                            EmpId: "BPSH1443",
                            Name: "Ravali"
                        }
                    ]
            oModel.setData({
                items: oJSONData
            });
            that.getView().setModel(oModel);
        },
        
        onPressButton1: function () {
            MessageToast.show("Welcome to my page");
        },
        
        onPressButton2: function () {
            MessageToast.show("Hello Good to see you!!");
        },
        
        onPressButton3: function () {
            var sName = that.getView().byId("idName").getValue();
            MessageToast.show(that.i18n.getText("welcome", [sName]));
        },
        GetJSONModel: function(){
            var oModel=this.getOwnerComponent().oModels.productJSONModel.oData.ProductCollection;
            console.log(oModel)
            // Setting new property inside the model
            // oModel.setProperty("/SampleProperty",{Name:'Jhon',Age:25,gender:'Male'});
            // Get property data from Model
            // var oSampleData=oModel.getProperty("/SampleProperty",);
            //Get Entire Data from the model
            // var oAllData=oModel.getData(); 
        }
    });
});

