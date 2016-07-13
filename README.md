# Installation
You will need Selenium-Standalone, Cucumber.js installed.
An easy way to do this is:
    ```npm install -g cucumber```
    ```npm install -g selenium-standalone```

As PageObjects are implemented using WebdriverIO API, you'll need this package:
    ```npm install webdriverio```


# Prepare the environment
Startup Selenium Standalone server with:
$ selenium-standalone start

And leave the terminal open.

# Glomo is needed for this example
You need to startup a demo of GloMo. So, go to GloMo.gb, get it and run
$ gulp serve


# Startup Cucumber to execute Funtional Tests
In another terminal, execute

$ cucumber.js -r steps/ -r support/

Maybe you'd need to change the port of running GloMo demo (from 3000 to 80).
