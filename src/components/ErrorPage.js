import React from "react";
import { Link, useNavigate} from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  const ReturnHome = () => {
    navigate("/");
  };
  return (
    <>
      <ul>
        <div class="container">
          <h2>404 PAGES</h2>
          <p></p>
          <p>
            <strong>Note:</strong> Links clicked here would return a 404 PAGE
          </p>
          <div class="card-columns">
            <div class="card bg-primary">
              <div class="card-body text-center">
                <p class="card-text">Click the link below to get a 404 page</p>
                <Link to="/PageError" className="linked">
                  PageError
                </Link>
              </div>
            </div>
            <div class="card bg-warning">
              <div class="card-body text-center">
                <p class="card-text">Click the link below to get a 404 page</p>
                <Link to="/NotFound" className="linked">
                  NotFound
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ul>
      <div className="center">
        <button class="button" onClick={ReturnHome}>
          BACK <i class="fas fa-angle-double-left"></i>
        </button>
      </div>
    </>
  );
}

export default ErrorPage;
