import cartPage from "../pageobjects/cartPage";
import checkoutPage from "../pageobjects/checkoutPage";
import HomePage from "../pageobjects/homePage";
import inventoryPage from "../pageobjects/inventoryPage";
import checkoutOverview from "../pageobjects/checkoutOverview";
import checkoutComplete from "../pageobjects/checkoutComplete";

    describe("Testing fill inputs empty", () =>{
        it("Username and password fields are empty, should display an error", async() =>{
            await HomePage.open();
            await HomePage.login("","");
            await HomePage.loginModalBtnClick();
            expect(await HomePage.errorMessage.getText()).toContain("Epic sadface: Username is required");
        });
    });
    describe("Username testing inputs", () =>{
        it("Username field empty, should display an error", async() =>{
            await HomePage.open();
            await HomePage.login("","secret_sauce")
            await HomePage.loginModalBtnClick();
            await expect(HomePage.errorMessage).toHaveText("Epic sadface: Username is required")
        });
    });
    describe("Password testing inputs", () =>{
        it("Password field invalid, should display an error", async() =>{
            await HomePage.open()
            await HomePage.login("standard_user","invalid")
            await HomePage.loginModalBtnClick();
            await expect(HomePage.errorMessage).toHaveText("Epic sadface: Username and password do not match any user in this service")
        });
    }); 

describe ("Login to standard user", ()=>{
   it ("Verify login process.", async()=>{
        await HomePage.open()
        await expect(HomePage.userNameInput).toBeDisplayed();
        await HomePage.login("standard_user","secret_sauce");
        await HomePage.loginModalBtnClick();
    });

    it ("Verify standard user page.", async ()=>{
        await expect(inventoryPage.productsPage).toBeDisplayed();
        await expect(inventoryPage.inventoryItems).toBeDisplayed();
    });
});

describe ("Add items to the cart", () =>{
    it ("Verify shopping cart process.", async()=>{
        await HomePage.open()
        await expect(HomePage.userNameInput).toBeDisplayed();
        await HomePage.login("standard_user","secret_sauce");
        await HomePage.loginModalBtnClick();
        await expect(inventoryPage.inventoryItems).toBeDisplayed();
        await inventoryPage.addBtnClick();
    });


    it("Complete Purchase Flow", async() => {
        await HomePage.open()
        await expect(HomePage.userNameInput).toBeDisplayed();
        await HomePage.login("standard_user","secret_sauce");
        await HomePage.loginModalBtnClick();

        await expect(inventoryPage.inventoryItems).toBeDisplayed();
        await inventoryPage.addBtnBikeClick();
        await expect(inventoryPage.cartNumberIcon).toBeDisplayed();

        await expect(cartPage.yourCart).toBeDisplayed();
        await expect(cartPage.cartList).toBeDisplayed();
        await cartPage.checkoutModalBtnClick();

        await expect(checkoutPage.checkForm).toBeDisplayed();
        await checkoutPage.infoForm("Lucio","Vila","3000");
        await checkoutPage.continueBtnClick();

        await expect(checkoutOverview.cartListOverview).toBeDisplayed();
        await expect(checkoutOverview.cartItemOverview).toBeDisplayed();
        await checkoutOverview.finshOverviewBtnClick();

        await expect(checkoutComplete.messageOrder).toBeDisplayed();
        await checkoutComplete.backBtnClick();

        await expect(inventoryPage.inventoryItems).toBeDisplayed();
    }); 

    it('Filter and Add to Cart Flow', async() =>{
        await HomePage.open()
        await expect(HomePage.userNameInput).toBeDisplayed();
        await HomePage.login("standard_user","secret_sauce");
        await HomePage.loginModalBtnClick();
        await filterSelect.selectByVisibleText('Sauce Labs Onesie');
        

    });
    
});