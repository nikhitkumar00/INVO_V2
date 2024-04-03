"use client";
import { useState, useEffect } from "react";
import Webcam from "react-webcam";
import Header from "../_components/Header";
import { CameraError } from "@/svg/Icons";

const CameraPage = () => {
  const [cameraUsed, setCameraUsed] = useState<string>("Camera not connected");
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString(),
  );

  useEffect(() => {
    const checkCamera = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });
        setCameraUsed("Yes");
      } catch (error) {
        console.error("Camera not available:", error);
        setCameraUsed("Camera not connected");
      }
    };

    checkCamera();

    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex h-screen w-full flex-col">
      <Header title="Camera" logout />
      <div className="z-10 flex h-full w-full items-center justify-around gap-4 p-4">
        {cameraUsed === "Yes" ? (
          <Webcam className="h-full" />
        ) : (
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-3 rounded-md border border-tertiary px-10 py-5">
              <CameraError className="size-10 stroke-2" />
              Camera not connected
              <div className="text-xs text-secondary">
                Check if the camera is connected
              </div>
            </div>
          </div>
        )}
        <div className="space-y-2 text-sm text-gray-600">
          <p>Date: {new Date().toLocaleDateString()}</p>
          <p>Time: {currentTime}</p>
          <p>Camera used: {cameraUsed}</p>
          <p>Camera model: {Webcam.name || "Unknown"}</p>
        </div>
      </div>
    </div>
  );
};
export default CameraPage;
