var Gift = function(name, score, info){
	var _self = this;
	_self.name = name || "";
	_self.score = score;
	_self.info = info;
	_self.statusClass = ko.pureComputed(function(){
		if(_self.score() <= 15 && _self.score() >10){
			return 'green';
		}
		
		if(_self.score() <= 10 && _self.score() > 5){
			return 'yellow';
		}
		
		return 'red';
	});
};

jQuery.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                      .exec(window.location.search);

    return (results !== null) ? results[1] || 0 : false;
}

jQuery(document).ready(function($){
	//var primary = jQuery.urlParam('primary');
	//var secondary = jQuery.urlParam('secondary');
	//alert(primary + ' ' + secondary);
	
	var testing = jQuery.urlParam('test');
	
	
	window.myViewModel = new GiftsViewModel(testing);
	jQuery('#wpforms-11923-field_2').attr('data-bind','value:message,visible:hideMessage');
	ko.applyBindings(window.myViewModel);
	//jQuery('#wpforms-11923-field_2').parent().hide();
	//for the accordion results below - these could be put in to KO bindings
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			/* Toggle between adding and removing the "active" class,
			to highlight the button that controls the panel */
			this.classList.toggle("active");

			/* Toggle between hiding and showing the active panel */
			var panel = this.nextElementSibling;
			if (panel.style.display === "block") {
				panel.style.display = "none";
			} else {
				panel.style.display = "block";
			}
		});
	}
	//^^^^^^ACCORDION STUFF^^^^^^
});

/*var dominant = function(type){
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
}*/

/*var personalityType = function(type){
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
*/

/*var obj = function(type,score){
	this.type = type;
	this.score = score;
};*/

