console.log(2>1);
console.log(2>=1);
console.log(2==1);
console.log(2<=1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// the reason for true in null>=0 is because equality check(==) and comparisons(< or >) work differently
// comparisons convert null to a number treating it as 0 i.e. why console.log(null >= 0) gives true
// and console.log(null > 0); gives false




