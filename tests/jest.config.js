module.exports = {
    roots: ['<rootDir>/src'],
    testMatch: ['**/tests/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    transform: {
      '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$'],
    moduleDirectories: ['node_modules', '.'],
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    // setupFilesAfterEnv: ['jest-extended'],
    resetMocks: true,
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupTestFrameworkScriptFile: "<rootDir>/src/setupEnzyme.ts"
}