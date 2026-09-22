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

    // Bold
    html = html.replace(/\*\*(.*$)/gim, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*\*(.*?)/gim, '<em>$1</em>');

    // Links
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank">$1</a>')

    // Line break
    html = html.replace(/\n/gim, '<br />')
}

// Event listeners
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const inputText = markdownInput.ariaValueMax;
    const convertedHTML = parseMarkdown(inputText);

    rawOutput.value = convertedHTML;
    htmlPreview.innerHTML = convertedHTML;

    console.log("Markdown Conversion");
    console.log(`Original Input: ${inputText}`);
    console.log(`Converted Raw: ${convertedHTML}`);
});