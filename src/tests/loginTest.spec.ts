
//Test case using Page Object Model


import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";


test("test", async ({page}) => {
   const loginPage = new LoginPage(page);


   await loginPage.navigateToLoginPage();
   await loginPage.fillUserName("standard_user")
   await loginPage.fillPassword("secret_sauce")

   const homePage= await loginPage.clickLoginButton();
   await homePage.expectHomeTitleToBeVisible();


});

