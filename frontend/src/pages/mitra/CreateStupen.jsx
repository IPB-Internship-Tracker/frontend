import BackButton from "../../components/ui/BackButton";
import CreateProgramForm from "../../components/forms/CreateProgramForm";

const CreateStupen = () => {

  return (

    <div className="flex flex-col items-center py-5">

      <div className="w-full max-w-4xl mb-5">

        <BackButton
          color="text-bold-blue"
          position="relative"
          to="/dashboard-mitra"
        />

      </div>

      <CreateProgramForm
        title="Program Studi Independen"
      />

    </div>
  );
};

export default CreateStupen;