function calculateSalesTax(salesData, i) {
  for(var i = 0; i < salesData.length; i++){
    provincialSales(salesData, i);
    provincialTax(salesData, i);
    nationalSales(salesData, i);
  }
  console.log(nationalData);
}

function provincialSales(salesData, i) {

  var pSales = 0;
  for (var j = 0; j < salesData[i].sales.length; j++){
    pSales += salesData[i].sales[j]; //total sales
  }

  salesData[i].pSales = pSales;

  return;
}

function provincialTax(salesData, i) {
  var pTax = 0;
  pTax += (salesData[i].pSales * salesTaxRates[salesData[i].province]);
  salesData[i].pTax = pTax;
}

function nationalSales(salesData, i) {
  if (nationalData[salesData[i].name] === undefined){
    nationalData[salesData[i].name] = {};
    nationalData[salesData[i].name].TotalSales = 0;
    nationalData[salesData[i].name].TotalTax = 0;
  };

    nationalData[salesData[i].name].TotalSales += salesData[i].pSales;
    nationalData[salesData[i].name].TotalTax += salesData[i].pTax;
}



var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var nationalData = {};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

calculateSalesTax(companySalesData);
