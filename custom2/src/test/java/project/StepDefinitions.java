package project;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpStatus;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.junit.Assert;

import common.AbstractPage;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
//import io.github.bonigarcia.wdm.ChromeDriverManager;
//import io.github.bonigarcia.wdm.FirefoxDriverManager;
import jxl.read.biff.BiffException;

public class StepDefinitions extends AbstractPage{

//	WebDriver driver;
	
	@Given("^I open a \"([^\"]*)\" browser$")
	public void i_open_a_browser(String arg1) throws Throwable  {
		
	/*   
			if (arg1.equals("firefox")) {
				FirefoxDriverManager.getInstance().setup();
				driver = new FirefoxDriver();
			}
			if (arg1.equals("chrome")) {
				ChromeDriverManager.getInstance().setup();
				driver = new ChromeDriver();
			}	
	*/
	}

	@Given("^I go to the Zerosion Home Page$")
	public void i_go_to_the_Zerosion_Home_Page() throws ClientProtocolException, IOException, BiffException {
	
		// Retrieve the url
		String url = super.getXLSValue("properties","1","Url1");
		
		// Create Object and pass the url
		HttpUriRequest request = new HttpGet(url);
		
		// send the response or execute the request
		CloseableHttpResponse httpResponse = HttpClientBuilder.create().build().execute(request);
		
		// Verify the response code is equal to 200
		Assert.assertEquals(HttpStatus.SC_OK,httpResponse.getStatusLine().getStatusCode());
		
		String response = String.valueOf(httpResponse.getStatusLine().getStatusCode());
		System.out.println("Status Code: "+response+" - SUCCESS! We have reached "+url+"!");
		
		//    OpenWebApp(driver);
	}

	@When("^I click the Login button$")
	public void i_click_the_Login_button() throws Throwable {
		//		ClickElement(driver,"login","Xpath");

	}

	@When("^I enter a \"([^\"]*)\"'s \"([^\"]*)\" username and \"([^\"]*)\" password$")
	public void i_enter_a_s_username_and_password(String arg1, String arg2, String arg3) throws ClientProtocolException, IOException, BiffException {
		    CloseableHttpClient client = HttpClients.createDefault();
		    String url = super.getXLSValue("properties","1","Url1");
		    HttpPost httpPost = new HttpPost(url+"/web/login");
		 
		    List<NameValuePair> params = new ArrayList<NameValuePair>();
		    params.add(new BasicNameValuePair("username", arg2));
		    params.add(new BasicNameValuePair("password", arg3));
		    httpPost.setEntity(new UrlEncodedFormEntity(params));
		 
		    CloseableHttpResponse response = client.execute(httpPost);
		    Assert.assertEquals(HttpStatus.SC_OK,response.getStatusLine().getStatusCode());
		    System.out.println(String.valueOf(response));
		    client.close();
		
		/*	int DataIndex = super.Search(driver, arg1, "data", "usertype");
		if (arg2.contains("Valid")) {
		EnterText(driver, String.valueOf(DataIndex), "username", "username", "Xpath");
		}
		if (arg2.contains("Invalid")) {
		EnterText(driver, String.valueOf(DataIndex), "invalid_username", "username", "Xpath");
		}
		if (arg3.contains("Valid")) {
		EnterText(driver, String.valueOf(DataIndex), "password", "password", "Xpath");
		}
		if (arg3.contains("Invalid")) {
		EnterText(driver, String.valueOf(DataIndex), "invalid_password", "password", "Xpath");
		}
		if (arg3.contains("NotSpecified")) {
		// Do nothing
		}*/
	}

	@When("^I click the Submit button$")
	public void i_click_the_Submit_button() throws Throwable {
		
		// ClickElement(driver,"submit","Xpath");
	}
	
	@Then("^access to Zerosion is \"([^\"]*)\" for the \"([^\"]*)\"$")
public void access_to_Zerosion_is_for_the(String arg1, String arg2) throws Throwable {
		/*int DataIndex = super.Search(driver, arg2, "data", "usertype");
	
		if (arg1.contentEquals("granted")) {
		JUnitAssert(driver, String.valueOf(DataIndex),"page_title", arg2, "Linktext");
		}
		
		if (arg1.contentEquals("not_granted")) {
		JUnitAssert(driver, String.valueOf(DataIndex),"error_message", "error_message", "Linktext");
		}*/
	}

	@After
	public void close_browser() {
		//QuitWebApp();
	}
}