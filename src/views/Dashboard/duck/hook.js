import { useState } from "react";

export const useClassification = params => {
  const defaultClassification =
    typeof params.classifications === "string"
      ? [Number(params.classifications)]
      : params.classifications;

  return useState(defaultClassification || []);
};

export const useRange = defaultArray => {
  const settingArray = [Number(defaultArray[0]), Number(defaultArray[1])];

  return useState(settingArray);
};
