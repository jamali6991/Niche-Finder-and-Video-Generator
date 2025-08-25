function generateNiche() {
    const input = document.getElementById('niche-input').value;
    const niches = ["Tech Gadgets", "Healthy Cooking", "Travel Vlogs", "Fitness Tips"];
    const randomNiche = niches[Math.floor(Math.random() * niches.length)];
    const outputDiv = document.getElementById('niche-output');
    outputDiv.innerText = `Suggested Niche: ${randomNiche}`;
    outputDiv.classList.add('show');
}

function generatePrompt() {
    const niche = document.getElementById('prompt-input').value;
    const prompts = [
        `Create a video about the latest trends in ${niche}.`,
        `Share your top 5 tips for ${niche}.`,
        `Document a day in the life of someone interested in ${niche}.`
    ];
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    const outputDiv = document.getElementById('prompt-output');
    outputDiv.innerText = `Generated Prompt: ${randomPrompt}`;
    outputDiv.classList.add('show');
}

function generateMetadata() {
    const content = document.getElementById('metadata-input').value;
    const title = `Amazing ${content} You Need to See!`;
    const description = `In this video, we explore ${content} and share some amazing insights. Don't forget to like and subscribe!`;
    const tags = `${content}, video, youtube, shorts`;
    const outputDiv = document.getElementById('metadata-output');
    outputDiv.innerHTML = `
        <strong>Title:</strong> ${title}<br>
        <strong>Description:</strong> ${description}<br>
        <strong>Tags:</strong> ${tags}
    `;
    outputDiv.classList.add('show');
}
