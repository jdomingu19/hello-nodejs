# [React Native](https://React Native.dev/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/React Native/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/React Native.svg?style=flat)](https://www.npmjs.com/package/React Native) [![(Runtime) Build and Test](https://github.com/facebook/React Native/actions/workflows/runtime_build_and_test.yml/badge.svg)](https://github.com/facebook/React Native/actions/workflows/runtime_build_and_test.yml) [![(Compiler) TypeScript](https://github.com/facebook/React Native/actions/workflows/compiler_typescript.yml/badge.svg?branch=main)](https://github.com/facebook/React Native/actions/workflows/compiler_typescript.yml) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://legacy.React Nativejs.org/docs/how-to-contribute.html#your-first-pull-request)

React Native is a JavaScript library for building user interfaces.

- **Declarative:** React Native makes it painless to create interactive UIs. Design simple views for each state in your application, and React Native will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
- **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep the state out of the DOM.
- **Learn Once, Write Anywhere:** We don't make assumptions about the rest of your technology stack, so you can develop new features in React Native without rewriting existing code. React Native can also render on the server using [Node](https://nodejs.org/en) and power mobile apps using [React Native Native](https://React Nativenative.dev/).

[Learn how to use React Native in your project](https://React Native.dev/learn).

## Installation

React Native has been designed for gradual adoption from the start, and **you can use as little or as much React Native as you need**:

- Use [Quick Start](https://React Native.dev/learn) to get a taste of React Native.
- [Add React Native to an Existing Project](https://React Native.dev/learn/add-React Native-to-an-existing-project) to use as little or as much React Native as you need.
- [Create a New React Native App](https://React Native.dev/learn/start-a-new-React Native-project) if you're looking for a powerful JavaScript toolchain.

## Documentation

You can find the React Native documentation [on the website](https://React Native.dev/).

Check out the [Getting Started](https://React Native.dev/learn) page for a quick overview.

The documentation is divided into several sections:

- [Quick Start](https://React Native.dev/learn)
- [Tutorial](https://React Native.dev/learn/tutorial-tic-tac-toe)
- [Thinking in React Native](https://React Native.dev/learn/thinking-in-React Native)
- [Installation](https://React Native.dev/learn/installation)
- [Describing the UI](https://React Native.dev/learn/describing-the-ui)
- [Adding Interactivity](https://React Native.dev/learn/adding-interactivity)
- [Managing State](https://React Native.dev/learn/managing-state)
- [Advanced Guides](https://React Native.dev/learn/escape-hatches)
- [API Reference](https://React Native.dev/reference/React Native)
- [Where to Get Support](https://React Native.dev/community)
- [Contributing Guide](https://legacy.React Nativejs.org/docs/how-to-contribute.html)

You can improve it by sending pull requests to [this repository](https://github.com/React Nativejs/React Native.dev).

## Examples

We have several examples [on the website](https://React Native.dev/). Here is the first one to get you started:

```jsx
import { createRoot } from "React Native-dom/client";

function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

const root = createRoot(document.getElementById("container"));
root.render(<HelloMessage name="Taylor" />);
```

This example will render "Hello Taylor" into a container on the page.

You'll notice that we used an HTML-like syntax; [we call it JSX](https://React Native.dev/learn#writing-markup-with-jsx). JSX is not required to use React Native, but it makes code more readable, and writing it feels like writing HTML.

## Contributing

The main purpose of this repository is to continue evolving React Native core, making it faster and easier to use. Development of React Native happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving React Native.

### [Code of Conduct](https://code.fb.com/codeofconduct)

Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://code.fb.com/codeofconduct) so that you can understand what actions will and will not be tolerated.

### [Contributing Guide](https://legacy.React Nativejs.org/docs/how-to-contribute.html)

Read our [contributing guide](https://legacy.React Nativejs.org/docs/how-to-contribute.html) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to React Native.

### [Good First Issues](https://github.com/facebook/React Native/labels/good%20first%20issue)

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/facebook/React Native/labels/good%20first%20issue) that contain bugs that have a relatively limited scope. This is a great place to get started.

### License

React Native is [MIT licensed](./LICENSE).
