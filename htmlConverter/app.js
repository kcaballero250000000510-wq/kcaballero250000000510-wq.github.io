// Elements
const markdownInput = document.getElementById('markdown-input');
const submitBtn = document.getElementById('submit-btn');
const rawOutput = document.getElementById('raw-output');
const htmlPreview = document.getElementById('html-preview');

// Function
function parseMarkdown(markdown){

    // Headers
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    html = html.replace(/^## (.*$)/gim, '<h1>$1</h1>');
    html = html.replace(/^### (.*$)/gim, '<h1>$1</h1>');
    html = html.replace(/^#### (.*$)/gim, '<h1>$1</h1>');
    html = html.replace(/^#####(.*$)/gim, '<h1>$1</h1>');
    html = html.replace(/^###### (.*$)/gim, '<h1>$1</h1>');

}

// Event listeners
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const inputText = markdownInput.ariaValueMax;
    const convertedHTML = parseMarkdown(inputText);

    rawOutput.value = convertedHTML;
    htmlPreview.innerHTML = convertedHTML;
});