package common;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", "html:target/html/", "json:target/json/output.json"},
		glue = {"src/test/java/project/"},
		features = "src/resources/features/"
		)
public class RunnerTest {

}
