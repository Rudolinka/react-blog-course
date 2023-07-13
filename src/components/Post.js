import React from "react";
import styles from "./Post.module.css";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
	const navigation = useNavigate();

	console.log(post);

	const handleNavigate = () => {
		navigation(`/blog/${post.slug}`, { state: { post: post } });
	};

	const shortDesc =
		post.short.length > 80 ? post.short.slice(0, 80) + "..." : post.short;

	return (
		<div className={styles.card}>
			<img
				className={styles.postImg}
				src={`https://picsum.photos/seed/${post.postImg}/400/200`}
			/>

			<h3 className={styles.title}>{post.title}</h3>
			<p className={styles.short}>{shortDesc}</p>

			<button onClick={() => handleNavigate(post)}>Read more</button>
			<div className={styles.authorBox}>
				<img
					className={styles.authorImg}
					src={`https://i.pravatar.cc/150?img=${post.authorImg}`}
				/>
				<p>Autor: {post.author}</p>
			</div>
			<p className={styles.category}>{post.category}</p>
		</div>
	);
};

export default Post;
