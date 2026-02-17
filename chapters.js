// chapters.js - Your novel chapters data
const chapters = [
    {
        "number": 8,
        "title": "Allies and Enemies",
        "date": "2024-02-05"
    },
    {
        "number": 7,
        "title": "New Beginning",
        "date": "2024-02-01"
    },
    {
        "number": 6,
        "title": "The Final Battle",
        "date": "2024-01-25"
    },
    {
        "number": 5,
        "title": "Secrets Revealed",
        "date": "2024-01-20"
    },
    {
        "number": 4,
        "title": "The Tournament",
        "date": "2024-01-15"
    },
    {
        "number": 3,
        "title": "First Steps",
        "date": "2024-01-10"
    },
    {
        "number": 2,
        "title": "Awakening",
        "date": "2024-01-05"
    },
    {
        "number": 1,
        "title": "The Beginning",
        "date": "2024-01-01"
    }
];

function getAllChapters() { return chapters; }
function getChapter(number) { return chapters.find(ch => ch.number === number); }