import Header from "../_components/Header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Table";

const Billing = () => {
  const data = [
    {
      name: "Customer Id",
      value: 5555,
    },
    {
      name: "Customer Name",
      value: 1624,
    },
    {
      name: "Bill Id",
      value: 9324,
    },
    {
      name: "Bill Date",
      value: 3426,
    },
  ];
  const value = [
    "Barcode",
    "Item Id",
    "Item Name",
    "Qty",
    "MRP",
    "Rate",
    "Discount",
    "Amount",
  ];
  return (
    <>
      <div className="flex h-full w-full flex-col ">
        <Header title="Billing" logout />
        <div className=" m-2 grid grid-cols-1 gap-2 border p-4 lg:grid-cols-4">
          {data.map((item, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <label className="sr-only font-semibold">{item.name}</label>
              <input
                type="text"
                placeholder={item.name}
                className="rounded-md border bg-transparent p-2 text-black placeholder-gray-600"
                required
              />
            </div>
          ))}
        </div>
        <div className="m-2 flex justify-between border py-2 pl-20 ">
          <div className=" grid grid-cols-2 gap-2 lg:grid-cols-8">
            {value.map((item, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <label className="sr-only font-semibold">{item}</label>
                <input
                  type="text"
                  placeholder={item}
                  className="rounded-md border bg-transparent p-2 text-black placeholder-gray-600"
                  required
                />
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="mx-3 h-10 w-24 rounded-md bg-primary p-2 text-center text-white shadow-sm hover:bg-indigo-900 "
          >
            Add
          </button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              {value.map((item) => (
                <TableHead
                  key={item}
                  className={item === "Item Name" ? "w-[30%]" : "w-[10%]"}
                >
                  {item}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};
export default Billing;
