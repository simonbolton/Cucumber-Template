package modules;

import org.openqa.selenium.WebDriver;

import helpers.Log;
import pageobjects.HomePage;

public class Login {
	
public static void Execute(WebDriver driver) throws Exception{
		
		HomePage.login.click();
		Log.info("Click action is perfromed on login link" );

	}
		

}
