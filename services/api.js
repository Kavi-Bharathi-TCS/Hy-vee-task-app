import axios from "axios";

export const getAge = async (name) => {
	try {
		const response = await axios.get(`https://api.agify.io?name=${name}`);
		return response.data;
	} catch (error) {
		console.log("Error in age API:", error);
		return false;
	}
};

export const getGender = async (name) => {
	try {
		const response = await axios.get(`https://api.genderize.io?name=${name}`);
		return response.data;
	} catch (error) {
		console.log("Error in gender API:", error);
		return false;
	}
};

export const getNationality = async (name) => {
	try {
		const response = await axios.get(`https://api.nationalize.io?name=${name}`);
		return response.data;
	} catch (error) {
		console.log("Error in nationality API:", error);
		return false;
	}
};
