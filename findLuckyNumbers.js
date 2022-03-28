// Write your code below this line.
const luckyNums = nums => {
    let luckyArr = []
    while (luckyArr.length < nums) {
        let randNum = Math.floor(Math.random() * 11)
        if (luckyArr.includes(randNum) === false) {
            luckyArr.push(randNum);
        }
    }
    console.log(luckyArr.join((', ')))
}

luckyNums(6);

