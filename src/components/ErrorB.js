import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import { useNavigate } from "react-router-dom";

function ErrorB() {
  const navigate = useNavigate();
  const ReturnHome = () => {
    navigate("/");
  };
  return (
    <>
    <h1>ERRORBOUNDARY PAGE</h1>
    <ErrorBoundary>

    <div>ErrorB</div>
    </ErrorBoundary>

    <div className="center">
        <button class="button" onClick={ReturnHome}>
          BACK <i class="fas fa-angle-double-left"></i>
        </button>
      </div>
    </>
  )
}

export default ErrorB