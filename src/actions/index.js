import { SET_HEADER_LINKS, SET_NAVBAR_LINKS } from './types';

export const getNavLinks = () => dispatch => {
    const navLinks = [{title: "Hi"}, {title: "Bye"}];
    dispatch({
        type: SET_NAVBAR_LINKS,
        payload: navLinks
    })
}


export const getHeaderLinks = (headerLinks) => dispatch => {
    dispatch({
        type: SET_HEADER_LINKS,
        payload: headerLinks
    })
}