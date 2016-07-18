# Installation
You will need Cucumber.js installed.
An easy way to do this is:

    npm install -g cucumber

Install dependencies & devDependencies

    npm install 

This command will install:
- webdriverio (webdriver module for nodejs) 
- cucumber (It's needed locally as well)
- wdio-cucumber-framework (Adapter between cucumber and webdriverio)
- wdio-spec-reporter (plugin reporter)
- wdio-selenium-standalone-service (needed to wdio startup a selenium server)

# Prepare the environment
Startup Selenium Standalone server with:

    $ selenium-standalone install
    $ selenium-standalone start

And leave the terminal open.

# Glomo is needed for this example
You need to startup a demo of GloMo. So, go to GloMo.gb, get it and run

    $ cells app:serve


# Execute Funtional Tests
In another terminal, execute

    $ ./node_modules/.bin/wdio wdio.conf.js
    