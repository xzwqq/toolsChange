import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Используйте 'jsdom' вместо 'node' для React-тестов
  transform: {
    '\\.(t|j)sx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.app.json' // Специальный конфиг для тестов
      }
    ]
  },
  transformIgnorePatterns: ['node_modules'],
  testRegex: '/__test__/.*\\.test\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  rootDir: './src',
};

export default config;