/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0)
        return "";
    let result = strs[0];
    for (i = 0; i < strs.length; i++) {
        if (strs[i].length === 0)
            return "";
        for (j = 0; j < strs[i].length; j++) {
            if(strs[i][j] !== result[j]) {
                result = strs[i].substr(0, j);
                break;
            } else if (result.includes(strs[i])) {
                result = strs[i];
            }
        }
    }
    return result;
};