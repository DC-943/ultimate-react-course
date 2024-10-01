import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
function header() {
  return (
    <header
      className="item-center flex justify-between  border-b
     border-stone-200 bg-yellow-500 px-4 py-4 uppercase sm:px-16"
    >
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default header;
