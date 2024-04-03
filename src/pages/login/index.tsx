import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginI, updateLoginDetails } from "@/redux/reducer";
import { RootState } from "@/redux/store";

const LoginButton = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userRedux = useSelector((state: RootState) => state.auth.user);

  const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && !isLoading && user && userRedux.email.length === 0) {
      dispatch(updateLoginDetails({ user: user as LoginI }));

      navigate("/profile");
    }
  }, [isAuthenticated]);

  return (
    <div>
      <div>
        <h2>Welcome back</h2>
        <Button onClick={() => loginWithRedirect()}>Log In</Button>
      </div>
    </div>
  );
};

export default LoginButton;
