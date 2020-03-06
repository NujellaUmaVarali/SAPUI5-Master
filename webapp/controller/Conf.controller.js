sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.incture.cherrywork.ConferenceData.controller.Conf", {

		onInit: function () {
			this.getView().setModel(new JSONModel(), "conference");
			var confListobj = [{
				name: "Blockchain",
				city: "Berlin",
				date: "20 Dec",
				speakers: "8",
				participants: "98"
			}, {
				name: "Agile & DevOps",
				city: "Munich",
				date: "12 Jan",
				speakers: "10",
				participants: "100"
			}, {
				name: "Agile Testing and Automation",
				city: "Dallas",
				date: "16 Feb",
				speakers: "12",
				participants: "106"
			}, {
				name: "DevOps Summit",
				city: "Pune",
				date: "14 March",
				speakers: "8",
				participants: "78"
			}];
			this.getView().getModel("conference").setProperty("/confList", confListobj);
			var oTotal = {
				price: "2500",
				registered: "10"
			};
			this.getView().getModel("conference").setProperty("/total", oTotal);
		},

		mul: function (event) {
			var qut = this.getView().getModel("conference").getProperty("/total");
			var q = qut.price;
			var p = qut.registered;
			var result = q * p;
			this.getView().getModel("conference").setProperty("/result", result);
		},

		onDeleteHandle: function (oEvent) {
			var deleteRecord = oEvent.getSource().getBindingContext("conference").getObject();
			//console.log(deleteRecord);
			var myItems = this.getView().getModel("conference").getProperty("/confList");
			var index = myItems.indexOf(deleteRecord);
			myItems.splice(index, 1);
			//removing 1 record from i th index.
			this.getView().getModel("conference").setProperty("/confList", myItems);
		}

	}); //controller
});