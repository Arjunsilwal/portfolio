import React from "react";
import "./description.css";
import arjun from "./../../assets/photo.png";

const user = {
	name: "Arjun Silwal",
	userImage: arjun,
};
function Description() {
	return (
		<div className="container">
			<div className="description">
				<h1>Hello I'M {user.name}</h1>
				<p>Developer/Programmer</p>
			</div>
			<div className="image-box">
				<img
					className="image"
					alt={"photo of " + user.name}
					src={user.userImage}
				/>
			</div>
		</div>
	);
}

export default Description;
