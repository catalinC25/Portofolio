
// Conversion ===================================
function textToNumber(element) {
    let myValue = parseInt(element.textContent);
    return myValue;
}

function numberToText(element) {
    let myElement = element;
    let myText = myElement.toString();
    return(myText);
}

// Main functionality

function addLike() {
    let currentLikes = textToNumber(totalLikes);
    let colorText = "#176A73";
    currentLikes++;
    totalLikes.textContent = currentLikes;
    // likeBtnText.style.color = colorText;
    // if (colorText === "#176A73") {
    //     colorText = "#202E40";
    // } else {
    //     colorText = "#176A73";
    // }

}

likeButton.addEventListener('click', addLike);
