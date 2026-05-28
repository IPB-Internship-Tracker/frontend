import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormField from "./FormField";
import Logo from "../common/Logo";
import daunIpb from "../../assets/daun-ipb.png";
import Button from "../ui/Button";
import PopUpNotif from "../ui/PopUpNotif";
import { CircleAlert } from "lucide-react";

const LoginForm = ({
  role = "User",
  signUpPath = "/sign-up",
  dashboardPath = "/",
  emailPlaceholder = "Masukkan email",
  loginPath,
}) => {

  const [formData, setFormData] = useState({
  email: "",
  password: "",
});
  
  const [errors, setErrors] = useState({});
  
  const [loginError, setLoginError] =
  useState("");

  const [openRolePopup, setOpenRolePopup] =
  useState(false);

  const [roleMessage, setRoleMessage] =
    useState("");

  const [redirectPath, setRedirectPath] =
    useState("");

  const DUMMY_ACCOUNTS = [
    {
      email: "mahasiswa@apps.ipb.ac.id",
      password: "mahasiswa123",
      role: "Mahasiswa IPB",
    },

    {
      email: "admin@shopee.co.id",
      password: "mitra123",
      role: "Mitra",
    },

    {
      email: "admin@gmail.com",
      password: "password123",
      role: "Admin",
    },
  ];

  const navigate = useNavigate();

  const validateForm = () => {
    let newErrors = {};

    // EMAIL
    if (!formData.email) {
      newErrors.email = "Email wajib diisi.";
    }

    // PASSWORD
    if (!formData.password) {
      newErrors.password = "Password wajib diisi.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password minimal 8 karakter.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const account = DUMMY_ACCOUNTS.find(
      (acc) => acc.email === formData.email
    );

    // email tidak ditemukan
    if (!account) {
      setLoginError(
        "Email atau password yang Anda masukkan salah."
      );
      return;
    }

    // role tidak sesuai
    if (account.role !== role) {

      setRoleMessage(
        `Akun ini terdaftar sebagai ${account.role}.`
      );

      setRedirectPath(
        account.role === "Mahasiswa IPB"
          ? "/login-mahasiswa"
          : "/login-mitra"
      );

      setOpenRolePopup(true);

      return;
    }

    // password salah
    if (account.password !== formData.password) {

      setLoginError(
        "Email atau password yang Anda masukkan salah."
      );

      return;
    }

    setLoginError("");

    localStorage.setItem(
      "isLoggedIn",
      "true"
    );

    localStorage.setItem(
      "role",
      account.role
    );

    navigate(dashboardPath);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setLoginError("");
  };

  return (
    <div>

      {/* Card */}
      <div className="relative z-10 bg-white rounded-2xl w-128 h-auto overflow-hidden shadow-2xl px-10 md:px-15 py-10">

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
        <form
          onSubmit={handleSubmit}
          className="relative z-10 flex flex-col gap-5"
        >

          {/* EMAIL */}
        <FormField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={emailPlaceholder}
          error={errors.email}
        />

          {/* PASSWORD */}
        <FormField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Masukkan password Anda"
          error={errors.password}
        />

        {loginError && (
          <div className="mt-1">
            <p className="text-red-500 text-sm">
              {loginError}
            </p>

          <button
            type="button"
            onClick={() =>
              navigate("/forget-password", {
                state: {
                loginPath,
              },
              })
            }
            className="
              text-sm
              text-bold-blue
              hover:underline
            "
          >
            Lupa Password?
          </button>
          </div>
        )}

          {/* BUTTON */}
            <Button
            label="Masuk"
            type="submit"
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

      {/* POPUP */}  
      <PopUpNotif
        isOpen={openRolePopup}
        onClose={() =>
          setOpenRolePopup(false)
        }

        icon={
          <CircleAlert
            size={90}
            className="text-yellow-500"
          />
        }

        title="Akses Ditolak"
        description={roleMessage}
      >

        <Button
          label="Ke Halaman Login"

          onClick={() => {

            setOpenRolePopup(false);

            navigate(redirectPath);

          }}
        />

      </PopUpNotif>

    </div>
  );
};

export default LoginForm;