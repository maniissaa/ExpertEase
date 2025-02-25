import React from "react";
import { Link } from 'react-router-dom';

function LoginOpen() {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box  dark:bg-slate-800 dark:text-white">
          <form method="dialog ">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-indigo-700">
              ✕
            </button>
          </form>
          <h3 className="font-bold font-serif text-indigo-700 hover:text-indigo-500 text-2xl">
            Login
          </h3>
          <div className="mt-8 font-serif flex justify-center flex-col items-center">
            <div className="">
              <label htmlFor="email">Email </label>
              <br />
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-80 h-10 px-3 border rounded outline-none focus:shadow dark:text-black"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="pass">Password </label>
              <br />
              <input
                id="pass"
                type="password"
                placeholder="Enter your password"
                className="w-80 h-10 px-3 border rounded outline-none focus:shadow dark:text-black"
              />
            </div>

            <div>
                <button className="mt-5 bg-indigo-800 hover:bg-indigo-600 text-white px-4 py-1 rounded-lg">Login</button>
                <p className="mt-2">Not Registered? <Link className="underline dark:hover:text-lime-500" to='/signup'>Sign-up</Link> now to get started!</p>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default LoginOpen;
