

function downloadLab() {

   var headers = {
      detectionDate: 'Detection Date'.replace(/,/g, ''), // remove commas to avoid errors
      sampleDate: 'Sample Date'.replace(/,/g, ''), // remove commas to avoid errors
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
