import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "../../../components/auth/LoginForm";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { useLoginUser } from "../../../hooks/useLoginUser";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock("../../../hooks/useLoginUser", () => ({
  useLoginUser: vi.fn(),
}));

describe("LoginForm", () => {
  afterEach(() => {
    cleanup();
  });

  const mockLoginUser = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useLoginUser).mockReturnValue({
      handleLogin: mockLoginUser,
      email: "",
      setEmail: vi.fn(),
      password: "",
      setPassword: vi.fn(),
      showPassword: false,
      setShowPassword: vi.fn(),
      emailError: null,
      passwordError: null,
    });
  });

  const renderLoginForm = () => {
    return render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
  };

  it("Input is empty", async () => {
    vi.mocked(useLoginUser).mockReturnValue({
      handleLogin: mockLoginUser,
      email: "",
      setEmail: vi.fn(),
      password: "",
      setPassword: vi.fn(),
      showPassword: false,
      setShowPassword: vi.fn(),
      emailError: "required",
      passwordError: null,
    });

    renderLoginForm();

    const emailInput = screen.getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: "" } });

    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);

    const errorMessage = await screen.findByTestId("error-message");
    expect(errorMessage).toBeInTheDocument();
  });

  it("calls loginUser with correct data", async () => {
    const mockSetEmail = vi.fn();
    const mockSetPassword = vi.fn();
    const mockHandleLogin = vi.fn();

    vi.mocked(useLoginUser).mockReturnValue({
      handleLogin: mockHandleLogin,
      email: "test@test.com",
      setEmail: mockSetEmail,
      password: "password123",
      setPassword: mockSetPassword,
      showPassword: false,
      setShowPassword: vi.fn(),
      emailError: null,
      passwordError: null,
    });

    renderLoginForm();

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);

    expect(mockHandleLogin).toHaveBeenCalled();
  });

  it("shows error message from useLoginUser hook", async () => {
    vi.mocked(useLoginUser).mockReturnValue({
      handleLogin: mockLoginUser,
      email: "test@test.com",
      setEmail: vi.fn(),
      password: "password123",
      setPassword: vi.fn(),
      showPassword: false,
      setShowPassword: vi.fn(),
      emailError: "invalid",
      passwordError: "invalid",
    });

    renderLoginForm();

    expect(
      screen.getByTestId("invalid-credentials-message")
    ).toBeInTheDocument();
  });

  it("eye icon toggles password visibility", () => {
    const mockSetShowPassword = vi.fn();

    vi.mocked(useLoginUser).mockReturnValue({
      handleLogin: vi.fn(),
      email: "",
      setEmail: vi.fn(),
      password: "",
      setPassword: vi.fn(),
      showPassword: false,
      setShowPassword: mockSetShowPassword,
      emailError: null,
      passwordError: null,
    });

    renderLoginForm();

    const eyeOffIcon = screen.getByTestId("eye-off-icon");
    fireEvent.click(eyeOffIcon);

    expect(mockSetShowPassword).toHaveBeenCalledWith(true);

    vi.mocked(useLoginUser).mockReturnValue({
      handleLogin: vi.fn(),
      email: "",
      setEmail: vi.fn(),
      password: "",
      setPassword: vi.fn(),
      showPassword: true,
      setShowPassword: mockSetShowPassword,
      emailError: null,
      passwordError: null,
    });

    renderLoginForm();

    const eyeIcon = screen.getByTestId("eye-icon");
    fireEvent.click(eyeIcon);

    expect(mockSetShowPassword).toHaveBeenCalledWith(false);
  });

  it("show password is required message", async () => {
    vi.mocked(useLoginUser).mockReturnValue({
      handleLogin: mockLoginUser,
      email: "test@test.com",
      setEmail: vi.fn(),
      password: "",
      setPassword: vi.fn(),
      showPassword: false,
      setShowPassword: vi.fn(),
      emailError: null,
      passwordError: "required",
    });

    renderLoginForm();

    const passwordInput = screen.getByTestId("password-input");
    fireEvent.change(passwordInput, { target: { value: "" } });

    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);

    const errorMessage = await screen.findByTestId("password-required-message");
    expect(errorMessage).toBeInTheDocument();
  });
});
