if (Meteor.isClient) {
  Template.main.zipcodes = function(){
    console.log(Zips.find());
    return Zips.find();
  }
}
