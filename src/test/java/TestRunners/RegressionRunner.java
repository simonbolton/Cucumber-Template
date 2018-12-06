package TestRunners;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"src/test/Features/"},
		plugin = {"html:target/cucumber-html-report", "json:target/cucumber-json-report.json" },
		glue={"stepDefinitions"},
		tags= {"@ContactUs"}
		)

public class RegressionRunner {

}