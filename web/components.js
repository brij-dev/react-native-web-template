'use-strict'

import React, { Component } from "react";
import { Link } from "react-router-dom";

const components =[
  {
    componentName: "Typography",
    screen: "typography",
  },
  {
    componentName: "Typography",
    screen: "typography",
  }
];

export default class Components extends Component {


  render() {

    return(
      <div>

        <div className="demoheader">
          <h1 className="headerText">Components</h1>
        </div>

        <div className="listBackground">

        <ol className="ol-list">

          {
            components.map(listitem => (
            <li
              key={listitem}
              className="ol-list-item"
            >
              <Link to={listitem.screen}>
                {listitem.componentName}
              </Link>
            </li>
            ))
          }

        </ol>

        </div>

      </div>
    );
  }
}
