Meteor.publish('cities',function(zipcursor){
	return Zips.find({},{limit:20,skip:zipcursor});
});