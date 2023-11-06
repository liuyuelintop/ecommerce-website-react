# E-Commerce Web Application

This project is a React-based e-commerce web application that features product browsing, a shopping cart, and state management via context to provide a seamless shopping experience.

## Overview

The application is designed to showcase a range of products divided across various categories, allowing users to add items to their cart and manage their purchases. The frontend interface is user-friendly and responsive, ensuring a smooth user interaction on both desktop and mobile devices.

## Features

- **New Collections Component**: Showcases the latest additions to the catalog, enticing users with the newest trends and styles.
- **Popular Items Display**: Highlights the most popular products based on customer preferences and purchase history, driving engagement and sales.
- **Related Products Recommendations**: Suggests items that complement or are similar to the product being viewed, encouraging further exploration and cross-selling.
- **Dynamic Product Details**: Offers an interactive product page with a carousel image gallery, detailed descriptions, and customizable options such as size and color selection.
- **Responsive Shopping Cart**: Utilizes React's Context API for a seamless cart experience that updates in real-time across all components, allowing for an intuitive and user-friendly shopping process.
- **Exclusive Offers Section**: Engages customers with time-limited deals and promotions, incentivizing immediate purchases and return visits.
- **Newsletter Subscription**: Integrates a subscription feature for marketing communications, keeping customers informed about the latest news and special offers.
- **Adaptive and Responsive Design**: Ensures a consistent and accessible user experience across various devices and screen sizes, maintaining functionality and aesthetics from desktop to mobile.
- **Context API Integration for State Management**: Employs React's Context API for efficient state management throughout the application, enabling a structured and scalable approach to state without prop drilling.

## Components

The application is structured into several components:

- **Assets**: Holds static files such as images, icons, and data used throughout the application.
- **Breadcrumbs**: Displays the navigational breadcrumb trail for users, allowing them to keep track of their locations within the application.
- **CartItems**: Manages the items within the shopping cart, enabling users to see the products they have added and modify quantities.
- **DescriptionBox**: Provides detailed descriptions for products, often found on individual product pages.
- **Footer**: The bottom section of the application that typically contains copyright information, navigation links, and contact details.
- **Hero**: A large banner image prominently placed on a web page, usually at the top, which often contains the newest or most popular products.
- **Item**: Represents a single product in the list, showing essential information like the product image, name, and price.
- **Navbar**: The top navigation bar that allows users to navigate different sections of the application. It also displays a summary of the cart items.
- **NewCollections**: Showcases the latest product additions, giving users easy access to the newest merchandise available.
- **Newsletter**: A subscription area where users can sign up to receive the latest news and offers from the store via email.
- **Offers**: Highlights exclusive deals and discounts available to the shoppers, presented in a way to attract user attention.
- **Popular**: Lists the products that are popular among customers, making it easier for users to discover trending items.
- **ProductDisplay**: Provides an individual view of each product, with options for users to choose specific variations like size and color, and the ability to add the product to their cart.
- **ProductList**: Displays the full list of products available, enabling users to browse through different categories and selections.
- **RelatedProducts**: Shows products related to the one being viewed, suggesting alternatives or additions to the user's shopping experience.

## Shop Context

The application uses a React context (`ShopContext`) for state management across the application. The context provides the following functionalities:

* `addToCart`: Adds an item to the cart.
* `removeFromCart`: Removes an item from the cart.
* `getTotalCartAmount`: Calculates the total price of the items in the cart.
* `getTotalCartItems`: Counts the total items in the shopping cart.

## ShopContextProvider

`ShopContextProvider` wraps the application and provides the context for managing the shopping cart.

## Getting Started

To run this project locally:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies: `npm install`
4. Start the development server: `npm start`

The application will be served at `localhost:3000`.

## Acknowledgements

This project was built with guidance and inspiration from the YouTube tutorial [React Shopping Cart Tutorial](https://www.youtube.com/watch?v=jbfuzcrfjqQ). Through this tutorial, I learned fundamental React concepts, state management with Context API, and enhanced the application with additional features and optimizations for educational purposes.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are  **greatly appreciated** .

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open-source and available under the MIT License.

## Contact

For any queries or feedback, please reach out to [liuyuelintop@gmail.com](liuyuelintop@gmail.com.).

Project Link: [https://github.com/liuyuelintop/ecommerce-website-react](https://github.com/liuyuelintop/ecommerce-website-react)
