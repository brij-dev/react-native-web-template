
import React, { Component } from "react";
import {CustomText} from "react-native-web-components";


export default class Typography extends Component {



  render() {
    return (
      <div>
        <CustomText p>This is p Text</CustomText>
        <CustomText p bold>This is p Text</CustomText>
        <CustomText p italic>This is p Text</CustomText>
      </div>
    );

  }
}
