export const modeAction = modeType => {
    let type = (modeType === 'LIGHT') ? 'DARK' : 'LIGHT'
    return { type: type }
}