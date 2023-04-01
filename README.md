# Using Expo Router with the Rick and Morty API

This repository serves as code for my technical blog about using Expo Router with the Rick and Morty API. In this project, we will be using Expo to create a mobile application that consumes the Rick and Morty API using apisauce. We will be using Expo Router to create a navigation system for our application.

## Getting Started

To get started with this project, you'll need to have Node.js installed on your machine. You'll also need to have the Expo CLI installed. If you don't have it yet, you can install it by running: `npm install -g expo-cli`
Once you have the Expo CLI installed, you can clone this repository and install the dependencies by running:\
`git clone https://github.com/evergreenx/ricknmorty-expo-router` \
`cd expo-router-rick-and-morty` \
`npm install`

## Running the App

To run the app, you'll need to start the Expo development server. You can do this by running:

`npx expo start`
This will start the development server and open the Expo DevTools in your browser. You can then run the app on an Android or iOS device or simulator by scanning the QR code in the Expo app on your device or by typing a for Android or i for iOS in the terminal.

Folder Structure

├── api.ts\
├── components\
│ ├── CharacterCard.tsx\
│ ├── CharacterDetail.tsx\
├── app\
│ └── index.ts\
├── index.ts\
├── interface.ts\
├── app.json\
├── package.json\
└── README.md\

api.js: Contains the code for fetching data from the Rick and Morty API using apisauce.
components: Contains the reusable components used in the app.
app: Contains the code for the screens in the app using Expo Router.
index.ts : entry point for our app.
interface.ts : interface for API response
app.json: The configuration file for the app.
package.json: The package file for the app.
README.md: The documentation file for the app.

## Resources

[Expo Documentation](https://docs.expo.dev/) \
[Expo Router Documentation](https://expo.github.io/router/)\
[Rick and Morty API Documentation](https://rickandmortyapi.com/documentation)\
[apisauce Documentation](https://github.com/infinitered/apisauce)

## Conclusion

In this project, we've seen how to use Expo Router to create a navigation system for our mobile application. We've also seen how to consume the Rick and Morty API using apisauce. By combining these tools, we can create a fully-functional mobile app that allows us to browse characters from the Rick and Morty verse.

I hope this has been helpful, and happy coding!
