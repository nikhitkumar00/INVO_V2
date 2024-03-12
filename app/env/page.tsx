"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "@/components/Input";
import { toast } from "sonner";

const Page = () => {
  const [formData, setFormData] = useState({
    host: "",
    username: "",
    password: "",
    databaseName: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/env/API", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Login successful");
      } else {
        toast.error("Login failed:" + response.statusText);
      }
    } catch (error) {
      toast.error("Login failed:" + error);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex h-1/2 w-1/2 flex-col items-center justify-center gap-2 rounded border-2 p-4">
        <h1 className="text-3xl font-semibold">Login</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Host"
            className="w-full"
            name="host"
            value={formData.host}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Username"
            className="w-full"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Password"
            className="w-full"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Database Name"
            className="w-full"
            name="databaseName"
            value={formData.databaseName}
            onChange={handleChange}
          />
          <div>
            <button
              type="submit"
              className="rounded-md bg-primary px-5 py-2 text-background"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
