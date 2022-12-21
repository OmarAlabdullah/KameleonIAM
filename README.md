# Auth0 React Native - Login


## Create Application on Auth0 
1. Login on auth0 
2. choose Applications 
3. Click create application 
4. Choose Native 

## Create react native project

```bash
brew install node
brew install watchman
```

```bash
npx react-native init newTSProject --template react-native-template-typescript
```

Install Auth0 dependencies for typescript 

```bash
npm install --save @types/react-native-auth0
```

### Implementation 

check this link [React Native QuickStart](https://auth0.com/docs/quickstart/native/react-native/00-login).

### IOS Applications
In the ios folder, open the Info.plist and add this value below to register the URLSchem
```groovy
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleTypeRole</key>
        <string>None</string>
        <key>CFBundleURLName</key>
        <string>auth0</string>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>
        </array>
    </dict>
</array>
```

If it doesn't working use the below command to reinstall the dependencies by running:

```bash
cd ios
pod install
```
Or check if you use the correct Ruby version and if not you can change it in the ``./Gemfile``

```bash
cd ios
ruby --version
```


### Android applications

Open the `android/app/build.gradle` file and locate the following manifest placeholders:

```groovy
android {
    defaultConfig {
        manifestPlaceholders = [auth0Domain: "YOUR_AUTH0_DOMAIN",
                                auth0Scheme: "${applicationId}"]
    }
    ...
}
```

Replace `YOUR_AUTH0_DOMAIN` with your Auth0 domain value. 

The `applicationId` value will be auto-replaced at runtime with the package name or ID of your application (e.g. `com.example.app`).

## 2. Configure Auth0
Open the application settings on The Auth0 platform and add the Following urls make connection with the app
1. To the allowed urls add the following urls

```groovy
 applicationname://domain/ios/applicationname/callback, applicationname://dev-7ys-j0kk.us.auth0.com/android/com.applicationname/callback
```

2. To the logout urls add the following urls

```groovy
applicationname://domain/ios/applicationname/callback, com.applicationname://dev-7ys-j0kk.us.auth0.com/android/com.applicationname/callback
```
* Don't forget to change the application name:)

## Run The App

Run your app on an emulator, simulator, or your own connected device.

- To run the app on iOS run `npm run ios`.
- To run the app on Android run `npm run android`.
