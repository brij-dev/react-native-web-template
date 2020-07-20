'use strict';

const APP_CONFIG = require('../../app_config.json');

global.NCS = require('nopos-customer-sdk')( {}, APP_CONFIG );  // Dependencies

///////////////////////////Public Functions START//////////////////////////////
 const Common = { // Public functions accessible by other modules

 // Name of function needs to be changed
 changeAddressFormat: function(address){

   // Check if it's an array (For store locations)
   if(Array.isArray(address)){

     var temp_array = [];

     address.map(address => (

       temp_array.push(
         {
           'latitude': address['address_latitude'],
           'longitude': address['address_longitude']
         }
       )

     ))

     return temp_array;

   }

   if(address.hasOwnProperty('latitudeDelta') || address.hasOwnProperty('longitudeDelta')){

     return {
       'latitude': parseFloat(address['address_latitude']),
       'longitude': parseFloat(address['address_longitude']),
       'latitudeDelta': address['latitudeDelta'],
       'longitudeDelta': address['longitudeDelta']
     }

   }else{

     return {
       'latitude': parseFloat(address['address_latitude']),
       'longitude': parseFloat(address['address_longitude'])
     }

   }

 },

 // Name of function needs to be changed
 changeIntoAddressFormat: function(address){

   return {
     'address_latitude': parseFloat(address['latitude']),
     'address_longitude': parseFloat(address['longitude']),
     'latitudeDelta': address['latitudeDelta'],
     'longitudeDelta': address['longitudeDelta']
   }

 },

 getDistanceBetweenStoreAndUser: function(store_lat, store_lng, user_lat, user_lng){

    return (

      global.NCS.GeoCore.metersToMiles(
        global.NCS.GeoCore.calculateDistanceBetweenGeoCoordinates(
          global.NCS.GeoCore.degreesToRadians(global.NCS.GeoInput.sanitizeLatitude(store_lat)),
          global.NCS.GeoCore.degreesToRadians(global.NCS.GeoInput.sanitizeLongitude(store_lng)),
          global.NCS.GeoCore.degreesToRadians(global.NCS.GeoInput.sanitizeLatitude(user_lat)),
          global.NCS.GeoCore.degreesToRadians(global.NCS.GeoInput.sanitizeLongitude(user_lng))
        )
      )

    )

  },

 getErrorString: function(errors){
   return errors.map(
     function(error){
       return error.message
     }
   ).join(', ')
 },


 getUnHandledErrors: function(errors, constraints){

   var handled_errors = [];

    errors.map(
     function(error, index){
       Object.values(constraints).map(
         function(module){
            module['error_codes'].map(
             function(error_code){
               if(error.code == error_code){
                handled_errors.push(error);
               }
             }
           )
         }
       )
     }
   );

  return errors.filter(function(obj) {
    return handled_errors.indexOf(obj) == -1;
  });

 },

 getErrorsByErrorCodes: function(errors, error_codes, context){

   let local_errors = [];

    errors.map(
     function(error){
        error_codes.map(
         function(error_code){
           if(error.context){
             if(context == error.context && error.code == error_code){
               local_errors.push(error);
             }
           }else{
             if(error.code == error_code){
               local_errors.push(error);
             }
           }
         }
       );
     }
   );

   return local_errors;

 },

  metersToMiles: function(meters) {
    return (meters*0.000621371192).toFixed(1);
  }

};
export default Common;

////////////////////////////Public Functions END///////////////////////////////
