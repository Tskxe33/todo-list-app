import CustomButton from "../CustomButton";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useLoginUser } from "../../hooks/useLoginUser";

const LoginForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    showPassword,
    setShowPassword,
    handleLogin,
    passwordError,
  } = useLoginUser();

  return (
    <div
      className="flex flex-col items-center justify-center gap-4 w-full max-w-md"
      data-testid="login-form"
    >
      <div className="relative w-full">
        <input
          placeholder="e.g: joe@doe.com"
          className="w-full p-2 border border-border rounded-md outline-none text-grey-dark"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          data-testid="email-input"
        />
        {emailError === "required" && (
          <p className="text-red-500 text-sm" data-testid="error-message">
            Invalid email
          </p>
        )}
      </div>

      <div className="relative w-full mb-5">
        <div className="relative">
          <input
            placeholder="e.g: password123!@#$%"
            type={showPassword ? "text" : "password"}
            className="w-full p-2 border border-border rounded-md outline-none text-grey-dark"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            data-testid="password-input"
          />
          {showPassword ? (
            <IoIosEye
              className="absolute right-2 top-1/2 -translate-y-1/2 text-grey-dark cursor-pointer"
              size={20}
              onClick={() => setShowPassword(false)}
              data-testid="eye-icon"
            />
          ) : (
            <IoIosEyeOff
              className="absolute right-2 top-1/2 -translate-y-1/2 text-grey-dark cursor-pointer"
              size={20}
              onClick={() => setShowPassword(true)}
              data-testid="eye-off-icon"
            />
          )}
        </div>
        <p
          className="text-red-500 text-sm"
          data-testid="password-required-message"
        >
          {passwordError === "required" ? "Password is required" : ""}
        </p>

        <p
          className="text-red-500 text-sm"
          data-testid="invalid-credentials-message"
        >
          {emailError === "invalid" || passwordError === "invalid"
            ? "Invalid user credentials"
            : ""}
        </p>
      </div>

      <CustomButton
        text="Login"
        onClick={handleLogin}
        buttonClassName="w-full"
      />
    </div>
  );
};

export default LoginForm;
