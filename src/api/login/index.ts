import request from '../request';

export const userLogin = (username: string, password: string) =>
	request.get(`/api/userLogin/${username}/${password}`);
