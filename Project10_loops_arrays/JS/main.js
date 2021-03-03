let x = document.getElementById("loop1").innerHTML;

function basicWhile() {
    while (x < 5) {
        x++;
    }
    document.getElementById("loop1").innerHTML = x;
}

function basicFor() {
    let oldStr = document.getElementById("inputStr").value;
    let newStr = "";
    for (let i = oldStr.length; i > 0; i--) {
        newStr += oldStr[i - 1];
    }
    document.getElementById("loop2").innerHTML = "your string backwards: " + newStr;
}

function basicArray() {
    let arr = ["[can", " you", " believe", " how", " cool", " this", " is?]"]
    document.getElementById("array").innerHTML = arr;
}

function basicConst() {
    const meinConst = new Object();
    meinConst.oneStr = "I'm in a const!" // original value
    meinConst.oneStr = meinConst.oneStr + " " // edited to accomodate the next value
    meinConst.twoStr = "It's cool being in a const!" // added value
    document.getElementById("const").innerHTML = meinConst.oneStr + meinConst.twoStr;
}

function basicLet() {
    let shirt = {
        type: "T-shirt",
        size: "large ",
        color: "red ",
        fabric: "cotton ",
        blurb: function() {
            return "I'm wearing a " + this.size + this.color + this.fabric + this.type;
        }
    }
    document.getElementById("let").innerHTML = shirt.blurb();
}