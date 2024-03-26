"use client";
import { atom } from "recoil";

const getDefaultValueFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const storedValue = localStorage.getItem("restockThreshold");
    return storedValue ? parseInt(storedValue, 10) : 20;
  }
  return 20;
};

const restockThresholdState = atom({
  key: "restockThreshold",
  default: getDefaultValueFromLocalStorage(),
});

export { restockThresholdState };
