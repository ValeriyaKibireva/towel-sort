// You should implement your task here.

module.exports = function towelSort(matrix = []) {

    return matrix.map((el, i) => (i + 1) % 2 ? el : el.reverse()).flat();
    console.log(matrix)

}
