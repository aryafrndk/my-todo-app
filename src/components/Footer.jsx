import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-4 dark:bg-[#191919]">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm sm:text-base">
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
