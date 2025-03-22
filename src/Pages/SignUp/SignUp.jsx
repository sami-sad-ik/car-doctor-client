import { Link } from "react-router-dom";
import img from "../../../src/assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    // const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(username, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content lg:flex-row flex-col">
          <div className="w-1/2 mr-10">
            <img src={img} alt="" />
          </div>
          <div className="card rounded-md bg-base-100 w-full max-w-sm shrink-0 border-2">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="text-5xl text-center font-bold">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="username"
                  name="username"
                  placeholder="Username"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary border-none hover:bg-[#cb492f] bg-[#FF3811]"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <p>
                Already have an account?{" "}
                <Link className="text-[#FF3811] font-bold " to={"/login"}>
                  LOGIN
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
