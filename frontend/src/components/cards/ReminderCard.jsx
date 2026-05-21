import { useNavigate } from "react-router-dom";

const ReminderCard = ({
    title,
    program,
    deadline,
    draft,
    status,
    to,
}) => {

    const navigate = useNavigate();
    
    return (
        <div onClick={()=> to && navigate(to)}
        className=
            "flex items-start justify-between w-full border-b border-gray-200 pb-4">
            
            {/* LEFT SECTION */}
            <div className="flex items-start gap-3">

                {/* CIRCLE */}
               <div className="w-4 h-4 min-w-4 min-h-4 rounded-full border-1 border-gray-400 mt-1">
               </div>

                {/* TEXT */}
                <div>
                    {/* TITLE */}
                    <h2 className="text-md font-semibold text-gray-900">
                        {title}
                    </h2>
                    {/* PROGRAM */}
                    <p className="text-sm text-gray-700">
                        {program}
                    </p>
                </div>

                

            </div>

            {/* DEADLINE */}
            <p className="text-sm text-gray-700 whitespace-nowrap">
                {deadline}
            </p>

            <button onClick={()=> to && navigate(to)} className="
                text-sm
                text-bold-blue
                whitespace-nowrap
                hover:underline
            ">
                {status}
            </button>

        </div>
    );
};

export default ReminderCard;

