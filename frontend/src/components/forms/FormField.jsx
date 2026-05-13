const FormField = ({
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  error,
  options = [],
  min,
  max,
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
        name={name}
        value={value}
        onChange={onChange}
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
          ">

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

  <>
  
    {/* INPUT */}
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min={min}
      max={max} 
      className={`
        w-full
        rounded-lg
        border
        px-4
        py-2
        text-md
        bg-light-blue-2
        text-bold-blue
        placeholder:text-light-blue
        placeholder:font-light
        placeholder:italic
        focus:outline-none
        focus:ring-1

        ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-light-blue focus:ring-light-blue"
        }
      `}
    />

    {error && (
      <p className="text-left font-regular italic text-red-500 text-sm mt-1">
        {error}
      </p>
    )}

  </>

)}

    </div>
  );
};

export default FormField;