package common;

import java.io.File;
import java.io.IOException;

import jxl.Sheet;
import jxl.Workbook;
import jxl.read.biff.BiffException;

public class ReadSpreadsheet {
	
	private Sheet SourceTableSheet;
	
	public String getXLSValue (String TableType, String RowName, String ColumnName) throws BiffException, IOException{
		
		String prop_src="C://Users//IBM_ADMIN//Desktop//Zerosion_Automation//test//src//properties.xls";
		Workbook prop_wb = Workbook.getWorkbook(new File(prop_src));
		int SheetNum=1;
		Sheet PropTableSheet = prop_wb.getSheet(SheetNum);
	
		String obj_path = PropTableSheet.getCell(6,1).getContents();
		String data_path = PropTableSheet.getCell(7,1).getContents();
	
		//Define the source table//
		
		String src = null;
		
		if (TableType == "properties"){
			src = prop_src;
		}
		
		if (TableType == "object"){
			src = obj_path;
			SheetNum=0;
		}
		
		if (TableType == "data"){
			src = data_path;
			SheetNum=0;
		}
		
		//Access the source table and Work sheet//
		Workbook source_wb = Workbook.getWorkbook(new File(src));
		SourceTableSheet = source_wb.getSheet(SheetNum);
		
		// Find RowNumber of RowName //
		int RowCount = SourceTableSheet.getRows();
		int RowNumber;
		String CurrentRowName = null;

		//System.out.println("RowName: "+RowName);
		
		for (RowNumber=0; RowNumber<RowCount;) {
			CurrentRowName = SourceTableSheet.getCell(0,RowNumber).getContents();
			if (CurrentRowName.equals(RowName)){
				break;
			}else{
				RowNumber++;
				if (RowNumber == RowCount){
					//System.out.println("Error! Row Name "+RowName+" not found!");
					break;}	
			}
		}	
		
		//System.out.println("CurrentRowName: "+CurrentRowName);
		
		//Find ColumnNumber of ColumnName //
		int ColumnCount = SourceTableSheet.getColumns();
		int ColumnNumber;
		String CurrentColumnName = null;
		//System.out.println("ColumnName: "+ColumnName);
		for (ColumnNumber=0; ColumnNumber<ColumnCount;){
			CurrentColumnName = SourceTableSheet.getCell(ColumnNumber,0).getContents();
			if (CurrentColumnName.equals(ColumnName)){
				break;
			}else{
				ColumnNumber++;
				if (ColumnNumber == ColumnCount){
					//System.out.println("Error! Column Name "+ColumnName+" not found!");
					break;}	
			}
		}
		
		//System.out.println("CurrentColumnName: "+CurrentColumnName);
		
		// Define the Return Value //
		
		String xls_value = SourceTableSheet.getCell(ColumnNumber,RowNumber).getContents(); 
		return xls_value;

		
	}
	}
