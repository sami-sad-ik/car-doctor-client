import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../src/assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
// axios.defaults.withCredentials = true;

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const user = { email };
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((data) => {
            console.log(data.data);
            if (data.data.success) {
              navigate(location?.state || "/");
            }
          });
        form.reset();
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
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-5xl text-center font-bold">Login</h1>
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
                  value="Login"
                />
              </div>
              <p>
                Don&apos;t have an account?{" "}
                <Link className="text-[#FF3811] font-bold " to={"/signup"}>
                  SIGNUP
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
