import * as httpRequest from '~/utils/httpRequest';

export const createOrder = async (orderData, userId, showId) => {
    try {
        const response = await httpRequest.post(`/Orders?userId=${userId}&showId=${showId}`, {
            ...orderData,
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};
