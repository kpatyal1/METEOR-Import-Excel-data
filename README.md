# METEOR-Import-Excel-data
Import Excel data in Meteor JS


Here command to import excel data  from csv file to mongo db collection
  
  mongoimport --host localhost:3001 --db meteor --collection ziipps --type csv --file your\file\path\filename.csv --fields zip_code,latitude,longitude,city,state
