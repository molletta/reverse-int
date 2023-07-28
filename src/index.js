module.exports = function reverse (n) {
    let str = n.toString();
    let result = '';

    str = n > 0 ? str : str.substring(1);
    for (i = Number(str.length - 1); i >= 0; i--) {
    result = Number(result + str[i]);
    }

    return result
}
