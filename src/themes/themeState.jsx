import {atom} from "recoil";

const storage = localStorage.getItem('theme');
export const themeState = atom({
    key: 'themeStates',
    default: storage !== null ? localStorage.getItem('theme') : 'light',
});
