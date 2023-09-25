export const ucFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
export const range = (start, end) => {
    let data = [];
    for (let index = start; index <= end; index++) {
        data.push(index);

    }
    return data;
}