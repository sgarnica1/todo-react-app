import React from "react";
import "./TodosError.css";

function TodosError() {
  return (
    <section className="TodosError">
      <img src={process.env.PUBLIC_URL + '/error-404.png'} alt="Error 404" />
      <h2>We're sorry</h2>
      <p>An error ocurred while loading your TODOs.</p>
    </section>
  );
}

export { TodosError };
