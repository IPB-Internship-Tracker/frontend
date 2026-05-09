import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = ({
  to = "/",
  label = "Kembali",
}) => {

  const navigate = useNavigate();

  return (
    <div className="absolute top-10 left-10">

      <button
        onClick={() => navigate(to)}
        className="flex items-center gap-2 text-white text-md hover:underline"
      >
        <ArrowLeft
          size={20}
          className="text-white"
        />

        {label}
      </button>

    </div>
  );
};

export default BackButton;