import React from "react";
import { Link } from "react-router-dom";
import PublicLayout from "../Layout/PublicLayout";

function Home(props) {
  return (
    <PublicLayout>
      <div className="flex flex-col items-center justify-center text-center text-white">
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight md:text-6xl">
          Welcome To PowerByte
        </h1>
        <p className="mb-8 text-xl font-light text-gray-200 md:text-2xl">
          We are pleased to welcome you
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/login"
            className="px-8 py-3 text-lg font-semibold text-gray-900 transition-colors bg-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-8 py-3 text-lg font-semibold text-white transition-colors bg-transparent border-2 border-white rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </PublicLayout>
  );
}

export default Home;
