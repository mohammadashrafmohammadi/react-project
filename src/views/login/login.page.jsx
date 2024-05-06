import { useAuthStore } from "../../store/auth.store";
import { Navigate } from "react-router-dom";

export function LoginPage() {
  const { isLoggedIn, token, login } = useAuthStore();

  if (isLoggedIn && token) {
    return <Navigate to={"/"} replace />;
  }
  return (
    <div>
      <div className="font-bold p-5">LoginPage</div>
      <br />
      <br />
      <button
        className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300
          ring-2 shadow-lg ring-blue-600 ring-inset border-solid  border-2 border-slate-100 border-inherit 
          rounded-md ps-3 pb-1 pt-1 pe-3 m-2 mb-4 ms-5 mt-0"
        type="button"
        onClick={() => login({ user: "Ali", token: "Entered" })}
      >
        {" "}
        Login{" "}
      </button>
    </div>
  );
}
