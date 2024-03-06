import React from "react";
import "./Hand.css";
import Navbar from "./Navbar";
import axios from "axios";

function Hand() {
  function click() {
    console.log("Clicked");
  }

  return (
    <div>
      <Navbar />
      <section className="bg1 container-fluid">
        <div className="hand container">
          <div className="container content1">
            <h1>
              <span>H</span>and <span>G</span>esture
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit, sunt facilis recusandae deserunt tempore asperiores
              deleniti hic assumenda expedita fugit, quam ipsum sequi. Et quasi
              nam incidunt doloremque explicabo eos tempore fugit nihil dolorem
              dolorum! Temporibus ad odit, repudiandae iusto qui deleniti iste
              dolorem quaerat fugit soluta ducimus voluptatum laboriosam?
            </p>
          </div>
          <form className="button2" action="/runHand" method="post">
            <button className="btn button2 btn-primary">Try Hand Gesture</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Hand;
