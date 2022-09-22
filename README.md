## Feed Exercise

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Frontend Architecture Overview

For this work sample I've decided to use `NextJS` along with the following
tools/workflow:

- [Prettier](https://prettier.io/) to enforce consistent formatting.
- [ESLint](https://eslint.org/) to lint code and catch errors.
- [Stylelint](https://stylelint.io/) to lint styles and enforce consistency.
- [Typescript](https://www.typescriptlang.org/) to provide type checking and
  catch errors.
- [SVGR](https://react-svgr.com/) to transform SVGs into React components.
- [PostCSS](https://postcss.org/) to transform CSS with Javascript.
- [Husky](https://typicode.github.io/husky) to configure git hooks.
- [CSS Modules](https://github.com/css-modules/css-modules) to scope class names
  local to each component.
- [React Context API](https://reactjs.org/docs/context.html) to manage local
  state.
- [Vercel](https://vercel.com/) for deployments and hosting.

## Features checklist

- [x] Does the sample utilize React?
- [x] Do the UI components for the feed exist and match the Figma designs?
- [x] Can a user create a text post by clicking on “Post”?
- [x] Can a user like and comment on a post?
- [x] Does the solution use some form of state management?
- [x] Local, context, Redux, etc.
- [x] Is the webpage responsive for web and mobile views?
- [ ] Have tests been implemented?
- [x] Is the webpage hosted somewhere that can be viewed publicly?
- [x] Has the code been supplied for review?
- [x] Has Git been used in a meaningful way with commits for each phase to
      demonstrate the iterative development process?

_**Note**: I timeboxed this exercise to roughly 6 hours over the span of 2 days.
I ran out of time and wasn't able to setup and implement tests. Also, I only
targeted the latest version of Chrome._

## Requirements

### Node Version

To make sure we isolate our dependencies, the application uses a `.nvmrc` file
to lock the node version.

Use the `nvm use` command to set the default node version found in `.nvmrc`.
Similarly if the specified node version is not installed simply run
`nvm install`.

_To invoke `nvm` automatically in your shell when changing directories, SEE:_
https://github.com/nvm-sh/nvm#deeper-shell-integration

## Getting Started

First, install the dependencies:

```bash
yarn
```

Next, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

### Other useful commands

Format code using prettier:

```bash
yarn format
```

Lint code using `stylelint`, `eslint` and `tsc`:

```bash
yarn lint
```

While running the development server it's useful to check for type errors:

```bash
yarn lint:ts:watch
```

Build the app for production and run locally at:
[http://localhost:3000](http://localhost:3000)

```bash
yarn build && yarn start
```
