/*
Imitates the Vlookup function. Receives:
1. sheet - A reference to the sheet you would like to run Vlookup on
2. column - The number of the column the lookup should begin from
3. index - The number of columns the lookup should cover.
4. value - The desired value to look for in the column.
Once the cell of the [value] has been found, the returned parameter would be the value of the cell which is [index] cells to the right of the found cell.
*/
function vlookup(sheet, column, index, value) {
  
  var lastRow=sheet.getLastRow();
  var data=sheet.getRange(1,column,lastRow,column+index).getValues();
  
  for(i=0;i<data.length;++i){
    if (data[i][1]==value){
      return data[i][index];
    }
  }
}
