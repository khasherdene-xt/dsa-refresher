const twoSum = (arrNum: number[], target: number) => {
  const obj: { [key: number]: number } = {};
  for (let i = 0; i < arrNum.length; i++) {
    const diff = target - arrNum[i];
    if (obj[diff] !== undefined) {
      return [obj[diff], i];
    }
    obj[arrNum[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 13));
