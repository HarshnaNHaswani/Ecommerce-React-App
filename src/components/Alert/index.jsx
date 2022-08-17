import React from "react";
import { useAlert } from "context";
import "./alert.css";
export const Alert = () => {
  const { alert } = useAlert();
  const { status, text, display: displayAlert } = alert;

  return (
    <>
      {displayAlert && (
        <p className={`alert status-${status}-outline status-${status}-bg`}>
          {text}
        </p>
      )}
    </>
  );
};
