"strict"
export {}

function makeGreen(name: string): string {
    let newName = `Green ${name}`;
    return newName;
}

let name = makeGreen("Tojas");
console.log("Whazzup", name);