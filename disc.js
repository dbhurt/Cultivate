var obj = function(type,score){
	this.type = type;
	this.score = score;
};

var TestViewModel = function(){
	var _self = this;
	_self.message = ko.observable("bound message test");
	
	_self.selectedGroup = ko.observable(1);
	_self.Group1Selected = ko.pureComputed(function() {
		return _self.selectedGroup() == 1;
	}, this);
	_self.Group2Selected = ko.pureComputed(function() {
		return _self.selectedGroup() == 2;
	}, this);
	_self.Group3Selected = ko.pureComputed(function() {
		return _self.selectedGroup() == 3;
	}, this);
	_self.Group4Selected = ko.pureComputed(function() {
		return _self.selectedGroup() == 4;
	}, this);
	_self.EmailSelected = ko.pureComputed(function() {
		return _self.selectedGroup() == 5;
	}, this);
	_self.ShowNav = ko.pureComputed(function() {
		return _self.selectedGroup() < 5;
	}, this);
	
	
	
	_self.OnFirst = ko.pureComputed(function(){
		return _self.selectedGroup() == 1;
	},this);
	
	_self.First = function(){
		_self.selectedGroup(1);
	};
	_self.Last = function(){
		_self.selectedGroup(4);
	};
	_self.Previous = function(){
		if(_self.selectedGroup() != 1){
			_self.selectedGroup(_self.selectedGroup() - 1);
		}
	};
	_self.Next = function(){
		if(_self.selectedGroup() != 5){
			_self.selectedGroup(_self.selectedGroup() + 1);
		}
	};
	
	_self.hideMessage = ko.observable(true);
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
	
	_self.group1Valid = ko.pureComputed(function() {
		return _self.question1() > 0 &&
			_self.question2() > 0 &&
			_self.question3() > 0 &&
			_self.question4() > 0 &&
			_self.question5() > 0;
	},this);
	_self.group2Valid = ko.pureComputed(function() {
		return _self.question6() > 0 &&
			_self.question7() > 0 &&
			_self.question8() > 0 &&
			_self.question9() > 0 &&
			_self.question10() > 0;
	},this);
	_self.group3Valid = ko.pureComputed(function() {
		return _self.question11() > 0 &&
			_self.question12() > 0 &&
			_self.question13() > 0 &&
			_self.question14() > 0 &&
			_self.question15() > 0;
	},this);
	_self.group4Valid = ko.pureComputed(function() {
		return _self.question16() > 0 &&
			_self.question17() > 0 &&
			_self.question18() > 0 &&
			_self.question19() > 0 &&
			_self.question20() > 0;
	},this);

	_self.NextEnabled = ko.pureComputed(function() {
		if(_self.selectedGroup() == 1){
			return _self.group1Valid();
		}
		
		if(_self.selectedGroup() == 2){
			return _self.group2Valid();
		}
		
		if(_self.selectedGroup() == 3){
			return _self.group3Valid();
		}
		
		if(_self.selectedGroup() == 4){
			return _self.group4Valid();
		}
		
		return false;
	},this);
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
	
	_self.Traits = ko.pureComputed(function(){
		function compare(a,b) {
		  if (a.score < b.score)
			return -1;
		  if (a.score > b.score)
			return 1;
		  return 0;
		}

		var D = new obj("D",_self.dResult());
		var I = new obj("I",_self.iResult());
		var S = new obj("S",_self.sResult());
		var C = new obj("C",_self.cResult());		
		
		var all = [];
		all.push(D);
		all.push(I);
		all.push(S);
		all.push(C);
		
		var result = all.sort(compare);
		var sendResult = [];
		sendResult.push(result[3]);
		sendResult.push(result[2]);
		
		return sendResult;
		
	}, this);
	
	
	_self.totalPoints = ko.pureComputed(function(){
		return _self.dResult() + _self.iResult() + _self.sResult() + _self.cResult();
	}, this);
	
	_self.dPercentage = ko.pureComputed(function(){
		var result = (_self.dResult() / _self.totalPoints()) * 100;
		return result.toFixed(0);
	},this);
	
	_self.iPercentage = ko.pureComputed(function(){
		var result = (_self.iResult() / _self.totalPoints()) * 100;
		return result.toFixed(0);
	},this);
	
	_self.sPercentage = ko.pureComputed(function(){
		var result = (_self.sResult() / _self.totalPoints()) * 100;
		return result.toFixed(0);
	},this);
	
	_self.cPercentage = ko.pureComputed(function(){
		var result = (_self.cResult() / _self.totalPoints()) * 100;
		return result.toFixed(0);
	},this);
};