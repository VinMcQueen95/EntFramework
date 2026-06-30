
//Test case using Page Object Model


import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";


test("test", async ({page}) => {
   const loginPage = new LoginPage(page);


   await loginPage.navigateToLoginPage();

    await loginPage.fillUserName("cocoabeachfl007@yopmail.com")
   await loginPage.fillPassword("Bigfix123!Bigfix123!")
   console.log("About to click Login button")

   const homePage= await loginPage.clickLoginButton();
   await homePage.expectHomeTitleToBeVisible();


});

