const findBinaryGap = val => {
  const binaryString = (val >>> 0).toString(2);
  console.log(`BINARY NUMBER(${val}) > `, binaryString);
  const binaryArray = binaryString.split("");
  let currentBinaryGap = 0;
  let longestBinaryGap = 0;
  let countStarted = false;
  for (let i = 0; i < binaryArray.length; i++) {
    const bit = binaryArray[i];
    if (!countStarted && bit == "1") {
      countStarted = true;
      currentBinaryGap = 0;
    } else if (countStarted && bit == "0") {
      currentBinaryGap += 1;
    } else if (countStarted && bit == "1") {
      countStarted = true;
      longestBinaryGap =
        longestBinaryGap > currentBinaryGap
          ? longestBinaryGap
          : currentBinaryGap;
      currentBinaryGap = 0;
    }
    // console.log("CBG >", currentBinaryGap);
  }
  console.log(
    "LONGEST BINARY GAP > ",
    (longestBinaryGap && longestBinaryGap) || "None"
  );
};

findBinaryGap(1073741825);
