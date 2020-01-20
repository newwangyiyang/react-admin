import request from '../request';

export const getUser = async (userId: string) => request.get(`/api/user/${userId}`);

export const getUserByToken = async (userId: string) =>
	request.get(`/api/user/getByToken/${userId}`);
