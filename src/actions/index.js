export const modeAction = modeType => {
    let type = (modeType === 'LIGHT') ? 'DARK' : 'LIGHT'
    return { type }
}

export const autoAction = input => ({
    type: 'AUTOCOMPLETE',
    payload: input
})

export const loadAction = loading => ({
    type: 'LOADER',
    payload: loading
})

export const nameAction = data => {
    if(data === 'ERROR') return {type: 'ERROR'}
    return {
        type: 'NEW_FORECAST',
        data: data
    }
}

export const locAction = data => {
    if(data === 'ERROR') return {type: 'ERROR'}
    return {
        type: 'NEW_FORECAST',
        data: data
    }
}