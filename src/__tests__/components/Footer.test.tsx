import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../../components/Footer";
import { describe, expect, it } from "vitest";

describe("Footer", () => {
  const renderFooter = () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  };

  it("should render", () => {
    renderFooter();

    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
