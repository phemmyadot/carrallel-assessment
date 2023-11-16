import Header from "@/app/components/Header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("renders a heading", () => {
    render(<Header />);

    const heading = screen.getByRole("heading", {
      name: /library/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
