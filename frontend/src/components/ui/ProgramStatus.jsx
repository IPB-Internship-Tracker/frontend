// ini status untuk program apakah registrasinya masih dibuka atau udah ditutup (mostly dipake di mitra sih)

import {
  CircleCheck,
  CircleX,
} from "lucide-react";

const ProgramStatus = ({ status }) => {

  let statusIcon;
  let statusStyle = "";

  // REGISTRASI DIBUKA
  if (status === "Registrasi Dibuka") {

    statusStyle =
      "bg-hijau-muda-status text-hijau-tua-status border-hijau-tua-status";

    statusIcon = <CircleCheck size={14} />;
  }

  // REGISTRASI DITUTUP
  else if (status === "Registrasi Ditutup") {

    statusStyle =
      "bg-merah-muda-status text-merah-tua-status border-merah-tua-status";

    statusIcon = <CircleX size={14} />;
  }

  return (

    <div
      className={`
        px-3
        py-1.5
        border
        rounded-full
        text-sm
        font-medium
        flex
        items-center
        gap-1.5
        w-fit

        ${statusStyle}
      `}
    >

      {/* ICON */}
      {statusIcon}

      {/* TEXT */}
      <span>
        {status}
      </span>

    </div>
  );
};

export default ProgramStatus;