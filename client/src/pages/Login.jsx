import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <>
      <section className="  pl-[10rem] flex flex-wrap">
        <div className="mr-[4rem] mt-[5rem]">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>

          <form onSubmit={submitHandler} className="container w-[40rem]">
            <div className=" my-[2rem]">
              <label
                htmlFor="email"
                className=" block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className=" my-[2rem]">
              <label
                htmlFor="password"
                className=" block text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter  your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem]"
              type="submit"
            >
              Login
            </button>
          </form>
          <div className="mt-4">
            <p className="text-white">
              Already have an account?{" "}
              <Link to="/register" className="text-pink-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
