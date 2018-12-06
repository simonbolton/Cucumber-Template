package stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import pageobjects.ContactUsPage;
import pageobjects.LandingPage;

public class LandingPageStepDefs {

	public static WebDriver driver;

	public LandingPageStepDefs() {

		driver = Setup.driver;

	}

	@Given("^I click the ContactUs link$")
	public void i_click_the_ContactUs_link() throws Throwable {

		PageFactory.initElements(driver, LandingPage.class);
		PageFactory.initElements(driver, ContactUsPage.class);

		LandingPage.contactUs.click();

		

	}
}
