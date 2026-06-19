
//Test case using Page Object Model


import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";
//import cdata from "../data/logins.json"



test("test", async ({page}) => {
   const loginPage = new LoginPage(page);


   await loginPage.navigateToLoginPage();

    await loginPage.fillUserName("cocoabeachfl007@yopmail.com")
   await loginPage.fillPassword("Bigfix123!Bigfix123!")

   const homePage= await loginPage.clickLoginButton();
   await homePage.expectHomeTitleToBeVisible();


});

test.skip("Sample env test", async({page}) => {

    console.log(process.env.NODE_ENV);
    console.log(process.env.username);
    console.log(process.env.password);

});

