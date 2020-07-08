const expect = require('chai').expect
const webdriver = require('mocha-webdriver')

const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build()

describe('Tests', function() {
    it('test1', async function() {
        this.timeout(0)
        await driver.get('http://localhost:3000');
        let text = await driver.find('div[class="sc-AxjAm fdlVtA"],p').getText()
        expect(text).equals('Hope to see sunny weather')
        await driver.quit();
    })
})