function partita_iva(pi) {
    if (pi == '') return '';
    if (pi.length != 11)
        return false;
    valid = "0123456789";
    for (i = 0; i < 11; i++) {
        if (valid.indexOf(pi.charAt(i)) == -1)
            return false;
    }
    s = 0;
    for (i = 0; i <= 9; i += 2)
        s += pi.charCodeAt(i) - '0'.charCodeAt(0);
    for (i = 1; i <= 9; i += 2) {
        c = 2 * (pi.charCodeAt(i) - '0'.charCodeAt(0));
        if (c > 9) c = c - 9;
        s += c;
    }
    if ((10 - s % 10) % 10 != pi.charCodeAt(10) - '0'.charCodeAt(0))
        return false;
    return true;
}

module.exports = partita_iva;
