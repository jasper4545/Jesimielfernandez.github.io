console.log('Hello World!');
const btn =document.getElementById("btn");
const loading = document.querySelector(".loading");
const container = document.querySelector(".content");
btn.onclick = ()=>{
  setTimeout(()=>{
    window.location="/ai.html";
  }, 2000);
container.style.opacity = "20%";
loading.style.display = "flex";
}