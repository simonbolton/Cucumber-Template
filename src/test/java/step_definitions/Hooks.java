package step_definitions;

import java.net.MalformedURLException;

import org.junit.jupiter.api.extension.ExtendWith;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.opera.OperaDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.SeleniumExtension;
import io.github.bonigarcia.wdm.WebDriverManager;

@ExtendWith(SeleniumExtension.class)

public class Hooks {


	public static WebDriver driver;

	@Before
	
	public void openBrowser() throws MalformedURLException {
		System.out.println("Called openBrowser");


		int browserType = Integer.parseInt(System.getProperty("browser"));

		System.out.println("BROWSER TYPE " + browserType);

		if (browserType == 1) {
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
		}

		else if (browserType == 2) {
			WebDriverManager.iedriver().setup();
			driver = new  InternetExplorerDriver();
		}	
		
		else if (browserType == 3) {
			WebDriverManager.firefoxdriver().setup();
			driver = new  FirefoxDriver();
		}	

		else if (browserType == 4) {
			WebDriverManager.operadriver().setup();
			driver = new  OperaDriver();
		}	

		else if (browserType == 5) {
			WebDriverManager.phantomjs().setup();
			driver = new  PhantomJSDriver();
		}	

		else if (browserType == 6) {
			WebDriverManager.edgedriver().setup();
			driver = new  EdgeDriver();
		}	

		
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
	}

	@After
	/**
	 * Embed a screenshot in test report if test is marked as failed
	 */
	public void embedScreenshot(Scenario scenario) {

		if (scenario.isFailed()) {
			try {
				scenario.write("Current Page URL is " + driver.getCurrentUrl());
				byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
				scenario.embed(screenshot, "image/png");
			} catch (WebDriverException somePlatformsDontSupportScreenshots) {
				System.err.println(somePlatformsDontSupportScreenshots.getMessage());
			}

		}
		driver.quit();

	}

}