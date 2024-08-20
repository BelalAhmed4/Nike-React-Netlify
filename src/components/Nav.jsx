import { navLinks } from "../constants/index";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
const Nav = () => {
  return (
    <header className="w-full padding-x py-8 absolute z-10 ">
      <nav className="flex items-center justify-between max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="max-lg:hidden flex flex-1 justify-center items-center gap-16">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                className="font-montserrat leading-normal text-lg  text-slate-gray"
                href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="max-lg:block hidden">
          <img src={hamburger} alt="Hamburger" height={25} width={25} />
        </div>
      </nav>
    </header>
  );
};
export default Nav;
