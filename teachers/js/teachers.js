// change courses link
document.querySelectorAll("aside ul li a")[3].href="./teachers.html";

//request teachers info
function getTeachers(){
    let xmlReq=new XMLHttpRequest();
    xmlReq.open("GET","../json/courses.json");
    xmlReq.send();
    return xmlReq;
};

// focus search icon
document.querySelector(".expert-teachers form div").onclick=()=>{
    document.querySelector(".expert-teachers form #search").focus();
}

// add expert-teachers section
function Teachers(){
    let xmlReq=getTeachers();
    xmlReq.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4){
            let response=JSON.parse(xmlReq.responseText);
            // sort teachers by likes
            let likes=[],newResponse=[];
            for(let i=0;i<response.length;i++){
                likes.push(response[i]["total likes"]);
            };
            likes.sort();
            likes.reverse();
            for(let i=0;i<likes.length;i++){
                for(let x=0;x<response.length;x++){
                    if(likes[i]==response[x]["total likes"]){
                        newResponse.push(response[x]);
                        response.splice(x,1);
                    }
                }
            };
            
            // add teachers in section
            function addTeachers(res,teach) {
                    return `<div class="teacher">
                            <div class="info">
                                <img src="${res[teach]["user-img"]}" alt="${res[teach]["user-name"]}">
                                <div class="text">
                                    <p>${res[teach]["user-name"]}</p>
                                    <span>${res[teach]["job title"]}</span>
                                </div>
                            </div>
                            <div class="activity">
                                <p>total playlists : <span>${res[teach]["total playlists"]}</span></p>
                                <p>total videos : <span>${res[teach]["total videos"]}</span></p>
                                <p>total likes : <span>${res[teach]["total likes"]}</span></p>
                            </div>
                            <button class="btn main-btn">View Profile</button>
                        </div>`
            }

            let start=0;
            let end=6;
            function add(){
                if(end>=newResponse.length){
                    end=newResponse.length;
                }
                // show view more button
                if(newResponse.length<=6 || end-start<6){
                    document.querySelector(".expert-teachers button.more").style.display="none";
                }else{
                    document.querySelector(".expert-teachers button.more").style.display="block";
                };
                for(start=start;start<end;start++){
                    document.querySelector(".expert-teachers .teachers").innerHTML+=addTeachers(newResponse,start);
                }
            }
            add();

            // view more button functionality
            document.querySelector(".expert-teachers button.more").addEventListener("click",()=>{
                start=end;
                end=start+6;
                add();
            });

            // search bar function
            function search(){
                let searchInp=document.querySelector(".expert-teachers form #search");
                searchInp.oninput=()=>{
                    document.querySelector(".expert-teachers .teachers").innerHTML="";
                    document.querySelector(".expert-teachers button.more").style.display="none";
                    for(let i=0;i<newResponse.length;i++){
                        if(newResponse[i]["user-name"].toLowerCase().includes(searchInp.value.toLowerCase())||newResponse[i]["job title"].toLowerCase().includes(searchInp.value.toLowerCase())){
                            document.querySelector(".expert-teachers .teachers").innerHTML+=addTeachers(newResponse,i);
                        };
                    };
                };
            };
            search();
        };
    };
};
Teachers();