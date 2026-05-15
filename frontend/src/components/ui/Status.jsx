import {
    CheckCheck,
    CircleX,
    Contact,
    FileClock,
} from "lucide-react";

const Status = ({ status }) => {

    let statusIcon;
    let statusStyle = "";

    // DITERIMA
    if (status === "Diterima") {

        statusStyle =
            "bg-green-100 text-green-700 border-green-500";

        statusIcon = <CheckCheck size={14} />;
    }

    // DITOLAK
    else if (status === "Ditolak") {

        statusStyle =
            "bg-red-100 text-red-700 border-red-500";

        statusIcon = <CircleX size={14} />;
    }

    // WAWANCARA
    else if (status === "Wawancara") {

        statusStyle =
            "bg-blue-100 text-blue-700 border-blue-500";

        statusIcon = <Contact size={14} />;
    }

    // DEFAULT = TELAH MENDAFTAR
    else {

        statusStyle =
            "bg-yellow-100 text-yellow-700 border-yellow-500";

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

export default Status;