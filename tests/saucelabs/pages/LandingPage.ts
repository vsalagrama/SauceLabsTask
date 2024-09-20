import { expect, Locator, type Page } from "@playwright/test";
import {testDataObject} from '../tests/testData'
export class LandingPage {
   
   

    private userName: Locator;
    private password: Locator;
    private login: Locator;

   
    readonly page: Page
    constructor(page: Page) {
        this.page = page;
        this.userName = this.page.locator('[data-test="username"]');
        this.password = this.page.locator('[data-test="password"]');
        this.login = this.page.locator('[data-test="login-button"]');
    }

    async launchWebsite() {
        await this.page.goto(testDataObject.baseURL);
        console.log('Website Launched Successfully');
    }

    async loginAsStandardUser() {
        await this.launchWebsite();
        await this.enterUsername(testDataObject.standard_user.username);
        await this.enterPassword(testDataObject.standard_user.password);
        await this.clickLogin();
        await this.checkStatus();
    }
    async checkStatus() {
        await expect(this.page.locator('[data-test="title"]')).toBeVisible();
        console.log('Successfully launched Products Page');
    }
    async clickLogin() {
        await this.login.click();
        console.log('Login button Clicked');
    }
    
    async enterUsername(username: string) {
        await this.enterText(this.userName,username);
    }
    async enterPassword(password: string) {
        await this.enterText(this.password,password);
    }

    async enterText(locator: Locator, text: string) {
        await locator.fill(text);
        console.log('Text entered', text);
    }
    
}
