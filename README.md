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
![photo_12_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/39c58a04-c92f-43e8-bcf3-864e243abcf5)
![photo_11_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/a55e69de-dce1-49d8-98f1-a8b712b515c1)
![photo_10_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/1670ff21-de51-47fe-b2d6-18fde05a745c)
![photo_9_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/7a9434ee-653a-4cdd-a4a5-1cc766c17d81)
![photo_8_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/3be85c17-1232-4250-af08-fb1606cdab38)
![photo_7_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/d5c8204b-f91b-41b1-908a-cf4912647d1c)
![photo_6_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/b9c099ee-eb2b-46ab-ab24-b1fdc9e1ed7f)
![photo_5_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/d06d41e8-4308-4cfb-8ee2-b4481a61782f)
![photo_4_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/ce9a1c18-e3fa-43bc-ad12-43c009d71283)
![photo_3_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/bfad46ed-9248-4b10-ad49-d6eb51651ff5)
![photo_2_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/56d0ddb8-fc84-4edb-a45c-9c7344201663)
![photo_1_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/cc8a2950-e242-449b-ae1e-c33f91e20709)
![photo_15_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/8cba7d17-be96-47c3-bc34-3dae9ac9fd85)
![photo_14_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/a0fa2214-e1bf-4762-99e3-a31e663bae12)
![photo_13_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/df23580e-01d3-48ca-917d-7333b5671e20)
![photo_13_2024-07-10_16-28-57](https://github.com/MaameLissa/rn-assignment7-11263472/assets/170031712/a3e8f8ab-f477-4af2-9296-73efb9de76a2)


