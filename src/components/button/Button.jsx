import { Link } from "react-router-dom";
import './styles.css';

const Button = ({ text, link, type = "button", onClick, variant = "red" }) => {
  const validVariants = ["red", "black"];
  const appliedVariant = validVariants.includes(variant) ? variant : "red";

  const className = `btn animate-on-scroll fade-left ${appliedVariant}-variant`;

  if (link) {
    return (
      <Link to={link} className={className}>
        {text}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
