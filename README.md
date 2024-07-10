<h2>HouseOfMuse</h2>

### Overview
<hr>
This project is a simple e-commerce mobile application built using React Native. It allows users to view a list of products fetched from an external API, view detailed information about each product, add products to their cart, and manage their cart contents. The app uses AsyncStorage to store selected items locally on the device.

### Features
<hr>

 ### HomeScreen:
Displays a list of available products fetched from an external API. Each product has an "Add to Cart" button.

### ProductDetailScreen: 
Shows detailed information about a selected product.

### CartScreen: 
Displays items that have been added to the cart. Users can remove items from the cart.

### Drawer Navigation:
Provides easy navigation through a drawer menu accessible through a button or swipe gesture.

### Data Storage:
Uses AsyncStorage to store and retrieve cart items locally.

### Design Choices
User Experience: The app's design focuses on a simple and intuitive user experience. The product list is displayed in a grid format for easy browsing. Each product card contains an image, title, and price, making it easy for users to get key information at a glance.

### Navigation:
The app uses React Navigation to handle screen transitions. A stack navigator is used for the main screens (Home, Product Detail, Cart), and a drawer navigator is implemented for additional navigation options.

### State Management:
The app uses React's useState and useEffect hooks for state management and handling side effects. This simplifies the data flow and makes the code more maintainable.

### Local Storage: 
AsyncStorage is used for persistent data storage. This ensures that the cart data is retained even if the app is closed or the device is restarted. AsyncStorage is chosen for its simplicity and ease of integration with React Native.

### Data Storage Implementation
AsyncStorage: The cart items are stored locally on the device using AsyncStorage. When a user adds an item to the cart, the app retrieves the current cart from AsyncStorage, updates it with the new item, and saves it back to AsyncStorage. Similarly, when a user removes an item from the cart, the app updates the stored cart accordingly.

### Data Retrieval:
On app startup, the cart data is loaded from AsyncStorage to ensure the user's cart state is restored. This is done using an asynchronous function that reads the cart data from storage and updates the app's state.

### Usage
<hr>
<p>HomeScreen: Browse products and add them to the cart.</p>
<p>ProductDetailScreen: View detailed information about a product by tapping on it in the HomeScreen.</p>
<p>CartScreen: View items added to the cart, and remove items if needed.</p>
<p>Drawer Navigation: Access the drawer menu for additional navigation options.</p>

### Setup
<hr>
<p>Clone the repository.</p>
<p>Install dependencies using npm install or yarn install.</p>
<p>Run the app on a simulator or physical device using npx react-native run-android or npx react-native run-ios.</p>

### Conclusion
This project demonstrates the implementation of a basic e-commerce mobile app with React Native, including features for product browsing, detailed product views, and cart management. It highlights the use of React Native's components and hooks, as well as the integration of AsyncStorage for persistent local storage.

### Screenshots
![photo_15_2024-07-10_09-51-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/11d691a7-6c07-4358-9931-93c9102dff93)
![photo_14_2024-07-10_09-51-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/0ffc895f-abdd-47ad-9e73-0577f5566d1b)
![photo_13_2024-07-10_09-51-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/95bb62b8-1dc3-42ba-815d-18bb4a60aee4)
![photo_12_2024-07-10_09-51-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/12b84782-2354-4e17-893b-8189aed000c7)
![photo_11_2024-07-10_09-51-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/9a863515-85cc-4c10-9308-41d38baf5ebb)
![photo_10_2024-07-10_09-51-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/752a07e8-3729-4a52-a528-ac67422cf916)
![photo_9_2024-07-10_09-51-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/c49771bd-4729-47bc-a5c9-85c078e51725)
![photo_8_2024-07-10_09-51-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/1681a3bd-936e-4a53-9dc4-40aa903279b8)
![photo_7_2024-07-10_09-51-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/6782b671-8f8f-48d6-9239-eb161d9abc5e)
![photo_6_2024-07-10_09-51-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/fd8ae2e3-e2ef-4d19-8da2-0e74c372558c)
![photo_5_2024-07-10_09-51-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/8abcee49-23e4-444d-bf91-6328c516db17)
![photo_4_2024-07-10_09-51-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/13602bdb-a9d1-4e0b-975f-05f9033ca0c2)
![photo_3_2024-07-10_09-51-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/4416503c-9d14-43f0-babf-de707bfb835f)
![photo_2_2024-07-10_09-51-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/63a8612f-0387-429f-8cb3-5641e6493e47)
![photo_1_2024-07-10_09-51-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/a1ec03b8-49c8-43a5-a856-b685325f0825)


