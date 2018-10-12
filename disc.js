
jQuery.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                      .exec(window.location.search);

    return (results !== null) ? results[1] || 0 : false;
}

jQuery(document).ready(function(){
	//var action = jQuery('#wpforms-11890-field_2').attr('action');
	//jQuery('#wpforms-11890-field_2').attr('action', action + ')
	var primary = jQuery.urlParam('primary');
	var secondary = jQuery.urlParam('secondary');
	alert(primary + ' ' + secondary);
});

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

var personalityType = function(type){
	if(type == "DI"){
		return "D/I's are curious concluders who place emphasis on the bottom line and work hard to reach their goals. They are more determined than they are inspirational, yet their high expectations and standards for themselves and those around them typically causes them to make quite an impact, motivating others to follow them. They have an array of interests and can become distracted by taking on too many projects. They often need to focus, prioritize, and simply slow down. Because D/I's thrive on activity and forward motion, they like to accomplish tasks through a large number of people.\\\n\\\nBiblical Examples: Joshua (Joshua 1), Noah (Genesis 6-9), Sarah (Genesis 16, 1 Peter 3:6)";
	}else if(type == "ID"){
		return "I/D's are persuaders who are outgoing and energetic. They enjoy large groups and use their power of influence to attain respect and convince people to follow their lead. Sometimes they can be viewed as fidgety and nervous, but it comes from their need to be a part of challenges that have variety, freedom, and mobility. “I/D”s could benefit from learning to look before they leap and spending more time being studious and still. They make inspiring leaders and know how to get results from and through people. \\\n\\\nBiblical Examples: John the Baptist (Luke 3), Peter (Matthew 16 and 26, Acts 3), Rebekah (Genesis 24)";
	}else if(type=="SD"){
		return "S/D's are quiet leaders who can be counted on to get the job done. They perform better in small groups and do not enjoy speaking in front of crowds. Though they can be soft- and hard-hearted at the same time, they enjoy close relationships with people, being careful not to dominate them. Challenges motivate them, especially ones that allow them to take a systematic approach. Because this personality style tends to be determined, persevering through time and struggles, they benefit from encouragement and positive relationships. \\\n\\\nBiblical Examples: Martha (Luke 10:38-42), Job (Job 1:5, James 5:11)";
	}else if(type == "CD"){
		return "C/D's are cautious and determined designers who are consistently task-oriented and very aware of problems. Sometimes viewed as insensitive, they do care about individual people but have a difficult time showing it. They often feel they are the only ones who can do the job the way it needs to be done, but because of their administrative skills, they are able to bring plans for change and improvements to fruition. “C/D”s have a tendency to be serious and could benefit from being more optimistic and enthusiastic. Despite their natural drive to achieve, they should concentrate on developing healthy relationships and simply loving people. \\\n\\\nBiblical Examples: Bezealeel (Exodus 35:30-36, 8, 37:1-9), Jochebed (Exodus 1:22-2:4), Jethro (Exodus 2,18)";
	}else if(type=="DS"){
		return "D/S's are attainers and achievers with an ability to persevere. They are more active than passive, but they possess a kind of calm sensitivity and steadiness that makes them good leaders. They seem to be people oriented but can easily be dominant and decisive when it comes to tasks and project planning. They strive to accomplish goals with fierce determination that comes from strong internal drive, but they could benefit from contemplative and conservative thinking as well as spending more time focusing on relationships. \\\n\\\nBiblical Examples: Daniel (Daniel 1-6), Job (Job 1:5, James 5:11), Martha (Luke 10:38-42)";
	} else if(type == "IS"){
		return "I/S's are influential counselors who love people, and it’s no surprise that people love them. They live to please and serve, and they tend to be good listeners. Looking good and encouraging others is important to them, as is following through and being obedient. They often lack in the area of organization and can be more concerned with the people involved than they are with the task at hand. However, they can be center stage or behind the scenes with equal effectiveness, and they shine when it comes to influencing and helping others. \\\n\\\nBiblical Examples: Barnabas (Acts 4, 9, 11-15), Elisha (1 Kings 19, 2 Kings 2-3), Nicodemus (John 3, 7, 19)";
	} else if(type == "SI"){
		return "S/I's are inspirational counselors who exhibit warmth and sensitivity. Tolerant and forgiving, they have many friends because they accept and represent others well. Their social nature and desire to be likable and flexible makes them inclined to be overly tolerant and non-confrontational. “S/I”s will benefit from being more task-oriented and paying more attention to detail. Kind and considerate, they include others and inspire them to follow. Words of affirmation go a long way with this personality type, and with the right motivation, they can be excellent team players. \\\n\\\nBiblical Examples: Mary Magdalene (Luke 7:36-47), Barnabas (Acts 4, 9, 11-15), Elisha (1 Kings 19, 2 Kings 2-13)";
	} else if(type == "CI"){
		return "C/I's pay attention to the details. They tend to impress others by doing things right and stabilizing situations. Not considered aggressive or pushy, they enjoy both large and small crowds. Though they work well with people, they are sometimes too sensitive to what others think about them and their work. They could benefit from being more assertive and self motivated. Often excellent judges of character, they easily trust those who meet their standards. They are moved by genuine and enthusiastic approval as well as concise and logical explanations. \\\n\\\nBiblical Examples: Miriam (Exodus 15-21, Numbers 12:1-15), Ezra (Ezra 7, 8)";
	} else if(type == "DC"){
		return "D/C's are challengers and can either be determined students or defiant critics. Being in charge is important to them, yet they care little about what others think as long as they get the job done. They have a great deal of foresight and examine every avenue to find the best solution; they prefer to work alone. Though they fear failure and the lack of influence, they are motivated by challenges and can often be excellent administrators. They can benefit from learning to relax and paying more attention to people. \\\n\\\nBiblical Examples: Malachi (Malachi 4), Nathan (2 Samuel 12:1-13), Nahum (Nahum 1-3)";
	}else if(type == "IC"){
		return "I/C's are inspiring yet cautious assessors who are excellent communicators through the combination of concerned awareness and appreciation of people. They excel in determining ways to improve production. They tend to be impatient and critical, and they can also be overly persuasive and too consumed by the desire to win. “I/C”s like to work inside the box, and they could benefit from trying new things and caring less about what others think. This personality type often possesses a gift for teaching; they are generally dependable when it comes to paying attention to details and getting the job done. \\\n\\\nBiblical Examples: Miriam (Exodus 15-21), Ezra (Ezra 7-8), Shunammite Woman (2 Kings 4:8-37)";
	}else if(type == "SC"){
		return "S/C's are diplomatic and steady, as well as detail-oriented. Stable and contemplative, they like to weigh the evidence and discover the facts to come to a logical conclusion. More deliberate, they prefer to take their time, especially when the decision involves others. Possible weaknesses include being highly sensitive and unable to handle criticism, and they also need to be aware of the way they treat others. Operating best in precise and cause-worthy projects, the “S/C” can be a peacemaker; this makes them a loyal team member and friend. \\\n\\\nBiblical Examples: Moses (Exodus 3, 4, 20, 32), John (John 19:26-27), Eliezer (Genesis 24)";
	}else if(type == "CS"){
		return "C/S's are systematic and stable. They tend to do one thing at a time—and do it right. Reserved and cautious, they would rather work behind the scenes to stay on track; however, they seldom take risks or try new things and naturally dislike sudden changes in their environments. Precisionists to the letter, they painstakingly require accuracy and fear criticism, which they equate to failure. Diligent workers, their motivation comes from serving others. \\\n\\\nBiblical Examples: Esther (Esther 4), Zechariah (Luke 1), Joseph (Matthew 1:1-23)";
	}else{
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
		var message = "";
		var T1 = _self.Traits()[0].type;
		var T2 = _self.Traits()[1].type;
		//var mes = _self.Traits()[0].type + _self.Traits()[0].score.toString() + _self.Traits()[1].type + _self.Traits()[1].score.toString();
		message = "Your dominant trait is: " + T1 + "!\\\n\\\n" + dominant(T1);
		message = message + "\\\n\\\n";
		message = message + "Your personality type is: " + T1 + "/" + T2 + "\\\n\\\n";
		message = message + personalityType(T1+T2);
		return message;
	},this);
	
	_self.EmailSelected.subscribe(function(newValue) {
		if(newValue){
			var T1 = _self.Traits()[0].type;
			var T2 = _self.Traits()[1].type;
			
			var action = jQuery('#wpforms-form-11890').attr('action')
			jQuery('#wpforms-form-11890').attr('action', action + '&primary='+T1+'&secondary='+T2);
		}
	});
	
	
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