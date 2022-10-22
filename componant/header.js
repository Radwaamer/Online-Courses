//add header section
function createHeader(){
    let headerText=`<div class="container">
        <nav>
            <p class="logo"><a data-text="Educa" href="#">Educa</a></p>
            <form action="post">
                <input type="search" name="search" id="search" placeholder="Search Courses...">
                <input type="submit" class="fa-solid fa-magnifying-glass">
            </form>
            <div class="icons">
                <div class="menu btn"><i class="fa-solid fa-bars bars"></i></div>
                <div class="srch btn"><i class="fa-solid fa-magnifying-glass glass"></i></div>
                <div class="profile btn"><i class="fa-solid fa-user user"></i></div>
                <div class="mood btn"><i class="fa-solid fa-sun sun"></i></div>
            </div>
        </nav>
        <div class="info">
            <button class="btn main-btn orange-btn">log in</button>
            <button class="btn main-btn orange-btn">register</button>
        </div>
    </div>`;
    let header=document.createElement("header");
    header.innerHTML=headerText;
    document.body.querySelector(".main").prepend(header);
}
createHeader();

//view profile icon
document.querySelector("header nav .icons .profile").addEventListener("click",()=>{
    document.querySelector("header .info").classList.toggle("active");
    document.querySelector("header nav form").classList.remove("active");
});

//request login info
function req(){
    let xmlReq=new XMLHttpRequest();
    xmlReq.open("GET","../json/login.json");
    xmlReq.send();
    return xmlReq;
}
//get login info for profile
function getInfo(){
    let xmlReq=req();
    xmlReq.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4){
            let login= JSON.parse(this.responseText);
            let info=document.querySelector("header .info");
            info.innerHTML=
            `<img src="${login.img}" alt="${login.username}">
            <div class="info-text">
                <p class="user">${login.username}</p>
                <span class="status">${login.status}</span>
            </div>
            <button class="btn main-btn">View Profile</button>`
        }
    }
}
getInfo();

//view search bar 
document.querySelector("header nav .icons .srch").addEventListener("click",()=>{
    document.querySelector("header nav form").classList.toggle("active");
    document.querySelector("header .info").classList.remove("active");
    document.querySelector("header").classList.toggle("over");
});

//enable dark mood
document.querySelector("header nav .icons .mood").onclick=function(){
    console.log("a")
    document.body.classList.toggle("active");
    if(document.body.classList.contains("active")){
        this.innerHTML=`<i class="fa-solid fa-moon"></i>`;
    }else{
        this.innerHTML=`<i class="fa-solid fa-sun"></i>`;
    };
};