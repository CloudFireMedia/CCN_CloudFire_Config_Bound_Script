var SCRIPT_NAME = 'CCN_CloudFire_Config'
var SCRIPT_VERSION = 'v1.0'

function onOpen() {
  SpreadsheetApp
    .getUi()
    .createMenu('CloudFire')
    .addItem('Store active config sheet ID for active user', 'initialise')
    .addToUi()
}

function initialise() {
  
  var email = Session.getActiveUser().getEmail()
  var spreadhsheetId = SpreadsheetApp.getActive().getId()
  
  Config.initialise({
    email: email,
    spreadsheetId: spreadhsheetId,
  })
}