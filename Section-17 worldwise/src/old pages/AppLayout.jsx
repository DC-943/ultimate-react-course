import AppNav from "../components/AppNav";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div>
      <AppNav />
      <Sidebar />
      <Map />
      <p>App</p>
    </div>
  );
}

export default AppLayout;
