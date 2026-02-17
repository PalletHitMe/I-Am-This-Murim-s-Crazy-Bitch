// chapters.js - Your novel chapters data
// Edit this file only to add/update chapter metadata

const chapters = [
    { number: 10, title: "Darkness Falls", date: "2026-02-17" },

    { number: 11, title: "asdf", date: "2026-02-17" },
    { number: 10, title: "Darkness Falls", date: "2024-02-15" },
    { number: 9, title: "The Prophecy", date: "2024-02-10" },
    { number: 8, title: "Allies and Enemies", date: "2024-02-05" },
    { number: 7, title: "New Beginning", date: "2024-02-01" },
    { number: 6, title: "The Final Battle", date: "2024-01-25" },
    { number: 5, title: "Secrets Revealed", date: "2024-01-20" },
    { number: 4, title: "The Tournament", date: "2024-01-15" },
    { number: 3, title: "First Steps", date: "2024-01-10" },
    { number: 2, title: "Awakening", date: "2024-01-05" },
    { number: 1, title: "The Beginning", date: "2024-01-01" }

];

// Helper functions - don't edit these
function getRecentChapters(count = 5) {
    return chapters.slice(0, count);
}

function getAllChapters() {
    return chapters;
}

function getChapter(number) {
    return chapters.find(ch => ch.number === number);
}

// New function to load chapter content from JSON
async function getChapterContent(number) {
    try {
        const response = await fetch('chapters-content.json');
        const data = await response.json();
        const chapter = data.chapters.find(ch => ch.number === number);
        return chapter ? chapter.content : 'Chapter content coming soon...';
    } catch (error) {
        console.error('Error loading chapter content:', error);
        return 'Error loading content. Please try again later.';
    }
}
