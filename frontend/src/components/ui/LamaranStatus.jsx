// ini status untuk melihat status lamaran mahasiswa apakah diterima, ditolak, telah mendaftar, atau wawancara

import {
    CheckCheck,
    CircleX,
    Contact,
    FileClock,
} from "lucide-react";

const LamaranStatus = ({ status }) => {

    let statusIcon;
    let statusStyle = "";

    // DITERIMA
    if (status === "Diterima") {

        statusStyle =
            "bg-hijau-muda-status text-hijau-tua-status border-hijau-tua-status";

        statusIcon = <CheckCheck size={14} />;
    }

    // DITOLAK
    else if (status === "Ditolak") {

        statusStyle =
            "bg-merah-muda-status text-merah-tua-status merah-tua-status";

        statusIcon = <CircleX size={14} />;
    }

    // WAWANCARA
    else if (status === "Wawancara") {

        statusStyle =
            "bg-biru-muda-status text-biru-tua-status border-biru-tua-status";

        statusIcon = <Contact size={14} />;
    }

    // DEFAULT = TELAH MENDAFTAR
    else {

        statusStyle =
            "bg-kuning-muda-status text-kuning-tua-secondary border-kuning-tua-secondary";

        statusIcon = <FileClock size={14} />;
    }

    return (

        <div
            className={`
                px-2 py
                border
                rounded-full
                text-sm
                font-medium
                flex items-center gap-1
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

export default LamaranStatus;