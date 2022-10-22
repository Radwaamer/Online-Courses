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