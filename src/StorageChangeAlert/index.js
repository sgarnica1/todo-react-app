import React from "react";
import { useStorageListener } from "./useStorageListener";
import { IoIosRefresh } from "react-icons/io";
import "./StorageChangeAlert.css";

function StorageChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

  const body = document.querySelector("body");

  if (show) {
    body.style.overflowY = "hidden";
    return (
      <section className="StorageChangeAlert__background">
        <div className="StorageChangeAlert__modal">
          <p className="StorageChangeAlert__message">
            You made some changes on your list but your current list is
            outdated.{" "}
          </p>
          <button
            onClick={() => toggleShow()}
            className="StorageChangeAlert__button"
          >
            Update
            <IoIosRefresh />
          </button>
        </div>
      </section>
    );
  }
  body.style.overflowY = "scroll";
  return <></>;
}

export { StorageChangeAlert };
