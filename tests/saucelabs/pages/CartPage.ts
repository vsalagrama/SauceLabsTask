import { expect, Locator, type Page } from "@playwright/test";
import {testDataObject} from '../tests/testData'
export class CartPage {
    
   
    private checkout: Locator;
    private cart: Locator;

    readonly page: Page
    constructor(page: Page) {
        this.page = page;
        this.checkout = this.page.locator('[data-test="checkout"]');

    }
    async clickCheckout() {
        await this.checkout.click();
        console.log('Checkout Button Clicked');
    }

}