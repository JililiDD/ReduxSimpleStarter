//S5T64: make a chart component to deal with the charts. Because it does not need any state, the chart
//is defined as a function component

import React from 'react';
//S5T63: after install react-sparklines using npm install --save react-sparklines. import it here
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
//S5T65:
import _ from "lodash";

function average(data){
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}