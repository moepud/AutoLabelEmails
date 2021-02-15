# AutoLabelEmails
An Apps Script that auto labels threads in GMail by sender.

## Usage:

1. Go to https://script.google.com and create a new project.
1. Paste in the contents of Code.gs.
1. (Optional) Set up a trigger to run the script periodically.
1. In GMail set up a filter that will match all incoming messages. e.g. `larger:0` should work.
1. For the filter action, apply the label `_unprocessed`.
