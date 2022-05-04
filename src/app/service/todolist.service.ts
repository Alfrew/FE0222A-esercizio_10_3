import { Itodolist } from '../interface/todolist';
import axios from 'axios';

export async function loadDB(): Promise<Itodolist[]> {
    return await (await fetch('assets/db.json')).json();
}

export async function loadDBAxios(): Promise<Itodolist[]> {
    const response = (await axios.get<Itodolist[]>('assets/db.json')).data;
    return response;
}
