// change courses link
document.querySelectorAll("aside ul li a")[3].href="./courses.html";

//request courses info
function getCourses(){
    let xmlReq=new XMLHttpRequest();
    xmlReq.open("GET","../../json/courses.json");
    xmlReq.send();
    return xmlReq;
};

//add course section
function courses(){
    let xmlReq=getCourses();
    xmlReq.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4){
            let response=JSON.parse(xmlReq.responseText);
            let i=0;
            let end=i+9;
            function add(){
                if(end>response.length){
                    end=response.length;
                };
                for(i;i<end;i++){
                    document.querySelector("section .courses").innerHTML+=`
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
                };
            };
            add();
            for(let x=1;x<=Math.ceil(response.length/9);x++){
                document.querySelector("section .nums").innerHTML+=`<div class="num btn orange-btn">${x}</div>`;
                if(x==1){
                    document.querySelector("section .nums .num").classList.add("active");
                }
            };
            let nums=document.querySelectorAll("section .nums .num");
            for(let x=0;x<nums.length;x++){
                nums[x].addEventListener("click",()=>{
                    nums.forEach(num=>{
                        num.classList.remove("active");
                    });
                    nums[x].classList.add("active");
                    i=x*9;
                    end=((x+1)*9);
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    document.querySelector("section .courses").innerHTML="";
                    add();
                });
            };
        };
    };
};
courses();