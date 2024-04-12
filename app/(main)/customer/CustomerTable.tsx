import AdvancedTable from "../_components/AdvancedTable";

const CustomerTable = async () => {
  const customerdata = await fetch("/customer/API/customerdata", {
    method: "POST",
  }).then((res) => res.json());
  return (
    <>
      <div className="h-[89vh] overflow-auto">
        <AdvancedTable
          data={customerdata}
          searchTerm=""
          sortBy=""
          caption="Customer Details"
        />
      </div>
    </>
  );
};

export default CustomerTable;
