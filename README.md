# AutoLabelEmails
An Apps Script that auto labels threads in GMail by sender.

## Usage:

1. In GMail set up a filter that will match all incoming messages. e.g. `larger:0` should work.
1. For the filter action, apply the label `_unprocessed` (not the leading underscore).
1. Go to https://script.google.com and create a new project.
1. Paste in the contents of Code.gs.
1. Click the `Run` button to execute the script. The first time the script executes, it will ask for permission to access your GMail. I suggest reading the code carefully and making sure you are comfortable with what it is doing before you accept.
1. (Optional) Set up a trigger to run the script periodically.
