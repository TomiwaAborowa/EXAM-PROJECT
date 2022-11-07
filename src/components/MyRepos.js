import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import  Repos  from "./Repos";

function MyRepos() {
  const navigate = useNavigate();
  const ReturnHome = () => {
    navigate("/");
  };


  const [currentPage, setCurrentPage] = useState(1);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [repoPerPage] = useState(3);


  useEffect (() => { 
    const fetchRepos = async () => {
      setLoading(true);
      const res = await fetch("https://api.github.com/users/tomiwaaborowa/repos");
      const data = await res.json();
      setRepos(data);
      setLoading(false);
      };
      fetchRepos();
      }, []);

      function handlePageClick({ selected: selectedPage }) {
        console.log('selectedPage', selectedPage);
        setCurrentPage(selectedPage);
      }

      // Get current repos
      const indexOfLastRepo = currentPage * repoPerPage;
      const indexOfFirstRepo = indexOfLastRepo - repoPerPage;
      const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

      // Change page

      const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div>
        <h1 className="main-title">My Repos</h1>
        <Repos repos={currentRepos} loading={loading} />


     

      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={4}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        onPageChange={handlePageClick}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        activeClassName={"active"}
        reposPerPage={repoPerPage}
        totalRepos={repos.length}
        paginate={paginate}
        />
        </div>

      <div className="center">
        <button class="button" onClick={ReturnHome}>
          BACK <i class="fas fa-angle-double-left"></i>
        </button>
      </div>
    </>
  );
}
export default MyRepos;
