import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormField from "./FormField";
import daunIpb from "../../assets/daun-ipb.png";
import Button from "../ui/Button";
import PopUpNotif from "../ui/PopUpNotif";
import { CircleCheck } from "lucide-react";

const NewPasswordForm = ({
  emailPlaceholder = "Masukkan email",
  loginPath,
}) => {

    const [openPopup, setOpenPopup] =
    useState(false);

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });
    
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        if (!formData.password) {
            newErrors.password =
            "Password wajib diisi.";
        } else if (
            formData.password.length < 8
        ) {
            newErrors.password =
            "Password minimal 8 karakter.";
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword =
            "Konfirmasi password wajib diisi.";
        } else if (
            formData.password !==
            formData.confirmPassword
        ) {
            newErrors.confirmPassword =
            "Password tidak sama.";
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
            "UPDATE PASSWORD"
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
          Buat Password Baru
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="relative z-10 flex flex-col gap-5"
        >

        <FormField
        label="Password Baru"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Masukkan password baru"
        error={errors.password}
        />

        <FormField
        label="Konfirmasi Password"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Masukkan ulang password"
        error={errors.confirmPassword}
        />

          {/* BUTTON */}
            <Button
            label="Simpan"
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

            title="Password Berhasil Diperbarui"

            description="
            Password baru berhasil disimpan.
            Silakan login menggunakan password baru Anda.
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

export default NewPasswordForm;