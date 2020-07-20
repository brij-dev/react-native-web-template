// Info: Contains SDK Related to Customer
'use strict';

export const Customer = { // Public functions accessible by other modules

  /********************************************************************
  Get country list (Customer)

  @param {reference} instance - SDK Instance object reference

  @return {Set} country_list - Service country list
  *********************************************************************/
  getCountryList: function(instance){

    return instance.Customer.getCountryList();
  },

  /********************************************************************
  Get loggedin customer data (Customer)

  @param {reference} instance - SDK Instance object reference
  @param {Function} success_cb - Callback function to be invoked once async execution of this function is finished with success
  @param {Function} failed_cb - Callback function to be invoked once async execution of this function is finished with success
  @param {Function} progress_cb - Callback function to be invoked once async execution of this function progress state changes

  @param {Set} args - Array List of Parameters
  * @param {String} auth - Auth token of user

  @return - Thru Callback
  *********************************************************************/
  getLoggedInCustomerData: function(instance, success_cb, failed_cb, progress_cb, args){

    // Progress start
    progress_cb(true);

    // SDK function execution starts
    instance.Customer.getDataSelf(

      function(err, customer_data){

        progress_cb(false); // Progress Ends

        // If error return error
        if(err){
          return failed_cb(err)
        }

        // If success return data
        return success_cb(customer_data)
      },
      args // params
    )

  },

  /********************************************************************
  Generates otp for signin (singup/login) (Customer)

  @param {reference} instance - SDK Instance object reference
  @param {Function} success_cb - Callback function to be invoked once async execution of this function is finished with success
  @param {Function} failed_cb - Callback function to be invoked once async execution of this function is finished with success
  @param {Function} progress_cb - Callback function to be invoked once async execution of this function progress state changes

  @param {Set} args - Array List of Parameters
  * @param {Set} customer_data - Customer Data of Customer

  @return - Thru Callback
  *********************************************************************/
  requestOtpByPhone: function(instance, success_cb, failed_cb, progress_cb, args){

    // Progress start
    progress_cb(true);

    // SDK function execution starts
    instance.Customer.signinVerificationByPhone(

      function(err, customer_data, verification_data){

        progress_cb(false); // Progress Ends

        // If error return error
        if(err){
          return failed_cb(err)
        }

        // If success return data
        return success_cb(customer_data, verification_data)
      },
      args // params
    )

  },

  /********************************************************************
  Verify otp for login (Customer)

  @param {reference} instance - SDK Instance object reference
  @param {Function} success_cb - Callback function to be invoked once async execution of this function is finished with success
  @param {Function} failed_cb - Callback function to be invoked once async execution of this function is finished with success
  @param {Function} progress_cb - Callback function to be invoked once async execution of this function progress state changes

  @param {Set} args - Array List of Parameters
  * @param {Set} customer_data - Customer Data of Customer
  * @param {String} auth - Customer authentication token

  @return - Thru Callback
  *********************************************************************/
  loginInByPhone: function(instance, success_cb, failed_cb, progress_cb, args){

    // Progress start
    progress_cb(true);

    // SDK function execution starts
    instance.Customer.loginInByPhone(

      function(err, customer_data, auth){

        progress_cb(false); // Progress Ends

        // If error return error
        if(err){
          return failed_cb(err)
        }

        // If success return data
        return success_cb(customer_data, auth)
      },
      args // params
    );

  },

  /********************************************************************
  Verify otp for login (Customer)

  @param {reference} instance - SDK Instance object reference
  @param {Function} success_cb - Callback function to be invoked once async execution of this function is finished with success
  @param {Function} failed_cb - Callback function to be invoked once async execution of this function is finished with success
  @param {Function} progress_cb - Callback function to be invoked once async execution of this function progress state changes

  @param {Set} args - Array List of Parameters
  * @param {Set} customer_data - Customer Data of Customer
  * @param {String} auth - Customer authentication token

  @return - Thru Callback
  *********************************************************************/
  signUpByPhone: function(instance, success_cb, failed_cb, progress_cb, args){

    // Progress start
    progress_cb(true);

    // SDK function execution starts
    instance.Customer.signupByPhone(

      function(err, customer_data, auth){

        progress_cb(false); // Progress Ends

        // If error return error
        if(err){
          return failed_cb(err)
        }

        // If success return data
        return success_cb(customer_data, auth)
      },
      args // params
    );

  },


  /********************************************************************
  Customer Address String

  @param {reference} instance - SDK Instance object reference

  @param {Set} address_data - Address Data

  @return {String} address - Array List of Parameters
  *********************************************************************/
  addressString: function(instance, address_data){

    if(instance.Utils.isNullOrUndefined(address_data)){
      return null
    }

    var address_string = [];

    if(!instance.Utils.isNullOrUndefined(address_data.address_line1)){
      address_string.push(address_data.address_line1)
    }

    if(!instance.Utils.isNullOrUndefined(address_data.address_line2)){
      address_string.push(address_data.address_line2)
    }

    if(!instance.Utils.isNullOrUndefined(address_data.address_locality)){
      address_string.push(address_data.address_locality)
    }

    if(!instance.Utils.isNullOrUndefined(address_data.address_locality)){
      address_string.push(address_data.address_locality)
    }

    if(!instance.Utils.isNullOrUndefined(address_data.address_extra)){
      address_string.push(address_data.address_extra)
    }

    return address_string;
  }

}
