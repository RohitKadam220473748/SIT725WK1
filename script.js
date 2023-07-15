function changeText() {
    let Textarray = ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"]
    let Number = getRandomNumberBetween(0, Textarray.length - 1)
    console.log("Index: ", Number)
    document.getElementById("heading").innerHTML = Textarray[Number];
}
function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}