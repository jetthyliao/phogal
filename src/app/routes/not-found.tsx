import { useNavigate } from "react-router";

const NotFoundRoute = () => {
  const navigate = useNavigate();

  return (
    <p>This is not the page u are looking for</p>
  );
};

export default NotFoundRoute;
