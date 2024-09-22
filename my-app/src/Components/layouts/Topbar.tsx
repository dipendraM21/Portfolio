import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Text } from "theme-ui";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Works", href: "#" },
  { name: "About", href: "#" },
  { name: "Resume", href: "#" },
];

const CustomNavbar = () => {
  const [activeNavItem, steActiveNavItems] = useState("Home");
  const handleClickTetx = (text: string) => {
    steActiveNavItems(text);
  };
  console.log("check18", activeNavItem);

  return (
    <nav className="navbar navbar-expand-lg p-0">
      <div className="container py-3 d-flex align-items-center justify-content-between">
        <Link href="/" className="navbar-brand">
          <Image src="" alt="logo" className="logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto nav-item-flex-container  list-unstyled mb-0 justify-content-center">
            {navItems.map((item, key) => (
              <li className="nav-item" key={key}>
                <Link href={item.href} className="text-decoration-none">
                  <Text
                    variant={
                      activeNavItem === item?.name
                        ? "Secondary16Demi125"
                        : "Secondary16Medium125"
                    }
                    onClick={() => {
                      handleClickTetx(item?.name);
                    }}
                  >
                    {item.name}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex justify-content-end mt-2 mt-lg-0">
            <button className="btn btn-dark">Get in touch</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
