
# Search UI Application

This project is a Search UI application built using React and TypeScript with Atomic methodology. It provides a search form to query data and displays the results with loading and error handling.

## Libraries and Frameworks Used

- React
- TypeScript
- Axios
- Tailwind CSS
- Jest
- React Testing Library
- Fuse.js (for fuzzy search)

## Setup Instructions

Follow these steps to set up the application locally:

### Prerequisites

- Node.js (v14.x or higher)
- Yarn (v1.x or higher)

### Steps

1. **Clone the repository**:
   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**:
   ```sh
   yarn install
   ```

3. **Set up Tailwind CSS**:
   Tailwind CSS is already configured in the project. Ensure that `tailwind.config.js` and `postcss.config.js` are in place.

4. **Run the development server**:
   ```sh
   yarn start
   ```

5. **Run the API server**:
   The API server runs on port 3001. Ensure you have a `data.json` file with your data.
   ```sh
   yarn server
   ```

6. **Run tests**:
   To run the tests, use:
   ```sh
   yarn test
   ```

### Directory Structure

```
├── src
│   ├── components
│   │   ├── atoms
│   │   │   ├── Button.tsx
│   │   │   ├── LoadingModal.tsx
│   │   │   └── __tests__
│   │   │       ├── Button.test.tsx
│   │   │       ├── Input.test.tsx
│   │   │       └── LoadingModal.test.tsx
│   │   ├── molecules
│   │   │   └── SearchForm.tsx
│   │   ├── organisms
│   │   │   └── SearchResults.tsx
│   │   ├── pages
│   │   │   └── HomePage.tsx
│   ├── types
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── setupTests.ts
├── public
│   └── index.html
├── data.json
├── server.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## API Example

The API server runs on port 3001. You can call the API with a search query as follows:
```
http://localhost:3001/api/data?search=your-query
```

Ensure that the `data.json` file is in the root directory and contains the data you want to search.
