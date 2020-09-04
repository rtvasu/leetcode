/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    
    for (i = 0; i < s.length; i++) {
        switch(s[i]) {
            case 'I': 
                if (s[i + 1] === 'V' || s[i + 1] === 'X')
                    result -= 1;
                else
                    result += 1;
                break;
            case 'V': 
                result += 5;
                break;
            case 'X':
                if (s[i + 1] === 'L' || s[i + 1] === 'C')
                    result -= 10;
                else
                    result += 10;
                break;
            case 'L': 
                result += 50;
                break;
            case 'C':
                if (s[i + 1] === 'D' || s[i + 1] === 'M')
                    result -= 100;
                else
                    result += 100;
                break;
            case 'D': 
                result += 500;
                break;
            case 'M': 
                result += 1000;
                break;
            default: 
                console.log("problem");
                break;
        }
    }
    
    return result;
};