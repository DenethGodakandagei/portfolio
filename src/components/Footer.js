import React from "react";

//year update script
const d = new Date();
let year = d.getFullYear();

const Footer = () => {
  return (
    <div>
      <hr></hr>
      <footer className="p-0">
        <p>
          Copyright &copy; <span>{year}</span> All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
