import React from "react";
import MainTemplate from "../templates/MainTemplate";
import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./PostPage.module.css";

const PostPage = () => {
	// const { title } = useParams();
	// console.log(title);

	const {
		state: { post },
	} = useLocation();
	console.log(post);

	return (
		<MainTemplate>
			<div className={styles.wrapper}>
				<h1 className={styles.head}>{post.title}</h1>
				<div className={styles.box}>
					<div
						className={styles.inner}
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>
					<div className={styles.boxBg}></div>
				</div>

				<img
					className={styles.authorImg}
					src={`https://i.pravatar.cc/150?img=${post.authorImg}`}
				/>
				<h3>Author: {post.author}</h3>
				<button>
					<Link to="/">Go back </Link>
				</button>
			</div>
		</MainTemplate>
	);
};

export default PostPage;
