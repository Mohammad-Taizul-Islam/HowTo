function openCity(pageName, element, color) {
  let i, tablinks, tabcontent;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = " ";
  }

  document.getElementById(pageName).style.display = "block";

  element.style.backgroundColor = color;


}

document.getElementById("defaultOpen").click();
