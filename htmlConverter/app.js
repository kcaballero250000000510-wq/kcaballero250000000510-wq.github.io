// Elements
const markdownInput = document.getElementById('markdown-input');
const submitBtn = document.getElementById('submit-btn');
const rawOutput = document.getElementById('raw-output');
const htmlPreview = document.getElementById('html-preview');

// Function
function convertMarkdown(markdown){
    let html = markdown;

    // Headers
    html = html.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
    html = html.replace(/^#####(.*$)/gim, '<h5>$1</h5>');
    html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Blockquote
    html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

    // Bold
    html = html.replace(/(\*\*|__)(.*?)\1/gim, '<strong>$1</strong>');

    // Italic
    html = html.replace(/(\*|_)(.*?)\1/gim, '<em>$1</em>');

    // Image
    html = html.replace(/!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1" />');

    // Links
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank">$1</a>')

    // Line break
    html = html.replace(/\n/gim, '<br>')

    return html.trim();
}

// Event listeners
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const inputText = markdownInput.value;
    const convertedHTML = convertMarkdown(inputText);

    rawOutput.value = convertedHTML;
    htmlPreview.innerHTML = convertedHTML;

    console.log("Markdown Conversion");
    console.log(`Original Input: ${inputText}`);
    console.log(`Converted Raw: ${convertedHTML}`);
});