import { test, expect } from "@playwright/test";
  const green = "\x1b[32m";
test("logintest", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  await page.locator('[data-test="nav-sign-in"]').click();
  await page
    .locator('[data-test="email"]')
    .fill("customer@practicesoftwaretesting.com");
  await page.locator('[data-test="password"]').fill("welcome01");
  await page.locator('[data-test="login-submit"]').click();
  await expect(page.locator('[data-test="nav-menu"]')).toContainText(
    "Jane Doe",
  );
  console.log(`${green}✔ Success: Login test passed successfully :)`);
  await expect(page.locator('[data-test="page-title"]')).toContainText(
    "My account",
  );
  console.log(`${green}✔ Success: Page title test passed successfully :)`);

  //logout
    await page.locator('[data-test="nav-menu"]').click();
    await page.locator('[data-test="nav-sign-out"]').click();
});

//New test case to verify the login functionality with invalid credentials
test("login with invalid credentials", async({ page })=>{
    await page.goto("https://practicesoftwaretesting.com/"); 
    await page.locator('[data-test="nav-sign-in"]').click();  
    await page.locator('[data-test="email"]')
        .fill("invalid@example.com");
    await page.locator('[data-test="password"]').fill("invalidpassword");
    await page.locator('[data-test="login-submit"]').click();
    await expect(page.locator('[data-test="login-error"]')).toContainText("Invalid email or password");
    console.log(`${green}✔ Success: Login with invalid credentials test passed successfully :)`);
});
