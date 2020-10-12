/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s.length === 0 || s[0] === "0")
        return 0;
    else if (s.length === 1)
        return 1;
    
    let decodesPerIndex = new Array(s.length + 1).fill(0);
    decodesPerIndex[0] = 1;
    decodesPerIndex[1] = (s[1] !== "0" ? 1 : 0);
    for (i = 2; i <= s.length; i++) {
        let singleDigit = parseInt(s.substring(i - 1, i), 10);
        let doubleDigit = parseInt(s.substring(i - 2, i), 10);
        if (singleDigit >= 1 && singleDigit <= 9)
            decodesPerIndex[i] += decodesPerIndex[i - 1];
        if (doubleDigit >= 10 && doubleDigit <= 26)
            decodesPerIndex[i] += decodesPerIndex[i - 2];
    }
    
    return decodesPerIndex[s.length];
};