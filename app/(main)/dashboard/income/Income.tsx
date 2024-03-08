import AdvancedTable from "../../_components/AdvancedTable";

const Restock = async () => {
  const data = await fetch("http://localhost:3000/dashboard/income/api", {
    cache: "no-store",
  }).then((res) => res.json());
  return (
    <div>{data.income}
    </div>
  );
};
export default Restock;
