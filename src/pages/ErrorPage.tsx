import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import CustomButton from "../components/CustomButton";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center flex flex-col items-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-grey">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-grey md:text-4xl dark:text-grey">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-grey dark:text-grey">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <CustomButton
            text="Back to Homepage"
            onClick={() => navigate(ROUTES.DASHBOARD)}
            backgroundColor="primary"
          />
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
