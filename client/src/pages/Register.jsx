import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = () => {
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
  };

  return (
    <>
      <section className="  pl-[10rem] flex flex-wrap">
        <div className="mr-[4rem] mt-[5rem]">
          <h1 className="text-2xl font-semibold mb-4">Register</h1>

          <form onSubmit={submitHandler} className="container w-[40rem]">
            <div className=" my-[2rem]">
              <label
                htmlFor="name"
                className=" block text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
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
            <div className=" my-[2rem]">
              <label
                htmlFor="conformPassword"
                className=" block text-sm font-medium text-white"
              >
                Conform Password
              </label>
              <input
                type="password"
                id=" conformPassword"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Conform password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem]"
              type="submit"
            >
              Register
            </button>
          </form>
          <div className="mt-4">
            <p className="text-white">
              Already have an account?{" "}
              <Link to="/login" className="text-pink-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
