import "./App.css";
import "./Home.css";
import React from "react";

function Home() {
  return (
    <div>
      <div class="jumbotron jumbotron-fluid fixed-top">
        <div class="container">
          <h1>UF Student Investment Club</h1>
          <nav class="navbar navbar-expand-lg navbar-header">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/test">
                      Test
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link disabled"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Home;
{
  /*<p>This is a paragraph section.
    sdfhsdjfhgsdhjgfjsdhgfhjsd
</p>
<a href="/test" class="btn btn-headers" role="test">To Test</a>
<button type="button" class="btn btn-headers">header</button>
<button type="Test" class="btn btn">Go to Test</button>*/
}
