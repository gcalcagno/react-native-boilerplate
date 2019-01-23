
🚀 React Native Boilerplate - December 2018
===========================================

## Features

* [Redux](http://redux.js.org/)
* [Redux Saga](https://redux-saga.js.org/)
* [Redux Persist](https://github.com/rt2zz/redux-persist/)
* [React Navigation](https://reactnavigation.org/) 
* [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
* [Jest](https://facebook.github.io/jest/)
* [Eslint](http://eslint.org/) ([Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))

___________________________________________

## Projects using this BoilerPlate

* [React Native Boilerplate - December 2018] https://github.com/victorkvarghese/react-native-boilerplate.git

___________________________________________

## Prerequisites

* [Node](https://nodejs.org) v10.14.0 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
* A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)
* OS Mojave 10.14.2


## Initial Setup (if you don't have folders android and ios)

1. Clone this repo, `git clone https://github.com/gcalcagno/react-native-boilerplate.git <your project name>`
2. Go to project's root directory, `cd <your project name>`
3. Remove `.git` folder,  `rm -rf .git`
4. Open `package.json` and change the `name` property with your project name
5. Open `index.js` and replace `'ReactNativeBoilerPlate'` by your project name
6. Open `app.json` and replace `'ReactNativeBoilerPlate'` by your project name 
7. Run `yarn` or `npm install` to install dependencies
8. Run `react-native upgrade` to upgrade and add iOS & Android Folders.
9. Run `react-native link`
10. Start the packager with `npm start`
11. Connect a mobile device to your development machine
12. Run the application:
  * On Android:
    * Open android folder in Android studio (Version 3.2.1)
  * On iOS:
    * Configure Pods `cd /ios && pod init`
    * Open `<your project name>.xcworkspace` in Xcode (Version 10.1)
13. Enjoy!!!

___________________________________________

## Getting Started

1. Clone this repo
2. Npm install `npm install`
3. Pod install `cd ios && pod install`
4. Run the application:
  * On Android:
    * Open android folder in Android studio (Version 3.2.1)
  * On iOS:
    * Open `ios/<your project name>.xcworkspace` in Xcode (Version 10.1)
5. Start the packager with `npm start`
6. Connect a mobile device to your development machine
7. Enjoy!!!

___________________________________________

## Terminal commands Android 
* Show menu `adb shell input keyevent 82`
* Run on device bundle `adb reverse tcp:8081 tcp:8081` 

___________________________________________

## Terminal commands IOS 
* Error bundle `kill $(lsof -t -i:8081)`
* Clean `cmd + shift + k` 

___________________________________________

## Android generate .apk
* Release `cd android && ./gradlew assembleRelease` (generate in /android/app/build/outputs/app-release.apk)
* Debug `cd android && ./gradlew assembleDebug` (generate in /android/app/build/outputs/app-debug.apk)

___________________________________________

## IOS generate .ipa
* Open Xcode and edit Scheme -> Archive (Release / Debug)
* Option 1 : Conenct Device with USB and run release
* Option 2 : Select Generic IOS Device -> Product -> Archive

___________________________________________

## Update Build Version before Deploy to stores
* Update Build Version
* IOS -> Configuration -> General -> Identity -> update "Version(1.0)" and "Build(1)"
* ANDROID -> Open app/build.gradle -> defaultConfig -> update "versionCode(1)" and "versionName(1.0)"

___________________________________________

## Project Structure

### Screens
* Files: ./app/screens
* Styles: ./app/screens/[SCREEN NAME]/.styles

### Components
* Files: ./app/components
* Styles: ./app/components/[COMPONENT NAME]/.styles

### Navigation
* Configuration Screens: navigation/NavigationStack.js
* Configuration Tabs: screens/Main/MainContainer.js

### Assets
* General styles: ./app/theme/ApplicationStyles
* Images: configuration path in ./app/theme/Images | Files in /images
* Fonts: configuration in ./app/theme/Fonts
* Colors: configuration in ./app/theme/Colors

### Redux Sagas
* UI -> Action -> Type -> Sagas -> Reducer -> Store
* Actions: ./app/actions
* Sagas: ./app/sagas
* Reducers: ./app/reducers
