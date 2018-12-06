package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ContactUsPage extends BaseClass {

	public ContactUsPage(WebDriver driver) {
		super(driver);

	}

	@FindBy(how = How.CSS, using = "#id_contact")
	@CacheLookup
	public static WebElement subjectHeadding;

	@FindBy(how = How.CSS, using = "#email")
	@CacheLookup
	public static WebElement email;

	@FindBy(how = How.CSS, using = "#id_order")
	@CacheLookup
	public static WebElement orderId;

	@FindBy(how = How.CSS, using = "#fileUpload")
	@CacheLookup
	public static WebElement attachFile;

	@FindBy(how = How.CSS, using = "#message")
	@CacheLookup
	public static WebElement messageBody;

	@FindBy(how = How.CSS, using = "#submitMessage > span")
	@CacheLookup
	public static WebElement sendButton;

	@FindBy(how = How.CSS, using = "#center_column > p")
	@CacheLookup
	public static WebElement sucessAlert;
	
	@FindBy(how = How.CSS, using = "#center_column > h1")
	@CacheLookup
	public static WebElement ContactUsHeadding;
	
	
	
	

}
