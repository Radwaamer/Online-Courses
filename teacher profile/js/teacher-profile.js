// get teacher info
function teacherInfo(){
    let info=undefined;
    fetch(`../json/courses.json`)
    .then(res=>res.json())
    .then(data=>{
        info=data[window.location.hash.split("#")[1]-1];
        if (info!=undefined){
            document.title=`Educa-${info["user-name"]}`
            document.querySelector(".prof-det .details").innerHTML=`
            <div class="info">
                        <img src=${info["user-img"]} alt=${info["user-name"]}>
                        <p>${info["user-name"]}</p>
                        <span>${info["job title"]}</span>
                    </div>
                    <div class="total">
                        <div>
                            <p>total playlists :</p>
                            <span>${info["total playlists"]}</span>
                        </div>
                        <div>
                            <p>total videos :</p>
                            <span>${info["total videos"]}</span>
                        </div>
                        <div>
                            <p>total likes :</p>
                            <span>${info["total likes"]}</span>
                        </div>
                        <div>
                            <p>total comments :</p>
                            <span>${info["videos-num"]}</span>
                        </div>
                    </div>`
            document.querySelector(".teacher-courses .teacher-playlists").innerHTML=`
            <div class="core">
            <div class="image">
                <img src="${info["course-img"]}" alt=${info["course-name"]}>
                <span>${info["videos-num"]} videos</span>
            </div>
            <p>Complete <span class="category">${info["course-name"]}</span> Tutorial</p>
            <button class="btn main-btn" onclick="{window.location.href='../playlist/playlist.html#${window.location.hash.split("#")[1]-1}'}">View Playlist</button>
        </div>`
        }
    })
}
teacherInfo();