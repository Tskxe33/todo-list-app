import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LoginPage from "../../../pages/auth/LoginPage";
import { BrowserRouter } from "react-router-dom";

describe("Login Page", () => {
  const renderLoginPage = () => {
    return render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
  };

  it("Logo is rendering", () => {
    renderLoginPage();
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });

  it("Title and description are rendering", () => {
    renderLoginPage();

    const loginTitle = screen.getByTestId("lp-title");
    const loginDescription = screen.getByTestId("lp-description");

    expect(loginTitle).toBeInTheDocument();
    expect(loginDescription).toBeInTheDocument();
  });

  it("LoginForm is rendering", () => {
    renderLoginPage();
    const loginForm = screen.getByTestId("login-form");
    expect(loginForm).toBeInTheDocument();
  });
});
