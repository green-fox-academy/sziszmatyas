export class PostIt {
    backgroundColor: string = ""
    text: string = ""
    textColor: string = ""

    constructor(backCol: string, text: string, textCol: string) {
        this.backgroundColor = backCol;
        this.text = text;
        this.textColor = textCol
    }
}

let postit1 = new PostIt ("orange", "Idea 1", "blue")
let postit2 = new PostIt ("pink", "Awesome", "black")
let postit3 = new PostIt ("yellow","Superb!" ,"green")
console.log(postit1, "\n", postit2, "\n", postit3)