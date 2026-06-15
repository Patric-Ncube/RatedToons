"use strict";

const videos = document.querySelectorAll('.ep1');
const outerBtns = document.querySelectorAll('.playBtn-outer');
const closeBtn = document.querySelector('.closeBtn');
const episodeInfo = document.querySelector('.episode-info');

//When close button is clicked reset show-episodes page and videos
closeBtn.addEventListener("click", () => {
    showEpisodes.style.display = "none";
    bodyEle.style.overflow = "";

    //Resets videos and poster when close button is clicked
    videos.forEach((other, otherIndex) => {
        other.poster = originalPosters.get(other); // restore poster
        other.load();
        outerBtns[otherIndex].style.display = "flex"; // show their play button
        other.removeAttribute("controls");
    });
});

// Store each video's original poster in an array
const originalPosters = new Map();
videos.forEach(video => {
    originalPosters.set(video, video.poster);
});

//See map (array) of posters 
// console.log(originalPosters);

//Handles outer buttons of videos
outerBtns.forEach((outerBtn, index) => {
    outerBtn.addEventListener("click", () => {
        const video = videos[index]; // match button to its video by index

        // Pause & restore poster on all other videos
        videos.forEach((other, otherIndex) => {
            if (other === video) return;
            other.pause();
            other.removeAttribute("controls");
            other.poster = originalPosters.get(other); // restore poster
            other.load(); // resets video to show poster again
            outerBtns[otherIndex].style.display = "flex"; // show their(videos) play button
        });

        // Play this video
        video.setAttribute("controls", "controls");
        video.play();
        outerBtn.style.display = "none"; // hide this play button

        // When this video ends, restore its poster too
        video.addEventListener("end", () => {
            video.removeAttribute("controls");
            video.poster = originalPosters.get(video);
            video.load();
            outerBtn.style.display = "flex";
        }, { once: true });
    });
});

