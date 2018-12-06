package stepDefinitions;

import static org.junit.Assert.assertEquals;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobjects.LandingPage;
import pageobjects.ResultsPage;

public class SearchesStepDefs {

	public static WebDriver driver;

	public SearchesStepDefs() {

		driver = Setup.driver;

	}

	@Given("^I am at the \"([^\"]*)\" site$")
	public void i_have_at_the_site(String url) throws Throwable {

		driver.get(url);
	}

	@When("^I enter \"([^\"]*)\" in to the search box$")
	public void i_enter_in_to_the_search_box(String term) throws Throwable {

		PageFactory.initElements(driver, pageobjects.LandingPage.class);

		LandingPage.searchBox.sendKeys(term);

		LandingPage.searchBox.click();

	}

	@And("^I press search$")
	public void i_press_search() throws Throwable {

		PageFactory.initElements(driver, pageobjects.LandingPage.class);

		LandingPage.search.click();

	}

	@Then("^I should get \"([^\"]*)\" returned$")
	public void i_should_get_returned(String result) throws Throwable {

		PageFactory.initElements(driver, pageobjects.ResultsPage.class);

		assertEquals(ResultsPage.ItemCount.getText(), result);

	}

	
	@Then("^I should see \"(.*)\" warning$")
	public void i_should_see_warning(String warning) throws Throwable {

		PageFactory.initElements(driver, pageobjects.ResultsPage.class);
		
		assertEquals(ResultsPage.warning.getText(), warning);

	}

}
