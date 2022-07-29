import React from "react";
import { links } from "./root.helper.js";
import { Link } from "@reach/router";

import './index.css'

export default function Root(props) {
  return (
    <nav className="nav">
      <div className="h-16 flex items-center justify-between px-6 bg-primary text-white" id="nav-container">
        <div className="flex items-center justify-between" id="left-side">
          {links.map((link) => {
            return (
              <Link key={link.href} id={`link-${link.name.toLowerCase()}`} className="links" to={link.href}>
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center justify-between" id="right-side">
          <a
            href="https://github.com/sebastian-napora"
            id="external-link"
          >
            Github project
          </a>
        </div>
      </div>
    </nav>
  );
}
