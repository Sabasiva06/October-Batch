package org.stepdef;

import org.base.BaseClass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hookes extends BaseClass {

	@Before
	public void beforeEachScenario() {
		getDriver();
		launchUrl("https://en-gb.facebook.com/");

	}

	@After
	public void afterEachScenario() {
		driver.quit();

	}

}
