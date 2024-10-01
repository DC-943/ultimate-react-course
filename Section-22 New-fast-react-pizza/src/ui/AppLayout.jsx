import CartOverview from "../features/cart/CartOverview";
import React from "react";
import Header from "./Header";
import Loader from "./Loader";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  console.log(navigation);
  return (
    <div className="grid-row-[auto_1fr_auto] grid h-screen  ">
      {isLoading && <Loader />}

      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          {/* <h1>Content</h1> */}
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
