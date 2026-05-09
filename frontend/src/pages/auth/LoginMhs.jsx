import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/bg-ahn.png";
import Logo from "../../components/common/Logo";
import LoginForm from "../../components/forms/LoginForm";

const LoginMhs = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-bold-blue via-bold-blue/80 to-bold-blue/40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 items-center max-w-3xl">
      
        <LoginForm />

        

        </div>
        
      </div>
      
  );
};

export default LoginMhs;