import React from "react";
import "./ToDosError.css";

function ToDosError() {
  return (
    <section className="ToDosError">
      <img src="./error-404.png" alt="Error 404" />
      <h2>We're sorry</h2>
      <p>An error ocurred while loading your TODOs.</p>
    </section>
  );
}

export { ToDosError };
