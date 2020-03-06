/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/incture/cherrywork/ConferenceData/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/incture/cherrywork/ConferenceData/test/integration/pages/Conf",
	"com/incture/cherrywork/ConferenceData/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.incture.cherrywork.ConferenceData.view.",
		autoWait: true
	});
});