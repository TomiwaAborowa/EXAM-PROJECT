import React  from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Home() {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="..">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/MyRepos">
              MyRepos
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/ErrorPage">
            ERRORPAGES
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " to="/ErrorB">
              ErrorB
            </Link>
          </li>
        </ul>
      </nav>

      <SearchBar />
      
      
    </>
  );
}

export default Home;
