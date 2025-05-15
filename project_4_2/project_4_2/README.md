![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Project-4

This project is about restaurant management system built using Django framework. It allows external users to book tables, view the menu, and interact with the restaurant, while site owners can manage bookings and ensure smooth restaurant operations.

Objective:
The goal of this project is to develop a restaurant booking system where:
. Users can reserve tables for one or more guests
. The site owner can manage bookings efficiently ensuring smooth restaurant operations.

Wireframe
 The design of the site follows a consistent theme throughout all pages.
 
 Pages in the Website
The site consists of sex pages:
1. Home
2. About Us
3. Menu
4. Booking
5. Contact Us
6. Login/Register

![Wireframe](https://github.com/omerahm69/project_4/blob/main/static/images/Wireframe.png)

User Stories and admin requirements

All user stories and admin requirement entered as issues in GitHub. However Agile methodology was not implemented from the start.

User Stories & Admin Requirements

- As a user I want to book a table for one or more guets
- As a user I want to view the menu
- As a user I want a calender for booking

Admin Requirements
- As an admin I want to view bookings
- As an admin I want to view bookings

Database Design
The database design follows an Entity-Relationship Diagram (ERD) to define how data is structured and related.
Entities:
1. Customer
2. MenuItem
3. Order
4. Reservation
5. Booking
Relationships are:
- Order has a ForeignKey relationship to Customer and a ManyToMany relationship to MenuItem
- Reservation has a ForeignKey relationship to Customer
- Booking has a ForeignKey relationship to Costumer and Table
Below is the simplified ERD structure:
- Customer:
  - name
  - email
- MenuItem:
    -name
    -description
    -quantity
    -image
    -banner
    -price
    -available
-Order:
    -customer (ForeignKey to Customer)
    -items (ManayToMany to MenuItem)
    -status
    -order_date
-Reservation:
    -customer (ForeignKey to Customer)
    -date
    -number_of_people
-Table:
    -table_number
    -seats
Booking:
    -user (ForeignKey to Customer)
    -table (ForeignKey to Table)
    -date
    -time
    -guests

Features:
A. Base Features
Navbar
![Wireframe](https://github.com/omerahm69/project_4/blob/main/static/images/Sk%C3%A4rmbild%202025-02-24%20165421_home.png)

- Displays logo image and brand name link to the home page
- Includes a toggle button to expand or collapse the naviation links in dropdown menu.

Footer
- The footer contains social media links and a consistent footer background color.
![Wireframe](https://github.com/omerahm69/project_4/blob/main/static/images/Sk%C3%A4rmbild%202025-02-24%20214216_footer.png)


B. External User Features (Guests)
1. Table Booking
- Users can select a date,time and numbers of guests.
- Available tables displayed based on restaurant capacity

![Wireframe](https://github.com/omerahm69/project_4/blob/main/static/images/Sk%C3%A4rmbild%202025-02-24%20165727_book_a_table.png)

2. Booking Confirmation
- User recieve a confirmation of their booking with date and time details.

3. Menu Preview
- Users can browse the restaurant menu while booking or independently.
- The menu includes categories starters, mains, desserts.

![Wireframe](https://github.com/omerahm69/project_4/blob/main/static/images/Sk%C3%A4rmbild%202025-02-24%20165643_our_menu.png)

4.User Registration and Login

- Guests can create accounts or book without registration.
![Wireframe](https://github.com/omerahm69/project_4/blob/main/static/images/Sk%C3%A4rmbild%202025-02-24%20165844_login.png)

![Wireframe](https://github.com/omerahm69/project_4/blob/main/static/images/Sk%C3%A4rmbild%202025-02-24%20195957_register.png)


C. Site Owner Features (Restaurant Staff)

1. Admin Dashboard
- View all bookings for any date and time.
- Manage incoming bookings (accept, reject, or modify).
- View booking details, including the number of guests and any special requests.

2. Menu Management

- Add or update menu items (dish name, description, price).

D. User-Friendly UI

- Mobile-responsive design for ease of use.
- Intuitive booking process with few steps.



Technologies Used
-Frontend: HTML5, CSS, Bootstrap, JavaScript

- Backend: Python, Django

- Media Storage: Cloudinary (for images)

Testing
The system has undergone rigorous manual testing to ensure functionality, usability and responsiveness.

Deployment Instructions

Fork the Repository
1. On Github.com, navigate to the omerahm69 repository.
2. In the top-right corner of the page, click Fork.
3. By default, forks are named the same as their parent repositories. You can change the name of the fork to distinguish it further.
4. Add a description to your fork.
5. Click Create fork.
 
Clone the Repository
1. Above the list of files click the button that says 'Code'.
2. Copy the URL for the repository.
3. Open Terminal or Command Prompt
4. Change the directory to the location where you want the cloned directory.
4. Type git clone, and then paste the URL
5. Press Enter.


Heroku Deployment

1. Log in to your Heroku  account or create an account if you don't already have one.
2. Click the "New" button at the tpo right corner and select "Create New App".
3. Enter a unique application name for your app.
4. Select your region

5. Click "Create App".

Prepare environment and settings.py
1. In your local development environment create an env.py file in the root directory.
2. Add the DATABASE_URL and your chosen SECRET_KEY to the env.py file.
3. In your settings.py, import the env.py file and add the paths for the SECRET_KEY and DATABASE_URL.
4. Comment out the default SQLite database configuration
5. Save all files and run migrations to update your database.
6. Update the STATIC files settings:
Set the URL, storage path, directory path, root path, media URL, and default file storage path for your static and media files.
7. Link the TEMPLATES_DIR to the templates directory in Heroku.
8. Add the Heroku app to the ALLOWED_HOSTS list in the format:['my_restaurant.herokuapp.com'] '.

Add the following Config Vars in Heroku:
1. SECRET_KEY- Use a Django-generated secret key.
2. PORT = 8000
3. DISABLE_COLLECTSTATIC = 1- This is temporary and shoul be removed before final deployment.
4. DATABASE_URL - Use the PostgreSQL database URL provided by Heroku's built-in Postgres add-on.

Setting up PostgreSQL on Heroku:
1. In the "Resources" tab on your Heroku app dashboard, search for "Heroku Postgres".
2. Once the database is attached, the DATABASE_URL will automatically be set in your Heroku config vars.

Additional Files Needed for Heroku Deployment:

1. requirements.txt - A list of required packages for the project.
2. Procfile - Used to specify the commands that are run by Heroku's dynos.

Once these steps are complete, the site should be ready for deployment on Heroku with PostgreSQL.



