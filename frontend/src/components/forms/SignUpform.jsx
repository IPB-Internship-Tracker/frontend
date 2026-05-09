import { useNavigate } from "react-router-dom";

import FormField from "./FormField";
import Button from "../ui/Button";

import daunIpb from "../../assets/daun-ipb.png";

const SignUpForm = ({
  role = "User",
  fields = [],
  loginPath = "/login",
}) => {

  const navigate = useNavigate();

  return (

    <div className="relative z-10 bg-white rounded-2xl w-4xl overflow-hidden shadow-2xl px-10 py-10">

      {/* Ornament */}
      <div className="absolute right-[-100px] bottom-[-50px] opacity-45 pointer-events-none">
        <img
          src={daunIpb}
          alt="ornament"
          className="w-[500px]"
        />
      </div>

      {/* Title */}
      <h1 className="text-center text-bold-blue text-2xl font-bold mb-10">
        Buat Akun {role}
      </h1>

      {/* FORM */}
      <form className="relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">

          {fields.map((field, index) => (

            <FormField
              key={index}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
            />

          ))}

        </div>

        {/* BUTTON */}
        <div className="mt-10">
          <Button
            label="Daftar"
            to="/"
            className="w-auto md:w-[200px] self-center"
          />
        </div>

        {/* LOGIN */}
        <div className="text-center text-sm mt-5">

          <span className="text-black">
            Sudah punya akun?
          </span>

          <button
            type="button"
            onClick={() => navigate(loginPath)}
            className="ml-2 font-bold text-bold-blue underline"
          >
            Masuk
          </button>

        </div>

      </form>
    </div>
  );
};

export default SignUpForm;