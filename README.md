# Burger-Queer

Fifth project developed in Laboratoria's Web Development Bootcamp. The project Burger Queer is the development of an ordering interface built for a hamburger restaurant, that integrates with an API. The main goal is to learn how to build up a web application through React. This project was developed in partnership with @marinacezario.
<div align="center">
    <img width="500" src="https://github.com/marinacezario/SAP009-burger-queer-API-Client/blob/main/src/assets/img/logo.png"/>

</div>

<div align="center">
  <br>

  <br>
  <br>
  <img align="center" alt="git" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"/>
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://user-images.githubusercontent.com/120285942/236062287-09f1bc78-7e35-45bc-b420-17b08bd4f81d.svg">
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="git" height="30" width="40" src="https://camo.githubusercontent.com/900baefb89e187c8b32cdbb3b440d1502fe8f30a1a335cc5dc5868af0142f8b1/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e6f64656a732f6e6f64656a732d6f726967696e616c2e737667" />
  <img align="center" alt="Rafa-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="vscode" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
  <img align="center" alt="Figma" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
  <br>


  Developed by <br>
  <br>
  Marina Cezário <br>
  [Linkedin](https://www.linkedin.com/in/marina-cezario/) | [Github](https://github.com/marinacezario) 
  <br>
  <br>
    Silver Santos<br>
  [Linkedin](https://www.linkedin.com/in/silver-santos/) | [Github](https://github.com/silversantos/)
  <br>
  <br>
 
  
</div>

- [Burger-Queen ](#burger-queen)
  - [1. About the project](#1-about-the-project)
  - [2. Features](#2-features)
      - [2.1 Waiter](#2.1-waiter)
      - [2.2 Kitchen](#2.2-kitchen)
      - [2.3 Admin](#2.3-admin)
  - [3. Running the Application](#3-running-the-application)
  - [4. Technical Considerations](#4-technical-consideratuions)
  - [5. API Mock](#5-api-mock)
  - [6. Unit Tests](#6-unit-tests)
  - [7. Usability Tests and User Feedback](#7-usability-tests-and-user-feedback)
      - [7.1 Usability Testing Process](#7.1-usability-testing-process)
      - [7.2 User Feedback Collection](#7.2-user-feedback-collection)
      - [7.3 Feedback Analysis and Implementation](#7.3-feedback-analysis-and-implementation)
      - [7.4 Iterative Design and Enhancements](#7.4-iterative-design-and-enhancements)


## 1. About the project


This project consists in an user interface developed in React, aiming to offer a complete solution to `Burger Queer` restaurant management.

This interface intends to improve operational efficiency and assist on the administration of Burger Queer restaurant, offering a platform that attends to the needs of each area of the business.

In order to ensure the receipt and procession of the data sent by the client, the interface integrates itself to an `API mock`.
***

## 2. Features

The interface supplies resources based on the atributed permissions of each user. After login process, the system verifies the user's role and automatically redirects to the pages pertinent to that role. Listed below are the main resources available for each area:

#### 2.1 Waiter
- `Register a new order`: Users with the `waiter` role have acces to the order logging feature. the interface displays two different types of menu: Breakfast ans Diner, containing its respective products available. The waiter, then, can select items, add or remove them to a cart, increment or decrement the quantity of each item, as well as visualize the complete synthesis of the order, including the price for each one and the total amount. In the end of the client's requests, the waiter can send the complete order to the kitchen.

- `Management of orders`: Waiters also have access to a visualization of the orders sent to kitchen, observe as them by their status (pending, preparing or ready) and, when they are ready, deliver them to the client. After that, the waiter can mark the order as delivered.


#### 2.2 Kitchen
- `Preparing Orders`: Users with the `kitchen` role have access to a specific page of the interface, where they can visualize new orders logged by the waiter. this page allows the kitchen users to know which products have to be prepared, mark them as `preparing` when they start to care to an specific order. 

- `Ready for delivering`: When an order is prepared, kitchen users can set the status of an order as `ready`. Doing so, the applications let's the waiter know that the order is available to be delivered to the client.


#### 2.3 Admin
- `Management of employees`: Users with the `admin` role have specific permissions and access to employees management resources. This includes listing, adding, editing and deleting employees information, such as email, role and password.

- `Management of products`: Admin user also have access to product management resources. It allows admin to list, add, edit and delete products information, such as name, price and type. This provides complete control of the products available.
***

## 3. Running the Application

New users can't register themselves, this happens because the responsability of registering new users is assigned exclusively to users with admin role.

In case you are interested in testing the application, you can login using one of the credentials below:

email: waiter@bq.com   | password:  123456
 <br>
  <br>
email: kitchen@bq.com   | password:  123456
 <br>
  <br>
email: admin@bq.com   | password:  123456

This accounts are for testing purposes and have restricted permissions, according to pre-established roles.
***

## 4. Technical Considerations

This project was developed utilizing a series of modern and widely adopted technologies for web application development. Some of the key technologies, tools, and platforms utilized in this project include:

- JavaScript React framework: The project was built using the JavaScript React framework, which offers an efficient and reactive approach to developing interactive and dynamic user interfaces. It allows for the creation of reusable components and provides a robust ecosystem for building modern web applications.

- Toastify: Toastify was used for displaying informative and user-friendly notifications in the application. It provides a simple and customizable way to show success, error, and other types of notifications to enhance the user experience.

- React Modal: React Modal was utilized for creating and managing modal windows in the application. It allows for the display of content or forms in a layered dialog, providing a clean and intuitive user interface for specific interactions.

- Axios: Axios, a popular JavaScript library, was employed for making HTTP requests from the application to the API endpoints. It provides an easy-to-use interface for handling asynchronous API calls, enabling efficient data retrieval and manipulation.

- Jest and Testing Library: Jest and Testing Library were used for implementing unit tests and integration tests for the project. These testing frameworks allow for the creation of robust and reliable tests to ensure the correctness and stability of the application.

- ESLint: ESLint was utilized as a static code analysis tool to enforce consistent coding styles and detect potential errors or code quality issues. It helps maintain code readability and ensures adherence to best practices throughout the development process.

- Insomnia: Insomnia app was utilized for testing and simulating HTTP requests to the API. With Insomnia, custom HTTP requests could be sent, and the received responses could be visualized, ensuring proper communication between the application and the API endpoints.

- Figma: Figma was used for prototyping and designing the user interface of the application. It provides a collaborative platform for creating interactive and visually appealing designs, allowing for seamless communication and iteration in the design process.

Other tools and libraries: In addition to the aforementioned technologies, various other tools and libraries were employed, including package managers for dependency management, version control systems for collaborative development, and helper libraries for efficient project construction.

The combination of these technologies, tools, and platforms enabled the development of a modern, responsive, and functional user interface for efficient order management in a restaurant environment.
***

## 5. API Mock

This project utilizes an [API mock](https://burger-queer-api-mock.vercel.app/) to receive and process data sent by the client interface.

It's important to note that the API mock does not permanently store data since it doesn't have a real database. This means that when using the interface, the data sent is temporary and does not persist between sessions.

Additionally, the API mock simulates an expiration time for the authentication token. When the token expires, the processing of the sent data is discarded since there is no real authentication mechanism to renew the token.
***

## 6. Unit Tests

Unit tests were implemented to ensure the quality and stability of the application, allowing for the examination of the individual behavior of each component or function in isolation, facilitating the identification of possible errors or flaws.

To conduct the unit tests, a combination of tools and libraries was utilized, including:

- **Jest**: Jest was used as the foundation for creating and executing unit tests. It provides an efficient framework for writing well-organized and automated tests.

The **React Testing Library** was adopted for testing React components. It offers a user-centric approach to testing, simulating interactions and verifying the expected behavior of components.

The unit tests cover various areas of the application, ranging from data validation and business logic to proper interaction with the API mock and appropriate rendering of components.

> Additional information: Jest is a widely adopted JavaScript testing framework that provides built-in functionalities for test running, assertions, mocking, and coverage reporting. The React Testing Library is a popular testing library specifically designed for testing React components by focusing on the behavior from a user's perspective.

The implementation of comprehensive unit tests ensures the reliability and robustness of the application's functionality, contributing to a more confident and efficient development process.
***


## 7. Usability Tests and User Feedback

Usability testing plays a vital role in ensuring that our application provides a seamless and intuitive user experience. To evaluate and improve the usability of our project, we conducted a series of usability tests with real users.

### 7.1 Usability Testing Process

During the usability testing phase, a representative group of users interacted with the application while performing typical tasks and scenarios. The tests were conducted in a controlled environment, allowing us to observe users' actions, collect feedback, and identify areas for improvement.

### 7.2 User Feedback Collection

We encouraged participants to provide their honest feedback, capturing their thoughts, concerns, and suggestions regarding the application's usability. Various methods, such as surveys, interviews, and direct observation, were employed to gather qualitative and quantitative feedback.

### 7.3 Feedback Analysis and Implementation

Once the usability tests were completed and user feedback was collected, feedback was meticulously analyzed to identify recurring patterns and prioritize the areas that needed attention. Valuable insights and suggestions from users were then incorporated into the development process.

### 7.4 Iterative Design and Enhancements

User feedback served as a valuable resource for iterative design and continuous improvement. We iteratively refined the application based on the feedback received, making necessary adjustments to enhance the user experience, usability, and overall satisfaction.
***

We value user feedback and actively encourage the community to contribute their suggestions and ideas. If you have any feedback, bug reports, or feature requests, please feel free to submit them through [GitHub Pull Requests](https://github.com/marinacezario/SAP009-burger-queer-API-Client/pulls). We appreciate your input and are dedicated to making our application even better based on user needs.
