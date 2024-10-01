import { useSelector } from "react-redux";
function Username() {
  const username = useSelector((state) => state.user.username);
  console.log("in username get username is:", username);

  if (!username) return null;
  return <div className="text-sm font-semibold md:block">{username}</div>;
}

export default Username;
