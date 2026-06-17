import {Page} from "@playwright/test"; 
import HomePage from "./HomePage";


export default class LoginPage{  

   private readonly usernameputInputSelector = "#user-name";
   private readonly passwordInputInputSelector = "#password";
   private readonly loginButtonSelector = "#login-button";

   constructor(private page: Page){


   }
  
async navigateToLoginPage(){
   await this.page.goto("/") 
}

async fillUserName(username: string){
   await this.page.locator(this.usernameputInputSelector).fill(username);

}


async fillPassword(password:string){
   await this.page.locator(this.passwordInputInputSelector).fill(password);


}


async clickLoginButton(){
   await this.page
   .locator(this.loginButtonSelector)
   .click()
   .catch((error) => {
       console.error('Error clicking login button: $(error)'); 
       throw error; 
   });

const homePage = new HomePage(this.page);
return homePage;
}
}





