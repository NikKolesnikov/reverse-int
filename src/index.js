module.exports = function reverse (n) {
    n = String(n);

    let result = '';

    if (n[0] === '-') {
        result = n.split('').reverse().slice(0, -1).join('');
    } else {
        result = n.split('').reverse().join('');
    }

    return result;
}
