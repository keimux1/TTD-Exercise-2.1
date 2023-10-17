function fact(n) {
    if (n<0) throw "factorial < 0";
    
    if (n == 0)
        return 1;
    else
        return n * fact(n - 1);
}

module.exports = fact;