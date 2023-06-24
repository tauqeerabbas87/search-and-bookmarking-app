# Frontend Assignment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is build with latest React, Typescript and MUI library. Custom hooks are used and useReducer is used for state management.

The application has four main components
1. App -> contains search field, bookmarks dialog and Table to display bookmarks list component.
2. Search -> contains search field
3. Table -> contains table that is used for displaying repositories list and bookmarked list
4. Bookmarks Dialog -> contains dialog for bookmarked list of repositories.

I have used **useReducer** hook to create a store for this application as recommended to use hooks.

## Store
The Store folder contains the *appStore* file, which has *initial state* for the app store and *appReducer*.

## Types
The common types and action types are placed in the *types* folder.

## Actions
Action folder contains all the actions used for updating the store.

## Services
Services folder contains the service call for search github repositories by name. This also contains the *instance* created by octokit to call the services.

## Custom Hooks
*useApi* custom hook is created for calling apis. It is placed inside hooks folder.

## Utils
*Utils* folder contains useful functions i.e. 

1. *prepareTableData* for transforming api response to Table usable data.
2. *generateColumns* that generates columns for table  
3. *getLocalStorageData* and *setLocalStorageData* to store bookmarks in localstorage.
4. *searchById* to search a record if already exists before adding into localstorage.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
