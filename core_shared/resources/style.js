'use-strict'

import {StyleSheet, StatusBar, Dimensions} from 'react-native';
import Themes from '../resources/themes/light';

module.exports = StyleSheet.create({

// common
m_t_10:{
  marginTop: 10
},
m_t_20:{
  marginTop: 20
},
m_b_20:{
  marginBottom: 20
},
m_t_30:{
  marginTop: 30
},
m_t_5:{
  marginTop: 5
},
m_r_5:{
  marginRight: 5
},
m_r_10:{
  marginRight: 10
},
m_l_10:{
  marginLeft: 10
},
m_b_10:{
  marginBottom: 10
},
m_l_15:{
  marginLeft: 15
},
m_r_15:{
  marginRight: 15
},
m_t_15:{
  marginTop: 15
},
m_b_15:{
  marginBottom: 15
},
m_r_20:{
  marginRight: 20
},
m_r_25:{
  marginRight: 25
},
p_r_15:{
  paddingRight: 15
},
p_l_15:{
  paddingLeft: 15
},
marginVertical10:{
  marginVertical: 10,
},
paddingHorizontal15:{
  paddingHorizontal: 15
},
paddingVertical20:{
  paddingVertical: 20
},
flexRow:{
  flexDirection: 'row'
},
flexCol:{
  flexDirection: 'column'
},
flexRowSpaceBetween:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  //alignItems: 'center'
},
flexRowJustifyContentCenter:{
  flexDirection: 'row',
  justifyContent: 'center',
  //alignItems: 'center'
},
flexColSpaceBetween:{
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
},
flexColJustifyContentSpaceBetween:{
  flexDirection: 'column',
  justifyContent: 'space-between',
},
flexRowJustifyContentSpaceBetweenAlignCenter:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
},
flexRowAlignItemsCenter:{
  flexDirection: 'row',
  alignItems: 'center'
},
flexColAlignItemsCenter:{
  flexDirection: 'column',
  alignItems: 'center'
},
flexColAlignItemsFlexStart:{
  flexDirection: 'column',
  alignItems: 'flex-start'
},
flexColAlignItemsFlexEnd:{
  flexDirection: 'column',
  alignItems: 'flex-end'
},
fullWidth:{
  width: '100%'
},
fullHeight:{
  height: '100%'
},
flex1:{
  flex: 1
},
absoluteBottom:{
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0
},
heightAuto:{
  height: 'auto'
},
bottomSheetContainer:{
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#00000080'
},
bottomSheetInnerContainer:{
  flex: 1,
  backgroundColor: Themes.colors.BC_SECONDARY,
},

// Side Bar
sideBarContainer:{
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  paddingBottom: 30,
  backgroundColor: Themes.colors.TC_PRIMARY_LIGHT,
},
sideBar:{
  backgroundColor: Themes.colors.FC_PRIMARY,
  height: 72,
  flexDirection: 'column',
  justifyContent: 'flex-end',
  paddingLeft: 15,
  paddingBottom: 10
},
sideBarContent:{
  flex: 1,
  paddingLeft: 20
},
sideBarHeading:{
  marginBottom: 10,
  marginTop: 30
},
sideBarCustomerName:{
  maxWidth: 168,
  marginRight: 5,
  flexDirection: 'row',
  alignItems: 'center'
},
sideBarBottomLabel:{
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: 15
},

// Landing Screen
positionAbsolute:{
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'yellow',
},
landingBackground:{
  backgroundColor: Themes.colors.TC_PRIMARY_LIGHT,
  height: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 25,
  paddingBottom: 20
},
landingScreenLogo:{
  height: 110,
  width: 110,
  marginBottom: 40,
},

// Sign in Screen
loginTextView:{
  marginTop: 17,
  marginBottom: 10,
  marginLeft: 16
},

// Code Verification Screen
otp_text_view:{
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: 16,
  marginBottom: 10,
  flexWrap: 'wrap',
  width: 303
},
otpViewContainer:{
  //height: 143,
  marginTop: 10
},
otpViewInnerContainer:{
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: 20
},

// Select Delivery Location Screen
searchBarPositionOnMap:{ // Also used in Select Pickup Location Screen
  position: 'absolute',
  top: 10,
  left: 15,
  right: 15
},
deliveryLocationBottomContainer:{
  minHeight: 179,
  backgroundColor: Themes.colors.TC_PRIMARY_LIGHT,
  paddingBottom: 64
},
deliveryLocationBottomCtaContainer:{
  shadowColor: "#2114140F",
  shadowOffset: {
    width: 0,
    height: -2,
  },
  shadowOpacity: 4,
  shadowRadius: 4,
  elevation: 4,
  backgroundColor: Themes.colors.TC_PRIMARY_LIGHT,
  paddingVertical: 10,
  paddingHorizontal: 15
},
dropdownInputContainer:{
  flexDirection: 'row',
  alignItems: 'flex-end',
  marginTop: 15
},

