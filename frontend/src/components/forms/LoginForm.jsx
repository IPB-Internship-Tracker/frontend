import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/bg-ahn.png";
import FormField from "./FormField";
import Logo from "../common/Logo";
import { Form } from "lucide-react";
import daunIpb from "../../assets/daun-ipb.png";
import Button from "../ui/Button";

const LoginForm = ({
  role = "User",
  signUpPath = "/sign-up",
  dashboardPath = "/",
}) => {

  const navigate = useNavigate();

  return (
    <div>

      {/* Card */}
      <div className="relative z-10 bg-white rounded-2xl w-full max-w-6xl h-auto overflow-hidden shadow-2xl px-10 md:px-15 py-10">

        {/* Ornament */}
        <div className="absolute right-[-100px] bottom-[-50px] opacity-45 pointer-events-none">
          <img
            src={daunIpb}
            alt="ornament"
            className="w-[400px]"
          />
        </div>

        {/* Title */}
        <h1 className="text-center text-bold-blue text-2xl font-bold mb-10">
          Masuk Sebagai {role}
        </h1>

        {/* Form */}
        <form className="relative z-10 flex flex-col gap-5">

          {/* EMAIL */}
            <FormField
            label="Email"
            type="email"
            placeholder="Gunakan email IPB"
            className="w-100"
            />

          {/* PASSWORD */}
            <FormField
            label="Password"
            type="password"
            placeholder="Ketik password Anda disini"
            className="w-100"
            />

          {/* BUTTON */}
            <Button
            label="Masuk"
            to={dashboardPath}
            className="w-auto md:w-[200px] self-center mt-8"
            />

          {/* REGISTER */}
          <div className="text-center text-sm">
            <span className="text-black">
              Belum punya akun?
            </span>

            <button
              type="button"
              onClick={() => navigate(signUpPath)}
              className="ml-3 font-bold text-bold-blue underline hover:opacity-80"
            >
              Buat Akun
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default LoginForm;