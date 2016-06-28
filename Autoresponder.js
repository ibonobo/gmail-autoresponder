function AutoResponder(e) {
  /* The idea is to search for all emails that don't have this label
  and respond to them with a pre-recorded message like any other email client.
  TODO: constrain it to unread emails sent since a set date */

  // Only respond to email sent to:
  var email_account = "example@gmail.com";

  // Search for subject:
  // var subject       = "this is a test";

  // Exclude this label:
  // (And creates it if it doesn't exist)
  var labelname = "Autoresponded";

  var label = GmailApp.getUserLabelByName(labelname);
  // Create label if it doesn't exist
  if (label == null) {
    var label = GmailApp.createLabel(labelname);
  }

  // Send our response email and label it responded to
  var threads = GmailApp.search("-subject:'re:' -is:chats -is:draft has:nouserlabels -label:" + labelname + " to:(" + email_account + ")");
  for (var i = 0; i < threads.length; i++) {

    // Response
    var response_body = "Hey there,<br><br>\
    Unfortunately I'm out of the office until the 32nd of Nebuary.<br><br>\
    Thanks,<br>\
    Jason";

    // Respond to email
    threads[i].reply("", {htmlBody: response_body, from: email_account});

    // Add label to email for exclusion
    threads[i].addLabel(label);
  }
}
