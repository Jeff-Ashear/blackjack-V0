function passToMe(birds, clocks, clouds, guitar) {
    console.log("there are " + birds + " birds.")
    console.log("legetti liked " + clocks + " clocks the best.")
    console.log("Ravel liked to " + clouds[0] + " clouds in the " + clouds[1] + ".")
    console.log("I will probably die if I don't get a " + guitar + " soon.")
}

let swearWords = ["fuck", "a$$"]
let aNum = Math.floor(Math.random() * 10000)
let legitObsessed = ".strandberg* Boden Prog NX7"

passToMe("grandfather", aNum, swearWords, legitObsessed)

function age(age) {
    let num = 75 - age;
    console.log("You have " + (num * 365) + " days, " + (num * 52) + " weeks, and " + (num * 12) + " months left.");
}

age(44)