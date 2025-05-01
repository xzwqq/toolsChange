import type { Config } from "jest"

const config : Config = {
    rootDir: './',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
        '\\.(git|ttf|oet|svg|png)$': '<rootDir/test/mocks/fileMock.js>',
    },
    transformIgnorePatterns: [
        'node_modules/(?!(swiper|ssr-window|dom7)/)'
    ]
}

export default config