# Doctors Engine Frontend

## General Description

The Doctors Engine Frontend is a React application built with TypeScript and Material-UI. It provides a user interface to search the National Provider Identifier (NPI) registry by entering various search parameters. The results are displayed in a table that supports sorting and filtering.

## Architecture

1. **Language**: TypeScript
2. **Framework**: ReactJS
3. **UI Library**: Material-UI
4. **API Integration**: Axios
5. **Build Tool**: Yarn

## Features

- **Form**: Input fields for various search parameters including first name, last name, city, country code, state, and number.
- **Search**: Sends a GET request to the backend API with the search parameters.
- **Results Table**: Displays search results with sorting and filtering capabilities.
- **Loading Indicator**: Shows a loader while the search request is being processed.
- **Error Handling**: Displays error messages for invalid inputs or failed API requests.

## Libraries Used

- **React**: JavaScript library for building user interfaces.
- **Material-UI**: React components for faster and easier web development.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **React-Table**: Hooks for building fast and extendable tables and data grids.

## Getting Started

### Prerequisites

- Node.js v16.20.0
- Yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/FelipeGarcia911/doctors-engine-app.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd doctors-engine-frontend
   ```
3. **Install dependencies**:
   ```bash
   yarn install
   ```

### Running the Application

1. **Start the development server**:
   ```bash
   yarn start
   ```
2. **Open your browser and navigate to**: `http://localhost:3000`

## Usage

1. **Fill in the search form**: Enter the desired search parameters (e.g., first name, last name, city, etc.).
2. **Click the search button**: Sends a request to the backend API with the provided parameters.
3. **View results in the table**: The search results are displayed in a sortable and filterable table.
4. **Filter and sort**: Use the table headers to sort and filter the results.

## Example

1. **Search by first name and city**:
   - **First Name**: John
   - **City**: New York
   - **Click Search**
2. **View results**: The table displays results matching the search criteria.

## API Integration

The frontend communicates with the backend API to fetch search results. The backend API is described in its own README file.

### Axios Service

The application uses Axios to handle API requests. The Axios service is configured to handle GET and POST requests, handle errors, and unpack JSON responses.

## Deployment

The frontend application can be deployed to any static site hosting service such as AWS S3, Netlify, or Vercel.

## Possible Improvements

- **Enhanced Error Handling**: Improve error messages and handling for various scenarios.
- **Pagination**: Add pagination to the results table for better performance with large datasets.
- **Form Validation**: Implement more comprehensive form validation.
- **Advanced Search**: Add advanced search features such as fuzzy search and semantic matching.

---

This frontend application provides an intuitive interface for searching the NPI registry, leveraging modern React techniques and Material-UI components for a responsive and user-friendly experience.
