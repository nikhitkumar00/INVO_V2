import AdvancedTable from "../../_components/AdvancedTable";

const Restock = async () => {
  const data = await fetch("http://localhost:3000/dashboard/expense/api", {
    cache: "no-store",
  }).then((res) => res.json());
  return (
    <div className="m-0 flex-grow rounded-md border p-4">
      <AdvancedTable data={data} searchTerm="" sortBy="item_id" />
    </div>
  );
};
export default Restock;
