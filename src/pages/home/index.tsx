import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const Home = () => {
  const { email, password } = useSelector(
    (state: RootState) => state.auth.login
  );

  const state = useSelector((state: RootState) => state);

  console.log("email ,", state);

  return (
    <div className="flex justify-center items-center text-lg">
      {email} {password}
    </div>
  );
};

export default Home;
