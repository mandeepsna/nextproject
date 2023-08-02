import React from "react";
import Styles from "../src/app/page.module.css";
const Footer = () => {
  return (
    <>
      <div className={Styles.margintop}> <span>© 2023 Copyright:</span>
        <a className="text-dark fs-3" href="https://www.google.com/" target="_">
          Google
        </a>
      </div>
    </>
  );
};

export default Footer;
