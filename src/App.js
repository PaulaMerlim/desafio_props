import React, { Component } from "react";
import img from "./Components/Figures/potato.jpg";
import Header from "./Components/Header/Header.js";

export default class App extends Component {
  render() {
    return (
      <>
        <Header nome="Paula" idade="20" estudando="Props" imagem={img} />
        <Header nome="GAbriel" idade="24" estudando="Props" imagem={img} />
      </>
    );
  }
}
