let likeIcon = document.getElementById('likeIcon');
let likeButton = document.getElementById('likeButton');
let puppyImage = document.getElementById('puppyImage');
let liked = false;

function onClickLikeButton() {
    if(liked === false){
        liked = true;
        likeButton.style.backgroundColor = "#0967d2";
        likeButton.style.color = "white";
        likeIcon.style.color = "#0967d2";
        puppyImage.src = "images/white-puppy-liked-img.png";
    }
    else{
        liked = false;
        likeButton.style.backgroundColor = "#cbd2d9";
        likeButton.style.color = "#9aa5b1";
        likeIcon.style.color = "#cbd2d9";
        puppyImage.src = "images/white-puppy-img.png";
    }
}