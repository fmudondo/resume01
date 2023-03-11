import axios from 'axios';
import { API_ROUTE, USER } from '../../app/constants/constants';

type User = {
    date: Date,
    name: string;
    avatar: string;
    password: string;
};



const getUser = async () => {
    try {
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios.get<User[]>(
            `${API_ROUTE}${USER}`,
            {
                headers: {
                    Accept: 'application/json',
                },

            },
        );



        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export default getUser


