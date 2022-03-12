import { Link } from "@mui/material";
import React from "react";

export default function HomeFooter(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div>
              <h6 className="text-center">
                Copyright &copy;{" "}
                <Link href="https://developerahmed.web.app/" target={"_blank"}>
                  Shaikh Ahmed Reza
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
