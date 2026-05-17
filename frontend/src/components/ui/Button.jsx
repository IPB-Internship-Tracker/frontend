import { useNavigate } from "react-router-dom";

const Button = ({
  label = "Button",
  to,
  onClick,
  type = "button",
  className = "",
  iconOnly = false,
}) => {

  const navigate = useNavigate();

  const handleClick = () => {

    // kalau ada onClick
    if (onClick) {
      onClick();
    }

    // kalau ada path navigate
    if (to) {
      navigate(to);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`
      transition
      duration-300
      font-bold

      ${
        iconOnly
          ? `
            p-2
            rounded-xl
            flex
            items-center
            justify-center
          `
          : `
            bg-kuning-tua
            hover:bg-bold-blue
            hover:text-white
            text-bold-blue
            text-md
            px-10
            py-2
            rounded-full
          `
      }

      ${className}
    `}
        >
      {label}
    </button>
  );
};

export default Button;
          
          
