import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/UserStore";
import { isValidEmail } from "../utils/regex";
import { ROUTES } from "../routes/routes";

type ErrorType = "required" | "invalid" | null;

export const useLoginUser = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("petro@dev.com");
  const [password, setPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState<ErrorType>(null);
  const [passwordError, setPasswordError] = useState<ErrorType>(null);

  const { setIsLoggedIn } = useUserStore();
  const isValidCredentials =
    email === "petro@dev.com" && password === "password123";

  const handleLogin = () => {
    setEmailError(null);
    setPasswordError(null);

    if (!email || !isValidEmail(email)) {
      setEmailError("required");
      return;
    }

    if (!password) {
      setPasswordError("required");
      return;
    }

    if (isValidCredentials) {
      navigate(ROUTES.ROOT);
      setIsLoggedIn(true);
    } else {
      setEmailError("invalid");
      setPasswordError("invalid");
    }
  };
  return {
    handleLogin,
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    emailError,
    passwordError,
  };
};
