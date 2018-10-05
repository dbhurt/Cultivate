var TestViewModel = function(){
	var _self = this;
	_self.question1 = ko.observable(0);
	_self.question2 = ko.observable(0);
	_self.question3 = ko.observable(0);
	_self.question4 = ko.observable(0);
	_self.question5 = ko.observable(0);

	_self.question6 = ko.observable(0);
	_self.question7 = ko.observable(0);
	_self.question8 = ko.observable(0);
	_self.question9 = ko.observable(0);
	_self.question10 = ko.observable(0);

	_self.question11 = ko.observable(0);
	_self.question12 = ko.observable(0);
	_self.question13 = ko.observable(0);
	_self.question14 = ko.observable(0);
	_self.question15 = ko.observable(0);

	_self.question16 = ko.observable(0);
	_self.question17 = ko.observable(0);
	_self.question18 = ko.observable(0);
	_self.question19 = ko.observable(0);
	_self.question20 = ko.observable(0);

	_self.dResult = ko.pureComputed(function() {
		return Number(_self.question1()) +
			Number(_self.question2()) +
			Number(_self.question3()) +
			Number(_self.question4()) +
			Number(_self.question5());
	}, this);

	_self.iResult = ko.pureComputed(function() {
		return Number(_self.question6()) +
			Number(_self.question7()) +
			Number(_self.question8()) +
			Number(_self.question9()) +
			Number(_self.question10());
	}, this);

	_self.sResult = ko.pureComputed(function() {
		return Number(_self.question11()) +
			Number(_self.question12()) +
			Number(_self.question13()) +
			Number(_self.question14()) +
			Number(_self.question15());
	}, this);

	_self.cResult = ko.pureComputed(function() {
		return Number(_self.question16()) +
			Number(_self.question17()) +
			Number(_self.question18()) +
			Number(_self.question19()) +
			Number(_self.question20());
	}, this);
};