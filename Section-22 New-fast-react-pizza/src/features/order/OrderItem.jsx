import { formatCurrency } from "../../utils/helpers";
//import PropTypes from "prop-types";

/*eslint-disable no-unused-vars*/
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic tracking-wider text-stone-500">
        {isLoadingIngredients ? "Loading..." : ingredients?.join(",")}
      </p>
    </li>
  );
}

// OrderItem.propTypes = {
//   item: PropTypes.obj,
//   quantity: PropTypes.node,
//   name: PropTypes.node,
//   totalPrice: PropTypes.node,
//   isLoadingIngredients: PropTypes.node,
//   ingredients: PropTypes.node,
// };

export default OrderItem;