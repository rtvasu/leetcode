/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let result = [];
    for (i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[')
            result.push(s[i]);
        else {
            if (result.length !== 0) {
                if ((result[result.length - 1] === '(' && s[i] === ')') ||
                    (result[result.length - 1] === '{' && s[i] === '}') ||
                    (result[result.length - 1] === '[' && s[i] === ']'))
                    result.pop();
                else
                    return false;
            }
            else
                return false;
        }
    }
    return (result.length === 0);
};