
// Add likes ===================================

// actual numbers of likes
let likeCount = totalLikes.textContent;

function likesManager() {
    if (totalLikesText.textContent === "Like") {
        // add like to count
        likeCount ++;
        totalLikes.textContent = likeCount;
        // change "Like" text
        totalLikesText.textContent = "Liked";
        // change text color
        totalLikesText.style.color = "#176A73";
    } else {
        // add like to count
        likeCount --;
        totalLikes.textContent = likeCount;
        // change "Like" text
        totalLikesText.textContent = "Like";
        totalLikesText.style.color = "#0D0D0D";
    }
}

// Remove post ===================================
// when click on "X" from inside post icon, remove the post.
function postClose () {
    mainPost.style.display="none";
}


// Add comments ===================================
// actual number of comments
let totalComments = numberOfComments.textContent;

function addComment () {

    // get the comment input
    const enteredComment = commentInput.value;

    // CREATE first div for username and entered comment
    const userAndComment = document.createElement("div");
    userAndComment.classList.add("commentText");
    // create user name
    const newUsername = document.createElement('h4');
    newUsername.classList.add("userComment");
    newUsername.textContent = mainUserName.textContent;
    // create new comment
    const newCommentText = document.createElement("h3");
    newCommentText.classList.add("userContent");
    newCommentText.textContent = enteredComment;
    // append elements to the new comment
    userAndComment.appendChild(newUsername);
    userAndComment.appendChild(newCommentText);

    // CREATE second div to hold the first pack from line 34 and the new avatar img element
    const fullComment = document.createElement("div");
    fullComment.classList.add("firstComment");
    // create new avatar img
    const newAvatar = document.createElement("img");
    newAvatar.src="/Graphs/main_avatar.jpg";
    newAvatar.classList.add('mainAvatar');
    // line 56 appent above avatar img, line 57 append the pack created in line 34
    fullComment.appendChild(newAvatar);
    fullComment.appendChild(userAndComment);
    // add the full content in html post
    commentsSection.appendChild(fullComment);

    // Increment the number of comments when a new comment is entered
    totalComments++;
    numberOfComments.textContent = totalComments;
}

likeButton.addEventListener('click', likesManager);
closePost.addEventListener("click", postClose);
commentSubmit.addEventListener("click", addComment);