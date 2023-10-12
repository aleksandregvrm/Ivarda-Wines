import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 2000);
  return (
    <div className="section-center error-center">
      <h2>There has been an error ...</h2>
    </div>
  );
};

export default Error;
