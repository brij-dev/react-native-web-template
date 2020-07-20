'use strict';

// Native Components
import { Dimensions } from 'react-native';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 40.0;
const LONGITUDE_DELTA = 40.0

const CONFIG = {

  DEFAULT_MAP_POSITION: {
    address_latitude: 33.492401,
    address_longitude: -86.799538,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  },

  ADDRESS_TYPES: [
    {
      address_type: "0",
      address_type_label: 'Home'
    },
    {
      address_type: "1",
      address_type_label: 'Office'
    },
    {
      address_type: "2",
      address_type_label: 'Other'
    }
  ],
  TIP_OPTIONS: [
    {
      'text':'10%',
      'type':'per',
      'value':10
    },
    {
      'text':'15%',
      'type':'per',
      'value':15
    },
    {
      'text':'20%',
      'type':'per',
      'value':20
    },
    {
      'text':'Specify',
      'type':'fam',
      'value':0
    }
  ]

}

export default CONFIG;
