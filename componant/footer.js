// create footer
function createFooter(){
    let footerText=`© copyright @ 2022 by <span>Radwa Amer</span> | all rights reserved!`;
    let footer=document.createElement("footer");
    footer.innerHTML=footerText;
    document.body.appendChild(footer);
}
createFooter();