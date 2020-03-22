function setDate(id) {
    $('#' + id).datepicker({
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        dateFormat: "dd/mm/yy"
    }).datepicker("setDate", new Date());

}

// A $( document ).ready() block.
$(document).ready(function () {
    setDate('detectionDate');
    setDate('sampleDate');
});


function downloadLab() {

    var fields = [
        {
            domId: 'detectionDate',
            funcNameForValue: getFormattedValue
        },
        {
            domId: 'sampleDate',
            funcNameForValue: getFormattedValue
        },
        {
            domId: 'nasopharyngealSmear',
            funcNameForValue: getCheckboxValue
        },
        {
            domId: 'oralSmear',
            funcNameForValue: getCheckboxValue
        },
        {
            domId: 'expectoration',
            funcNameForValue: getCheckboxValue
        },
        {
            domId: 'endotrachealAspiration',
            funcNameForValue: getCheckboxValue
        },
        {
            domId: 'bal',
            funcNameForValue: getCheckboxValue
        },
        {
            domId: 'serology',
            funcNameForValue: getCheckboxValue
        },
        {
            domId: 'other',
            funcNameForValue: getFormattedValue
        },
        {
            domId: 'geneTargetEpositive',
            funcNameForValue: getCheckboxValue
        },
        {
            domId: 'geneTargetEnegative',
            funcNameForValue: getCheckboxValue
        },
        {
            domId: 'geneTargetRdrpPositive',
            funcNameForValue: getCheckboxValue
        },
        {
            domId: 'geneTargetRdrpNegative',
            funcNameForValue: getCheckboxValue
        },
        {
            domId: 'geneTargetNpositive',
            funcNameForValue: getCheckboxValue
        },
        {
            domId: 'geneTargetNnegative',
            funcNameForValue: getCheckboxValue
        }

    ]

    var headers = {}
    var itemsFormatted = {}

    fields.forEach(function (element) {
        headers[element.domId] = element.domId
        itemsFormatted[element.domId] = element.funcNameForValue(element.domId)
    });

    alert(JSON.stringify(itemsFormatted));
    alert(JSON.stringify(headers));

    /*var headers = {
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
   };*/



    var fileTitle = 'test'; // or 'my-unique-title'
    exportCSVFile(headers, [itemsFormatted], fileTitle);
}
