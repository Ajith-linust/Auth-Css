import { useSelector } from "react-redux";
import getDurationFromDate from "@/generics/date";
import { RootState } from "@/redux/store";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { logout } = useAuth0();

  const { email, given_name, family_name, picture, updated_at } = useSelector(
    (state: RootState) => state.auth.user
  );

  if (given_name.length === 0)
    return (
      <Link to={"/"}>
        <Button>Please Login</Button>
      </Link>
    );

  return (
    <div className="flex flex-col justify-center items-center text-lg">
      {/* {email} {password} */}
      <section className="flex font-medium items-center justify-center h-max mb-5">
        <section className="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">
              {getDurationFromDate(updated_at)}
            </span>
            <span className="text-emerald-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </span>
          </div>
          <div className="mt-6 w-fit mx-auto">
            <img
              src={picture}
              className="rounded-full w-28 "
              alt="profile picture"
            />
          </div>

          <div className="mt-8 ">
            <h2 className="text-white font-bold text-2xl tracking-wide">
              {given_name} <br /> {family_name}
            </h2>
          </div>
          <p className="text-emerald-400 font-semibold mt-2.5">{email}</p>
        </section>
      </section>

      <Button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Logout
      </Button>
    </div>
  );
};

export default Profile;
