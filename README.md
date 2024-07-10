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
<<<<<<< HEAD




=======
![photo_8_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/c4b3dc10-cd8d-45cd-ad58-e8f323619342)
![photo_7_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/4d8755a6-47b0-4f0b-84e7-25a69d77d05c)
![photo_6_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/36fed096-44d6-484b-bef5-6adda21a5bf3)
![photo_5_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/c37c7a18-7dd9-41f6-969e-52b72e26ffe9)
![photo_4_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/f279de1d-e696-41bb-ac8d-85c853646a89)
![photo_3_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/ebab5c3b-eaf7-4d65-a06c-74522cf9a692)
![photo_2_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/e876fab7-7018-40c8-a117-c0ba7eef7d5d)
![photo_1_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/5bd8abb3-7b2f-4ad5-9aa1-9a78cc62b4a8)
![photo_15_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/e885a1f8-4933-429d-8692-bc7beb36c475)
![photo_14_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/334c98c0-7d77-470b-b64a-a7ec7046a3c5)
![photo_13_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/3f988864-c867-4eb1-acd0-f0c39f4e33d3)
![photo_12_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/8412bc26-1186-46ff-942d-57b46f2b981c)
![photo_11_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/38afbeb1-3b3d-4cd1-84e6-32918bfcf928)
![photo_10_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/8692a694-c323-4e83-a491-399192f2cfce)
![photo_9_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/f8a3bc21-2bdc-437c-bbaa-d36c61e1dc59)
>>>>>>> 993bbe155886eb804d522eec0ee915452c895a8a
