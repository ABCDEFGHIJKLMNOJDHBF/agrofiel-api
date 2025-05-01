module.exports = {
    reporters: [
      "default",
      [ "jest-html-reporter", {
        outputPath: "tests/test-report.html"
      }]
    ]
  };
  