
/* curl -X 'GET' \
  'https://catfact.ninja/fact?max_length=24' \
  -H 'accept: application/json' \
  -H 'X-CSRF-TOKEN: ycvP9x0i2pPoazDbScNAk0C3YDqIe4yPi9b19xEL'

  */

const max_length = 24;
import { test, expect } from '@playwright/test';

test(`2. Get random facts @smoke @regression @api`, async ({ request }) => {
    // Sending the GET request
    const response = await request.get('https://catfact.ninja/fact', {
        params: {
            max_length: max_length,
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

    console.log(responseBody);
    expect(responseBody.fact).not.toBeNull();
    expect(responseBody.length).toBe(max_length);

    const fact:string = responseBody.fact;
    expect(fact.length).toBe(max_length);
    console.log(fact.length);
});
