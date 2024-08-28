import React from "react";
import sonu from "../assets/images/sonu.png";
import { useNavigate } from "react-router-dom";
export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="flex items-center justify-center">
      <section className="flex items-center justify-center flex-col gap-10">
        <h1 className="text-8xl dark:text-white">404 OOPS</h1>
        <img className="h-96" src={sonu} alt="this is pagenot found" />
        <button
          onClick={() => navigate("/")}
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-7 py-4 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Go Back to HOME
        </button>
      </section>
    </main>
  );
};
