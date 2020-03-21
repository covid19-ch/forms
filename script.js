
function convertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}

function setDate(id) {
    $('#'+id).datepicker({
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        dateFormat: "dd/mm/yy"
    }).datepicker("setDate", new Date());

}

// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    setDate('detectionDate');
    setDate('sampleDate');
});


function exportCSVFile(headers, items, fileTitle) {


    if (headers) {
        items.unshift(headers);
    }

    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);

    var csv = this.convertToCSV(jsonObject);

    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

function getContent() {
    return "my email"
}


function getFormattedValue(id) {
    return document.getElementById(id).value.replace(/,/g, '');
}


function downloadLab() {

   var headers = {
      detectionDate: 'Detection Date'.replace(/,/g, ''), // remove commas to avoid errors
      sampleDate: 'Sample Date'.replace(/,/g, ''), // remove commas to avoid errors
  };


  itemsFormatted = [
      {
          detectionDate: getFormattedValue('detectionDate'),
          sampleDate: getFormattedValue('sampleDate'),
      }

  ];

  var fileTitle = 'test'; // or 'my-unique-title'
    exportCSVFile(headers, itemsFormatted, fileTitle);
}

function download(){
  var headers = {
      name: 'Name'.replace(/,/g, ''), // remove commas to avoid errors
      firstname: 'First name'.replace(/,/g, ''), // remove commas to avoid errors
      sex: "Sex",
      date_of_birth: "DateOfBirth",
  };


  itemsNotFormatted = [
      {
          name: getFormattedValue('name'),
          firstname: document.getElementById("firstname").innerHTML,
          sex: document.getElementById("sex").innerHTML,
          date_of_birth: document.getElementById("element").innerHTML,
      }

  ];

  var itemsFormatted = [];

  // format the data
  itemsNotFormatted.forEach((item) => {
      itemsFormatted.push({
          name: item.name.replace(/,/g, ''), // remove commas to avoid errors,
          firstname: item.firstname,
          sex: item.sex,
          date_of_birth: item.date_of_birth
      });
  });

  var fileTitle = 'dgi-cst-dd-122'; // or 'my-unique-title'

  exportCSVFile(headers, itemsFormatted, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download
}