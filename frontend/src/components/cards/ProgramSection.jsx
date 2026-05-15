import ProgramCard from "./ProgramCard";
import NextButton from "../ui/NextButton";

const ProgramSection = ({
    sectionTitle,
    buttonTo,
    programs,
}) => {

    return (
        <div className="mb-12">

            {/* HEADER */}
            <div className="
                flex items-center justify-between
                mb-4
            ">
                {/* TITLE */}
                <h3 className="
                    text-lg
                    font-semibold
                    text-gray-900
                ">
                    {sectionTitle} {/*kayaknya ini harus disesuaikan lagi sama nanti untuk ambil apakah dia magang, kompe, stupen*/}
                </h3>

                {/* BUTTON */}
                <NextButton
                    to={buttonTo}
                    label="Selengkapnya"
                />

            </div>

            {/* CARD LIST */}
            <div className="
                flex gap-4
                overflow-x-auto
                scrollbar-hide
            ">

                {programs.map((program, index) => (
                     <ProgramCard
                        key={index}
                        logo={program.logo}
                        title={program.title}
                        company={program.company}
                        category={program.category}
                        location={program.location}
                        deadline={program.deadline}
                    />
                ))}
                
                

            </div>


        </div>
    );
};

export default ProgramSection;