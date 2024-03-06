import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
// import bg1 from '../images/bg1.jpg'

function Home() {
  return (
    <div>
      <Navbar />
      <div className="main container-fluid">
        <section className="main_box">
          <div className="heading container">
            <h1>
              <span>D</span>eaf <span>A</span>rt <span>E</span>xpress
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate, dolore iusto doloribus fugit impedit, placeat voluptas
              dolor praesentium doloremque adipisci ipsum? Voluptatem dicta
              neque, nulla velit dignissimos sequi laborum quisquam voluptatibus
              vitae debitis illum consectetur facilis soluta ullam maiores
              officiis fugiat in eligendi nostrum minima eos cupiditate error.
              Nostrum, dicta?
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
