import React from "react";
import "./Air.css";
import Navbar from "./Navbar";

function Air() {
  return (
    <div>
      <Navbar />
      <section className="bg container-fluid">
        <div className="air_main">
          <div className="container content">
            <h1>
              <span>A</span>ir <span>C</span>anvas
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit numquam deleniti vitae voluptatibus accusantium quod
              autem dicta ex, fugiat, natus totam atque, corporis dolorem error
              facere dignissimos. Quos porro qui rerum recusandae odio tempore
              blanditiis, esse nisi distinctio placeat dicta est in. Consectetur
              molestiae provident eos, aut recusandae delectus ea.
            </p>
          </div>
          <form className="button" action="/runcanvas" method="post">
            <button className="btn button btn-primary">Try Air Canvas</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Air;
