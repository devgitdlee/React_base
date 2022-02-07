import React from "react";
import Navbar from "../menu/Navbar/Navbar";

function Header() {
  return;
  <section className="header">
    <section className="header-top">
      <section className="header-top__logo">
        <a href="/" className="header-logo">
          LOGO
        </a>
      </section>
      <hr className="header-top__seperator" />
      <section className="header-top__navbar">
        <Navbar />
      </section>
    </section>
    <section className="header-bottom">
      <section className="header-bottom__phone">9999999999999</section>
      <section className="header-bottom__email">shopinfo@email.com</section>
    </section>
  </section>;
}

export default Header;
// export function HeaderContainer() {
//   return (
//     <header className="App-header">
//       <p>
//         <code>SofeWare</code>
//       </p>
//     </header>
//   );
// }
