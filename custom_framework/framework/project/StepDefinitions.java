package project;

import org.openqa.selenium.WebDriver;

import common.AbstractPage;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions extends AbstractPage{
	WebDriver driver = super.getDriver();	
	
	@Given("^I want to write a step with precondition$")
	public void i_want_to_write_a_step_with_precondition() throws Throwable {
		OpenWebApp(driver);
	}

	@Given("^some other precondition$")
	public void some_other_precondition() throws Throwable {
		ClickElement(driver, "categories","Xpath");
	}

	@When("^I complete action$")
	public void i_complete_action() throws Throwable {
		ClickElement(driver, "patio & garden","Xpath");
		ClickElement(driver, "grills & outdoor cooking","Xpath");
	}

	@When("^some other action$")
	public void some_other_action() throws Throwable {
		ClickElement(driver, "grills","Xpath");
		ClickElement(driver, "shop all grills","Xpath");
	}

	@When("^yet another action$")
	public void yet_another_action() throws Throwable {
		ClickElement(driver, "target icon","Xpath");
		EnterText(driver,"1","keyword","search bar","ID");
		ClickElement(driver, "go button","Xpath");
		ClickElement(driver,"epmd","Xpath");
	}

	@Then("^I validate the outcomes$")
	public void i_validate_the_outcomes() throws Throwable {
		JUnitAssert(driver,"1","Record label","record label","Xpath");
	}

	@Then("^check more outcomes$")
	public void check_more_outcomes() throws Throwable {
		JUnitAssert(driver,"1","UPC","upc","Xpath");
	}
	
	@After
	public void QuitBrowser(){
		QuitWebApp();
	}
}
