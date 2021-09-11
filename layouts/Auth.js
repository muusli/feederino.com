/*!

=========================================================
* NextJS Argon Dashboard PRO - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { withRouter } from "next/router";
import { Toaster } from 'react-hot-toast';

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import { useUserData } from '../lib/hooks';
import { UserContext } from '../lib/context';
import routes from "routes.js";

function Auth({ children }) {
  React.useEffect(() => {
    document.body.classList.add("bg-default");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.remove("bg-default");
    };
  });
  const userData = useUserData();

  return (
    <><UserContext.Provider value={userData}>
      <div className="main-content">
        <AuthNavbar />
        {children}
        <Toaster />

      </div>
      <AuthFooter />
      </UserContext.Provider>
    </>
  );
}

export default withRouter(Auth);
