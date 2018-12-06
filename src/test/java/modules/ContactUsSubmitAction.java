package modules;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

import pageobjects.ContactUsPage;

public class ContactUsSubmitAction {

	public static void Execute(WebDriver driver,String department) throws Exception {
		
		ContactUsPage.subjectHeadding.click();

		Select group = new Select(ContactUsPage.subjectHeadding);

		//group.selectByValue("2");
		
		group.selectByVisibleText(department);
		
		ContactUsPage.email.sendKeys("test@test.com");

		ContactUsPage.orderId.sendKeys("123123123");
		
		ContactUsPage.messageBody.sendKeys("This is a test");

	}

}
