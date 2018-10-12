var dominant = function(type){
	if(type == "D"){
		return "D's are direct and decisive; they are risk takers and problem solvers. They are more concerned with completing tasks and winning than they are with gaining approval from people. Though the internal drive tends to make them insensitive to those around them, D's are not afraid to challenge the status quo, and they thrive when it comes to developing new things. They need discipline to excel, and they respond to direct confrontation. The greatest fear of a “D” is to be taken advantage of, and even despite their possible weaknesses—which include an aversion to routine, a tendency to overstep authority, an argumentative nature, and a habit of taking on too much—they place a high value on time and use their innovative thinking to accomplish difficult tasks and conquer challenges.";
	}
	else if(type == "I"){
		return "I's are inspiring and impressive. Enthusiastic, optimistic, impulsive, and emotional—they tend to be creative problem solvers and excellent encouragers. They often have a large number of friends, but they can become more concerned with approval and popularity than with getting results. An I's greatest fear is rejection, but they thrive when it comes to motivating others. Their positive sense of humor helps them negotiate conflicts. Though they can be inattentive to details and poor listeners, they can be great peacemakers and effective teammates when they control their feelings and minimize their urge to entertain and be the center of attention. They value lots of human touch and connection.";
	}
	else if(type == "S"){
		return "S's are steady and more reserved. Because they are stable and predictable, they do not like change, and they thrive in secure, non-threatening environments. They are often friendly and understanding as well as good listeners and loyal workers who are happy doing the same job consistently. With an incredible ability to forgive, reliable and dependable S's tend to make the best friends. Their greatest fear, however, is loss of security, and their possible weaknesses naturally include not only resistance to change, but also difficulty adjusting to it. They can also be too sensitive to criticism and unable to establish priorities. In order to avoid be taken advantage of, S's need to be stronger and learn how to say “no.” They also like to avoid the limelight, but when given an opportunity to genuinely help others, they will gladly rise to the occasion. They feel most valued when they have truly helped someone.";
	}
	else if(type == "C"){
		return "C's are compliant and analytical. Careful and logical lines of thinking drive them forward, and accuracy is a top priority. They hold high standards and value systematic approaches to problem solving. Though they thrive when given opportunities to find solutions, they tend to ignore the feelings of others and can often be critical and downright crabby. Verbalizing feelings is difficult for them, but when they are not bogged down in details and have clear-cut boundaries, they can be big assets to the team by providing calculated “reality checks.” The C's biggest fear is criticism, and their need for perfectionism is often a weakness, as is their tendency to give in when in the midst of an argument. However, they are thorough in all activities and can bring a conscientious, even-tempered element to the team that will provide solid grounding.They value being correct the most.";
	}
	else{
		return "";
	}
}
var obj = function(type,score){
	this.type = type;
	this.score = score;
};

var TestViewModel = function(){
	var _self = this;
	//_self.message = ko.observable("bound message test");
	
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
	
	/*_self.message = ko.pureComputed(function(){
		return "test\ntest1";
	},this*/
	_self.message = ko.pureComputed(function(){
		var T1 = _self.Traits()[0].type;
		//var mes = _self.Traits()[0].type + _self.Traits()[0].score.toString() + _self.Traits()[1].type + _self.Traits()[1].score.toString();
		return "Your dominant trait is: " + T1 + "!\\\n\\\n" + dominant(T1);
	},this);
	
	
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