import {MapPin} from "lucide-react";

const ProgramCard = ({
    logo,
    title,
    company,
    category,
    location,
    deadline
}) => {
    return (
        <div className="
            bg-white
            rounded-xl
            shadow-sm
            p-4
            min-w-[250px]
            hover:shadow-lg
            hover:-translate-y-1
            hover:bg-indigo-100

            transition-all
            duration-300
            cursor-pointer">

            {/* TOP SECTION */}
            <div className="flex items-start gap-4">
                {/* LOGO */}
                <img
                    src={logo}
                    alt={company}
                    className="w-10 h-10 object-contain"
                />

                {/* TEXT */}
                <div>
                    {/* TITLE */}
                    <h2 className="text-md font-semibold text-gray-900">
                        {title}
                    </h2>

                    {/* COMPANY */}
                    <p className="text-sm text-gray-700">
                        {company}
                    </p>
                </div>

            </div>

            <div className=
                "border-b border-indigo-200 my-3">
            </div>

            {/* CATEGORY BIDANG */}
            <div className="
                inline-block
                px-3 py-1
                bg-yellow-100
                border
                border-yellow-400
                rounded-full
                text-xs
                text-indigo-700
                mb-3
                ">    
                {category} {/* nanti disesuaikan sm be nya apa */}
            </div>

            {/* BOTTOM SECTION */}
            <div className="flex items-end justify-between">

                {/* LOCATION */}
                <div className =
                "flex items-center gap-1 text-xs text-gray-700">

                    <MapPin size={12}/>
                    <span> {location} </span>
                </div>

                {/* DEADLINE */}
                <div className="text-right">

                    <p className="text-xs text-indigo-600">
                         Batas Pendaftaran 
                    </p>
                    <p className="text-xs font-semibold text-indigo-700">
                        {deadline}
                    </p>

                </div>

            </div>


        </div>
    );
};

export default ProgramCard;