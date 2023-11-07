import React from "react";

const UserInfo = () => {
  return (
    <div className="grid place-content-center h-screen">
      <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
      <span className="font-bold text-lg">User Details</span>
        <div>
          Name: <span className="font-bold">Hi</span>
        </div>
        <div>
          Email : <span className="font-bold">hi@gmail.com</span>
        </div>
        <button className="bg-red-500 text-white font-bold px-6 py-2 mt-3 rounded">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
