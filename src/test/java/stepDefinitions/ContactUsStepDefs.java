package stepDefinitions;

import static org.junit.Assert.assertEquals;
import modules.ContactUsSubmitAction;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobjects.ContactUsPage;

public class ContactUsStepDefs {

	public static WebDriver driver;

	public ContactUsStepDefs() {

		driver = Setup.driver;

	}

	@Then("^I should be taken to the Customer Service Contact Us page$")
	public void i_should_be_taken_to_the_Customer_Service_Contact_Us_page() throws Throwable {

		PageFactory.initElements(driver, ContactUsPage.class);

		assertEquals(ContactUsPage.ContactUsHeadding.getText(), "CUSTOMER SERVICE - CONTACT US");

	}

	@Given("^I have filled in the form with valid data to \"([^\"]*)\"$")
	public void i_have_filled_in_the_form_with_valid_data_to(String departmnet) throws Throwable {

		PageFactory.initElements(driver, ContactUsPage.class);
		
		ContactUsSubmitAction.Execute(driver,departmnet);

	}

	@When("^I press send$")
	public void i_press_send() throws Throwable {

		PageFactory.initElements(driver, ContactUsPage.class);

		ContactUsPage.sendButton.click();

	}

	@Then("^I should see the success alert$")
	public void i_should_see_the_success_alert() throws Throwable {

		PageFactory.initElements(driver, ContactUsPage.class);

		assertEquals("Your message has been successfully sent to our team.", ContactUsPage.sucessAlert.getText());

	}

}
