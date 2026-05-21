const FilterButton = ({
    label,
    active,
    onClick,
}) => {

    return (

        <button
            onClick={onClick}
            className={`
                px-5
                py-2
                rounded-full
                text-sm
                font-medium
                border
                transition-all
                duration-300

                ${
                    active
                    ? `
                        bg-bold-blue
                        text-white
                        border-bold-blue
                    `
                    : `
                        bg-white
                        text-bold-blue
                        border-bold-blue
                        hover:bg-light-blue-2
                    `
                }
            `}
        >
            {label}
        </button>

    );
};

export default FilterButton;