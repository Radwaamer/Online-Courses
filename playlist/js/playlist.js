//get course info
function courseInfo(){
    let info=undefined;
    fetch(`../json/courses.json`)
    .then(res=>res.json())
    .then(data=>{
        info=data[window.location.hash.split("#")[1]];
        if (info!=undefined){
            document.querySelector(".details .playlist").innerHTML=`
            <div class="image">
                    <img src=${info["course-img"]} alt=${info["course-name"]}>
                    <span>${info["videos-num"]} videos</span>
                </div>
                <div class="text">
                    <div class="info">
                        <img src=${info["user-img"]} alt=${info["user-name"]}>
                        <div class="info-text">
                            <p>${info["user-name"]}</p>
                            <span>${info["download-date"]}</span>
                        </div>
                    </div>
                    <h3>Complete <span>${info["course-name"]}</span> Tutorial</h3>
                    <p class="detail">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Illum minus reiciendis, error sunt veritatis exercitationem 
                        deserunt velit doloribus itaque voluptate.</p>
                    <button class="btn main-btn" onclick="{window.location.href='../teacher profile/teacher-profile.html#${info["id"]}'}">View Profile</button>
                </div>
                <button class="btn main-btn save">
                    <i class="fa-regular fa-bookmark"></i> Save Playlist
                </button>`
                for(let i=1;i<=info["videos-num"];i++){
                    let count=i;
                    if(i<10){
                        count=`0${i}`
                    }
                    document.querySelector(".videos .parts").innerHTML+=`
                    <div class="part">
                        <div class="image">
                            <img src=${info["course-img"]} alt=${info["course-name"]}>
                            <p>#${count}</p>
                            <div class="layout"><i class="fa-solid fa-play"></i></div>
                        </div>
                        <p>Complete ${info["course-name"]} Tutorial (part ${count})</p>
                    </div>`
                };

                //change save button color
                document.querySelector(".details .playlist .save").addEventListener("click",function(){
                    this.classList.toggle("saved");
                    if(this.classList.contains("saved")){
                        this.innerHTML=`<i class="fa-solid fa-bookmark"></i> Saved Playlist`
                    }
                    else{
                        this.innerHTML=`<i class="fa-regular fa-bookmark"></i> Save Playlist`
                    };
});
        };
    });
};
courseInfo();