import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormField from "./FormField";
import daunIpb from "../../assets/daun-ipb.png";
import Button from "../ui/Button";
import PopUpNotif from "../ui/PopUpNotif";
import { CircleCheck } from "lucide-react";

const ForgetPasswordForm = ({
  emailPlaceholder = "Masukkan email",
  loginPath,
}) => {

    const [openPopup, setOpenPopup] =
    useState(false);

    const [formData, setFormData] = useState({
    email: "",
    });
    
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        if (!formData.email) {
            newErrors.email =
            "Email wajib diisi.";
        } else if (
            !/\S+@\S+\.\S+/.test(formData.email)
        ) {
            newErrors.email =
            "Format email tidak valid.";
        }
        setErrors(newErrors);
        return (
            Object.keys(newErrors).length === 0
        );
        };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        console.log(
            "SEND RESET PASSWORD EMAIL"
        );
        setOpenPopup(true);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrors({});
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
          Lupa Password
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

          {/* BUTTON */}
            <Button
            label="Kirim email"
            type="submit"
            className="w-auto md:w-[200px] self-center mt-8"
            />

        </form>

        <PopUpNotif
            isOpen={openPopup}
            onClose={() =>
                setOpenPopup(false)
            }

            icon={
                <CircleCheck
                size={90}
                className="text-green-600"
                />
            }

            title="Email Terkirim"

            description="
                Silakan cek email Anda untuk
                melakukan reset password.
            "
            >

            <Button
            label="Kembali ke Login"
            onClick={() => {
                setOpenPopup(false);
                navigate(loginPath);
            }}
            />

        </PopUpNotif>
      </div>
    </div>
  );
};

export default ForgetPasswordForm;