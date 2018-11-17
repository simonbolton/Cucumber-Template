package step_definitions;



import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import modules.Login;
import pageobjects.HomePage;

public class LoginTest {

	public WebDriver driver;

	public LoginTest() {
		driver = Hooks.driver;
	}

	@When("^I open automationpractice website$")
	public void i_open_automationpractice_website() throws Throwable {
		driver.get("http://automationpractice.com/index.php");
		

	}

	@When("^I sign in$")
	public void i_sign_in() throws Throwable {
		PageFactory.initElements(driver, HomePage.class);
		
		Login.Execute(driver );
		
	}

	@Then("^I sign out$")
	public void i_sign_out() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

}
