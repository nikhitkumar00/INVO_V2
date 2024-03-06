import AdvancedTable from "../../_components/AdvancedTable";

const Restock = async () => {
  const data = await fetch("http://localhost:3000/dashboard/restock/api", {
    cache: "no-store",
  }).then((res) => res.json());
  return (
    <div className="m-3 flex-grow rounded-md border">
      <AdvancedTable data={data} searchTerm="" sortBy="item_id" />
    </div>
  );
};
export default Restock;
