### Overview
This project is a simple e-commerce mobile application built using React Native. It allows users to view a list of products fetched from an external API, view detailed information about each product, add products to their cart, and manage their cart contents. The app uses AsyncStorage to store selected items locally on the device.

### Features
### HomeScreen: Displays a list of available products fetched from an external API. Each product has an "Add to Cart" button.
### ProductDetailScreen: Shows detailed information about a selected product.
### CartScreen: Displays items that have been added to the cart. Users can remove items from the cart.
### Drawer Navigation: Provides easy navigation through a drawer menu accessible through a button or swipe gesture.
### Data Storage: Uses AsyncStorage to store and retrieve cart items locally.
### Design Choices
User Experience: The app's design focuses on a simple and intuitive user experience. The product list is displayed in a grid format for easy browsing. Each product card contains an image, title, and price, making it easy for users to get key information at a glance.

### Navigation: The app uses React Navigation to handle screen transitions. A stack navigator is used for the main screens (Home, Product Detail, Cart), and a drawer navigator is implemented for additional navigation options.

### State Management: The app uses React's useState and useEffect hooks for state management and handling side effects. This simplifies the data flow and makes the code more maintainable.

### Local Storage: AsyncStorage is used for persistent data storage. This ensures that the cart data is retained even if the app is closed or the device is restarted. AsyncStorage is chosen for its simplicity and ease of integration with React Native.

### Data Storage Implementation
AsyncStorage: The cart items are stored locally on the device using AsyncStorage. When a user adds an item to the cart, the app retrieves the current cart from AsyncStorage, updates it with the new item, and saves it back to AsyncStorage. Similarly, when a user removes an item from the cart, the app updates the stored cart accordingly.

### Data Retrieval: On app startup, the cart data is loaded from AsyncStorage to ensure the user's cart state is restored. This is done using an asynchronous function that reads the cart data from storage and updates the app's state.

### Usage
HomeScreen: Browse products and add them to the cart.
ProductDetailScreen: View detailed information about a product by tapping on it in the HomeScreen.
CartScreen: View items added to the cart, and remove items if needed.
Drawer Navigation: Access the drawer menu for additional navigation options.
### Setup
Clone the repository.
Install dependencies using npm install or yarn install.
Run the app on a simulator or physical device using npx react-native run-android or npx react-native run-ios.
### Conclusion
This project demonstrates the implementation of a basic e-commerce mobile app with React Native, including features for product browsing, detailed product views, and cart management. It highlights the use of React Native's components and hooks, as well as the integration of AsyncStorage for persistent local storage.
