import { redirect } from "react-router-dom";

export function action() {
  localStorage.removeItem("token");
  console.log("must redirect to login");

  return redirect("/login");
}