var GiftsViewModel = function(testing){
	var _self = this;
	
	//_self.primary = ko.observable();
	//_self.secondary = ko.observable();
	_self.htmlMessage = ko.observable();
	_self.completed = ko.observable(false);
	
	_self.selectedGroup = ko.observable(1);
	
	/*if(primary && secondary){
		_self.primary(primary);
		_self.secondary(secondary);
		_self.completed(true);
		_self.selectedGroup(6);
		var resultMessage = "Your dominant trait is: " + _self.primary() + "!";
		resultMessage += "<br><br>";
		resultMessage += dominant(_self.primary());
		resultMessage += "<br><br>";
		resultMessage += "Your next trait is: " + _self.secondary() + "!";
		resultMessage += "<br><br>";
		resultMessage += dominant(_self.secondary());
		resultMessage += "<br><br>";
		resultMessage += "Your personality type is: " + _self.primary() + "/" + _self.secondary();
		resultMessage += "<br><br>";
		resultMessage += personalityType(_self.primary()+_self.secondary());
		_self.htmlMessage(resultMessage);
	}*/
	
	
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
	_self.Group5Selected = ko.pureComputed(function() {
		return _self.selectedGroup() == 5;
	}, this);
	_self.Group6Selected = ko.pureComputed(function() {
		return _self.selectedGroup() == 6;
	}, this);
	_self.Group7Selected = ko.pureComputed(function() {
		return _self.selectedGroup() == 7;
	}, this);
	_self.Group8Selected = ko.pureComputed(function() {
		return _self.selectedGroup() == 8;
	}, this);
	_self.Group9Selected = ko.pureComputed(function() {
		return _self.selectedGroup() == 9;
	}, this);
	_self.Group10Selected = ko.pureComputed(function() {
		return _self.selectedGroup() == 10;
	}, this);
	_self.Group11Selected = ko.pureComputed(function() {
		return _self.selectedGroup() == 11;
	}, this);
	_self.Group12Selected = ko.pureComputed(function() {
		return _self.selectedGroup() == 12;
	}, this);
	_self.Group13Selected = ko.pureComputed(function() {
		return _self.selectedGroup() == 13;
	}, this);
	_self.Group14Selected = ko.pureComputed(function() {
		return _self.selectedGroup() == 14;
	}, this);
	_self.Group15Selected = ko.pureComputed(function() {
		return _self.selectedGroup() == 15;
	}, this);
	_self.EmailSelected = ko.pureComputed(function() {
		return _self.selectedGroup() == 16;
	}, this);
	_self.ShowNav = ko.pureComputed(function() {
		return _self.selectedGroup() < 17;
	}, this);
	
	
	
/*_self.OnFirst = ko.pureComputed(function(){
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
	};*/
	_self.Next = function(){
		_self.SortGifts();
		if(_self.selectedGroup() != 17){
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
	
	_self.question21 = ko.observable(0);
	_self.question22 = ko.observable(0);
	_self.question23 = ko.observable(0);
	_self.question24 = ko.observable(0);
	_self.question25 = ko.observable(0);
	
	_self.question26 = ko.observable(0);
	_self.question27 = ko.observable(0);
	_self.question28 = ko.observable(0);
	_self.question29 = ko.observable(0);
	_self.question30 = ko.observable(0);
	
	_self.question31 = ko.observable(0);
	_self.question32 = ko.observable(0);
	_self.question33 = ko.observable(0);
	_self.question34 = ko.observable(0);
	_self.question35 = ko.observable(0);
	
	_self.question36 = ko.observable(0);
	_self.question37 = ko.observable(0);
	_self.question38 = ko.observable(0);
	_self.question39 = ko.observable(0);
	_self.question40 = ko.observable(0);
	
	_self.question41 = ko.observable(0);
	_self.question42 = ko.observable(0);
	_self.question43 = ko.observable(0);
	_self.question44 = ko.observable(0);
	_self.question45 = ko.observable(0);
	
	_self.question46 = ko.observable(0);
	_self.question47 = ko.observable(0);
	_self.question48 = ko.observable(0);
	_self.question49 = ko.observable(0);
	_self.question50 = ko.observable(0);
	
	_self.question51 = ko.observable(0);
	_self.question52 = ko.observable(0);
	_self.question53 = ko.observable(0);
	_self.question54 = ko.observable(0);
	_self.question55 = ko.observable(0);
	
	_self.question56 = ko.observable(0);
	_self.question57 = ko.observable(0);
	_self.question58 = ko.observable(0);
	_self.question59 = ko.observable(0);
	_self.question60 = ko.observable(0);
	
		
	_self.question61 = ko.observable(0);
	_self.question62 = ko.observable(0);
	_self.question63 = ko.observable(0);
	_self.question64 = ko.observable(0);
	_self.question65 = ko.observable(0);
	
	_self.question66 = ko.observable(0);
	_self.question67 = ko.observable(0);
	_self.question68 = ko.observable(0);
	_self.question69 = ko.observable(0);
	_self.question70 = ko.observable(0);
	
	_self.question71 = ko.observable(0);
	_self.question72 = ko.observable(0);
	
	if(testing){
	_self.completed(true);
	_self.question1("1");
	_self.question2("1");
	_self.question3("1");
	_self.question4("1");
	_self.question5("1");

	_self.question6("1");
	_self.question7("1");
	_self.question8("1");
	_self.question9("1");
	_self.question10("1");

	_self.question11("1");
	_self.question12("1");
	_self.question13("1");
	_self.question14("1");
	_self.question15("1");

	_self.question16("1");
	_self.question17("1");
	_self.question18("1");
	_self.question19("1");
	_self.question20("1");
	
	_self.question21("1");
	_self.question22("1");
	_self.question23("1");
	_self.question24("1");
	_self.question25("1");
	
	_self.question26("1");
	_self.question27("1");
	_self.question28("1");
	_self.question29("1");
	_self.question30("1");
	
	_self.question31("1");
	_self.question32("1");
	_self.question33("1");
	_self.question34("1");
	_self.question35("1");
	
	_self.question36("1");
	_self.question37("1");
	_self.question38("1");
	_self.question39("1");
	_self.question40("1");
	
	_self.question41("1");
	_self.question42("1");
	_self.question43("1");
	_self.question44("1");
	_self.question45("1");
	
	_self.question46("1");
	_self.question47("1");
	_self.question48("1");
	_self.question49("1");
	_self.question50("1");
	
	_self.question51("1");
	_self.question52("1");
	_self.question53("1");
	_self.question54("1");
	_self.question55("1");
	
	_self.question56("1");
	_self.question57("1");
	_self.question58("1");
	_self.question59("1");
	_self.question60("1");
	
		
	_self.question61("1");
	_self.question62("1");
	_self.question63("1");
	_self.question64("1");
	_self.question65("1");
	
	_self.question66("1");
	_self.question67("1");
	_self.question68("1");
	_self.question69("1");
	_self.question70("1");
	
	_self.question71("1");
	_self.question72("1");
	}
	
	_self.Administration = ko.pureComputed(function(){
		return Number(_self.question1()) +
			   Number(_self.question25()) +
			   Number(_self.question49());
	});
	_self.Apostleship = ko.pureComputed(function(){
		return Number(_self.question2()) +
			   Number(_self.question26()) +
			   Number(_self.question50());
	});
	_self.Craftsmanship = ko.pureComputed(function(){
		return Number(_self.question3()) +
			   Number(_self.question27()) +
			   Number(_self.question51());
	});
	_self.Discernment = ko.pureComputed(function(){
		return Number(_self.question4()) +
			   Number(_self.question28()) +
			   Number(_self.question52());
	});
	_self.Evangelism = ko.pureComputed(function(){
		return Number(_self.question5()) +
			   Number(_self.question29()) +
			   Number(_self.question53());
	});
	_self.Exhortation = ko.pureComputed(function(){
		return Number(_self.question6()) +
			   Number(_self.question30()) +
			   Number(_self.question54());
	});
	_self.Faith = ko.pureComputed(function(){
		return Number(_self.question7()) +
			   Number(_self.question31()) +
			   Number(_self.question55());
	});
	_self.Giving = ko.pureComputed(function(){
		return Number(_self.question8()) +
			   Number(_self.question32()) +
			   Number(_self.question56());
	});
	_self.Healing = ko.pureComputed(function(){
		return Number(_self.question9()) +
			   Number(_self.question33()) +
			   Number(_self.question57());
	});
	_self.Helps = ko.pureComputed(function(){
		return Number(_self.question10()) +
			   Number(_self.question34()) +
			   Number(_self.question58());
	});
	_self.Hospitality = ko.pureComputed(function(){
		return Number(_self.question11()) +
			   Number(_self.question35()) +
			   Number(_self.question59());
	});
	_self.Intercession = ko.pureComputed(function(){
		return Number(_self.question12()) +
			   Number(_self.question36()) +
			   Number(_self.question60());
	});
	_self.Knowledge = ko.pureComputed(function(){
		return Number(_self.question13()) +
			   Number(_self.question37()) +
			   Number(_self.question61());
	});
	_self.Leadership = ko.pureComputed(function(){
		return Number(_self.question14()) +
			   Number(_self.question38()) +
			   Number(_self.question62());
	});
	_self.Mercy = ko.pureComputed(function(){
		return Number(_self.question15()) +
			   Number(_self.question39()) +
			   Number(_self.question63());
	});
	_self.Miracles = ko.pureComputed(function(){
		return Number(_self.question16()) +
			   Number(_self.question40()) +
			   Number(_self.question64());
	});
	_self.Missionary = ko.pureComputed(function(){
		return Number(_self.question17()) +
			   Number(_self.question41()) +
			   Number(_self.question65());
	});
	_self.MusicWorship = ko.pureComputed(function(){
		return Number(_self.question18()) +
			   Number(_self.question42()) +
			   Number(_self.question66());
	});
	_self.PastorShepherd = ko.pureComputed(function(){
		return Number(_self.question19()) +
			   Number(_self.question43()) +
			   Number(_self.question67());
	});
	_self.Prophecy = ko.pureComputed(function(){
		return Number(_self.question20()) +
			   Number(_self.question44()) +
			   Number(_self.question68());
	});
	_self.Service = ko.pureComputed(function(){
		return Number(_self.question21()) +
			   Number(_self.question45()) +
			   Number(_self.question69());
	});
	_self.Teaching = ko.pureComputed(function(){
		return Number(_self.question22()) +
			   Number(_self.question46()) +
			   Number(_self.question70());
	});
	_self.Tongues = ko.pureComputed(function(){
		return Number(_self.question23()) +
			   Number(_self.question47()) +
			   Number(_self.question71());
	});
	_self.Wisdom = ko.pureComputed(function(){
		return Number(_self.question24()) +
			   Number(_self.question48()) +
			   Number(_self.question72());
	});
	
	_self.GiftsList = ko.observableArray([
		new Gift("Administration",_self.Administration,"The gift of administration is the divine strength or ability to organize multiple tasks and groups of people to accomplish these tasks. Luke 14:28-30, Acts 6:1-7, 1 Corinthians 12:28"),
		new Gift("Apostleship", _self.Apostleship, "The gift of apostleship is the divine strength or ability to pioneer new churches and ministries through planting, overseeing, and training. Acts 15:22-35, 1 Corinthians 12:28, 2 Corinthians 12:12, Gal 2:7-10, Ephesians 4:11-14"),
		new Gift("Craftsmanship", _self.Craftsmanship, "The gift of craftsmanship is the divine strength or ability to plan, build, and work with your hands in construction environments to accomplish multiple ministry applications. Exodus 30:22, 31:3-11, 2 Chronicles 34:9-13, Acts 18:2-3"),
		new Gift("Discernment", _self.Discernment, "The gift of discernment is the divine strength or ability to spiritually identify falsehood and to distinguish between right and wrong motives and situations. Matt. 16:21-23, Acts 5:1-11, 16:16-18, I Cor. 12:10, I John 4:1-6"),
		new Gift("Evangelism", _self.Evangelism, "The gift of evangelism is the divine strength or ability to help non-Christians take the necessary steps to becoming a born again Christian. Acts 8:5-6, Acts 8:26-40, Acts 14:21, Acts 21:8, Ephesians 4:11-14"),
		new Gift("Exhortation", _self.Exhortation, "The gift of exhortation is the divine strength or ability to encourage others through the written or spoken word and Biblical truth. Acts 14:22, Romans 12:8, 1 Timothy 4:13, Hebrews 10:24-25"),
		new Gift("Faith", _self.Faith, "The gift of faith is the divine strength or ability to believe in God for unseen supernatural results in every arena of life. Acts 11:22-24, Rom 4:18-21, 1 Corinthians 12:9, Hebrews 11"),
		new Gift("Giving", _self.Giving, "The gift of giving is the divine strength or ability to produce wealth and to give by tithes and offerings for the purpose of advancing the Kingdom of God on earth. Mark 12:41-44, Romans 12:8, 2 Corinthians 8:1-7, 9:2-7"),
		new Gift("Healing", _self.Healing, "The gift of healing is the divine strength or ability to act as an intermediary in faith,prayer, & by the laying on of hands for the healing of physical and mental illnesses. Acts 3:1-10, Acts 9:32-35, Acts 28:7-10, 1 Corinthians 12:9, 28"),
		new Gift("Helps", _self.Helps, "The gift of helps is the divine strength or ability to work in a supportive role for the accomplishment of tasks in Christian ministry. Mark 15:40-41, Acts 9:36, Romans 16:1-2, 1 Corinthians 12:28"),
		new Gift("Hospitality", _self.Hospitality, "The gift of hospitality is the divine strength or ability to create warm, welcoming environments for others in places such as your home, office, or church. Acts 16:14-15, Romans 12:13, Romans 16:23, Hebrews 13:1-2, 1 Peter 4:9"),
		new Gift("Intercession", _self.Intercession, "The gift of intercession is the divine strength or ability to stand in the gap in prayer for someone, something, or someplace believing for profound results. Hebrews 7:25, Colossians 1:9-12, Col 4:12-13, James 5:14-16"),
		new Gift("Knowledge", _self.Knowledge, "The gift of knowledge is the divine strength or ability to bring clarity and to understand situations and circumstances often accompanied by a word from God. Acts 5:1-11, 1 Corinthians 12:8, Col 2:2-3"),
		new Gift("Leadership", _self.Leadership, "The gift of leadership is the divine strength or ability to influence people at their level while directing and focusing them on the big picture, vision, or idea. Romans 12:8, 1 Timothy 3:1-13, 1 Timothy 5:17, Hebrews 13:17"),
		new Gift("Mercy", _self.Mercy, "The gift of mercy is the divine strength or ability to feel empathy and to care for those who are hurting in any way. Matthew 9:35-36, Mark 9:41, Romans 12:8, 1 Thessalonians 5:14"),
		new Gift("Miracles", _self.Miracles, "The gift of miracles is the divine strength or ability to alter the natural outcomes of life in a supernatural way through prayer, faith, and divine direction. Acts 9:36-42, 19:11-12, 20:7-12, Rom 15:18-19, I Cor. 12:10, 28"),
		new Gift("Missionary", _self.Missionary, "The gift of missions is the divine strength or ability to reach others outside of your culture and nationality; while in most cases living in that culture or nation. Acts 8:4, Acts 13:2-3, Acts 22:21, Romans 10:15"),
		new Gift("MusicWorship", _self.MusicWorship, "The gift of music / worship is the divine strength or ability to sing, dance, or play an instrument primarily for the purpose of helping others worship God. Deut. 31:22, 1 Samuel 16:16, 1 Chronicles 16:41-42, 2 Chronicles 5:12-13, 34:12, Psalm 150"),
		new Gift("PastorShepherd", _self.PastorShepherd, "The gift of pastor / shepherd is the divine strength or ability to care for the personal needs of others by nurturing and mending life issues. John 10:1-18, Ephesians 4:11-14, 1 Timothy 3:1-7, 1 Peter 5:1-3"),
		new Gift("Prophecy", _self.Prophecy, "The gift of prophecy is the divine strength or ability to boldly speak and bring clarity to scriptural and doctrinal truth, in some cases foretelling God’s plan. Acts 2:37-40, Acts 7:51-53, Acts 26:24-29, 1 Corinthians 14:1-4, 1 Thessalonians. 1:5"),
		new Gift("Service", _self.Service, "The gift of serving is the divine strength or ability to do small or great tasks in working for the overall good of the body of Christ. Acts 6:1-7, Romans 12:7, Galatians 6:10, 2 Tim. 1:16-18, Titus 3:14"),
		new Gift("Teaching", _self.Teaching, "The gift of teaching is the divine strength or ability to study and learn from the Scriptures primarily to bring understanding and depth to other Christians. Acts 18:24-28, Acts 20:20-21, 1 Corinthians. 12:28, Ephesians 4:11-14"),
		new Gift("Tongues", _self.Tongues, "The gift of tongues is the divine strength or ability to pray in a heavenly language to encourage your spirit and to commune with God. The gift of tongues is often accompanied by interpretation and should be used appropriately. Acts 2:1-13, 1 Corinthians 12:10, 14:1-14"),
		new Gift("Wisdom", _self.Wisdom, "The gift of wisdom is the divine strength or ability to apply the truths of Scripture in a practical way, producing the fruitful outcome and character of Jesus Christ. Acts 6:3,10, 1 Corinthians 2:6-13, 1 Corinthians. 12:8")
	]);
	
	_self.SortGifts = function(){
		_self.GiftsList.sort(function (l, r) 
		{ 
			if(l.score() > r.score()){
				return -1;
			}
			
			if(l.score() == r.score()){
				if(l.name < r.name){
					return -1;
				}
			}
			
			return 1;
			//return l.score() > r.score() ? 1 : -1 
		});
	};
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
	_self.group5Valid = ko.pureComputed(function() {
		return _self.question21() > 0 &&
			_self.question22() > 0 &&
			_self.question23() > 0 &&
			_self.question24() > 0 &&
			_self.question25() > 0;
	},this);
	_self.group6Valid = ko.pureComputed(function() {
		return _self.question26() > 0 &&
			_self.question27() > 0 &&
			_self.question28() > 0 &&
			_self.question29() > 0 &&
			_self.question30() > 0;
	},this);
	_self.group7Valid = ko.pureComputed(function() {
		return _self.question31() > 0 &&
			_self.question32() > 0 &&
			_self.question33() > 0 &&
			_self.question34() > 0 &&
			_self.question35() > 0;
	},this);
	_self.group8Valid = ko.pureComputed(function() {
		return _self.question36() > 0 &&
			_self.question37() > 0 &&
			_self.question38() > 0 &&
			_self.question39() > 0 &&
			_self.question40() > 0;
	},this);
	_self.group9Valid = ko.pureComputed(function() {
		return _self.question41() > 0 &&
			_self.question42() > 0 &&
			_self.question43() > 0 &&
			_self.question44() > 0 &&
			_self.question45() > 0;
	},this);
	_self.group10Valid = ko.pureComputed(function() {
		return _self.question46() > 0 &&
			_self.question47() > 0 &&
			_self.question48() > 0 &&
			_self.question49() > 0 &&
			_self.question50() > 0;
	},this);
	_self.group11Valid = ko.pureComputed(function() {
		return _self.question51() > 0 &&
			_self.question52() > 0 &&
			_self.question53() > 0 &&
			_self.question54() > 0 &&
			_self.question55() > 0;
	},this);
	_self.group12Valid = ko.pureComputed(function() {
		return _self.question56() > 0 &&
			_self.question57() > 0 &&
			_self.question58() > 0 &&
			_self.question59() > 0 &&
			_self.question60() > 0;
	},this);
	_self.group13Valid = ko.pureComputed(function() {
		return _self.question61() > 0 &&
			_self.question62() > 0 &&
			_self.question63() > 0 &&
			_self.question64() > 0 &&
			_self.question65() > 0;
	},this);
	_self.group14Valid = ko.pureComputed(function() {
		return _self.question66() > 0 &&
			_self.question67() > 0 &&
			_self.question68() > 0 &&
			_self.question69() > 0 &&
			_self.question70() > 0;
	},this);
	_self.group15Valid = ko.pureComputed(function() {
		return _self.question71() > 0 &&
			_self.question72() > 0;
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
		
		if(_self.selectedGroup() == 5){
			return _self.group5Valid();
		}
		if(_self.selectedGroup() == 6){
			return _self.group6Valid();
		}
		if(_self.selectedGroup() == 7){
			return _self.group7Valid();
		}
		if(_self.selectedGroup() == 8){
			return _self.group8Valid();
		}
		if(_self.selectedGroup() == 9){
			return _self.group9Valid();
		}
		if(_self.selectedGroup() == 10){
			return _self.group10Valid();
		}
		if(_self.selectedGroup() == 11){
			return _self.group11Valid();
		}
		if(_self.selectedGroup() == 12){
			return _self.group12Valid();
		}
		if(_self.selectedGroup() == 13){
			return _self.group13Valid();
		}
		if(_self.selectedGroup() == 14){
			return _self.group14Valid();
		}
		if(_self.selectedGroup() == 15){
			return _self.group15Valid();
		}
		if(_self.selectedGroup() == 16){
			return true;
		};
		
		return false;
	},this);
	/*_self.dResult = ko.pureComputed(function() {
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
	}, this);*/
	
	/*_self.Traits = ko.pureComputed(function(){
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
		
	}, this);*/
	
	self.message = ko.pureComputed(function(){
		return "";
	});
	/*_self.message = ko.pureComputed(function(){
		return "test\ntest1";
	},this*/
	/*_self.message = ko.pureComputed(function(){
		var message = "";
		var T1 = _self.Traits()[0].type;
		var T2 = _self.Traits()[1].type;
		//var mes = _self.Traits()[0].type + _self.Traits()[0].score.toString() + _self.Traits()[1].type + _self.Traits()[1].score.toString();
		message = "Your dominant trait is: " + T1 + "!\\\n\\\n" + dominant(T1);
		message = message + "\\\n\\\n";
		message = message + "Your next trait is: " + T2 + "!\\\n\\\n" + dominant(T2);
		message = message + "\\\n\\\n";
		message = message + "Your personality type is: " + T1 + "/" + T2 + "\\\n\\\n";
		message = message + personalityType(T1+T2);
		return message;
	},this);*/
	
	/*_self.EmailSelected.subscribe(function(newValue) {
		if(newValue){
			var T1 = _self.Traits()[0].type;
			var T2 = _self.Traits()[1].type;
			
			var action = jQuery('#wpforms-form-11923').attr('action')
			if(action.indexOf("?") > -1){
				jQuery('#wpforms-form-11923').attr('action', action + '&primary='+T1+'&secondary='+T2);
			}else{
				jQuery('#wpforms-form-11923').attr('action', action + '?primary='+T1+'&secondary='+T2);
			}
			
		}
	});*/
	
	
	/*_self.totalPoints = ko.pureComputed(function(){
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
	},this);*/
};