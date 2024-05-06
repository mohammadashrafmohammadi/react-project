import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";
export function Dashboard() {
  const { token, logout } = useAuthStore();

  return (
    <>
      {token ? (
        <>
          <Link className="text-blue-600 underline" to="/posts">
            Posts
          </Link>
          <div className="font-bold p-5">Dashboard</div>
          <br />
          <button
            className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300
          ring-2 shadow-lg ring-blue-600 ring-inset border-solid  border-2 border-slate-100 border-inherit 
          rounded-md ps-3 pb-1 pt-1 pe-3 m-2 mb-4 ms-5 mt-0"
            type="button"
            onClick={logout}
          >
            logout
          </button>
        </>
      ) : (
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          quibusdam deserunt distinctio, asperiores reprehenderit ratione iure
          veniam itaque vitae rem maxime laborum quod, facere eveniet minus eos
          hic exercitationem quisquam!
        </div>
      )}
    </>
  );
}
