import CreateMagangForm from "../../components/forms/CreateMagangForm";
import BackButton from "../../components/ui/BackButton";

const CreateMagang = () => {
  return (

    <div className="flex flex-col items-center py-5">

      <div className="w-full max-w-4xl mb-5">
        <BackButton
          color="text-bold-blue"
          position="relative"
        />
      </div>
      
      <CreateMagangForm />
    </div>

  );
};

export default CreateMagang;