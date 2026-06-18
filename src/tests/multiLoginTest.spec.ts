
//Test case using Page Object Model


import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import ldata from "../data/logins.json"

for (const login of ldata){
    



}

test("test", async ({page}) => {
   const loginPage = new LoginPage(page);


   await loginPage.navigateToLoginPage();
   await loginPage.fillUserName("standard_user")
   await loginPage.fillPassword("secret_sauce")

   const homePage= await loginPage.clickLoginButton();
   await homePage.expectHomeTitleToBeVisible();


});

test.skip("Sample env test", async({page}) => {

    console.log(process.env.NODE_ENV);
    console.log(process.env.username);
    console.log(process.env.password);

});

