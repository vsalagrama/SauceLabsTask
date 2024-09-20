import { expect, Locator, type Page } from "@playwright/test";
import {testDataObject} from '../tests/testData'
export class CheckoutPage {
    
   
    private firstname: Locator;
    private lastname: Locator;
    private zip: Locator;
    private continue: Locator;
    private finish: Locator;

    readonly page: Page
    constructor(page: Page) {
        this.page = page;
        this.firstname =  this.page.locator('[data-test="firstName"]');
        this.lastname = this.page.locator('[data-test="lastName"]');
        this.zip = this.page.locator('[data-test="postalCode"]');
        this.continue = this.page.locator('[data-test="continue"]');
        this.finish = this.page.locator('[data-test="finish"]');
    }

    async enterInformation(checkoutDetails: { firstname: string; lastname: string; zip: string; }) {
        await this.enterText(this.firstname, checkoutDetails.firstname);
        await this.enterText(this.lastname,checkoutDetails.lastname);
        await this.enterText(this.zip,checkoutDetails.zip);
    }
    
    async enterText(locator: Locator, text: string) {
        await locator.fill(text);
        console.log('Text entered', text);
    }

    async clickContinue() {
        await this.continue.click();
        console.log('Continue Button clicked');
    }

    async clickFinish() {
        await this.finish.click();
        console.log('Finish Button clicked');
    }
    
   

}