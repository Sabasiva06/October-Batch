package org.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"src\\test\\resources\\Sample.feature"},glue= {"org.stepdef"},
dryRun=false,monochrome=true,snippets=SnippetType.CAMELCASE,plugin= {"pretty",
		"html:D:\\SampleCucumberLive\\target",
		"json:D:\\SampleCucumberLive\\target\\report.json",
		"junit:D:\\SampleCucumberLive\\target\\report.xml"},tags= {"~@E2E"})
public class TestRunner {

}
