import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [pageScroll, setPageScroll] = useState(false);

  useEffect(() => {
    const sub = window.addEventListener("scroll", () =>
      setPageScroll(window.scrollY >= 90)
    );

    return sub;
  }, []);

  const links = [
    {
      id: 1,
      link: "header",
    },
    {
      id: 2,
      link: "profile",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
    {
        id: 6,
        link: "languages",
      },
      {
        id: 7,
        link: "education",
      },
  ];

  return (
    <div className="uppercase flex flex-row space-x-11 bg-orange-500 text-green-700">     
        
          
            {links.map(({ id, link }) => (
              <Link key={id} href={`/#${link}`}>
                <h1
                  onClick={() => setNav(false)} >
                  {link}
                </h1>
              </Link>
            ))}
          
        </div>
  );
};

export default Navbar;