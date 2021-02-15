const MAX_SEARCH_RESULTS = 100;
const UNPROCESSED = '_unprocessed'

function AutoLabelEmails() {
  const query = Utilities.formatString('label:' + UNPROCESSED);
  const threads = GmailApp.search(query, 0, MAX_SEARCH_RESULTS);

  threads.forEach(function(thread) {
    // "John Smith" <jsmith@gmail.com>
    const from_full = thread.getMessages()[0].getFrom();
    // John Smith
    const from_name = from_full.replace(/^(.+)<([^>]+)>$/, '$1').replace(/"/g, '');
    // jsmith@gmail.com
    const from_addr = from_full.replace(/^(.+)<([^>]+)>$/, '$2');

    thread.addLabel(GmailApp.createLabel('sender/' + from_addr));
    thread.removeLabel(GmailApp.getUserLabelByName(UNPROCESSED));
  });
}
