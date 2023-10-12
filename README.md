This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

## Screenshots of the application:


### Product List Screen
The screen showcases a product list alongside the cart item count. A badge will dynamically appear on the cart icon only if the number of items surpasses zero.

![Alt text](<Simulator Screen Shot - iPhone SE (3rd generation) - 2023-10-11 at 16.36.49.png>)

### Counter added on Cart Screen
A product counter has been implemented on the Cart page. If the counter is reduced to 0, the corresponding product will be automatically removed from the cart.

![Alt text](<Simulator Screen Shot - iPhone SE (3rd generation) - 2023-10-12 at 11.51.17.png>)


<video src="Simulator%20Screen%20Recording%20-%20iPhone%2014%20Pro%20-%202023-10-10%20at%2019.12.02.mp4" controls title="Title"></video>