// change home link
document.querySelectorAll("aside ul li a")[0].href="./home.html";

//request courses info
function getCourses(){
    let xmlReq=new XMLHttpRequest();
    xmlReq.open("GET","../json/courses.json");
    xmlReq.send();
    return xmlReq;
};

//add course section
function courses(){
    let xmlReq=getCourses();
    xmlReq.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4){
            let response=JSON.parse(xmlReq.responseText);
            for(let i=0;i<6;i++){
                document.querySelector(".our-courses .courses").innerHTML+=`
                <div class="course">
                                <div class="info">
                                    <img src="${response[i]["user-img"]}" alt="">
                                    <div class="text">
                                        <p>${response[i]["user-name"]}</p>
                                        <span>${response[i]["download-date"]}</span>
                                    </div>
                                </div>
                                <div class="core">
                                    <div class="image">
                                        <img src="${response[i]["course-img"]}" alt="">
                                        <span>${response[i]["videos-num"]} videos</span>
                                    </div>
                                    <p>Complete <span class="category">${response[i]["course-name"]}</span> Tutorial</p>
                                    <button class="btn main-btn">View Playlist</button>
                                </div>
                            </div>`
            }
        }
    }
}
courses();