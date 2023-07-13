import React from "react";
import styles from "./MainTemplate.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainTemplate = ({ children }) => {
	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.kids}>{children}</div>
			<div className={styles.footer}>
				<Footer />
			</div>
		</div>
	);
};

export default MainTemplate;
