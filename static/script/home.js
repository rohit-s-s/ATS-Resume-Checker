const wrapper = document.querySelectorAll(".file-upload-wrapper")

const inputResume = document.getElementById("resume-upload");
const label1 = document.querySelectorAll(".chakra-button")[0];

label1.addEventListener("click", () => {
  inputResume.click();
});

const inputDesc = document.getElementById("desc-upload");
const label2 = document.querySelectorAll(".chakra-button")[1];

label2.addEventListener("click", () => {
  inputDesc.click();
});


inputResume.addEventListener("change", () => {
    if (inputResume.files.length) {
      const p = document.createElement("p");
      p.textContent = "File uploaded";
      wrapper[0].appendChild(p);
    }
  });

inputDesc .addEventListener("change", () => {
    if (inputDesc .files.length) {
      const p = document.createElement("p");
      p.textContent = "File uploaded";
      wrapper[1].appendChild(p);
    }
  });