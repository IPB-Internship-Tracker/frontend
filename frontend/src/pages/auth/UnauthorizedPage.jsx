import { CircleAlert } from "lucide-react";
import Button from "../../components/ui/Button";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

const UnauthorizedPage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const reason =
    location.state?.reason;

    const role =
    location.state?.role;

    let backPath = "/select-role";

    if (reason === "wrong-role") {

    if (
        role === "Mahasiswa IPB"
    ) {
        backPath =
        "/dashboard-mahasiswa";
    }

    if (
        role === "Mitra"
    ) {
        backPath =
        "/dashboard-mitra";
    }
    }

  return (
    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-50
    ">

      <div className="
        bg-white
        rounded-2xl
        shadow-lg
        p-8
        text-center
        max-w-md
      ">

        <CircleAlert
          size={80}
          className="
            mx-auto
            text-red-500
            mb-4
          "
        />

        <h1 className="
          text-2xl
          font-bold
          text-bold-blue
          mb-3
        ">
          Akses Ditolak
        </h1>

        <p className="
          text-gray-600
          mb-6
        ">
          Anda tidak diizinkan untuk
          mengakses halaman ini.
        </p>

        <Button
        label="Kembali"
        onClick={() =>
            navigate(backPath)
        }
        />

      </div>

    </div>
  );
};

export default UnauthorizedPage;