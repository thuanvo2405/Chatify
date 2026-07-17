import AuthLayout from "@/features/authentication/AuthLayout";
import LoginForm from "@/features/authentication/LoginForm";
import { Link } from "react-router";

function Login() {
  return (
    <AuthLayout>
      <h1>Welcome back</h1>
      <p>Please enter your detail to sign in</p>
      <LoginForm />
      <p className="font-san text-xl">
        Don't have an account?{" "}
        <Link to="/signup" className="text-primary font-semibold">
          Create an account
        </Link>
      </p>
      <div className="flex items-center justify-center">
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Contact Support</p>
      </div>
    </AuthLayout>
  );
}

export default Login;
