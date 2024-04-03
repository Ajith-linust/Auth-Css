import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import PasswordInput from "../common/passwordInput";

const Signup = React.forwardRef<HTMLFormElement>((_, ref) => {
  const [passwordDetails, setPasswordDetails] = useState({
    showPassword: false,
    showConfirmPassword: false,
  });

  const submitHandler = () => {};

  return (
    <form
      ref={ref}
      className="z-50 relative bg-background transition-all duration-500"
    >
      <h2 className="text-lg font-semibold mb-3">Sign Up & Dive In</h2>

      <Label className="text-gray-500">Email</Label>
      <Input placeholder="Enter email" className="placeholder:text-gray-300" />
      <Label className="text-gray-500 mt-4 mb-1 block">Password</Label>
      <PasswordInput
        showPasssword={passwordDetails.showPassword}
        eyeHandler={() =>
          setPasswordDetails((p) => ({
            ...passwordDetails,
            showPassword: !p.showPassword,
          }))
        }
      />
      <Label className="text-gray-500 mt-4 mb-1 block">Confirm Password</Label>
      <PasswordInput
        showPasssword={passwordDetails.showConfirmPassword}
        eyeHandler={() =>
          setPasswordDetails((p) => ({
            ...passwordDetails,
            showPassword: !p.showConfirmPassword,
          }))
        }
        placeholder="Enter confirm password"
      />
      <Button onClick={submitHandler} className="mt-5">
        Sign up
      </Button>
    </form>
  );
});

export default Signup;
