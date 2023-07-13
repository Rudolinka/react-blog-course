import React from "react";
import logo from "../unicorn.svg";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<header>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<img src={logo} alt="logo" />
				</div>

				<nav className={styles.nav}>
					<ul>
						<li className={styles["nav-item"]}>
							<Link to="/">Homepage </Link>
						</li>
						<li className={styles["nav-item"]}>
							<Link to="/about">About us </Link>
						</li>
						<li className={styles["nav-item"]}>
							<Link to="/contact">Contact </Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
