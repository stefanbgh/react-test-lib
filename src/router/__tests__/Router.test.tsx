import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Routes } from "../Routes";
import { Products, Home, NotFound } from "../../pages";

import PrivateLayout from "../../layout/private/PrivateLayout";

test("renders Button component inside Home", () => {
	render(
		<MemoryRouter initialEntries={[Routes.HOME]}>
			<PrivateLayout>
				<Home />
			</PrivateLayout>
		</MemoryRouter>
	);

	const buttonElement = screen.getByText("Click me");
	expect(buttonElement).toBeInTheDocument();
});

test("renders Products component on /products route", async () => {
	render(
		<MemoryRouter initialEntries={[Routes.PRODUCTS]}>
			<PrivateLayout>
				<Products />
			</PrivateLayout>
		</MemoryRouter>
	);

	const titleElement = screen.getByText("Products:");
	expect(titleElement).toBeInTheDocument();

	const spinnerElement = screen.getByText("Loading...");
	expect(spinnerElement).toBeInTheDocument();

	await waitFor(() => {
		const product1Element = screen.queryByText(/Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/);
		const product2Element = screen.queryByText(/Mens Casual Premium Slim Fit T-Shirts/);

		expect(product1Element).toBeInTheDocument();
		expect(product2Element).toBeInTheDocument();

		const spinnerAfterLoading = screen.queryByText("Loading...");
		expect(spinnerAfterLoading).toBeNull();
	});
});

test("renders NotFound component on joker (*) route", () => {
	render(
		<MemoryRouter initialEntries={[Routes.NOT_FOUND]}>
			<NotFound />
		</MemoryRouter>
	);

	const notFoundElement = screen.getByText("Sorry, page not found.");
	expect(notFoundElement).toBeInTheDocument();
});
