import axios from 'axios';
import { API_ROUTE, DELETE_ALBUM, SEARCH, SHOW_ALBUMS, SHOW_GALLERIES, UPDATE_ALBUM, UPDATE_ALBUM_BANNER } from '../../app/constants/constants';


interface Picture {
    first: string,
    last: string,
    grade: string,
    school: string,
    id: string,
    url: string,
}



type Gallery = {
    galleryName: string,
    albumName: string,
    galleryPassword: string,
    fandc: boolean,
    downloads: boolean,
    pics: Picture[],
    avatar: string,
    date: Date,
    _id: string,
    layout: number,
};




export const showAlbums = async () => {
    try {
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios.get<Gallery[]>(
            `${API_ROUTE}${SHOW_ALBUMS}`,
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
            return null;
        } else {
            console.log('unexpected error: ', error);
            return null;
        }
    }
}


export const showGalleries = async (albumName: string) => {
    try {
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios.get<Gallery[]>(
            `${API_ROUTE}${SHOW_GALLERIES}/${albumName}`,
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
            return null;
        } else {
            console.log('unexpected error: ', error);
            return null;
        }
    }
}

export const setNewAlbumBanner = async (albumId: string, picUrl: string) => {
    try {
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios.post<Gallery>(
            `${API_ROUTE}${UPDATE_ALBUM_BANNER}`,
            {
                albumId: albumId,
                picUrl: picUrl
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

export const onSaveAlbumChange = async (albumId: string, tags: string) => {
    try {
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios.post<Gallery>(
            `${API_ROUTE}${UPDATE_ALBUM}`,
            {
                albumId: albumId,
                tags: tags
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


export const deleteAlbum = async (albumId: string) => {
    try {
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios.post<Gallery>(
            `${API_ROUTE}${DELETE_ALBUM}`,
            {
                albumId: albumId,
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

export const galleryAlbumSearch = async (searchTerm: string) => {
    try {
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios.post<Gallery[]>(
            `${API_ROUTE}${SEARCH}`,
            {
                searchTerm: searchTerm
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
            return null;
        } else {
            console.log('unexpected error: ', error);
            return null;
        }
    }
}





