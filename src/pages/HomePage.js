import React from "react";
import MainTemplate from "../templates/MainTemplate";
import styles from "./HomePage.module.css";

import { posts } from "../fakeDB";
import Post from "../components/Post";

const HomePage = () => {
	return (
		<MainTemplate>
			<div>
				<h1>Homepage</h1>

				<h2>New posts</h2>
				<div className={styles.postCard}>
					{posts.map((post) => (
						<Post post={post} />
					))}
				</div>
			</div>
		</MainTemplate>
	);
};

export default HomePage;
