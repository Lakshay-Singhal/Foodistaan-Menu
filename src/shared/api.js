import axios from 'axios';

export function getAllItems() {
    return axios.get('https://demo9343878.mockable.io/Foodistaan');
}