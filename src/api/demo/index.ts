import request from '../request';
export const getDemoById = (id: string) => request.get(`/api/demo/${id}`);
