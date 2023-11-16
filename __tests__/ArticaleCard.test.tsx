import React from "react";
import { render, screen } from "@testing-library/react";
import ArticleCard from "@/app/components/ArticleCard";

describe("ArticleCard", () => {
  it("renders correctly", () => {
    render(<ArticleCard title="Test Title" id="0" imageUrl="dummy-link" />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });
});
