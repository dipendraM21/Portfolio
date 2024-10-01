import { formatPath } from "@/utils/formatPathName";
import { translation } from "@/utils/translations";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Text } from "theme-ui";
import { ThemeButton } from "../core/Button/ThemeButton";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
];

const CustomNavbar = () => {
  const pathname = usePathname();
  const currentPath = formatPath(pathname);
  const [activeNavItem, steActiveNavItems] = useState<string | null>(
    "Home" || pathname
  );
  const handleClickTetx = (text: string) => {
    steActiveNavItems(text);
  };

  useEffect(() => {
    if (currentPath) {
      steActiveNavItems(currentPath);
    }
  }, [currentPath]);

  return (
    <nav className="navbar navbar-expand-lg p-0">
      <div className="nav-container py-3 d-flex align-items-center justify-content-between">
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
          <ul className="navbar-nav mx-auto nav-item-flex-container list-unstyled mb-0 justify-content-center">
            {navItems.map((item, key) => (
              <li className="nav-item" key={key}>
                <Link href={item.href} className="text-decoration-none">
                  <Text
                    variant={
                      activeNavItem === item?.name
                        ? "Secondary16Demi125"
                        : "Montserrat16Medium125"
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
            <ThemeButton variant="primary" text={translation?.GET_IN_TOUCH} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
