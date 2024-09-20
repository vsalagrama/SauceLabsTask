import { test, expect } from '@playwright/test';
import { testDataObject } from './testData';

import { LandingPage } from '../pages/LandingPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ThankYouPage } from '../pages/ThankYouPage';

test('3. Problem user @regression @smoke', async ({ page, isMobile }) => {

    const landingPage = new LandingPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const thankYouPage = new ThankYouPage(page);

    //Login as standard user
    await landingPage.loginAsProblemUser();
    
    // add a product
    await inventoryPage.addProduct();
    await inventoryPage.clickOnCart();

    // Cart Page - Checkout Process
    await cartPage.clickCheckout();

    // Checkout Page - Filling information
    await checkoutPage.enterInformation(testDataObject.checkoutDetails);
    await checkoutPage.clickContinueProblemUser();


    // getByRole('button', { name: 'Open Menu' })
    // locator('[data-test="logout-sidebar-link"]')

    // Logout - pending 
});