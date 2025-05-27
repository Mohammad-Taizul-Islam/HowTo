function openPage(pageName,elemnt,color){
    let i,tabcontent,tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for(i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display = "none";
    }


    tablinks =document.getElementsByClassName("tablink");

    for(i=0;i<tablinks.length;i++){
        tablinks[i].style.backgroundColor = "";
    }


    document.getElementById(pageName).style.display = "block";

    elemnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();

