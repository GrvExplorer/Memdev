import { BrandLogo } from "../components";
import { logo, navigation } from "../utils/constant";

function Navbar() {
  return (
   <header className="mx-auto max-w-10xl">
     <nav className="flex items-center justify-between padding">
      <div className="flex items-center gap-10">
        <BrandLogo logo={logo} />
        <ul className="hidden gap-6 md:flex">
          {navigation.map(({ name }, i) => (
            <li className="text" key={i}>
              <a href="">{name}</a>
            </li>
          ))}
        </ul>

      </div>

      <div className="">
        <p className="text">
          <a href="">My Account</a>
        </p>
      </div>
    </nav>
   </header>
  );
}

export default Navbar;
