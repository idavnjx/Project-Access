# Project Access Mentorship Platform

## Clarification

Hi,

This is Team 12, and we worked on creating the next generation mentorship platform for Project Access.

Due to unforeseen circumstances, our team size was reduced to 2 persons with **no backend developers available**. This crippled most of the functions that we planned during the initial stage (for example, a real application platform with backend server support, a real login/sign up function with user management, a real assignment submission in students' courses section, as well as a real Administrator's course platform, since we could not complete even its most basic functionality of uploading a video for a course since we have no backend support).

We had to give up a lot of our initial plans and tried our best to refocus our attention to build a UX instead of a platform. Therefore, there is completely NO backend structure on this web platform. However, me and Joelle worked our best to develop a simple, yet intuitive web platform that we hope could provide Project Access with inspirations on frontend design.

Thank you for reading, and I hope our crippled work would be helpful to some degree :)

- Junxiong Niu (David), Project Manager, Team 12

## How to run this web platform locally?

Simply download the entire Github Repository as a .zip file. Since our team spent all of time and resources on frontend development, **/frontend** is the directory that this web platform uses.

## Walkthrough

### Mentorship Platform Start Page
To access the mentorship platform, simply open **index.html**, you would be able to use this page as the main menu for every functions that the mentorship platform required. A dummy login/sign up function is provided in the upper right corner, and you would be able to access Application and Courses.

### Application
Simply click on **"Start your application here"** will take you to the first step of application interface. We used the Airtable Link that Project Access provided as the external written application link. 

Unfortunately, this stream of interaction would now be cut off since we do not have a backend server determining whether user had or had not finished their application. We would kindly ask you to navigate to **/frontend/html/applications**, and open **afterapp.html**, this is a page that confirms Project Access has received the user's application. 

Since we also could not identify the application results, we kindly ask you to open **firstdecision.html** and **rejection.html**, they individually represent the acceptance and rejection of the first round written application. In **firstdecision.html**, clicking "Accept and Continue" will directly take you to **consultation.html**, where users can schedule a consultation session and see their meeting time. If the user wish to decline and withdraw application, the user would be taken to a confirmation page, then the application would be withdrew. In **rejection.html**, there is also an Appeal button based on Project Access' user journey.

After the consultation sessions, we designed a final acceptance and rejection page (**finaldecision.html** and **finalrejection.html**).

### alt_applications
In **/frontend/html**, we built an alternative option of application model (in the directory **alt_applications**), which instead of prompting users to visit an Airtable link to fill out application externally, we used inline elements to create an application. We decided not to move forward with this idea because we have NO backend support for storing the application material in Airtable. However, based on our user research, we do believe inline application is a much more nicer experience than filling out an application externally.

### Courses

Simply click on **"Access your courses here"** will take you to the first step of Course interface. With the 3-column type timeline design, the leftist column divided course contents by week, the center column is the actual timeline with lesson/assignment deadlines and announcements. The right column is a hub to access all course/assignment/resource content.
