// Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

// For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

// What is the total of all the name scores in the file?



const fs = require ('fs')

function alphabet () {
    const ALPHA =['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const data = fs.readFileSync("p022_names.txt", "utf8");
    let space = data.replace(/"/g, '')
    let names = space.split(",")
    names.sort()
    names.forEach((name, i) => {
        let sum = 0
        name.split('').forEach((letter) => {
            let valLetter = ALPHA.indexOf(letter)
            sum += valLetter;
            
            console.log(name, i, letter, valLetter, sum)
        })
    });
    // console.log(names);
}

alphabet()

/* steps

1. take the first character in the name
2. assign it a value 
3. add one to the value
4. store the value
5, loop back to the next letter in the name
6. assign it a value and add one
7. add the new value to the previous value
8. repeat the steps for each letter of the name until name is complete



*/
