import React, { Component } from 'react';
import "xtal-frappe-chart/xtal-frappe-chart.js";

export default function XtalFrappeChartRx(props){
    return <xtal-frappe-chart ref={el => Object.assign(el, props)}>{props.children}</xtal-frappe-chart>;
}