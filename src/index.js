// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (Array.isArray(matrix)) {
        let subArr = [];
        for (i = 0; i < matrix.length; i++) {


            if (i % 2 === 0) {
                subArr = subArr.concat(matrix[i]);
            } else {
                subArr = subArr.concat(matrix[i].reverse());
            }

        }
        return subArr;
    } else {
        return [];
    }

}
