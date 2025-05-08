# ProduApp

## Description

This is a web application designed to track daily production for my current job. It allows users to enter cases, record progress, and generate a production report.

## Features

* **Case Entry:** Users can enter individual case IDs.
* **Progress Visualization:** The application displays the current number of cases entered and the progress towards a set goal, possibly with a progress bar.
* **Case Removal:** Users can remove recorded cases.
* **Shift Clearance:** The application allows clearing or resetting the case log for a new production day.
* **Report Generation:** Users can generate a daily production report in a text file format and download it.
* **Data Persistence:** The application saves data locally (likely using `localStorage`), so information is not lost when the page is reloaded.

## Technologies Used

* HTML
* CSS
* JavaScript
* Bootstrap
* Font Awesome Icon Library
* Google Fonts (Inter)

## Installation

1.  Clone this repository: `git clone <URL del repositorio>`
2.  Navigate to the project directory: `cd nombre-del-proyecto`
3.  Open the `index.html` file in your web browser.

## Usage

1.  **Main Page:** The main page displays the application title, the production goal, the current number of cases, and a progress bar.
2.  **Case Entry:**
    * There is an input field where you can enter a case ID.
    * The "Enter Case" button adds the case to the list and updates the progress.
3.  **Case Visualization:**
    * Entered cases are displayed in a list.
    * The total number of cases is updated dynamically.
4.  **Case Removal:** The "Remove Case" button removes the last entered case.
5.  **Shift Clearance:** The "Clear" button deletes all cases from the current day.  Confirmation is requested before deletion.
6.  **Report Generation:** The "Generate Report" button generates a daily production report in a text file format and downloads it.

## File Structure

    
    ├── index.html
    ├── main.css
    ├── main.js
    └── README.md
    

## Credits

* Steve Artavia
* Third-party libraries and frameworks mentioned in the "Technologies Used" section.