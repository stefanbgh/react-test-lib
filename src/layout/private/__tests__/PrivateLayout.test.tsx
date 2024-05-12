import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PrivateLayout from "../PrivateLayout";

describe("PrivateLayout", () => {
	it("renders navigation and children", () => {
		const chlidComponent = <div>This is the child component</div>;

		const { getByText } = render(
            <BrowserRouter>
                <PrivateLayout>{chlidComponent}</PrivateLayout>
            </BrowserRouter>
		);

		const navigationHomeLink = getByText("Home");
		const navigationProductsLink = getByText("Products");
		const mockChildrenElement = getByText("This is the child component");

		expect(navigationHomeLink).toBeInTheDocument();
		expect(navigationProductsLink).toBeInTheDocument();
		expect(mockChildrenElement).toBeInTheDocument();
		expect(mockChildrenElement).toHaveTextContent("This is the child component");
	});
});
