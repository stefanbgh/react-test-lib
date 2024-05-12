// Test za komponentu MixedProducts
import { render, screen, waitFor } from "@testing-library/react";
import { MixedProducts } from "../../../components"; // Podesite putanju do komponente
import { data } from "../../../data/data";

test("renders MixedProducts component with data from fakestoreapi", async () => {
	jest.spyOn(global, "fetch").mockResolvedValueOnce({
		json: async () => data
	} as Response);

	render(<MixedProducts />);

	const titleElement = screen.getByText("Products:");
	expect(titleElement).toBeInTheDocument();

	await waitFor(() => {
		const product1Element = screen.getByText(/Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/);
		const product2Element = screen.getByText(/Mens Casual Premium Slim Fit T-Shirts/);

		expect(product1Element).toBeInTheDocument();
		expect(product2Element).toBeInTheDocument();

		const spinnerAfterLoading = screen.queryByText("Loading...");
		expect(spinnerAfterLoading).toBeNull();
	});
});
