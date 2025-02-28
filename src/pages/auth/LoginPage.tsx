import LoginForm from "../../components/auth/LoginForm";
import Logo from "../../components/Logo";

const LoginPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-start md:justify-center h-screen gap-20 mx-3 md:mx-0 mt-5 md:mt-0
    "
    >
      <div className="flex flex-col items-center justify-center gap-20">
        <Logo
          iconSize="h-14 w-14 md:h-26 md:w-26"
          textSize="text-3xl md:text-5xl"
        />
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-thin text-grey-dark uppercase text-center">
            Login
          </h1>
          <p className="text-lg text-gray-500 text-center w-full max-w-md font-thin">
            Stay organized and productive. Log in to manage your tasks
            effortlessly!
          </p>
        </div>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
