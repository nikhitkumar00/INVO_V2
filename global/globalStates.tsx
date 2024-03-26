"use client";
import { atom } from "recoil";

const restockThresholdState = atom({
  key: "restockThreshold",
  default: parseInt(localStorage.getItem("restockThreshold") || "20", 10),
});

const themeState = atom({
  key: "theme",
  default: localStorage.getItem("theme")?.toString() || "",
});

export { restockThresholdState, themeState };
