export const compact = (array) => {
    if (!array.length) throw Error("Array can not be empty")
    return array.filter((elemnt)=> {
        return !!elemnt
    })
}