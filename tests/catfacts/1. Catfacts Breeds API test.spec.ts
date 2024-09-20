
const limit = 5;
import { test, expect } from '@playwright/test';

test(`1. Get a list of CAT breeds @smoke @regression @api`, async ({ request }) => {
    // Sending the GET request
    const response = await request.get('https://catfact.ninja/breeds', {
        params: {
            limit: limit,
        },
        headers: {
            Accept: 'application/json',
            'X-CSRF-TOKEN': 'ycvP9x0i2pPoazDbScNAk0C3YDqIe4yPi9b19xEL'
        },
    });

    // Verify the status code is 200
    expect(response.status()).toBe(200);

    // Parse and print the JSON response
    var responseBody = JSON.parse(await response.text());

    // Assertions to verify if the response contains the cats details
    expect(responseBody.data).toBeInstanceOf(Array);
    expect(responseBody.data.length).toBeGreaterThan(0);
    expect(responseBody.data.length).toBe(limit);

    console.log(responseBody.data.length);
    for (const breed of responseBody.data) {
        console.log(breed);
        expect(breed.breed).not.toBeNull();
        expect(breed.country).not.toBeNull();
        expect(breed.origin).not.toBeNull();
        expect(breed.coat).not.toBeNull();
        expect(breed.pattern).not.toBeNull();
    }


});
