import React from "react";
import { render, screen } from "@testing-library/react";
import ArticleCard from "@/app/components/ArticleCard";

describe("ArticleCard", () => {
  it("renders correctly", () => {
    render(
      <ArticleCard
        title="Test Title"
        excerpt="Test Excerpt"
        imageUrl="dummy-link"
      />
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Excerpt")).toBeInTheDocument();
  });
});
