# Considerations

Due to the API call ceasing to function on September 27, 2024, I created a tag called v1 to reflect all work completed up to that date. This tag represents a stable version, and I’ve included a demo showcasing the app’s state at that point. This version features a solution to the proposal, including a listing with previews and filtering capabilities.

https://github.com/user-attachments/assets/474d5f65-c655-443e-aa5f-f24a0a4863b8

If you wish to consider the final version with a deadline of September 28, 2024, please run the commit tagged v2.1 or the current commit on the master branch. In this final version, I have added styling to the preview page, as well as a rating filter and price sorting option. It also includes several minor bug fixes. A video demo of this final state is also available for your review.

https://github.com/user-attachments/assets/27cc1302-ef12-4028-9cb1-8b07c824c2d1

If you encounter any issues, please consult the Troubleshooting section.

---

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/set-up-your-environment) instructions till "Creating a new application" step, before proceeding.

## Step 0: Installs

```bash
yarn install
cd ios && pod install && cd ..
```

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

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

---

If you encounter the following error while building the app for the Android environment:

`ERROR: autolinkLibrariesFromCommand: process npx @react-native-community/cli config exited with error code: 126`

 Run the following command:

```bash
chmod +x /Users/[RN-PROJECT-PATH]/node_modules/.bin/rnc-cli
```

---

If iOS simulator does not load your project you can try to run specifying a simulator name, example: 

```bash
yarn ios --simulator"iPhone 15"
```



