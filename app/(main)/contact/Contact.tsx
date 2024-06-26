"use client";
import { toast } from "sonner";
import Header from "../_components/Header";

const Contact = () => {
  return (
    <>
      <Header title="Contact" logout />
      <div className="mt-12 grid items-center gap-6 px-14 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col rounded-xl border border-tertiary p-4 sm:p-6 lg:p-8 ">
          <h2 className="text-secondary-800 mb-8 text-xl font-semibold ">
            Fill in the form
          </h2>

          <form>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only">First Name</label>
                  <input
                    type="text"
                    className="block w-full rounded-lg border border-tertiary px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 "
                    placeholder="First Name"
                    required
                  />
                </div>

                <div>
                  <label className="sr-only">Last Name</label>
                  <input
                    type="text"
                    className=" block w-full rounded-lg border border-tertiary px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 "
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only">Email</label>
                <input
                  type="email"
                  autoComplete="email"
                  className=" block w-full rounded-lg border border-tertiary px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 "
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <label className="sr-only">Phone Number</label>
                <input
                  type="text"
                  className=" block w-full rounded-lg border border-tertiary px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 "
                  placeholder="Phone Number"
                  required
                />
              </div>

              <div>
                <label className="sr-only">Details</label>
                <textarea
                  name="hs-about-contacts-1"
                  className=" block w-full rounded-lg border border-tertiary px-4 py-3 text-sm focus:border-gray-900 focus:ring-gray-900 disabled:pointer-events-none disabled:opacity-50 "
                  placeholder="Details"
                  required
                ></textarea>
              </div>
            </div>

            <div className="mt-4 grid">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toast.success("Thank you for your inquiry!");
                }}
                type="submit"
                className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-primary px-4 py-3 text-sm font-semibold text-tertiary hover:bg-gray-900 disabled:pointer-events-none disabled:opacity-50 "
              >
                Send inquiry
              </button>
            </div>

            <div className="mt-3 text-center">
              <p className="text-secondary-500 text-sm">
                We&apos;ll get back to you in 1-2 business days.
              </p>
            </div>
          </form>
        </div>
        <div className="divide-secondary-200 divide-y ">
          <div className="flex gap-x-7 py-6">
            <svg
              className="text-secondary-800 mt-1.5 h-6 w-6 flex-shrink-0 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
            <div className="grow">
              <h3 className="text-secondary-800 font-semibold ">
                Knowledgebase
              </h3>
              <p className="text-secondary-500 mt-1 text-sm">
                We&apos;re here to help with any questions or code.
              </p>
              <a
                className="text-secondary-600 hover:text-secondary-800 mt-2 inline-flex items-center gap-x-2 text-sm font-medium "
                href="https://invo-website.vercel.app/docs/Getting-Started"
              >
                Documentation
                <svg
                  className="h-2.5 w-2.5 flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex gap-x-7 py-6">
            <svg
              className="text-secondary-800 mt-1.5 h-6 w-6 flex-shrink-0 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
            </svg>
            <div className="grow">
              <h3 className="text-secondary-800 font-semibold ">FAQ</h3>
              <p className="text-secondary-500 mt-1 text-sm">
                Search our FAQ for answers to anything you might ask.
              </p>
              <a
                className="text-secondary-600 hover:text-secondary-800 mt-2 inline-flex items-center gap-x-2 text-sm font-medium "
                href="https://invo-website.vercel.app/#faq"
              >
                Visit FAQ
                <svg
                  className="h-2.5 w-2.5 flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className=" flex gap-x-7 py-6">
            <svg
              className="text-secondary-800 mt-1.5 h-6 w-6 flex-shrink-0 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m7 11 2-2-2-2" />
              <path d="M11 13h4" />
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            </svg>
            <div className="grow">
              <h3 className="text-secondary-800 font-semibold ">
                Detailed Overview
              </h3>
              <p className="text-secondary-500 mt-1 text-sm">
                Check out our quickstart guide.
              </p>
              <a
                className="text-secondary-600 hover:text-secondary-800 mt-2 inline-flex items-center gap-x-2 text-sm font-medium "
                href="https://invo-website.vercel.app/docs/Detailed-Features"
              >
                More
                <svg
                  className="h-2.5 w-2.5 flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className=" flex gap-x-7 py-6">
            <svg
              className="text-secondary-800 mt-1.5 h-6 w-6 flex-shrink-0 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
              <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
            </svg>
            <div className="grow">
              <h3 className="text-secondary-800 font-semibold ">
                Contact us by email
              </h3>
              <p className="text-secondary-500 mt-1 text-sm">
                If you wish to write us an email instead please use
              </p>
              <a
                className="text-secondary-600 hover:text-secondary-800 mt-2 inline-flex items-center gap-x-2 text-sm font-medium "
                href="mailto:invov2@gmail.com"
              >
                invov2@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
