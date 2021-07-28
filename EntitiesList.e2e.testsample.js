// import puppeteer from 'puppeteer';
// import { fetchUsers } from '../api';

// let browser, page;

// beforeAll(async () => {  
//   browser = await puppeteer.launch({
//     args: [
//       '--no-sandbox',
//       '--disable-setuid-sandbox',
//       '--disable-gpu'
//     ],
//     timeout: 2000,
//     headless: true,
//     slowMo: 30
//   });
//   page = await browser.newPage();
//   await page.goto('http://localhost:3000/', {waitUntil: 'load'});
// }, 120000);

// test('EntitiesList renders correct entities', async () => {
//   await page.waitForSelector('ul')
//   const content = await page.$eval('ul', el => el.innerText);
  
//   expect(content).toContain(`👀 Name: Leanne Graham Username: Bret Email: Sincere@april.biz
// 👀 Name: Ervin Howell Username: Antonette Email: Shanna@melissa.tv
// 👀 Name: Clementine Bauch Username: Samantha Email: Nathan@yesenia.net`)
// });

// afterAll(async () => {  
//   await browser.close()
// });
