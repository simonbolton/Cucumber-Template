package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ResultsPage extends BaseClass {

	
	@FindBy(how = How.CSS, using = "#center_column > h1 > span.heading-counter")
	@CacheLookup
	public static WebElement ItemCount;
	
	
	@FindBy(how = How.CSS, using = "#center_column > p")
	@CacheLookup
	public static WebElement warning;
	
	
	
	public ResultsPage(WebDriver driver) {
		super(driver);

	}
}
