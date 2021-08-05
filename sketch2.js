var input, heading

function setup(){
    createCanvas(400,400)

    background("white")

    input = createInput()
    input.position(50,100)

    heading = createElement("h4", "enter any alphabet")
    heading.position(50,50)

    textAlign(CENTER)
    textSize = 30
}

function draw(){
    const value = input.value()
    switch(value){
        case 'a': text("vowel", 50, 150);
                    break;
        case 'e': text("vowel", 50, 150);
                    break;
        case 'i': text("vowel", 50, 150);
                    break;
        case 'o': text("vowel", 50, 150);
                    break;
        case 'u': text("vowel", 50, 150);
                    break;
        default: text("please enter a character", 50, 130);
    }
}