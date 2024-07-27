/**
 * Creates a file upload container with a label, input field, and optional textarea for job description.
 * 
 * @param {string} containerId - The ID of the container element where the file upload wrappers will be appended.
 * @param {string[]} values - An array of values to create file upload wrappers for. Currently supports "resume" and "job-description".
 * 
 * @example
 * const container = document.getElementById("input-container");
 * const values = ["resume", "job-description"];
 * createFileUploadContainer(container, values);
 */
function createFileUploadContainer(containerId, values) {
  const container = document.getElementById(containerId);

  values.forEach((value) => {
    const wrapper = document.createElement("div");
    wrapper.className = "file-upload-wrapper";

    if (value === "resume") {
      const i = document.createElement("i");
      i.classList.add("fa-solid");
      i.classList.add("fa-file-arrow-up");
      wrapper.appendChild(i);
    }

    if (value === "job-description") {
      const textareaLabel = document.createElement("label");
      textareaLabel.className = "textarea-label";
      textareaLabel.textContent = `Paste your ${value} here`;

      const textarea = document.createElement("textarea");
      textarea.setAttribute("rows", "4");
      textarea.setAttribute("name", `${value}`);
      textarea.setAttribute("id", "text-area");

      const or = document.createElement("h3");
      or.textContent = "OR";

      textareaLabel.appendChild(textarea);
      wrapper.appendChild(textareaLabel);
      wrapper.appendChild(or);
    }

    const h3 = document.createElement("h3");
    h3.textContent = `Upload your ${value}`;

    const label = document.createElement("label");
    label.className = "chakra-button";
    label.textContent = `Upload ${value}`;

    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("id", `upload-${value}`);
    input.setAttribute("accept", "application/pdf");
    input.setAttribute("name", `${value}`);
    input.required = true;

    wrapper.appendChild(h3);
    wrapper.appendChild(label);
    wrapper.appendChild(input);
    container.appendChild(wrapper);

    label.addEventListener("click", () => {
      input.click();
    });

    input.addEventListener("change", () => {
      if (input.files.length) {
        const p = document.createElement("p");
        p.textContent = "file uploaded";
        wrapper.appendChild(p);
      }
    });
  });
}

// Example usage:
const container = document.getElementById("input-container");
const values = ["resume", "job-description"];
createFileUploadContainer(container.id, values);