const paraElem = document.querySelector("p");
const openBtn = document.getElementById("openBtn");
const textArea = document.getElementsByTagName("textarea");

function loadFile(e) {
  let fileName = e.target.files[0].name;
  paraElem.textContent = funcs.path.join(__dirname, fileName);
}

openBtn.addEventListener("change", loadFile);
