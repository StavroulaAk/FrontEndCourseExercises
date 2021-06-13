const mainContent = document.querySelector("body");

const container = document.createElement("p");
container.textContent = "Hey I'm red!";
container.style.color = "red";

mainContent.appendChild(container);



const header3 = document.createElement("h3");
header3.textContent = "I’m a blue h3!";
header3.style.color = "blue";
mainContent.appendChild(header3);



const sectionDiv = document.createElement("div");
sectionDiv.style.background = "pink";
sectionDiv.style.border = "black solid";
mainContent.appendChild(sectionDiv);

const header = document.createElement("h1");
header.textContent = "I’m in a div"
sectionDiv.appendChild(header)

const para = document.createElement("p")
para.textContent = "ME TOO"
sectionDiv.appendChild(para)