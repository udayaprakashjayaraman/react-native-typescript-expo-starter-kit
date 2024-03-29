# React Native Expo Starter Kit with TypeScript, Navigation, and Redux

Welcome to the React Native Expo Starter Kit, a powerful boilerplate for kick starting your hybrid mobile app development journey. This kit comes pre-configured with essential features, including a basic login/register screen, bottom navigator, drawer navigator, stack navigation, and integrated Redux for state management. It's built using React Native, Expo, TypeScript, and Redux to provide a solid foundation for your projects.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your development machine:

- Node.js: [Download Node.js](https://nodejs.org/)
- npm: Installed with Node.js
- Expo CLI: Install globally using `npm install -g expo-cli`

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/udayaprakashjayaraman/react-native-typescript-expo-starter-kit.git
    ```

2. Navigate to the project directory:

    ```bash
    cd react-native-typescript-expo-starter-kit
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Running the App

Now that you have the project set up, you can run it using the following commands:

```bash
npm start
```

This will start the Expo development server. You can run the app on your device using the Expo Go app or by scanning the QR code generated in the terminal.

### Project Structure

The project structure is organized to help you easily navigate and extend it:

- `src`: Contains the source code for your React Native application.
  - `components`: Reusable components used across the app.
  - `navigation`: Navigation setup with bottom navigator, drawer navigator, and stack navigation.
  - `screens`: Different screens of the application, including login and register screens.
  - `redux`: Redux store configuration, actions, and reducers.
  - `types`: TypeScript types and interfaces.
  - `navigation`: Navigation setup with bottom navigator, drawer navigator, and stack navigation.
- `App.tsx`: The main entry point of the application.

### Navigation

#### Stack Navigation
The project utilizes the React Navigation library for stack-based navigation. The stack navigator is configured in the src/navigation/StackNavigator.tsx file. You can easily add new screens and customize the navigation options.

#### Drawer Navigation
The drawer navigator is set up in the src/navigation/DrawerNavigator.tsx file. It provides a navigation drawer that can be accessed by swiping from the left or by pressing the menu icon. Customize the drawer items and appearance according to your app's requirements.

#### Bottom Navigation
The bottom navigator is configured in the src/navigation/BottomNavigator.tsx file. It provides a tab-based navigation at the bottom of the screen. You can customize the tabs and screens as needed.


### Authentication

#### Login and Register Screens
The login and register screens are implemented in the src/screens/Auth folder. You can find LoginScreen.tsx and RegisterScreen.tsx files. Customize these screens based on your authentication flow.

#### Authentication Handler
Authentication is managed through the src/auth/AuthHandler.ts file. You can extend this file to include authentication logic, such as user sign-in, sign-up, and token management. Update the Redux actions accordingly to handle authentication state.

### Redux Integration

Redux is integrated into the project to manage the global state. You can find the store configuration in the `redux` folder, actions in the `actions` folder, and reducers in the `reducers` folder. Feel free to modify and expand the Redux setup based on your application's needs.

### Enhancements

This starter kit is designed for frequent enhancements. You can easily build upon the existing structure by adding more screens, components, and features. The modular and organized nature of the codebase allows for seamless integration of new functionalities.

## Contributing

Contributions are welcome! If you have any improvements, bug fixes, or feature additions, feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

Happy coding! If you have any questions or feedback, don't hesitate to reach out.