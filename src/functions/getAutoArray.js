import { division } from '../consts'

export const getAutoArr = (value) => {
    let pos = binarySearch(value, division)
    let returnArr = new Array(...(division[pos].table))
    if(division.length > pos+1)
        returnArr.push(...(division[pos+1].table))
    return returnArr
}

const binarySearch = (value, arr) => {
    let first = 0;    //left endpoint
    let last = arr.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;

    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (arr[middle].start <= value && arr[middle].end >= value) {
            found = true;
            position = middle;
        } else if (arr[middle].start > value) {
            last = middle - 1;
        } else {
            first = middle + 1;
        }
    }
    return position;
}