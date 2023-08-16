"use client"
import { useState } from "react";
import Link from "next/link";
import LINKS from "@/constants/Links.json";
import styles from "@/styles/Navigation.module.css";
import { useStatesContext } from "./StatesContext";

const Navigation = () => {
  const { activeLink } = useStatesContext();
  const [ menu, setMenu ] = useState(false);

  return (
    <nav className={styles.navigation}>
      <Link href="/">
        <img 
          className={styles.logo}
          src="/assets/Logo-SOLPLAST.png"
          alt="SOLPLAST®"
        />
      </Link>
      <i 
        className={!menu ? "bx bx-menu" : "bx bx-x"}
        onClick={() => setMenu(!menu)}
      />
      <ul className={!menu ? styles.nav : `${styles.nav} ${styles.active}`}>
        {
          LINKS.map(({label, route}, index) => (
            <li key={index} onClick={() => setMenu(false)}>
              <Link
                href={route}
                className={activeLink === route ? styles.active : ""}
              >
                <p>{label}</p>
              </Link>  
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Navigation;