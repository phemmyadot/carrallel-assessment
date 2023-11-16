/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { render, waitFor, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import ArticleList from "@/app/components/ArticleList";
import { ArticleModel } from "@/app/models/article.model";

let data: ArticleModel[] = [];
describe("ArticleList", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            data,
          }),
      })
    ) as jest.Mock;
  });
  it("renders without crashing", async () => {
    await act(async () => render(<ArticleList />));
  });

  it("displays message when no recommended articles are found", async () => {
    data = [];
    await act(async () => render(<ArticleList />));
    await waitFor(() => {
      expect(screen.getByTestId("no-articles")).toBeInTheDocument();
    });
  });

  it("renders ArticleCard components after fetch", async () => {
    data = [
      {
        id: "1",
        title: "Article 1",
        imageUrl:
          "https://source.unsplash.com/random?caregiver,homecare,6555b2e0cd3ce05632ccb5fb",
        previewImage:
          "https://source.unsplash.com/random?caregiver,homecare,6555b2e0cd3ce05632ccb5fb",
      },
    ];
    await act(async () => render(<ArticleList />));
    await waitFor(() => {
      expect(screen.getByTestId("article-card")).toBeInTheDocument();
    });
  });

  it("renders CircleArticleCard components after fetch", async () => {
    data = [
      {
        id: "1",
        title: "Article 1",
        imageUrl:
          "https://source.unsplash.com/random?caregiver,homecare,6555b2e0cd3ce05632ccb5fb",
        previewImage:
          "https://source.unsplash.com/random?caregiver,homecare,6555b2e0cd3ce05632ccb5fb",
      },
    ];
    await act(async () => render(<ArticleList />));
    await waitFor(() => {
      expect(screen.getByTestId("circle-article-card")).toBeInTheDocument();
    });
  });
});
