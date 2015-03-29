if (Meteor.isClient) {
  Session.setDefault('zipCursor',0);

  Meteor.autorun(function(){
  	Meteor.subscribe("cities",Session.get('zipCursor'));
  	console.log("i am here");
  })
  Template.main.zipcodes = function(){
    console.log(Zips.find());
    return Zips.find();
  }

  Template.main.nextText= function(){
  	return (Number(Session.get('zipCursor')) +20) + " -"+(Number(Session.get('zipCursor')) +40);
  }

  Template.main.prevText = function(){
  	if(Number(Session.get('zipCursor'))<20){
  		return ''
  	}
  	return (Number(Session.get('zipCursor')) -20) + " -"+(Number(Session.get('zipCursor'))); 
  }
  Template.main.events({
  	'click .previous': function(evt,tmpl){
  		if(Number(Session.get('zipCursor'))>19){
          Session.set('zipCursor',Number(Session.get('zipCursor')) -20);
        }
  	},
  	'click .next':function(evt,tmpl){
         Session.set('zipCursor',Number(Session.get('zipCursor')) +20);
  	}
  })
}
