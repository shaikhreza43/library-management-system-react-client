import React from "react";
import Link from "@mui/material/Link";

export default function PageNotFound(props) {
  return (
    <div id="error-page">
      <div className="content">
        <h2 className="header" data-text="404">
          404
        </h2>
        <h4 data-text="Opps! Page not found">Opps! Page not found</h4>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <div className="btns">
          <Link href="/">return home</Link>
          <Link
            href=""
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
          >
            go back
          </Link>
        </div>
      </div>
    </div>
  );
}
