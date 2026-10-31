import{ test, expect } from '@playwright/test';     

test("Home page",async({page}) => {
 await page.goto("https://practicesoftwaretesting.com/");
 //Ensure Sign In button is visible
 await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in");
 //Check the Page Title
  await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");
  console.log("✔ Success: Page title test passed successfully :)");

  //Check the count of the items
  const productGrid = page .locator(".col-md-9");
  await expect(productGrid.getByRole("link")).toHaveCount(9);
//Search for an item and verify the search results
await expect(page.getByText("Thor Hammer")).toBeVisible();

});

test.afterEach('close Browser', async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    // Test has failed, take a screenshot
    await page.screenshot({ path: `screenshots/${testInfo.title}.png` });
  }

  await page.close();
});