// Search Location Bottom Sheet
addressListRow:{
  flexDirection: 'row',
  alignItems: 'center',
  flex:1,
  backgroundColor: Themes.colors.TC_PRIMARY_LIGHT,
  paddingHorizontal: 15,
  paddingBottom: 10,
  paddingTop: 10
},
addressListColumn:{
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flex:1,
  marginLeft:5
},
addressListSepartor:{
  height: 1,
  width: '100%',
  backgroundColor: '#EAEAEA'
},
locationListContainer:{
  backgroundColor: Themes.colors.TC_PRIMARY_LIGHT,
  marginTop:10
},
screenContainer:{
  backgroundColor: Themes.colors.BC_SECONDARY,
  flex:1
},

poweredByGooglePosition:{
  padding:15
},

poweredByGoogle:{
  height: 20,
  width: 120,
  resizeMode: 'contain'
},

// Saved Address Bottom Sheet
savedAddressView:{
  padding: 15,
  backgroundColor: Themes.colors.TC_PRIMARY_LIGHT,
},
savedAddressTitleRow:{
  backgroundColor: Themes.colors.BC_SECONDARY,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 15,
  paddingTop: 15,
  paddingBottom: 10
},
addNewAddressView:{
  padding: 15,
  backgroundColor: Themes.colors.TC_PRIMARY_LIGHT,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
savedAddressSeparator:{
  backgroundColor: Themes.colors.BC_SECONDARY,
  height: 1,
  width: '100%'
},

// Menu Screen
menuContainer:{
  backgroundColor: Themes.colors.BC_SECONDARY,
  height: '100%',
  paddingTop: 10,
  paddingBottom: 100,
  marginTop: 10
},
menuCollectionLabel:{
  marginBottom: 20,
  paddingLeft: 15,
  flexDirection: 'row',
  alignItems: 'center',
},
menuBarItem:{
  paddingRight: 30,
  paddingTop: 4,
  paddingBottom: 10,
  alignItems: 'center'
},
menuContainer:{
  height: 'auto',
  backgroundColor: Themes.colors.FC_PRIMARY
},
menuBarSelectedDot:{
  height: 5,
  width: 5,
  borderRadius: 2.5,
  backgroundColor: Themes.colors.TC_PRIMARY_LIGHT
},
savedAddressTitle:{
  paddingHorizontal: 15,
  paddingTop: 15,
  paddingBottom: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
},
savedAddressMaxWidth:{
  maxWidth: 310
},

// Product Customization Bottom Sheet
pcVariationBarContainer:{
  paddingLeft: 15,
  backgroundColor: Themes.colors.BC_SECONDARY,
},
pcVariationBarItem:{
  paddingRight: 30,
  paddingTop: 8,
  paddingBottom: 10,
  alignItems: 'center'
},
variationBarSelectedDot:{
  height: 5,
  width: 5,
  borderRadius: 2.5,
  backgroundColor: Themes.colors.FC_PRIMARY
},
pcSafeAreaView:{
  flex: 0,
  backgroundColor: Themes.colors.TC_PRIMARY_LIGHT
},

// Product Combo Selection
comboProductLabel:{
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10
},

// Order Summary
orderSummaryBackgroundContainer:{
  paddingBottom: 100
},
orderSummaryContainers:{
  width: '100%',
  marginTop: 10
},
orderSummaryAddressRow:{
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  marginTop: 20,
},
orderSummaryAddress:{
  width: 255,
},
greyLargeContainer:{
  padding: 5,
  borderRadius: 4,
  backgroundColor: '#2020201A',
  alignSelf: 'flex-start',
  flexDirection: 'row',
  alignItems: 'center'
},

// Coupon Bottom Sheet
couponHeading:{
  marginTop: 15,
  marginBottom: 10,
  marginLeft: 15
},
couponCode:{
  width: 205,
  marginBottom: 5
},
couponDescription:{
  width: 205
},
couponContainer:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end'
},

// Order Details
orderDetailStatusContainer:{
  marginTop: 15,
  marginBottom: 10,
  marginHorizontal: 15
},
orderDetailsTopContainer:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 15,
  marginBottom: 10,
  marginHorizontal: 15,
},
orderStatusFlexColAlignItemsFlexStart:{
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: 35
},
chargesContainer:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 10
},
chargesLabelLeftContainer:{
  width: 100,
},
chargesLabelRightContainer:{
  width: 100,
  flexDirection: 'row',
  justifyContent: 'flex-end'
},
orderSelectedIconsColumn:{
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginRight: 10,
  marginVertical: 10,
  alignItems: 'center'
},
selectedCircleContainer:{
  backgroundColor: '#F1EDFF',
  height: 18,
  width: 18,
  borderRadius: 9,
  padding: 2
},
circleInnerContainer:{
  backgroundColor: Themes.colors.FC_PRIMARY,
  height: 14,
  width: 14,
  borderRadius: 7,
  justifyContent: 'center',
  alignItems: 'center'
},
unselectedCircleContainer:{
  backgroundColor: '#F1EDFF',
  height: 14,
  width: 14,
  borderRadius: 7,
  justifyContent: 'center',
  alignItems: 'center'
},
orderDetailsDots:{
  height: 4,
  width: 4,
  borderRadius: 2,
  backgroundColor: '#F1EDFF'
},

// My Account Screen
myAccountTitle:{
  marginLeft: 15,
  marginTop: 15,
  marginBottom: 10
},

// Orders List Screen
ordersTitle:{
  marginLeft: 15,
  marginTop: 15,
  marginBottom: 10
},




})
