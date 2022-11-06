import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = async () => {
    console.log(search);
    try {
      const result = await axios(
        `https://api.github.com/users/${search}/repos`
      );

      setRepos(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(repos);
  return (
    <>
      <div className="heading-rep">SEARCH FOR YOUR REPO HERE :</div>

      <br/>

      <div class="input-group">
        <label>
          <input
            type="text"
            placeholder="Email Address"
            value={search}
            onChange={handleChange}
          />
        </label>
        <button class="unit" type="button" onClick={handleClick}>
          <i class="icon ion-md-search"></i>SEARCH
        </button>
      </div>
      <Results repos={repos} />
    </>
  );
};

export default SearchBar;
