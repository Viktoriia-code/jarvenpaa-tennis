import { Link } from "react-router-dom";
import "../index.css";

const Error: React.FC = () => {
	return (
		<section>
			<div className="container text-center flex flex-col gap-4 mt-16">
				<h1>404 Error</h1>
				<p className="text-lg">Oops! The page you are looking for does not exist.</p>
				<Link to="/" className="text-lg link">
					Go back to Home
				</Link>
			</div>
		</section>
	);
};

export default Error;
