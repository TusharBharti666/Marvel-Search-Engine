import React from "react";

export default function Container({ children }) {
  return <main className="container">{children}</main>;
}

// return a div for the class of containers for elements
// childrens are used to represent the elements you put inside