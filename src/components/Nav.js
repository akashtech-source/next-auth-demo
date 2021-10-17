import { signOut, useSession } from "next-auth/client";
import React from "react";

const Nav = () => {
  const [session, loading] = useSession();

  if (!session) return null;
  return (
    <div>
      <h1>{session.user.name}</h1>
      <img src={session.user.image} alt="" />
      <button className="text-white bg-red-400 p-2" onClick={() => signOut()}>
        Logout
      </button>
    </div>
  );
};

export default Nav;
