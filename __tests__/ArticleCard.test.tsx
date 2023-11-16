/* eslint-disable testing-library/no-unnecessary-act */
import ArticleCard from "@/app/components/ArticleCard";
import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("ArticleCard", () => {
  it("renders title", async () => {
    act(() => render(<ArticleCard title="Test Title" imageUrl="" id="1" />));
    await waitFor(() => {
      expect(screen.getByText(/Test Title/i)).toBeInTheDocument();
    });
  });

  it("links to article page", async () => {
    render(<ArticleCard title="Title" imageUrl="" id="123" />);
    await waitFor(() => {
      expect(screen.getByTestId("article-card")).toHaveAttribute(
        "href",
        "/library/123"
      );
    });
  });
});
