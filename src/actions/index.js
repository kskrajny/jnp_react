export const modeAction = modeType => {
    let type = (modeType === 'LIGHT') ? 'DARK' : 'LIGHT'
    return { type: type }
}

export const autoAction = input => ({
    type: 'AUTOCOMPLETE',
    payload: input
})

export const loadAction = loading => ({
    type: 'LOADER',
    payload: loading
})

export const nameAction = history => {
    return {
        type: 'NEW_FORECAST_NAME_EPIC',
        history: history
    }
}