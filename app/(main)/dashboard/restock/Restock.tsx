import AdvancedTable from "../../_components/AdvancedTable";

const Restock = async () => {
  const data = await fetch("http://localhost:3000/dashboard/restock/API", {
    method: "POST",
  }).then((res) => res.json());
  return (
    <>
      <AdvancedTable data={data} searchTerm="" sortBy="item_id" />
    </>
  );
};
export default Restock;
