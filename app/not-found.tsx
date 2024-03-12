import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="flex h-screen w-screen items-center justify-center bg-background px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 stroke-2"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
              >
                <path
                  stroke-dasharray="2 4"
                  stroke-dashoffset="6"
                  d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    repeatCount="indefinite"
                    values="6;0"
                  />
                </path>
                <path
                  stroke-dasharray="30"
                  stroke-dashoffset="30"
                  d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.1s"
                    dur="0.3s"
                    values="30;0"
                  />
                </path>
                <path
                  stroke-dasharray="10"
                  stroke-dashoffset="10"
                  d="M12 16v-7.5"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.5s"
                    dur="0.2s"
                    values="10;0"
                  />
                </path>
                <path
                  stroke-dasharray="6"
                  stroke-dashoffset="6"
                  d="M12 8.5l3.5 3.5M12 8.5l-3.5 3.5"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.7s"
                    dur="0.2s"
                    values="6;0"
                  />
                </path>
              </g>
            </svg>
            <p className="text-3xl font-semibold text-primary">404</p>
          </div>
          <h1 className="text-secondary-900 mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="text-secondary-600 mt-6 text-base leading-7">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="hover:bg-secondary-800 rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-tertiary shadow-sm"
            >
              Go back home
            </Link>
            <Link
              href="/Contact"
              className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-primary hover:bg-slate-100"
            >
              Contact support
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
