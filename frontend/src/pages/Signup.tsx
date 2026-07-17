import AuthLayout from "@/features/authentication/AuthLayout";
import SignupForm from "@/features/authentication/SignupForm";
import { Link } from "react-router";

function Signup() {
  return (
    <AuthLayout>
      <>
        <div>
          <h1>Join our cozy space!</h1>
          <p className="font-san text-xl">
            Create an account to start chatting
          </p>
          <SignupForm />
        </div>
        <p className="mt-4 flex justify-center gap-2">
          Already have an account?
          <Link to="/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </>
    </AuthLayout>
  );
}
export default Signup;
