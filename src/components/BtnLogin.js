import { signIn } from "next-auth/client";
import React from "react";

const BtnLogin = ({ provider, className, textColor }) => {
  return (
    <div>
      <button
        className={`${className} ${textColor}`}
        onClick={() => signIn(provider.id)}
      >
        Sign in With {provider.name}
      </button>
    </div>
  );
};

BtnLogin.defaultProps = {
  textColor: "#eee",
};

export default BtnLogin;
