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
    setDate('detectionDate');
    setDate('sampleDate');
});


function downloadLab() {

   var headers = {
      detectionDate: 'Detection Date'.replace(/,/g, ''), // remove commas to avoid errors
      sampleDate: 'Sample Date'.replace(/,/g, ''),
      nasopharyngealSmear: 'Nasopharyngeal Smear'.replace(/,/g, ''),
      oralSmear: 'Oral Smear'.replace(/,/g, ''),
      expectoration: 'Expectoration'.replace(/,/g, ''),
      endotrachealAspiration: 'Endotracheal Aspiration'.replace(/,/g, ''),
      bal: 'Brochno-alveolar washing (BAL)'.replace(/,/g, ''),
      serology: 'Serology'.replace(/,/g, ''),
      other: 'Other'.replace(/,/g, ''),
      geneTargetEpositive : 'Gene Target E Positve',
      geneTargetEnegative : 'Gene Target E Negative',
      geneTargetRdrpPositive : 'Gene Target RdRp Positive',
      geneTargetRdrpNegative : 'Gene Target RdRp Negative',
      geneTargetNpositive : 'Gene Target N Positive',
      geneTargetNnegative : 'Gene Target N Negative',
  };



  itemsFormatted = [
      {
          detectionDate: getFormattedValue('detectionDate'),
          sampleDate: getFormattedValue('sampleDate'),
          nasopharyngealSmear: getCheckboxValue('nasopharyngealSmear'),
          oralSmear: getCheckboxValue('oralSmear'),
          expectoration: getCheckboxValue('expectoration'),
          endotrachealAspiration: getCheckboxValue('endotrachealAspiration'),
          bal: getCheckboxValue('bal'),
          serology: getCheckboxValue('serology'),
          other: getFormattedValue('other'),

          geneTargetEpositive : getCheckboxValue('geneTargetEpositive'),
          geneTargetEnegative : getCheckboxValue('geneTargetEnegative'),
          geneTargetRdrpPositive : getCheckboxValue('geneTargetRdrpPositive'),
          geneTargetRdrpNegative : getCheckboxValue('geneTargetRdrpNegative'),
          geneTargetNpositive : getCheckboxValue('geneTargetNpositive'),
          geneTargetNnegative : getCheckboxValue('geneTargetNnegative'),
      }

  ];

  var fileTitle = 'test'; // or 'my-unique-title'
    exportCSVFile(headers, itemsFormatted, fileTitle);
}
