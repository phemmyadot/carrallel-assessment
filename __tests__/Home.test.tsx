import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

it("renders correctly", () => {
  render(<Home />);
  expect(screen.getByText("Get started by editing")).toBeInTheDocument();
});
