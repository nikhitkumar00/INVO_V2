import Link from "next/link";

export default function NotFound() {
	return (
		<>
			<main className="flex justify-center w-full h-full items-center bg-tertiary px-6 py-24 sm:py-32 lg:px-8">
				<div className="text-center">
					<p className="text-3xl font-semibold text-primary">404</p>
					<h1 className="mt-4 text-3xl font-bold tracking-tight text-secondary-900 sm:text-5xl">
						Page not found
					</h1>
					<p className="mt-6 text-base leading-7 text-secondary-600">
						Sorry, we couldn&apos;t find the page you&apos;re looking for.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link
							href="/"
							className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-tertiary shadow-sm hover:bg-secondary-800"
						>
							Go back home
						</Link>
						<Link
							href="/Contact"
							className="text-sm font-semibold text-primary rounded-md hover:bg-slate-100 px-3.5 py-2.5"
						>
							Contact support
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}
