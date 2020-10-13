/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    //initialize array to impossible value
    let subAmounts = new Array(amount + 1).fill(amount + 1);
    
    //number of ways to get amount of 0 from coins of any denomination is zero
    subAmounts[0] = 0;
    for(i = 1; i < subAmounts.length; i++) {
        for (j = 0; j < coins.length; j++) {
            //if amount is greater than denomination
            if ((i - coins[j]) >= 0) {
                //if subAmount exists
                if (subAmounts[i - coins[j]] < (amount + 1)) {
                    //if a new minimum has been found
                    if((subAmounts[i - coins[j]] + 1) < subAmounts[i]) {
                        subAmounts[i] = subAmounts[i - coins[j]] + 1;
                    }
                }
            //denomination greater than amount
            } else {
                continue;
            }
        }
    }
    //if amount-th index of subAmounts is still an impossible value, return -1
    return (subAmounts[amount] < (amount + 1)) ? subAmounts[amount] : -1;
};