package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LandingPage extends BaseClass {

	public LandingPage(WebDriver driver) {
		super(driver);
	
	}
	
	@FindBy(how = How.CSS, using = "#search_query_top")
	@CacheLookup
	public static WebElement searchBox;
	
	@FindBy(how = How.XPATH, using = "//*[@id=\"center_column\"]/h1/span[2]")
	@CacheLookup
	public static WebElement searchBoxXpath;
	
	@FindBy(how = How.CSS, using = "#searchbox > button")
	@CacheLookup
	public static WebElement search;
	
	
	@FindBy(how = How.CSS, using = "#contact-link > a")
	@CacheLookup
	public static WebElement contactUs;
	
	

}
