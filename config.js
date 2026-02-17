// config.js - GitHub API configuration
// This file is ignored by git (in .gitignore) so your token stays secret

const GITHUB_CONFIG = {
    token: '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', // Paste your token between the quotes
    owner: 'PalletHitMe',
    repo: 'I-Am-This-Murim-s-Crazy-Bitch',
    branch: 'main'
};

// Make it available globally
window.GITHUB_CONFIG = GITHUB_CONFIG;
