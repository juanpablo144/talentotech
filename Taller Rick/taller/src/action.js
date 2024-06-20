export const setInc = (val) => {
    return{
        type: 'INCREMENTAR',
        inc: val
    }
}

export const setEps = (eps) => {
    return{
        type: 'EPISODIO',
        epis: eps
    }
}