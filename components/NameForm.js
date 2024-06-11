import React, { useState } from "react";
import { getAge, getGender, getNationality } from "../services/api";

const NameForm = () => {
	const [name, setName] = useState("");
	const [result, setResult] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setResult(null);
		try {
			const ageData = await getAge(name);
			const genderData = await getGender(name);
			const nationalityData = await getNationality(name);
			setResult({
				age: ageData?.age || "No Data Found",
				gender: genderData?.gender || "No Data Found",
				country: nationalityData?.country,
			});
		} catch (error) {
			console.error("Error fetching data:", error);
		}
		setLoading(false);
	};

	const handleChange = (e) => {
		const value = e.target.value;
		const isValid = /^[a-zA-Z\s]*$/.test(value); // Regex to allow only letters and spaces
		if (isValid) {
			setName(value);
			setError("");
		} else {
			setError("Name should not contain any special characters or numbers.");
		}
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit} className="form">
				<input type="text" value={name} onChange={handleChange} placeholder="Enter name" required className="input" />
				<button type="submit" className="button">
					Submit
				</button>
			</form>
			{loading && (
				<div className="shimmerWrapper">
					<div className="shimmer"></div>
				</div>
			)}
			{result && (
				<table className="resultTable">
					<thead>
						<tr>
							<th>Age</th>
							<th>Gender</th>
							<th>Country</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{result.age}</td>
							<td>{result.gender}</td>
							<td>
								{result?.country && result?.country?.length > 0
									? result.country.map((c) => c.country_id).join(", ")
									: "No data found"}
							</td>
						</tr>
					</tbody>
				</table>
			)}
			{error && <p className="error">{error}</p>}
		</div>
	);
};

export default NameForm;
