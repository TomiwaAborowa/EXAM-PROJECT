import React from "react";
import './EndResults.css';

const Repos = ({ repos, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="repos">
      {repos.map((repo) => (
        <div className="repo" key={repo.id}>
          <div className="repo-header">
            <h3>{repo.name}</h3>
            <br />
          
            <button class="button-19" >
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {" click here "}
                {/* {repo.html_url} */}
              </a>
            </button>
          </div>
          <div className="repo-body">
            <h3>{repo.title}</h3>
            <p>{repo.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Repos;
