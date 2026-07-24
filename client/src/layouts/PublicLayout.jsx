// import { Outlet } from "react-router-dom";
// import Header from "../components/layout/Header";
// import Footer from "../components/layout/Footer";

// const PublicLayout = () => {
//   return (
//     <>
//       <Header />

//       <main>
//         <Outlet />
//       </main>

//       <Footer />
//     </>
//   );
// };

// export default PublicLayout;

// src/layouts/PublicLayout.jsx

import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "./PublicLayout.css";

const PublicLayout = () => {
  return (
    <>
     

      <Header />

      <main id="main-content" role="main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default PublicLayout;