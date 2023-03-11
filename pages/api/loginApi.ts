import axios from 'axios';
import { API_ROUTE, LOGIN } from '../../app/constants/constants';

type User = {
    date: Date,
    name: string;
    avatar?: string;
    password: string;
};



const userLogin = async (name: string, password: string) => {
    try {
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios.post<User>(
            `${API_ROUTE}${LOGIN}`,
            {
                name: name,
                password: password
            },
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

export default userLogin


