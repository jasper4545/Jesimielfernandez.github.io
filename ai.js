const section3 = document.querySelector(".section3");
const section4 = document.querySelector(".section4");

for(let i=0; i < section3.children.length; i++){
  let click=0;
  section3.children[i].addEventListener("click", ()=>{
    click+=1;
    if(click === 1){
    section3.children[i].style.transition="all 500ms ease";
    section3.children[i].style.height="auto";
    section3.children[i].children[1].style.transform="scale(1)";
    section3.children[i].children[0].children[0].style.display="none";
    section3.children[i].children[0].children[1].style.display="block";
    }else{
      click = 0;
      section3.children[i].style.background="white";
      section3.children[i].children[1].style.transform ="scale(0)";
      section3.children[i].style.height="50px";
      section3.children[i].style.transition="all 500ms ease";
      section3.children[i].children[0].children[1].style.display = "none";
      section3.children[i].children[0].children[0].style.display = "block";
      section3.children[i].children[0].children[0].style.top="6%";
      
    }
    
  });
}


for (let i = 0; i < section4.children.length; i++) {
  let click = 0;
  section4.children[i].addEventListener("click", () => {
    click += 1;
    if (click === 1) {
      section4.children[i].style.transition = "all 500ms ease";
      section4.children[i].style.height = "auto";
      section4.children[i].children[1].style.transform = "scale(1)";
      section4.children[i].children[0].children[0].style.display = "none";
      section4.children[i].children[0].children[1].style.display = "block";
    } else {
      click = 0;
      section4.children[i].style.background = "white";
      section4.children[i].children[1].style.transform = "scale(0)";
      section4.children[i].style.height = "50px";
      section4.children[i].style.transition = "all 500ms ease";
      section4.children[i].children[0].children[1].style.display = "none";
      section4.children[i].children[0].children[0].style.display = "block";
      section4.children[i].children[0].children[0].style.top = "6%";

    }

  });
}