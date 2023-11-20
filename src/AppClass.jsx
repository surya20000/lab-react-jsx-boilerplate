import React, { Component } from "react";
import "./App.css";

export default class AppClass extends Component {
  render() {
    const imgData = this.props.myData();
    return (
      <div>
        <h1>Kalvium Gallary</h1>
        <div className="">
          {imgData.map((image) => (
            <div className="" key={index}>
              <img src={image.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
