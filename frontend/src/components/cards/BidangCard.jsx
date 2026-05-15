const BidangCard = ({ icon, title }) => {
    return (
        <div className=" flex items-center bg-white border border-yellow-400 rounded-xl overflow-hidden w-70 h-25 ">

            {/* ICON SECTION */}
            <div className="h-full w-25 bg-yellow-50 flex items-center justify-center">
                {icon}
            </div>

            {/* TITLE */}
            <div className="flex-1 px-6">
                <h2 className="text-xl font-semibold justicy-center text-indigo-600">
                    {title}
                </h2>

            </div>
        </div>
    );
};

export default BidangCard;