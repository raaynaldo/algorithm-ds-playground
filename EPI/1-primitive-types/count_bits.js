function countBits(x) {
  let numBits = 0;
  while (x) {
    numBits += x & 1;
    x >>= 1;
  }

  return numBits;
}

const result = countBits(7);
console.log(result);

/**
 * Right shift assignment (>>)
 * moving the bits of the first operand to the right by the number of places specified by the second operand.
 * for example, 9 >> 2 yields 2
 * 1001 >> 2 yields 10
 * removing the two least significant bits
 *
 * Left shift assignment (<<)
 * moving the bits of the first operand to the left by the number of places specified by the second operand.
 * for example, 9 << 2 yields 36
 * 1001 << 2 yields 100100
 * adding two 0 bits at the end
 */
