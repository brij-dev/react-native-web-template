// Info: Contains SDK Related to Menu
'use strict';


export const Menu = { // Public functions accessible by other modules

  /********************************************************************
  Get menu list (Public)

  @param {reference} instance - SDK Instance object reference

  @param {Function} success_cb - Callback function to be invoked once async execution of this function is finished with success
  @param {Function} failed_cb - Callback function to be invoked once async execution of this function is finished with success
  @param {Function} progress_cb - Callback function to be invoked once async execution of this function progress state changes

  @param {Set} args - Array List of Parameters
  * @param {Set} auth - Auth token for user_data
  * @param {String} brand_id - Brand ID
  * @param {Number} start - pagination start index
 jk
  @return - Thru Callback
  *********************************************************************/
  getStoreMenu: function(instance, success_cb, failed_cb, progress_cb, args){

    // Progress start
    progress_cb(true);

    // SDK function execution starts
    instance.Menu.getListCustomer(

      function(err, menu_list){

        progress_cb(false); // Progress Ends

        // If error return error
        if(err){
          return failed_cb(err)
        }

        // If success return data
        return success_cb(menu_list);

      },
      args // params
    );

  },

  /********************************************************************
  Get store full menu

  @param {reference} instance - SDK Instance object reference

  @param {Set} menu_data - Menu deep data

  @return {Set} menu_data - Menu data

  *********************************************************************/
  getStoreFullMenu: function(instance, menu_data){

    instance.MenuProcess.createFullMenuData(menu_data);

  },

  /********************************************************************
  Get collections list

  @param {reference} instance - SDK Instance object reference

  @param {Set} menu_data - Menu deep data

  @return {Set} collection_list - Collections list
  *********************************************************************/
  getStoreCollectionsList: function(instance, menu_data){
    var collection_list =
    instance.MenuProcess.createSortedCollectionsAndMenuItemsList(menu_data)['collections_of_menu'].map(
      function(collection_id){
        return menu_data['collections_deep_data'][collection_id]['collection_data'];
      }
    );

    return collection_list;
  },

  /********************************************************************
  Get all menu_items

  @param {reference} instance - SDK Instance object reference

  @param {Set} menu_data - Menu deep data

  @return {Set} menu_item_list  - Menu Item List
  *********************************************************************/
  getMenuItemsOfCollection: function(instance, menu_data, collection_id){

    var menu_list = []

    instance.MenuProcess.createSortedCollectionsAndMenuItemsList(menu_data)['menu_items_of_collection'][collection_id].map(
      function(menu_item_id){
        menu_list.push(menu_data['menu_items_deep_data'][menu_item_id]['menu_item_data'])
      }
    )

    return menu_list;
  },

  /********************************************************************
  Return Sorted List Of Product Modifiers of Menu-Items

  @param {reference} instance - SDK Instance object reference

  @param {Set} full_menu_deep_data - full menu deep data (public data)
  @param {String} menu_item_id - Menu-Item ID

  @return {Set} - Return Sorted List Of Product Modifiers of Menu-Items
  *********************************************************************/
  getModifiers: function(instance, full_menu_deep_data, menu_item_id){
    return instance.MenuProcess.createSortedProductModifiersList(full_menu_deep_data, menu_item_id)
  },

  /********************************************************************
  Return Sorted List Of Product Variations of Menu-Items

  @param {reference} instance - SDK Instance object reference

  @param {Set} full_menu_deep_data - full menu deep data (public data)
  @param {String} menu_item_id - menu item id

  @return {Array} - Return Sorted List Of Product Variations of Menu-Items
  *********************************************************************/
  getVariationsList: function(instance, full_menu_deep_data, menu_item_id){


    return this.getModifiers(instance, full_menu_deep_data, menu_item_id)['variations_of_menu_item'].map(
      function(variation_id){

        return full_menu_deep_data['menu_items_deep_data'][menu_item_id]['menu_item_product_deep_data']['variations_deep_data'][variation_id]['variation_data'];

      }
    )

  },

  /********************************************************************
  Return Sorted List Of Product Options of parent variaions

  @param {reference} instance - SDK Instance object reference

  @param {Set} full_menu_deep_data - full menu deep data (public data)
  @param {String} menu_item_id - menu item id
  @param {String} variation_id - variation id

  @return {Array} - Return Sorted List Of Product Variations of Menu-Items
  *********************************************************************/
  getOptionsListforParentVariations: function(instance, full_menu_deep_data, menu_item_id, variation_id){

    return this.getModifiers(instance, full_menu_deep_data, menu_item_id)['options_of_menu_item'][variation_id].map(
      function(option_id){

        return full_menu_deep_data['menu_items_deep_data'][menu_item_id]['menu_item_product_deep_data']['variations_deep_data'][variation_id]['options_deep_data'][option_id]['option_data'];

      }
    )

  },

  /********************************************************************
  Return Sorted List Of Product Options of Menu-Items

  @param {reference} instance - SDK Instance object reference

  @param {Set} full_menu_deep_data - full menu deep data (public data)
  @param {String} menu_item_id - menu item id
  @param {String} variation_id - variation id
  @param {String} parent_variation_id - parent variation ID
  @param {String} parent_option_id - parent option ID

  @return {Array} - Return Sorted List Of Product Variations of Menu-Items
  *********************************************************************/
  getOptionsListforChildVariations: function(instance, full_menu_deep_data, menu_item_id, variation_id, parent_variation_id, parent_option_id){

    if(instance.Utils.isNullOrUndefined(parent_option_id)){
      return [];
    }

    return instance.MenuProcess.createSortedProductModifiersForDependentOnVariationList(
      full_menu_deep_data, menu_item_id, parent_variation_id, parent_option_id
    )['options_of_menu_item'][variation_id].map(
      function(option_id){
        return full_menu_deep_data['menu_items_deep_data'][menu_item_id]['menu_item_product_deep_data']['variations_deep_data'][parent_variation_id]['options_deep_data'][parent_option_id]['dependent_variations_data'][variation_id][option_id]['option_data'];
      }
    );

  },

  /********************************************************************
  Return Menu-Item-Deep-Data of Cart
  By Reference: Changes are made directly in orignal object

  @param {reference} instance - SDK Instance object reference

  @param {Set} full_menu_item_deep_data - Full-Menu-Deep-Data (Public)
  @param {Set} state_menu_item_deep_data - current State-Data before changes
  @param {String} variation_id - Variation ID
  @param {String} option_id - Option ID
  @param {Integer} option_quantity - Quantity
  @param {String} deviation_id - Deviation ID
  @param {String[]} partition_items_id - Array Of Partition-Item

  @return {Set} obj - Updated Cart-Data of this Menu-Item
  *********************************************************************/
  cartUpdateSelectedOptionOfMenuItem: function(
    instance,
    full_menu_item_deep_data, state_menu_item_deep_data,
    variation_id, option_id, option_quantity,
    deviation_id, partition_items_id
  ){

    return instance.MenuProcess.stateUpdateSelectedOptionOfMenuItem(
      full_menu_item_deep_data, state_menu_item_deep_data,
      variation_id, option_id, option_quantity,
      deviation_id, partition_items_id
    )
  },

  /********************************************************************
  Return chargeable Quantity Of Option //todo def and right comments
  adjust non chargeable quantity, replaceable, max chargeable

  @param {Integer} full_menu_item_deep_data - Selected Quantity Of Option
  @param {Integer} state_menu_item_deep_data - Non chargeable quantity in option

  @return {Set} - Menu-Data Object in key-value
  *********************************************************************/
  calculateMenuItemProductPrice: function(
    instance,
    full_menu_item_deep_data, state_menu_item_deep_data
  ){

    return instance.MenuProcess.calculateMenuItemProductPrice(
      full_menu_item_deep_data,
      state_menu_item_deep_data
    );

  },

  getVariationDataById: function(instance, fullMenuData, menu_item_id, variation_id){

    return fullMenuData['menu_items_deep_data'][menu_item_id]['menu_item_product_deep_data']['variations_deep_data'][variation_id]['variation_data'];

  },

  getMenuItemDataById: function(instance, fullMenuData, menu_item_id){

    return fullMenuData['menu_items_deep_data'][menu_item_id]['menu_item_data'];
  },

  getMenuItemImage: function(brand_id, menu_item){

    if(menu_item['type'] === 'jp'){
      return `https://s3.amazonaws.com/media.nopos.com/i/` + brand_id+`/p/` + menu_item['base_image_id'];
    }else if(menu_item['type'] === 'cmb'){
      return `https://s3.amazonaws.com/media.nopos.com/i/` + brand_id+`/c/` + menu_item['base_image_id'];
    }

  }

}
