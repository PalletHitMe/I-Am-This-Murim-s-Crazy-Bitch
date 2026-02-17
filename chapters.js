// chapters.js - Automatically manages your novel chapters
const chapters = [
    { number: 11, title: "asdf", date: "2026-02-17" },

    { number: 1, title: "The Beginning", date: "2024-01-01" },
    { number: 2, title: "Awakening", date: "2024-01-05" },
    { number: 3, title: "First Steps", date: "2024-01-10" },
    { number: 4, title: "The Tournament", date: "2024-01-15" },
    { number: 5, title: "Secrets Revealed", date: "2024-01-20" },
    { number: 6, title: "The Final Battle", date: "2024-01-25" },
    { number: 7, title: "New Beginning", date: "2024-02-01" },
    { number: 8, title: "Allies and Enemies", date: "2024-02-05" },
    { number: 9, title: "The Prophecy", date: "2024-02-10" },
    { number: 10, title: "Darkness Falls", date: "2024-02-15" }

];

// Don't edit below this line - it handles the display automatically
function getRecentChapters(count = 5) {
    // Return the most recent chapters (highest numbers first)
    return [...chapters].reverse().slice(0, count);
}

function getAllChapters() {
    // Return all chapters in reverse order (newest first)
    return [...chapters].reverse();
}

function getChapter(number) {
    return chapters.find(ch => ch.number === number);
}
