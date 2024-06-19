import {createStore } from 'redux';

const estadoIni = {
    cont: 0,
    episodios : []
};

const reducer = (state = estadoIni, action) => {
    switch (action.type) {
        case 'INCREMENTAR':
            return{...state, cont: state.cont+action.inc}
        case 'EPISODIO':
            return{...state,}
        default:
            break;
    }
}