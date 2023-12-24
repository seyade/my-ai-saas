import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DashboardPage from "../app/(dashboard)/(routes)/dashboard/page";

describe("Dashboard Page", () => {
	it("renders a heading", () => {
		render(<DashboardPage />); // ARRANGE

		const heading = screen.getByText(/Explore the power of AI/); // ACT

		expect(heading).toBeInTheDocument(); // ASSERT
	});
});
