import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <p>
          &copy; Copyright 2024 To-Do List App. |&nbsp;&nbsp;
          <a
            href="https://aryafrandikadaulay.vercel.app/"
            className="text-blue-400 hover:underline"
          >
            Arya Frandika Daulay 
          </a>
          &nbsp;&nbsp;| All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
