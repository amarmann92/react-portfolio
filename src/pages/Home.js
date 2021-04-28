import React from "react";

function Home() {
  return (
    <>
      <div className="hero-image">
        <div className="hero-text">
          <h1>I am Amar Mann</h1>
          <p>Full Stack Web Developer</p>
        </div>
      </div>

      <div className="container">
        <section className="projects row">
          <div className="card col m-2">
            <h5 className="card-title text-dark home-header">About Me</h5>
            <hr />
            <div className="card-body">
              I am 28 years old, and I work at Arrowhead Regional Medical
              Center.
            </div>
          </div>

          <div className="card col m-2">
            <h5 className="card-title text-dark home-header">My Hobbies</h5>
            <hr />
            <div className="card-body">
              Ice hockey, field hockey, golf, traveling, dancing, and video
              games
            </div>
          </div>

          <div className="card col m-2">
            <h5 className="card-title text-dark home-header">Education</h5>
            <hr />
            <div className="card-body">
              Attending Full Stack Web Development Boot Camp at UC Riverside
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
