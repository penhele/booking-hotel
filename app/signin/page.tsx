import { LoginGoogleButton } from "@/components/loginButton";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign In",
};

function SignInPage() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="bg-white w-96 mx-auto rounded-sm shadow p-8">
        <h1 className="text-4xl font-bold mb-1">Sign In</h1>
        <p className="font-medium mb-5 text-gray-500">Sign in to your acount</p>

        <div className="p-4 text-center">
          <LoginGoogleButton />
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
