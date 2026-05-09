const FormField = ({
  label,
  type = "text",
  placeholder,
  options = [],
}) => {

  return (
    <div>

      {/* LABEL */}
      <label className="text-left block text-bold-blue text-md font-bold mb-2">
        {label}
      </label>

      {/* SELECT */}
      {type === "select" ? (

        <select
          className="
            w-full
            rounded-lg
            border
            border-light-blue
            bg-light-blue-2
            px-4
            py-2
            text-md
            text-bold-blue
            focus:outline-none
            focus:ring-1
            focus:ring-light-blue
          "
        >

          <option value="">
            {placeholder}
          </option>

          {options.map((option, index) => (

            <option
              key={index}
              value={option}
            >
              {option}
            </option>

          ))}

        </select>

      ) : (

        /* INPUT */
        <input
          type={type}
          placeholder={placeholder}
          className="
            w-full
            rounded-lg
            border
            border-light-blue
            bg-light-blue-2
            px-4
            py-2
            text-md
            text-bold-blue
            placeholder:text-light-blue
            placeholder:font-light
            focus:outline-none
            focus:ring-1
            focus:ring-light-blue
          "
        />

      )}

    </div>
  );
};

export default FormField;