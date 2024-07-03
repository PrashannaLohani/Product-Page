import { Outlet } from "react-router-dom";
import Appbar from "./Appbar";

export default function RootLayout() {
  return (
    <>
      <Appbar />
      <Outlet />
    </>
  );
}
