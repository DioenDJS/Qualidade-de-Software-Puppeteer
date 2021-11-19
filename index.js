const puppeteer = require('puppeteer');

(async () =>{
    const browser = await puppeteer.launch({
        headless:false
    });
    const page = await browser.newPage();
    await page.goto('https://www.google.com/intl/pt/gmail/about/');

    await page.waitForTimeout(3000);

    await page.waitForSelector('.button--mobile-before-hero-only')
    await page.click('.button--mobile-before-hero-only');
    await page.waitForTimeout(3000);

    await page.type('input[name="identifier"]', 'coloqueumemailvalido@gmail.com');
    
    await page.waitForTimeout(10000);
    await page.click('.VfPpkd-vQzf8d');
    
    await page.waitForTimeout(10000);

    await page.type('input[name="password"]', 'coloque uma senha valida');

    await page.waitForTimeout(10000);
    await page.click('.VfPpkd-vQzf8d');

    
    await page.waitForTimeout(50000);
    await page.click('.T-I.T-I-KE.L3');

    await page.waitForTimeout(10000);

    await page.type('.vO', 'enviarpraumemailvalido@gmail.com');

    await page.waitForTimeout(20000);

    await page.type('input[name="subjectbox"]', 'Aula 14');

    await page.waitForTimeout(20000);

    await page.type('.Am.Al.editable.LW-avf.tS-tW', 'Aula 14 Trabalho de testes com ferramenta de  Scraping');
    
    await page.waitForTimeout(10000);
    await page.click('.T-I.J-J5-Ji.aoO.v7.T-I-atl.L3');
    
    await browser.close();
})();