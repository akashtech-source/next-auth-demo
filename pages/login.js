import React, { useEffect } from "react";
import { providers, getSession } from "next-auth/client";
import BtnLogin from "../src/components/BtnLogin";
import Router from "next/router";

const Login = ({ providers, session }) => {
  useEffect(() => {
    if (session) return Router.push("/");
  }, [session]);

  if (session) return null;
  return (
    <div className="" style={{ minHeight: "100vh" }}>
      <div style={{ maxWidth: "450px", width: "100%" }} className="">
        <h2 className="text-4xl border text-center shadow mx-auto">
          Brackets Login
        </h2>
      </div>
      <br />
      <div>
        <BtnLogin
          provider={providers.google}
          className="bg-green-500 text-white p-3 mb-3"
        />
        <BtnLogin
          provider={providers.facebook}
          className="bg-purple-500 text-white p-3 mb-3"
        />
        <BtnLogin
          provider={providers.github}
          className="bg-gray-800 text-white p-3 mb-3"
        />
      </div>
    </div>
  );
};

Login.getInitialProps = async (context) => {
  return {
    providers: await providers.apply(context),
    session: await getSession(context),
  };
};

export default Login;
