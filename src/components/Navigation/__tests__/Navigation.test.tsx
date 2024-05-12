import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Ovo omogućava testiranje komponente povezane s react-routerom
import { Navigation } from "../../../components";
import { Routes } from "../../../router/Routes";

describe("Navigation", () => {
	it("renders navigation links", () => {
		const { getByText } = render(
			<MemoryRouter>
				<Navigation />
			</MemoryRouter>
		);

		const homeLink = getByText("Home");
		const productsLink = getByText("Products");

		expect(homeLink).toBeInTheDocument();
		expect(productsLink).toBeInTheDocument();
	});

	it("links to correct routes", () => {
		const { getByText } = render(
			<MemoryRouter>
				<Navigation />
			</MemoryRouter>
		);

		const homeLink = getByText("Home");
		const productsLink = getByText("Products");

		expect(homeLink.getAttribute("href")).toBe(Routes.HOME);
		expect(productsLink.getAttribute("href")).toBe(Routes.PRODUCTS);
	});
});
