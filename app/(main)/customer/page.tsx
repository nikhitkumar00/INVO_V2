"use client";
import CustomerTable from "./CustomerTable";
import Header from "../_components/Header";
const Page = () => {
  return (
    <div className="h-screen w-full">
      <Header title="Customer Registration" logout />
      <div className="flex items-center gap-4 px-4">
        <div className="flex flex-col rounded-md border border-secondary p-8 ">
          <form>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only">Customer id</label>
                  <input
                    type="text"
                    className="block w-full rounded-lg border border-tertiary bg-transparent px-4 py-3 text-sm placeholder-gray-600 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 "
                    placeholder="Customer Id"
                    required
                  />
                </div>

                <div>
                  <label className="sr-only">Name</label>
                  <input
                    type="text"
                    className=" block w-full rounded-lg border border-tertiary bg-transparent px-4 py-3 text-sm placeholder-gray-600 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 "
                    placeholder="Customer Name"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only">Email</label>
                <input
                  type="email"
                  autoComplete="email"
                  className=" block w-full rounded-lg border border-tertiary bg-transparent px-4 py-3 text-sm placeholder-gray-600  focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 "
                  placeholder="Email"
                />
              </div>

              <div>
                <label className="sr-only">Phone Number</label>
                <input
                  type="tel"
                  className=" block w-full rounded-lg border border-tertiary bg-transparent px-4 py-3 text-sm placeholder-gray-600 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 "
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>

            <div className="mt-4 grid">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-primary px-4 py-3 text-sm font-semibold text-tertiary hover:bg-gray-900 disabled:pointer-events-none disabled:opacity-50 "
              >
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="w-full">
          <CustomerTable />
        </div>
      </div>
    </div>
  );
};

export default Page;
