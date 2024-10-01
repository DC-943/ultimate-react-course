/*eslint-disabled */
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; //npm install prop-types --save
export default function Button({ children, disabled, to, type, onClick }) {
  // const className =
  //   "focus:inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide ext-stone-800 ring-yellow-300 ring-offset-2 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 disabled:cursor-not-allowed sm:px-6 sm:py-4";

  const base =
    "focus:inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide ext-stone-800 ring-yellow-300 ring-offset-2 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 disabled:cursor-not-allowed";
  const styles = {
    primary: base + " px-4 py-3 sm:px-6 sm:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + "px-5.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "focus:inline-block text-sm border-2 border-stone-300 rounded-full bg-yellow-400  font-semibold uppercase tracking-wide ext-stone-800 ring-yellow-300 ring-offset-2 transition-colors duration-300 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2  focus:ring-offset-2 <focus:ring-stone-200 focus:ring-stone-200 disabled:cursor-not-allowed px-4 py-2.5 sm:px-6 sm:py-3.5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  to: PropTypes.node,
  type: PropTypes.node,
};
