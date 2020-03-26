# OFSP Covid-19 forms

After reading [this article](https://www.rts.ch/info/suisse/11175710-les-annonces-de-nouveaux-cas-de-coronavirus-se-font-par-fax.html), we decided to help out by creating a really simple  tool that can simplify the way data on __Covid-19__ in Switzerland is collected by the OFSP.

We basically create a web version of the forms [available here](https://www.bag.admin.ch/bag/fr/home/krankheiten/infektionskrankheiten-bekaempfen/meldesysteme-infektionskrankheiten/meldepflichtige-ik/meldeformulare.html), that gives a CSV file as output.

The idea is that the reporter attaches the __CSV__ file (or files) to the email sent to the HIN secured address covid-19@hin.infreport.ch.
 
We hope that this code can be used and extended to whom it may concern.

## For developers

In order to extend or update the forms, these rules need to be followed:

* HTML elements ids need to be prefixed with *covid19_* in order to be transformed in CSV data (the id without that prefix will be used as header name)
* Date picker elements need to be suffixed with *_date*



Theme generated with [admin.ch styles](https://github.com/swiss/styleguide). 