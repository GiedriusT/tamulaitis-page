# Running end-to-end tests

To run end-to-end tests you need to first clone the `.env` file from the example one.
```
cp .env.example .env
```

And then run Playwright install script to install needed browsers.

```
yarn playwright install
```

Then you can run tests with the command `yarn run test` for headless mode or `yarn run test:ui` for interactive mode with UI.
