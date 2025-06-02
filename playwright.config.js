module.exports = {
  testDir: './tests',
  use: {
    headless: false,           
    slowMo: 600,               
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['html', { open: 'never' }]],

};
