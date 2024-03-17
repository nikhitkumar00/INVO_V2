"use client";
import Header from "../../_components/Header";
import Columns from "./Columns";
import AddColumn from "./AddColumn";
import { useState } from "react";

const Customize = () => {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="flex h-full w-full flex-col">
      <Header title="Customize" />
      <div className="grid grid-cols-3 gap-2 overflow-auto px-8">
        <Columns refresh={refresh} onRefresh={handleRefresh} />
        <AddColumn onAddColumn={handleRefresh} />
      </div>
    </div>
  );
};

export default Customize;
