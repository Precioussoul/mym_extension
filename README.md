This is MYM Extension built with [Plasmo framework](https://docs.plasmo.com/).

## Introduction

This extension works only on linkedin.com and visit linkedin.com to check. this extension extends linkedin.com profile page by adding `Quick-Connect` button to the profile and also extends to adding `Custom Notes`. this allow users to take note down from their linkedin's feed by clicking the right center fixed button showing MYM logo.

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

## Look up

- Check `src` directory see the code that power the extension's functionality
- `Contents` folder for Contents Scripting UIs
- `features` folder for resuable react components
- `build` folder contains `chrome-mv3-dev` folder which is the chrome extension in development mode.
- Go to chrome browser >> extensions >> turn on developer mode on extension >> click on `load unpacked` >> navigate to the `build` folder directory and select `chrome-mv3-dev` folder to load the extension on your chrome browser
- Visit https://www.linkedin.com to test the extension or click on the extension icon to see the popup information on how to use.

For further guidance, [Visit plasmo documentation](https://docs.plasmo.com/)

## Built with

- React
- Typescript
- TailwindCss
- Plasmo Framework
- Pnpm for package manager (recommended to install by running `npm i -g pnpm` )

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow [this setup instruction](https://docs.plasmo.com/framework/workflows/submit) and you should be on your way for automated submission!
