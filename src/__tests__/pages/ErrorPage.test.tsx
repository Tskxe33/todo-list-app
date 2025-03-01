import { render } from "@testing-library/react";
import ErrorPage from "../../pages/ErrorPage";
import { BrowserRouter } from "react-router-dom";
import { describe, it } from "vitest";

describe("ErrorPage", () => {
  it("should render", () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );
  });
});
