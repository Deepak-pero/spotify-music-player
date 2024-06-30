// console.log("hello world");
// let currentSong = new Audio();
// let songs;
// let currFolder;

// function secondsToMinutesSeconds(seconds) {
//     if (isNaN(seconds) || seconds < 0) {
//         return "00:00";
//     }
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);

//     const formattedMinutes = String(minutes).padStart(2, '0');
//     const formattedSeconds = String(remainingSeconds).padStart(2, '0');

//     return `${formattedMinutes}:${formattedSeconds}`;
// }

// async function getsongs(folder) {
//     currFolder = folder;
//     let a = await fetch(`http://127.0.0.1:59336/${folder}`)
//     let response = await a.text();
//     // console.log(response)
//     let div = document.createElement("div")
//     div.innerHTML = response
//     let as = div.getElementsByTagName("a")
//     songs = []
//     for (let index = 0; index < as.length; index++) {
//         const element = as[index]
//         if (element.href.endsWith(".mp3")) {
//             songs.push(element.href.split(`/${folder}/`)[1])
//         }
//     }

//     let songUl = document.querySelector(".songlist").getElementsByTagName("ul")[0]
//     songUl.innerHTML = ""
//     for (const song of songs) {
//         songUl.innerHTML = songUl.innerHTML + `<li> <img class="inverte" src="music.svg" alt="music">
//                             <div class="info">
//                                 <div>${song.replaceAll("%20", " ")}</div>
//                                 <div>Deepak</div>
//                             </div>
//                             <div class="playnow">
//                                 <span>Play Now</span>
//                                 <img class="inverte" src="play.svg" alt="play">
//                             </div></li>`;
//     }

//     Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
//         e.addEventListener("click", element => {
//             console.log(e.querySelector(".info").firstElementChild.innerHTML)
//             playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
//         })
//     })

//     return songs

// }

// const playMusic = (track, pause = false) => {
//     currentSong.src = `/${currFolder}/` + track
//     if (!pause) {
//         currentSong.play()
//         play.src = "pause.svg"
//     }
//     document.querySelector(".songinfo").innerHTML = decodeURI(track)
//     document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
// }


// async function displayAlbums() {
//     let a = await fetch(`http://127.0.0.1:59336/songs/`)
//     let response = await a.text();
//     let div = document.createElement("div")
//     div.innerHTML = response;
//     let anchors = div.getElementsByTagName("a")
//     let cardcontainer = document.querySelector(".cardcontainer")
//     let array = Array.from(anchors);
//     for (let index = 0; index < array.length; index++) {
//         const e = array[index];

//         if (e.href.includes("/songs")) {
//             let folder = e.href.split("/").slice(-2)[0]
//             let a = await fetch(`http://127.0.0.1:59336/songs/${folder}/info.json`)
//             let response = await a.json();
//             console.log(response)
//             cardcontainer.innerHTML = cardcontainer.innerHTML + ` <div data-folder="Bhajan" class="card">
//                         <div class="play">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" height="38">
//                                 <!-- Green circular background -->
//                                 <circle cx="14" cy="14" r="12" fill="#00FF00" />
//                                 <!-- Original path with black color, shifted to the center -->
//                                 <path
//                                     d="M20.8906 14.846C20.5371 16.189 18.8667 17.138 15.5257 19.0361C12.296 20.8709 10.6812 21.7884 9.37983 21.4196C8.8418 21.2671 8.35159 20.9776 7.95624 20.5787C7 19.6139 7 17.7426 7 14C7 10.2574 7 8.3861 7.95624 7.42132C8.35159 7.02245 8.8418 6.73288 9.37983 6.58042C10.6812 6.21165 12.296 7.12907 15.5257 8.96393C18.8667 10.862 20.5371 11.811 20.8906 13.154C21.0365 13.7084 21.0365 14.2916 20.8906 14.846Z"
//                                     stroke="black" stroke-width="0.0" stroke-linejoin="round" fill="#000" />
//                             </svg>
//                         </div>
//                         <img src="/songs/${folder}/cover.png" alt="error">
//                         <h2>${response.title}</h2>
//                         <p>${response.description}</p>
//                     </div>`
//         }
//     }



// }

// async function main() {
//     await getsongs("songs/ncs")
//     playMusic(songs[0], true)

//     // dispay all the albums
//       displayAlbums()

//     play.addEventListener("click", () => {
//         if (currentSong.paused) {
//             currentSong.play()
//             play.src = "pause.svg"
//         }
//         else {
//             currentSong.pause()
//             play.src = "play.svg"
//         }
//     })


//     currentSong.addEventListener("timeupdate", () => {
//         document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`
//         document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%"
//     })

//     document.querySelector(".seekbar").addEventListener("click", e => {
//         let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
//         document.querySelector(".circle").style.left = percent + "%";
//         currentSong.currentTime = (currentSong.duration) * percent / 100;
//     })

//     document.querySelector(".hamburger").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "0"
//     })

//     document.querySelector(".close").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "-120%"
//     })

//     previous.addEventListener("click", () => {
//         console.log("prevoius")
//         console.log(currentSong)
//         let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
//         if ((index - 1) >= 0) {
//             playMusic(songs[index - 1])
//         }
//     })

