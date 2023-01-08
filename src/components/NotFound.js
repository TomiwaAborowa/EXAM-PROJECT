import React from 'react'
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const ReturnHome = () => {
    navigate("/");
  };
  return (
    <>
      <h1>ERROR PAGE</h1>
      <h2>Page not found</h2>
      <div className="center">
        <button class="button" onClick={ReturnHome}>
          BACK <i class="fas fa-angle-double-left"></i>
        </button>
      </div>
    </>
  );
}
export default NotFound