import { expect, Locator, type Page } from "@playwright/test";
import { testDataObject } from '../tests/testData'
export class InventoryPage {


    private product: Locator;
    private cart: Locator;

    readonly page: Page
    constructor(page: Page) {
        this.page = page;
        this.product = this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.cart = this.page.locator('[data-test="shopping-cart-link"]');

    }
    async addProduct() {
            await this.product.click();
            console.log('Product has been added to the cart');
        }
    async clickOnCart() {
            await this.cart.click();
            console.log('Cart Button clicked');
        }


    }