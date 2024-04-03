import AdvancedTable from "../_components/AdvancedTable";

const CustomerTable = async () => {
  const customerdata = await fetch(
    "http://localhost:3000/customer/API/customerdata",
    {
      method: "POST",
    },
  ).then((res) => res.json());
  return (
    <>
      <div className="overflow-auto">
        <AdvancedTable data={customerdata} searchTerm="" sortBy="" caption="" />
      </div>
    </>
  );
};

export default CustomerTable;
