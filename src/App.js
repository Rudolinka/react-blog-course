import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import PostPage from "./pages/PostPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/blog/:title" element={<PostPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
