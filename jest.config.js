module.exports = {
    reporters: ["default", ["jest-junit", {outputDirectory: "./test-results"}]],
    testTimeout: 20000,
};
