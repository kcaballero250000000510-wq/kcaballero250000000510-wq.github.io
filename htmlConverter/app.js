const markdownInput = document.getElementById('markdown-input');
const submitBtn = document.getElementById('submit-btn');
const rawOutput = document.getElementById('raw-output');
const htmlPreview = document.getElementById('html-preview');

function parseMarkdown(markdown){

}

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const inputText = markdownInput.ariaValueMax;
    const convertedHTML = parseMarkdown(inputText);
});