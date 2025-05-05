/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
};