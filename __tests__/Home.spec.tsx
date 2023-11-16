import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

it("renders without crashing", () => {
  //test to see if page shows up
  render(<Home />);
  expect(screen.getByText("Get started by editing")).toBeInTheDocument();
});
