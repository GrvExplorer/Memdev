import { BrandLogo } from "../components";
import { footer_pages, footer_useful, logo } from "../utils/constant";

function Footer() {
  return (
    <footer className="bg-part">
     <div className=" padding max-w-9xl mx-auto flex justify-between">
     <div className=" flex   gap-20 xl:gap-40">
        <div>
          <p className="head text-xl">Pages</p>
          <ul className="pt-4">
            {footer_pages.map((page, i) => (
              <li className="text" key={`${page}-${i}`}>
                <a href="">{page.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="head text-xl">Useful Articles</p>
          <ul className="pt-4">
            {footer_useful.map((page, i) => (
              <li className="text" key={`${page}-${i}`}>
                <a href="">{page.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-end justify-center ">
        <BrandLogo logo={logo} />
        <p className="text-sm font-medium tracking-wider text-text underline ">
          contact@mem.dev
        </p>
        <p className="text-end text-sm font-medium tracking-wider text-text">
          &copy; 2023 mem.dev All rights reserved.
        </p>
      </div>
     </div>
    </footer>
  );
}

export default Footer;
