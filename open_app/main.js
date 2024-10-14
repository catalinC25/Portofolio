
// Adaugare like ===================================

// Numarul actua de like urii
let likeCount = totalLikes.textContent;

function likesManager() {
    if (totalLikesText.textContent === "Like") {
        // adaugare like in totalul numarului de like uri
        likeCount ++;
        totalLikes.textContent = likeCount;
        // schimbare text "Like" in "Liked"
        totalLikesText.textContent = "Liked";
        // schimbare culoare text
        totalLikesText.style.color = "#176A73";
    } else {
        // eliminare like din numaratoare
        likeCount --;
        totalLikes.textContent = likeCount;
        // schimbare text in "Like" si culoare textului in negru
        totalLikesText.textContent = "Like";
        totalLikesText.style.color = "#0D0D0D";
    }
}

// Eliminare postare ===================================
// la apasarea butonului "X" aferent postarii, aceasta este eliminata
function postClose () {
    mainPost.style.display="none";
}


// Adaugare comentarii ===================================
// extragerea numarului actual de comentarii
let totalComments = numberOfComments.textContent;

function addComment () {

    // identificare input pentru comentarii
    const enteredComment = commentInput.value;

    // conditie creata, daca nu este text in inputul de comentarii, functia nu se executa
    if (enteredComment) {
            
        // crearea primului div pentru username si comentariu inputat
        const userAndComment = document.createElement("div");
        userAndComment.classList.add("commentText");
        // creaza username
        const newUsername = document.createElement('h4');
        newUsername.classList.add("userComment");
        newUsername.textContent = mainUserName.textContent;
        // creaza comentariu ou
        const newCommentText = document.createElement("h3");
        newCommentText.classList.add("userContent");
        newCommentText.textContent = enteredComment;
        // adaugare elemente la comntariul nou (elementele de mai sus adaugate in constanta din linia 45)
        userAndComment.appendChild(newUsername);
        userAndComment.appendChild(newCommentText);

        // crearea celui deal doilea div care cuprinde divul din linia 45 + poza de profil
        const fullComment = document.createElement("div");
        fullComment.classList.add("firstComment");
        // creare avatar nou
        const newAvatar = document.createElement("img");
        newAvatar.src="/Graphs/main_avatar.jpg";
        newAvatar.classList.add('mainAvatar');
        // adaugare in divul "main" primul div si poza de avatar creata 
        fullComment.appendChild(newAvatar);
        fullComment.appendChild(userAndComment);
        // adaugarea divului "main" in html
        commentsSection.appendChild(fullComment);

        // cresterea numarului de comentarii de fiecare data cand un comentariu este inserat
        totalComments++;
        numberOfComments.textContent = totalComments;

        // reseteaza inputul din comment
        postCommentInput.value = "";
    } else {
        return;
    }
}

//  Schiumbare story ===================================

let actualMovmentProgress = 0;

function nextStory() {
    // identificare latime story
    const storyWidth = storyPost.offsetWidth;
    // identificare latime vizibila
    const visibleWidth = fullStories.offsetWidth;

    actualMovmentProgress = actualMovmentProgress + storyWidth;

    // 1268px total stories, minus 170px = 1098 px folosibili ca view, daca este sub 1000px, storiurile se duc in afara range ului

    console.log(storyWidth);

    storiesContainer.style.transform = `translateX(-${actualMovmentProgress}px)`;

    prevStoryBtn.style.display = "block";
    prevStoryBtn.style.zIndex = "100";

}


likeButton.addEventListener('click', likesManager);
closePost.addEventListener("click", postClose);
nextStoryBtn.addEventListener("click", nextStory);
nextStoryBtnTwo.addEventListener("click", nextStory);

commentSubmit.addEventListener("click", addComment);
postCommentInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addComment();
    }
});