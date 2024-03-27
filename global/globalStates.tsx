"use client";
import { atom } from "recoil";

const restockThresholdState = atom({
  key: "restockThreshold",
  default:
    typeof window !== "undefined"
      ? parseInt(localStorage.getItem("restockThreshold") || "20", 10)
      : "20",
});

const themeState = atom({
  key: "theme",
  default:
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light",
});

export { restockThresholdState, themeState };
