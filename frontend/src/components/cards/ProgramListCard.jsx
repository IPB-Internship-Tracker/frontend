import { useNavigate } from "react-router-dom";
import ProgramStatus from "../ui/ProgramStatus";

const ProgramListCard = ({
    logo,
    title,
    company,
    category,
    participantInfo,
    period,
    status,
    to,
}) => {
    const navigate = useNavigate();

    return (
        <div onClick={() => to && navigate(to)} className="
            bg-white
            rounded-xl
            shadow-sm

            px-5
            py-4

            flex
            items-center
            justify-between
            hover:shadow-md
            hover:translate-y-1
            transition-all
            duration-300
            cursor-point
        "
        
        >
            {/* LEFT SECTION */}
            <div className="flex items-center gap-4">
                {/* LOGO */}
                <img
                    src={logo}
                    alt={company}
                    className="
                        w-14
                        h-14
                        object-contain
                    "
                />

                {/* TEXT SECTION */}
                <div>
                    {/* TITLE CATEGORY */}
                    <div className ="
                        flex
                        items-center
                        gap-3
                        mb-1
                    ">
                        {/* TITLE */}
                        <h2 className="
                            text-lg
                            font=semibold
                            text-gray-900
                        ">
                            {title}
                        </h2>

                        {/* CATEGORY */}
                        <div className="
                            px-3
                            py-1
                            rounded-full

                            border
                            border-kuning-tua
                            bg-kuning-muda
                            text-xs
                            font-medium
                            text-bold-blue
                        ">
                            {category}

                        </div>

                    </div>

                    {/* COMPANY */}
                    <p className="
                        text-sm
                        text-gray-700
                    ">
                        {company}
                    </p>

                    {/* PARTICIPANT */}
                    <p className="
                        text-sm
                        text-indigo-700
                        mt-1
                    ">
                        {participantInfo}

                    </p>
                </div>

            </div>

            {/* RIGHT SECTION */}
            <div className="
                flex
                flex-col
                items-end
                gap-3
            ">
                {/* PERIODE */}
                <div className="text-right">

                    <p className="
                        text-sm
                        font-medium
                        text-gray-700
                    ">
                        {period}
                    </p>

                </div>

                {/* STATUS */}
                <ProgramStatus status={status}/>

            </div>

        </div>
    )
}

export default ProgramListCard;