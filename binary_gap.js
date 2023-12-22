/**
 * Finds the decimal number less than or equal to a given number that has the largest binary gap.
 * A binary gap is defined as the maximum sequence of consecutive zeros that is surrounded by ones
 * at both ends in the binary representation of a number.
 *
 * @param {number} n - The upper limit (inclusive) for searching the number with the largest binary gap.
 *                     It should be a positive integer.
 * @returns {object} An object containing two properties:
 *                   - result: The decimal number less than or equal to 'n' with the largest binary gap.
 *                   - maxGap: The size of the largest binary gap found.
 *
 * @example
 * // Find the number with the largest binary gap less than or equal to 999
 * const gapInfo = binary_gap(999);
 * console.log(gapInfo); // { result: 513, maxGap: 7 }
 *
 * @description
 * The function iterates through all decimal numbers from 1 to 'n'. For each number, it:
 * 1. Converts the number to its binary representation.
 * 2. Counts the length of the binary gap (sequence of zeros) between ones.
 * 3. Keeps track of the maximum binary gap length and the corresponding decimal number.
 *
 * When counting binary gaps, the function:
 * - Starts counting zeros when a '1' is encountered (signifying the start of a possible gap).
 * - Resets the zero count upon encountering another '1' (signifying the end of the gap).
 * - Updates the maximum gap and corresponding number if the current gap is larger than the previously recorded maximum.
 *
 * Note: The function returns an object with both the decimal number and its largest binary gap to provide complete information about the search result.
 */
const binary_gap = (n) => {
    let maxGap = 0;
    let result = 0;

    for (let i = 1; i <= n; i++) {
        let binary = i.toString(2);
        let currentGap = 0;
        let counting = false;

        for (let bit of binary) {
            if (bit === '1') {
                if (counting) {
                    if (currentGap > maxGap) {
                        maxGap = currentGap;
                        result = i;
                    }
                    currentGap = 0;
                } else {
                    counting = true;
                }
            } else if (counting) {
                currentGap++;
            }
        }
    }

    return {result, maxGap};
};

console.log(binary_gap(512)); // Output should be the number with the largest binary gap
