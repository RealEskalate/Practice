# starter-project-web-react

## Steps to Complete the Practice project

### Setting up and building UI

1. Next, TypeScript, mui, and React-Redux will be used in this project.

2. Add a folder to the pages folder with your name on it (eg. abraham) to put all your pages in.

3. Add a folder to the components folder with your name on it (eg. abraham) to put all your components in.

4. Add a card or link to the landing page that when clicked will redirect to your landing page.

5. In your section you will implement a blog website with all the CRUD operations.

6. Add a file called index.tsx in your pages folder. This page will be used to display a list of blogs.

7. Add a file called profile.tsx in your pages folder. This page will be used to display a user profile.

8. Add a folder blog/[id] in your pages folder, then create index.tsx file inside this folder. This page will be used to display single blog.

9. Add a folder auth inside your pages folder.

10. Add a file called index.tsx for login page and register.tsx for register page. 

11. Add any components you want to use in your pages to your components folder. (ex. the component used to display a single blog on the list page.)

12. Create UI in any way you prefer. (Buttons, Components, Pages)

### Integration with Backend

13. To retrieve data we'll use https://blog-app-backend.onrender.com/api/

14. To work on React-Redux, go to the store folder and create a new folder with your name on it (eg. abraham)

15. Use your store file to make requests to the API and populate the UI you built.

### Unit Testing

16. We will use the Jest package for unit tests.

17. Write unit tests for each of your store files.

18. Since we haven't found concrete resources for testing, refer to the tests written here or on the hakim hub project and reach out to your TLs for questions.
    #### Pointers for testing
        - Inoder to unit test the store functions without api requests and next auth, we will mock these functions.
        - Use the jest.mock function to mock API requests for the different types of http methods. These will return mock values of your choice. You can use a variable to control whether these return a success or a failure response.
        - Use a custom file to hold mock implementations of next's auth functions.
        - Use functions to setup the actions and mutations with the mock axios and auth. We will use these prepared actions and mutations to test.

### End to End Testing

. . . 

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start


```

For detailed explanation on how things work, check out the [documentation](https://nextjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as images, or fonts.


### `components`

The components directory contains your next.ts components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

### `layouts`

Layouts are a great help when you want to change the look and feel of your Next app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.


### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

## Code Style Conventions

...

## Good Practices

- Follow the github workflow provided to you by your TLs.
- Have three states for all data:
  - `loading`: Display a loading component
  - `empty` : Show that no data is retrieved
  - `has data`: Display the retrieved data
- Make sure UI is reponsive before pushing to github
- Use semantically consistent variable and test value names
- Use as little custom css as possible
- Use mui components as much as possible
- Make sure all tests pass before pushing
