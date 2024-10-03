import { useNavigate, Link } from "react-router-dom";
import PropTypes from "prop-types";
function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = "text-sm text-blue-500 hover:underline";

  if (to === "-1")
    return (
      <button className="className" onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
LinkButton.propTypes = {
  children: PropTypes.node,
  to: PropTypes.node,
};

export default LinkButton;