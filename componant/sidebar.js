//create side bar
function createSidebar(){
    let sideText=`<button class="exit btn">X</button>
    <div class="info">
        <button class="btn main-btn orange-btn">log in</button>
        <button class="btn main-btn orange-btn">register</button>
    </div>
    <ul>
        <li>
            <a href="../home/home.html">
                <i class="fa-solid fa-house"></i>
                <p>Home</p>
            </a>
        </li>
        <li>
            <a href="../about/about.html">
                <i class="fa-solid fa-question"></i>
                <p>About</p>
            </a>
        </li>
        <li>
            <a href="../courses/courses.html">
                <i class="fa-solid fa-graduation-cap"></i>
                <p>Courses</p>
            </a>
        </li>
        <li>
            <a href="../teachers/teachers.html">
                <i class="fa-solid fa-chalkboard-user"></i>
                <p>Teachers</p>
            </a>
        </li>
        <li>
            <a href="aaa">
                <i class="fa-solid fa-headset"></i>
                <p>Contact Us</p>
            </a>
        </li>
    </ul>`;
    let sidebar=document.createElement("aside");
    sidebar.innerHTML=sideText;
    document.body.querySelector(".main header").after(sidebar);
}
createSidebar();

//request data for profile info
function req(){
    let xmlReq=new XMLHttpRequest();
    xmlReq.open("GET","../json/login.json");
    xmlReq.send();
    return xmlReq;
}

//request data for profile info
function infoAside(){
    let xmlReq=req();
    xmlReq.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4){
            let login= JSON.parse(this.responseText);
            document.querySelector("aside .info").innerHTML=`
            <img src="${login.img}" alt="${login.username}">
            <div class="info-text">
                <p class="user">${login.username}</p>
                <span class="status">${login.status}</span>
            </div>
            <button class="btn main-btn">View Profile</button>`
        }
    }
}
infoAside();

//view side bar
document.querySelector("header nav .icons .menu").onclick=()=>{
    document.querySelector("aside").classList.toggle("active");
};

// close side bar
document.querySelector("aside .exit").addEventListener("click",()=>{
    document.querySelector("aside").classList.remove("active");
});

// active page style
document.querySelectorAll("aside ul li a").forEach((a)=>{
    if(a.href.includes(window.location.pathname)){
        a.parentElement.classList.add("active");
    }
})