import React, { Component } from "react";
import { View } from "react-native";
import {CustomText, Hello, Hello2, Hello3} from "unified-user-app-components";


export default class App extends Component {

  render() {
    return (
      <View style={{padding:100}}>
        <CustomText p>This is p Text</CustomText>
      </View>
    );

  }
}
