const getHeaders = () => {
	let header = {
		'Content-Type': 'application/json',
	};

	const token = localStorage.getItem('token');

	if (token) header['Authorization'] = token;

	return header;
};

module.exports = {
	headers: getHeaders(),
};
