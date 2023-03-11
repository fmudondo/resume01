import axios from 'axios';
import { ADD_GALLERY, ADD_PICTURES, API_ROUTE, DELETE_PICTURES, LOGIN, UPDATE_GALLERY_LAYOUT, UPDATE_GALLERY_SPACING } from '../../app/constants/constants';


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
    pics: Picture[]
};

type GalleryUpdate = {
    galleryName: string,
    albumName: string,
    pics: Picture[]
};




export const addGallery = async (gallery: Gallery) => {
    try {
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios.post<Gallery>(
            `${API_ROUTE}${ADD_GALLERY}`,
            {
                gallery: gallery
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

export const addPictures = async (gallery: GalleryUpdate) => {
    try {
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios.post<Gallery>(
            `${API_ROUTE}${ADD_PICTURES}`,
            {
                gallery: gallery
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


export const deletePicture = async (albumId: string, picArray: string[]) => {
    try {
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios.post<Gallery>(
            `${API_ROUTE}${DELETE_PICTURES}`,
            {
                albumId: albumId,
                picArray: picArray
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

export const updateGalleryLayout = async (albumId: string, layout: number) => {
    try {
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios.post<Gallery>(
            `${API_ROUTE}${UPDATE_GALLERY_LAYOUT}`,
            {
                albumId: albumId,
                layout: layout
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


export const updateGallerySpacing = async (albumId: string, space: number) => {
    try {
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios.post<Gallery>(
            `${API_ROUTE}${UPDATE_GALLERY_SPACING}`,
            {
                albumId: albumId,
                space: space
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