//     next.addEventListener("click", () => {
//         currentSong.pause()
//         console.log("next")
//         let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
//         if ((index + 1) < songs.length) {
//             playMusic(songs[index + 1])
//         }
//     })

//     document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
//         console.log("setting volume to", e.target.value, "/ 100")
//         currentSong.volume = parseInt(e.target.value) / 100
//     })

//     Array.from(document.getElementsByClassName("card")).forEach(e => {
//         console.log(e)
//         e.addEventListener("click", async item => {
//             console.log("fetching songs")
//             songs = await getsongs(`songs/${item.currentTarget.dataset.folder}`)
//         })
//     })


// }

// main()


console.log("hello world");
let currentSong = new Audio();
let songs;
let currFolder;

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getsongs(folder) {
    currFolder = folder;
    let response = await fetch(`http://127.0.0.1:54536/${folder}`);
    let html = await response.text();
    let div = document.createElement("div");
    div.innerHTML = html;
    let as = div.getElementsByTagName("a");
    songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1]);
        }
    }

    let songUl = document.querySelector(".songlist ul");
    songUl.innerHTML = "";
    for (const song of songs) {
        songUl.innerHTML += `<li>
                                <img class="invert" src="images/music.svg" alt="music">
                                <div class="info">
                                    <div>${song.replaceAll("%20", " ")}</div>
                                    <div>Deepak</div>
                                </div>
                                <div class="playnow">
                                    <span>Play Now</span>
                                    <img class="invert" src="images/play.svg" alt="play">
                                </div>
                            </li>`;
    }

    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", () => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
        });
    });

    return songs;
}



const playMusic = (track, pause = false) => {
    currentSong.src = `/${currFolder}/` + track;
    if (!pause) {
        currentSong.play();
        play.src = "images/pause.svg";
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track);
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
}

async function displayAlbums() {
    try {
        let response = await fetch(`http://127.0.0.1:54536/songs/`);
        let html = await response.text();
        let div = document.createElement("div");
        div.innerHTML = html;
        let anchors = div.getElementsByTagName("a");
        let cardcontainer = document.querySelector(".cardcontainer");
        let array = Array.from(anchors);
        for (let index = 0; index < array.length; index++) {
            const e = array[index];

            if (e.href.includes("/songs")) {
                let folder = e.href.split("/").slice(-2)[1];
                // console.log(`Fetching info.json for folder: ${folder}`);
                let infoResponse = await fetch(`http://127.0.0.1:54536/songs/${folder}/info.json`);
                if (infoResponse.ok) {
                    let info = await infoResponse.json();
                    cardcontainer.innerHTML += `<div data-folder="${folder}" class="card">
                        <div class="play">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" height="38">
                                <circle cx="14" cy="14" r="12" fill="#00FF00" />
                                <path
                                    d="M20.8906 14.846C20.5371 16.189 18.8667 17.138 15.5257 19.0361C12.296 20.8709 10.6812 21.7884 9.37983 21.4196C8.8418 21.2671 8.35159 20.9776 7.95624 20.5787C7 19.6139 7 17.7426 7 14C7 10.2574 7 8.3861 7.95624 7.42132C8.35159 7.02245 8.8418 6.73288 9.37983 6.58042C10.6812 6.21165 12.296 7.12907 15.5257 8.96393C18.8667 10.862 20.5371 11.811 20.8906 13.154C21.0365 13.7084 21.0365 14.2916 20.8906 14.846Z"
                                    stroke="black" stroke-width="0.0" stroke-linejoin="round" fill="#000" />
                            </svg>
                        </div>
                        <img src="/songs/${folder}/cover.png" alt="error">
                        <h2>${info.title}</h2>
                        <p>${info.description}</p>
                    </div>`;
                }
                // else {
                //     console.error(`Failed to fetch JSON for folder ${folder}`);
                // }
            }
        }

        // Add event listeners to the dynamically created cards
        updateCardListeners();
    }
    catch (error) {
        console.error("Error fetching or parsing albums:", error);
    }
}

async function main() {
    await getsongs("songs/hindi");
    playMusic(songs[0], true);

    // Display all the albums
    await displayAlbums();

    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "images/pause.svg";
        } else {
            currentSong.pause();
            play.src = "images/play.svg";
        }
    });

    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    });

    document.querySelector(".seekbar").addEventListener("click", (e) => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = (currentSong.duration) * percent / 100;
    });

    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    });

    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%";
    });

    previous.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1]);
        }
    });

    next.addEventListener("click", () => {
        currentSong.pause();
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1]);
        }
    });

    document.querySelector(".range input").addEventListener("change", (e) => {
        currentSong.volume = parseInt(e.target.value) / 100;
    });
}

function updateCardListeners() {
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {
            // console.log(`Fetching songs for folder: ${item.currentTarget.dataset.folder}`);
            songs = await getsongs(`songs/${item.currentTarget.dataset.folder}`);
            playMusic(songs[0])
        });
    });

    document.querySelector(".volume>img").addEventListener("click", e => {
        if (e.target.src.includes("images/volume.svg")) {
            e.target.src = e.target.src.replace("images/volume.svg", "images/mute.svg")
            currentSong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        }
        else {
            e.target.src = e.target.src.replace("images/mute.svg", "images/volume.svg")
            currentSong.volume = .10;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
        }
    })

}



main();
54536