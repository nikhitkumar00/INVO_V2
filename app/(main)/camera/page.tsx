"use client";
import { useState, useEffect } from "react";
import Webcam from "react-webcam";
import Header from "../_components/Header";
import { CameraError } from "@/svg/Icons";

const Page = () => {
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
          <p className="flex items-center gap-2 text-xl text-secondary">
            <CameraError className="size-10 stroke-2" />
            <span>Camera not connected</span>
          </p>
        )}
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            Date: {new Date().toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-600">Time: {currentTime}</p>
          <p className="text-sm text-gray-600">Camera used: {cameraUsed}</p>
          <p className="text-sm text-gray-600">
            Camera model: {Webcam.name || "Unknown"}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Page;
