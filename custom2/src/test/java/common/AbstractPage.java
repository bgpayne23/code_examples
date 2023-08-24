package common;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
//import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import jxl.read.biff.BiffException;

public class AbstractPage extends DriverSelect{
	
	// Combo Method to Search a Spreadsheet Column for a value, and return the index
	public int Search(WebDriver driver, String Lookup, String TableType, String ColumnName) throws BiffException, IOException, InterruptedException
	{
		int index = 0;
		String value = null;
		for (;;){
				index = index + 1;
				
				value = super.getXLSValue(TableType, String.valueOf(index), ColumnName);
				if (value.contains(Lookup)) {
					break;
				}
		}
		return index;
	}
	
	// Combo Method to Verify Text with JUnit Assertion
	public void JUnitAssert(WebDriver driver, String DataIndex, String DataType, String ElementName, String ElementType) throws BiffException, IOException, InterruptedException
	{	
		Thread.sleep(5000);
		String expected_text = super.getXLSValue("data", DataIndex, DataType);
		WebElement element = getElement (driver,ElementName,ElementType);
		String element_text = element.getText();
		
		if (element_text.contains(expected_text)) {
			Assert.assertTrue(true);
			System.out.println(element_text+" contains "+expected_text);
		} else {
			System.out.println(element_text+" does not contain "+expected_text);
			Assert.assertTrue(false);
			
		}
		
	}
	
	// Combo Method for Entering Text from a Data Table
	public void EnterText(WebDriver driver, String DataIndex, String DataType, String ElementName, String ElementType) throws BiffException, IOException, InterruptedException{
		String data_value = super.getXLSValue("data", DataIndex, DataType);	
		WebElement element = getElement (driver,ElementName,ElementType);
			element.click();
			element.sendKeys(data_value); }
	
	// Combo Method for Opening Web Apps
	public void OpenWebApp(WebDriver driver) throws BiffException,IOException
	{
		driver.manage().deleteAllCookies();
		String my_platform = super.getXLSValue("properties", "1", "Platform");
		if (my_platform.equals("Chrome Mobile")) {
			int my_xDim = Integer.parseInt(super.getXLSValue("properties", "1", "xDim"));
			int my_yDim = Integer.parseInt(super.getXLSValue("properties", "1", "yDim"));
			Dimension d = new Dimension(my_xDim, my_yDim);
			driver.manage().window().setSize(d);
		}else{
			driver.manage().window().maximize();
		}
		String url = super.getXLSValue("properties","1","Url1");	
		driver.navigate().to(url);
	}
	
	// Combo Method for Quitting Apps
	public void QuitWebApp()
	{
	    if (driver != null)
	      driver.quit();
	}
	
	// Combo Method for Clicking Elements
	public void ClickElement(WebDriver driver, String ElementName, String ElementType) throws BiffException, IOException, InterruptedException
	{	
		WebElement element = getElement(driver, ElementName, ElementType);
		element.click();
	}
	// Method for finding and element by Element Type
	public WebElement getElement(WebDriver driver, String ElementName, String ElementType) throws BiffException, IOException, InterruptedException
	{
		ImplicitWait(driver);
		
		WebElement element = null;
		String xls_value = super.getXLSValue("object", ElementName, ElementType);
		
		if (ElementType == "Linktext"){
			element = driver.findElement(By.linkText(xls_value));
		}
		if (ElementType == "ID"){
			element = driver.findElement(By.id(xls_value));
		}
		if (ElementType == "Xpath"){
			element = driver.findElement(By.xpath(xls_value));
		}
		if (ElementType == "CSS"){
			element = driver.findElement(By.cssSelector(xls_value));
		}
		if (ElementType == "className"){
			element = driver.findElement(By.className(xls_value));
		}
		scrollTo(driver,element);
		Highlight(driver, element);
		Thread.sleep(2000);
		return element;
	}
	
	// Method for Implicit Waits
	public static void ImplicitWait(WebDriver driver)
	{
	 driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
	}
	
	// Method for Element Highlights
	public static void Highlight(WebDriver driver,WebElement element) throws InterruptedException
	{
		  //Creating JavaScriptExecuter Interface
		   JavascriptExecutor js = (JavascriptExecutor)driver;
		   js.executeScript("arguments[0].style.border='2px solid blue'", element);
	 }
	
	// Method for Scrolling Elements into View
	 public static void scrollTo(WebDriver driver, WebElement element) {
	        ((JavascriptExecutor) driver).executeScript(
	                "arguments[0].scrollIntoView();", element);
	  }
	 
	 // Method for navigating to the href of an element
	 public static void navToHref(WebDriver driver, WebElement element){
		 String href = element.getAttribute("href");
		 driver.navigate().to(href);
	 }	
	 
	 WebDriver driver = super.getDriver();

	 public WebDriver getDriver(){
	 	return driver;
	 }
	 
	 public String getXLSValue (String TableType, String RowName, String ColumnName) throws BiffException, IOException{
			String xls_value = super.getXLSValue(TableType, RowName, ColumnName);
			return xls_value;
		}
}