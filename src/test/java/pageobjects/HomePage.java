package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class HomePage extends BaseClass {
	
	public HomePage(WebDriver driver){
		 super(driver);
		 } 
	 
	 @FindBy(how=How.CLASS_NAME, using="login")
	 public static WebElement login;
	 

	 
	 }
	 
	
	
	

