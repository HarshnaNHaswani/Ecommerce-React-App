import React from "react";

export const subsetOfArray = (parentArr, subsetArr) =>
  subsetArr.reduce(
    (acc, curr) => (parentArr.includes(curr) ? acc : false),
    true
  );