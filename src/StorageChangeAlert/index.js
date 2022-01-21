import React from "react";
import { withStorageListener } from "./withStorageListener";
import { IoIosRefresh } from "react-icons/io";
import "./StorageChangeAlert.css";

function StorageChangeAlert({ show, toggleShow }) {
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

const StorageChangeAlertWithStorageListener =
  withStorageListener(StorageChangeAlert);

export { StorageChangeAlertWithStorageListener };
