const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./output", 
  reportPath: "./reports",
  metadata: {
    browser: {
      name: "chrome",
      version: "XX",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "10",
    },
    customData: {
      title: "CyPress Automation Report",
      data: [
        { label: "Project", value: "Cypress Project" },
        { label: "Release", value: "1.0.0" },
        { label: "Execution Date", value: "November 30, 2023" }
      ]
    }
  },
});