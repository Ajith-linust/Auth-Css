import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import PasswordInput from "../common/passwordInput";
import { useDispatch } from "react-redux";
import { updateLoginDetails } from "@/redux/reducer";
import { useNavigate } from "react-router";

const Login = ({ className }: { className?: string }) => {
  const navigate = useNavigate();

  const loginDetailsRefs = useRef({
    email: useRef<HTMLInputElement | null>(null),
    password: useRef<HTMLInputElement | null>(null),
  });

  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const [showPasssword, setShowPassword] = useState(false);

  // Clear the error message
  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  const submitHandler = (e: any) => {
    e.preventDefault();

    const email = loginDetailsRefs.current.email.current?.value || "";
    const password = loginDetailsRefs.current.password.current?.value || "";

    if (email.length === 0) return setError("Please enter a email");

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) return setError("Email is valid.");

    // Password validation criteria
    const isValidPassword = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/.test(
      password
    );

    if (isValidPassword) {
      setError("");
      // Redirect or do other actions after successful login
    } else {
      setError("Password: 8+ characters, 1 uppercase, 1 symbol");
    }

    // update redux state
    dispatch(
      updateLoginDetails({
        email,
        password,
      })
    );

    // after successful login navigate to home
    navigate("/");
  };

  return (
    <form
      onSubmit={submitHandler}
      className={cn(className, "absolute w-full h-full top-0 left-0")}
    >
      <h2 className="text-lg font-semibold mb-3">Welcome back</h2>

      <Label className="text-gray-500">Email</Label>
      <Input
        ref={loginDetailsRefs.current.email}
        placeholder="Enter email"
        className="placeholder:text-gray-300"
      />
      <Label className="text-gray-500 mt-4 mb-1 block">Password</Label>
      <PasswordInput
        ref={loginDetailsRefs.current.password}
        showPasssword={showPasssword}
        eyeHandler={() => setShowPassword((p) => !p)}
        placeholder="Enter confirm password"
      />
      <p className="text-right text-xs text-gray-600 mt-2 cursor-pointer hover:text-gray-400">
        Forgot password?
      </p>
      <Button type="submit" className="mt-4">
        Login
      </Button>
      {!!error.length && <p className="text-red-500 text-sm mt-3">{error}</p>}
    </form>
  );
};

export default Login;
