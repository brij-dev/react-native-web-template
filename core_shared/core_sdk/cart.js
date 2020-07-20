// Info: Contains SDK Related to Cart
'use strict';


export const Cart = { // Public functions accessible by other modules

  /********************************************************************
  Initialize Cart.

  @param {Set} cart_id - Cart-ID

  @return {Set} - Return Cart-Deep-Data.
  *********************************************************************/
  initializeCart: function( instance, cart_id ){

    // Cart Deep Data
    return instance.CartProcess.initializeCart(cart_id);

  },


  /********************************************************************
  Set Store Data in Cart

  @param {Set} cart_deep_data - Cart-Deep-Data
  @param {Set} store_deep_data - Store-Deep-Data

  @return {Set} - Return Cart-Deep-Data.
  *********************************************************************/
  setStoreDataInCart: function(
    instance, cart_deep_data, store_deep_data
  ){

    // Cart Deep Data
    return instance.CartProcess.updateStore(
      cart_deep_data, store_deep_data
    );

  },


  /********************************************************************
  Set Delivery Data in Cart

  @param {Set} cart_deep_data - Cart-Deep-Data
  @param {Set} dispatch_address - Dipatch-Address

  @return {Set} - Return Cart-Deep-Data.
  *********************************************************************/
  setDeliveryDataInCart: function(
    instance, cart_deep_data, dispatch_address
  ){

    // Cart Deep Data
    return this.setDispatchDeepData(
      instance, cart_deep_data, 'dl', dispatch_address
    );

  },


  /********************************************************************
  Set Pickup Data in Cart

  @param {Set} cart_deep_data - Cart-Deep-Data
  @param {Set} pickup_store_deep_data - Pickup Store Address

  @return {Set} - Return Cart-Deep-Data.
  *********************************************************************/
  setPickUpDataInCart: function(
    instance, cart_deep_data, pickup_store_deep_data
  ){

    // Create New Cart-Deep-Data
    let new_cart_deep_data = this.setDispatchDeepData(
      instance, cart_deep_data, 'pu'
    );

    // Cart Deep Data
    return this.setStoreDataInCart(
      instance,
      new_cart_deep_data, pickup_store_deep_data
    );

  },


  /********************************************************************
  Set Dispatch Deep Data.

  @param {Set} cart_deep_data - Cart-Deep-Data

  @param {Set} dispatch_type - Dispatch Type (Enum) ( pu:Pickup | dl:delivery | ... )
  @param {Set} dispatch_address - Dipatch-Address (Required only in case of delivery)

  @return {Set} - Return Cart-Deep-Data.
  *********************************************************************/
  setDispatchDeepData: function(
    instance,
    cart_deep_data,
    dispatch_type, dispatch_address
  ){

    // Cart Deep Data
    return instance.CartProcess.setDispatchDeepData(
      cart_deep_data,
      dispatch_type, dispatch_address
    );

  },


  /********************************************************************
  Update & Insert Menu-Item to Menu-Items-Of-Cart.

  @param {Set} cart_deep_data - Cart-Deep-Data
  @param {Set} state_menu_item_deep_data - State-Menu-Item-Deep-Data to be inserted
  @param {Integer} [item_index] - State-Menu-Item-Deep-Data index to be inserted at

  @return {Set} - Return Cart-Deep-Data.
  *********************************************************************/
  updateMenuItemInCart: function( instance,
    cart_deep_data,
    state_menu_item_deep_data,
    item_quantity,
    item_index ){

    // Cart Deep Data
    return instance.CartProcess.updateMenuItemInCart(
      cart_deep_data,
      state_menu_item_deep_data,
      item_quantity,
      item_index
    );

  },


  /********************************************************************
  Update Quantity of Menu-Item in Menu-Items-Of-Cart.

  @param {Set} cart_deep_data - Cart-Deep-Data
  @param {Set} menu_item_id - Menu-Item ID to be Changed or Removed
  @param {Set} menu_item_index - Menu-Item Index
  @param {Set} quantity - Menu-Item Quantity

  @return {Set} - Return Menu-Items-Of-Cart.
  *********************************************************************/
  updateMenuItemQuantityInCart: function( instance,
    cart_deep_data, menu_item_id, menu_item_index, quantity  ){

    // Cart Deep Data
    return instance.CartProcess.updateMenuItemQuantityInCart(
      cart_deep_data, menu_item_id, quantity, menu_item_index
    );
  },


  /********************************************************************
  Add Tip To Cart.

  @param {Set} cart_deep_data - Cart-Deep-Data
  @param {Set} tip_data - Tip-Data

  @return {Set} - cart_deep_data - Cart-Deep-Data.
  *********************************************************************/
  addTipInCart: function( instance, cart_deep_data, tip_data ){

    // Cart Deep Data
    return instance.CartProcess.addTipInCart(
      cart_deep_data, tip_data
    );

  },


  /********************************************************************
  Add Tip To Cart.

  @param {Set} cart_deep_data - Cart-Deep-Data
  @param {Set} tip_data - Tip-Data

  @return {Set} - cart_deep_data - Cart-Deep-Data.
  *********************************************************************/
  addTipInCart: function( instance, cart_deep_data, tip_data ){

    // Cart Deep Data
    return instance.CartProcess.addTipInCart(
      cart_deep_data, tip_data
    );

  },


  /********************************************************************
  Remove Tip From Cart.

  @param {Set} cart_deep_data - Cart-Deep-Data

  @return {Set} - cart_deep_data - Cart-Deep-Data.
  *********************************************************************/
  removeTipInCart: function( instance, cart_deep_data ){

    // Cart Deep Data
    return instance.CartProcess.removeTipInCart(
      cart_deep_data
    );

  },


  /********************************************************************
  Add Instruction To Cart.

  @param {Set} cart_deep_data - Cart-Deep-Data
  @param {Set} instruction_data - Instruction-Data
  @param {String} value - Special-Instruction
  @param {Integer} [item_index] - Instruction-Data index to be inserted at

  @return {Set} - cart_deep_data - Cart-Deep-Data.
  *********************************************************************/
  addInstructionInCart: function(
    instance, cart_deep_data, instruction_data,
    value, item_index
  ){

    // Cart Deep Data
    return instance.CartProcess.addInstructionInCart(
       cart_deep_data, instruction_data,
      value, item_index
    );

  },


  // Return cart sub-total
  getCartSubTotal: function(instance, cart_deep_data){

    if(!cart_deep_data['cart_data']['sub_total_original']){
      return null
    }

    return (instance.Money.getCurrencySymbol()+instance.Money.formatAmount(cart_deep_data['cart_data']['sub_total_original']))
  },


  // Return cart total
  getCartTotal: function(instance, cart_deep_data){

    if(!cart_deep_data['cart_data']['total']){
      return null
    }

    return (instance.Money.getCurrencySymbol()+instance.Money.formatAmount(cart_deep_data['cart_data']['total']))
  },


  // Return cart packaging charges
  getCartPackagingCharges: function(instance, cart_deep_data){

    if(!cart_deep_data['cart_data']['calculated_packaging_charges']){
      return null
    }

    return (instance.Money.getCurrencySymbol()+instance.Money.formatAmount(cart_deep_data['cart_data']['calculated_packaging_charges']));
  },


  // Return cart delivery charges
  getCartDeliveryCharges: function(instance, cart_deep_data){

    if(!cart_deep_data['cart_data']['calculated_delivery_charges']){
      return null
    }

    return (instance.Money.getCurrencySymbol()+ instance.Money.formatAmount(cart_deep_data['cart_data']['calculated_delivery_charges']));
  },


  calculateCartItemPrice: function(instance, cart_item_data, quantity){

    if(
      !instance.Utils.isNullOrUndefined(cart_item_data) &&
      !instance.Utils.isNullOrUndefined(cart_item_data.calculated_original_price)
    ){
      return instance.Money.getCurrencySymbol() + instance.Money.formatAmount(instance.Money.roundAmount(cart_item_data.calculated_original_price* quantity))
    }

    return null
  },


  /********************************************************************
  Check option exist in state

  @param {reference} instance - SDK Instance object reference

  @param {Set} selected_variation_data - selected variation data (public data)
  @param {String} variation_id - Variation Id
  @param {String} option_id - Option Id

  @return {Set} - Return Sorted List Of Product Modifiers of Menu-Items
  *********************************************************************/
  checkOptionExists: function(instance, selected_variation_data, variation_id, option_id){

    if(
      !instance.Utils.isNullOrUndefined(selected_variation_data['menu_item_product_deep_data']) &&
      !instance.Utils.isNullOrUndefined(selected_variation_data['menu_item_product_deep_data']['variations_deep_data'][variation_id]) &&
      !instance.Utils.isNullOrUndefined(selected_variation_data['menu_item_product_deep_data']['variations_deep_data'][variation_id]['options_deep_data'][option_id])
    ){
      return true
    }else{
      return false
    }

  },

  getOptionQuantityInCart: function(instance, variation_id, option_id, cart_item_data){

    if(!this.checkOptionExists(instance, cart_item_data, variation_id, option_id)){
      return 0
    }
    
    return cart_item_data['menu_item_product_deep_data']['variations_deep_data'][variation_id]['options_deep_data'][option_id]['option_data']['quantity'];
  },

  optionNamesOfCartItem: function(instance, fullMenuData, cart_item_data, menu_item_id){

    //
    // return Object.keys(cart_item_data['menu_item_product_deep_data']['variations_deep_data']).map(
    //   function(variation_id){
    //
    //     console.log(variation_id)
    //
    //     return Object.keys(cart_item_data['menu_item_product_deep_data']['variations_deep_data'][variation_id]['options_deep_data']).map(
    //       function(option_id){
    //
    //         console.log(option_id);
    //         console.log('sex',fullMenuData['menu_items_deep_data'][menu_item_id]['menu_item_product_deep_data']['variations_deep_data']
    //         [variation_id]);
    //
    //         return fullMenuData['menu_items_deep_data'][menu_item_id]['menu_item_product_deep_data']['variations_deep_data']
    //         [variation_id]['options_deep_data'][option_id]['option_data']['name'];
    //
    //       }
    //     );
    //
    //   }
    // );

  },

  // Returns Menu Item Quanity in Cart
  getMenuItemQuantityInCart: function(cart_deep_data, menu_item_id, menu_item_index){

    // If menu item does not exist in cart return 0
    if(global.NCS.Utils.isNullOrUndefined(cart_deep_data['menu_items_of_cart'][menu_item_id])){
      return 0;
    }


    if(!global.NCS.Utils.isNullOrUndefined(menu_item_index)){

      // If menu data has quantity key means return quantity's value
      if(!global.NCS.Utils.isNullOrUndefined(cart_deep_data['menu_items_of_cart'][menu_item_id][menu_item_index]['menu_item_data']['quantity'])){
        return cart_deep_data['menu_items_of_cart'][menu_item_id][menu_item_index]['menu_item_data']['quantity'];
      }

      // If menu data does not has quantity key means return 1
      return 1;

    }


    let quantity = 0;

    cart_deep_data['menu_items_of_cart'][menu_item_id].map(
      function(menu_item){
        if(global.NCS.Utils.isNullOrUndefined(menu_item['menu_item_data']['quantity'])){
          quantity++;
        }else{
          quantity = quantity + menu_item['menu_item_data']['quantity'];
        }
      }
    );

    return quantity;

  },


  // Return true in case of empty cart
  isEmptyCart(instance, cart_deep_data){
    return (
        instance.Utils.isNullOrUndefined(cart_deep_data['cart_data']['sub_total_original'])
      ||
        cart_deep_data['cart_data']['sub_total_original'] === 0
    )
  }

}
