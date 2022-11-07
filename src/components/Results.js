import React from "react";
const Results = (props) => {
  const { repos } = props;
  console.log("Repo is:  ", repos.data);

  const renderRepos =
    repos.length !== 0 ? (
      repos.data.slice(0, 5).map((item) => (
        <li key={item.id}>
          <a href={item.html_url} target>{item.name}</a>
        </li>
      ))
    ) : (
      <p className="infoo">NO REPOS</p>
    );
  return (
    <div>
      <li className="links">{renderRepos}</li>
    </div>
  );
};

export default Results;
