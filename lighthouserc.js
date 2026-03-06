module.exports = {
  ci: {
    collect: {
      // Assuming your index.html is in the root directory. 
      // If it's in a folder like 'public' or 'dist', change this path.
      staticDistDir: './', 
    },
    upload: {
      // This temporarily hosts the HTML report so you can click a link in GitHub to view it
      target: 'temporary-public-storage', 
    },
    assert: {
      preset: 'lighthouse:no-pwa', // Portfolios usually don't need Progressive Web App rules
      assertions: {
        // Enforce a minimum score of 90/100 for these categories
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
      },
    },
  },
};