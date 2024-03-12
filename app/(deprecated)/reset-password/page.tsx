import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Reset Password",
	description: "Simplifying Inventory",
};

const page = () => {
	return (
		<div className="h-screen w-full">
			<div className=" bg-secondary-100 flex h-full items-center py-16">
				<div className="w-full max-w-md mx-auto p-6">
					<div className="mt-7 bg-tertiary border border-secondary-200 rounded-xl shadow-sm ">
						<div className="p-4 sm:p-7">
							<div className="text-center">
								<h1 className="block text-2xl font-bold text-primary ">
									Forgot password?
								</h1>
								<p className="mt-2 text-sm text-secondary">
									Remember your password?
									<Link
										className="text-primary decoration-2 hover:underline font-medium "
										href="/signin"
									>
										Sign in here
									</Link>
								</p>
							</div>

							<div className="mt-5">
								<form>
									<div className="grid gap-y-4">
										<div>
											<label
												htmlFor="email"
												className="block text-sm mb-2 "
											>
												Email address
											</label>
											<div className="relative">
												<input
													type="email"
													id="email"
													name="email"
													className="py-3 px-4 block w-full border-secondary-200 rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none"
													required
													aria-describedby="email-error"
												/>
												<div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
													<svg
														className="h-5 w-5 text-red-500"
														width="16"
														height="16"
														fill="currentColor"
														viewBox="0 0 16 16"
														aria-hidden="true"
													>
														<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
													</svg>
												</div>
											</div>
											<p
												className="hidden text-xs text-red-600 mt-2"
												id="email-error"
											>
												Please include a valid email
												address so we can get back to
												you
											</p>
										</div>

										<button
											type="submit"
											className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-primary text-tertiary hover:bg-neutral-700 disabled:opacity-50 disabled:pointer-events-none "
										>
											Reset password
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
