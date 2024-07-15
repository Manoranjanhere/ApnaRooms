# PG Booking Website

This repository contains the source code for a PG (Paying Guest) booking website. The website allows users to search for, view details, and book PG accommodations.

## Features

- Search for PG accommodations by location
- View detailed information about PGs
- Book PG accommodations
- User authentication and authorization
- Add new PG listings after signing up

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/pg-booking-website.git
    cd pg-booking-website
    ```

2. Install the required Node.js modules:
    ```sh
    npm install
    ```

3. Set up your environment variables. Create a `.env` file in the root directory of the project and add the following variables:
    ```plaintext
    CLOUD_NAME=your_cloud_name
    CLOUD_API_KEY=your_cloud_api_key
    CLOUD_API_SECRET=your_cloud_api_secret
    MAP_TOKEN=your_map_token
    MONGO_URL=your_mongodb_connection_url
    SECRET=your_secret_key
    ```

## Usage

After setting up the environment variables, you can start the development server using the following command:
```sh
node app.js
This will start the server, and you can access the website at http://localhost:8080.

Adding Listings
To add a new PG listing:

Sign up or log in to your account.
Navigate to the "Add Listing" section.
Enter the details of your PG accommodation and submit the form.
Contributing
We welcome contributions to improve this project. If you would like to contribute, please follow these steps:

Fork the repository.
Create a new branch for your feature or bugfix.
sh
Copy code
git checkout -b feature-name
Make your changes and commit them.
sh
Copy code
git commit -m "Description of the feature or fix"
Push your changes to your forked repository.
sh
Copy code
git push origin feature-name
Create a pull request to the main repository.
License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contact
For any inquiries or issues, please contact us through LinkedIn if you want to know more about the project or contribute.

javascript
Copy code

Make sure to replace placeholder values such as `your_cloud_name`, `your_map_token`, `your_mongodb_connection_url`, `your_secret_key`, and `yourprofile` with the actual values relevant to your project.







