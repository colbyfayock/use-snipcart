# 🛒 useSnipcart

A React hook for checking in to Snipcart state.

## 🚀 Getting Started

*Note: useSnipcart requires the [standard installation](https://docs.snipcart.com/v3/setup/installation) from Snipcart including loading the Snipcart script with your unique API key*

Install useSnipcart:

```
yarn add use-snipcart
# or
npm install use-snipcart
```

Wrap the application or parent with the Snipcart Provider to provide globally accessible state:

```
import { SnipcartProvider } from 'use-snipcart';

<SnipcartProvider>
...
</SnipcartProvider>
```

Use the hook to access state:

```
import { useSnipcart } from 'use-snipcart';

const { cart = {} } = useSnipcart();
```

## 🧐 What's inside?

useSnipcart uses the [Snipcart Store API](https://docs.snipcart.com/v3/sdk/store) to subscribe to the local instance of the Snipcart store to sync that store up with React state.

It then passes that state through the hook to make it available to the application.

For instance, a common use case is grabbing the current subtotal of the cart, which can be found using:

```
const { cart = {} } = useSnipcart();
const { subtotal = '0.00' } = cart;
```

To see what all is included, check out the SnipcartState documentation:

https://docs.snipcart.com/v3/sdk/reference#core-state-SnipcartState

## 🤔 Why useSnipcart?

Using UI frameworks like React give developers the ability to easily provide clientside route changes, which due to how the DOM loads, doesn't lend itself well to loading the Snipcart script potentially multiple time, initializing that multiple times, and / or keeping that all in sync.

This takes advantage of Snipcart's API that attaches to the window, where we can subscribe to Snipcart independently, and make sure we're always using the correct version when updating our application.
