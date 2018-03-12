$(function() {

	function Ant(name){
	    this.name = name;
	    this.meetingsHistory = new Array();
	};

	Ant.prototype.getName = function(){
		return this.name;
	};

	Ant.prototype.addMeeting = function(name) {
    	this.meetingsHistory.push(new Date(), name);
   	};

	Ant.prototype.about = function(){
	    return this.meetingsHistory;
	};

	Ant.prototype.hello = function(ant){
      	this.addMeeting(ant.getName());
      	ant.addMeeting(this.getName());
  	};
	

	var ant1 = new Ant('ant1');
	var ant2 = new Ant('ant2');
	var ant3 = new Ant('ant3');

	ant1.hello(ant3); // встреча
	setTimeout(function(){
	    ant2.hello(ant3); // встреча
	    setTimeout(function(){
	        ant3.hello(ant1); // встреча

	        console.log('ant1',ant1.about()); // просим рассказать о себе и встречах
	        console.log('ant2',ant2.about()); // просим рассказать о себе и встречах
	        console.log('ant3',ant3.about()); // просим рассказать о себе и встречах

	    },2000);
	},2000);

	
});
