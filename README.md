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
4. **Fill the env variables**
   Use the `.env.example` as guide to crete the `.env` file. Local development suggestion:

```
PORT=3001
REACT_APP_API_URL=http://localhost:3000
```

### Running the Application

1. **Start the development server**:
   ```bash
   yarn start
   ```
2. **Open your browser and navigate to**: `http://localhost:3001`

## Usage

1. **Fill in the search form**: Enter the desired search parameters (e.g., first name, last name, city, etc.).
2. **Configure your search**: You can select the total results and the search type: Simple, Fuzzy or Embeddings.
3. **Click the search button**: Sends a request to the backend API with the provided parameters.
4. **View results in the table**: The search results are displayed in a sortable and filterable table.
5. **Filter and sort**: Use the table headers to sort and filter the results.

## Example

1. **Search by first name and city**:
   - **First Name**: John
   - **City**: New York
   - **Click Search**
2. **View results**: The table displays results matching the search criteria.

## API Integration

The frontend communicates with the backend API to fetch search results.

## Deployment

The frontend application can be deployed to any static site hosting service. We're using AWS Amplify.

## Possible Improvements

- **Enhanced Error Handling**: Improve error messages and handling for various scenarios.
- **Pagination**: Add pagination to the results table for better performance with large datasets.
- **Form Validation**: Implement more comprehensive form validation.
- **Prettier and Linter**: Install and configure several code tools.
---
