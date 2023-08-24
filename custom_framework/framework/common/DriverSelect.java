package common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
//import io.github.bonigarcia.wdm.ChromeDriverManager;
//import io.github.bonigarcia.wdm.InternetExplorerDriverManager;

import jxl.read.biff.BiffException;

public class DriverSelect extends ReadSpreadsheet{
	
	private WebDriver driver;
	
	public WebDriver getDriver(){
		
		if (driver == null) {
			
		    //Selecting Browser Driver Based on Configuration Settings
			try{
			String my_platform = super.getXLSValue("properties","1","Platform");
			String my_browser = super.getXLSValue("properties","1","Browser");
			String my_device = super.getXLSValue("properties","1","Device");
		
			if (my_platform.equals("Web")){
				
				if (my_browser.equals("IE")) {
					//InternetExplorerDriverManager.getInstance().setup();
					System.setProperty("webdriver.ie.driver","C:\\Users\\IBM_ADMIN\\Desktop\\AT&T 2016\\ATT_Cu_Se_workspace\\browser_drivers\\IEDriverServer.exe" );
					driver = new InternetExplorerDriver();	
					// C:\\Users\\IBM_ADMIN\\Desktop\\AT&T 2016\\ATT_Cu_Se_workspace\\browser_drivers\\IEDriverServer.exe
				
				}
				if (my_browser.equals("Firefox")) {
					driver = new FirefoxDriver();
					
				}
				if (my_browser.equals("Chrome")) {
					//ChromeDriverManager.getInstance().setup();
					System.setProperty("webdriver.chrome.driver","C:\\Users\\IBM_ADMIN\\Desktop\\AT&T 2016\\ATT_Cu_Se_workspace\\browser_drivers\\chromedriver.exe" );
					driver = new ChromeDriver();
				
				}
				if (my_browser.equals("<NA>")) {
					//ChromeDriverManager.getInstance().setup();
					System.setProperty("webdriver.chrome.driver","C:\\Users\\IBM_ADMIN\\Desktop\\AT&T 2016\\ATT_Cu_Se_workspace\\browser_drivers\\chromedriver.exe" );
					driver = new ChromeDriver();
				
				}		
			}
			
			if (my_platform.equals("Chrome Mobile")) {
			
				if (my_device.equals("<NA>")) {
					
					my_device = "Samsung Galaxy S III";
				
				}
				
			Map<String, String> mobileEmulation = new HashMap<String, String>();
			mobileEmulation.put("deviceName", my_device);
			Map<String, Object> chromeOptions = new HashMap<String, Object>();
			chromeOptions.put("mobileEmulation", mobileEmulation);
			DesiredCapabilities capabilities = DesiredCapabilities.chrome();
			capabilities.setCapability(ChromeOptions.CAPABILITY, chromeOptions);
			System.setProperty("webdriver.chrome.driver","C:\\Users\\IBM_ADMIN\\Desktop\\AT&T 2016\\ATT_Cu_Se_workspace\\browser_drivers\\chromedriver.exe" );
			//ChromeDriverManager.getInstance().setup();
			driver = new ChromeDriver(capabilities);
			}
		
		}
			catch(BiffException e){
			}
			catch(IOException e1){	
			}
		}
		return driver;	
	}
	
	public String getXLSValue (String TableType, String RowName, String ColumnName) throws BiffException, IOException{
		String xls_value = super.getXLSValue(TableType, RowName, ColumnName);
		return xls_value;
	}
}


