package stepDefinitions;

import java.net.MalformedURLException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.opera.OperaDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Setup {

	public static WebDriver driver;

	@Before

	public void openBrowser() throws MalformedURLException {

		System.out.println("Called openBrowser");

		String browserType = System.getProperty("browser");

		System.out.println("BROWSER TYPE " + browserType);

		switch (browserType)

		{

		case "Chrome":
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
			break;

		case "IE":
			WebDriverManager.iedriver().setup();
			driver = new InternetExplorerDriver();
			break;
			
		case "FireFox":
			WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver();
			break;

		case "Opera":
			WebDriverManager.operadriver().setup();
			driver = new OperaDriver();
			break;

		case "PhantomJS":
			WebDriverManager.phantomjs().setup();
			driver = new PhantomJSDriver();
			break;

		case "Edge":
			WebDriverManager.edgedriver().setup();
			driver = new EdgeDriver();
			break;

		}

		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();

	}

	@After 
	public void quit() {

	
		driver.quit();
	}

}
