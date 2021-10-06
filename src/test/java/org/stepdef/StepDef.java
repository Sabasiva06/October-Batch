package org.stepdef;

import org.base.BaseClass;
import org.locator.LoginPage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDef extends BaseClass {
	LoginPage loginPage;

	@Given("User is Facebook page")
	public void user_is_Facebook_page() {
		
	}

	@When("User enter {string} and {string}")
	public void user_enter_and(String string, String string2) {
		loginPage = new LoginPage();
		WebElement txtUserName = loginPage.getTxtUserName();
		typeText(txtUserName, string);

		WebElement txtPassword = loginPage.getTxtPassword();
		typeText(txtPassword, string2);

	}

	@When("used should click login Button")
	public void used_should_click_login_Button() {

		WebElement btnLogin = loginPage.getBtnLogin();
		btnClick(btnLogin);

	}

	@Then("user need to validate homescreen")
	public void user_need_to_validate_homescreen() {
		System.out.println("Invalid login");
	}

}
