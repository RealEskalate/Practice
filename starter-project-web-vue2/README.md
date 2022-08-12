# starter-project-web-vue2

## Steps to Complete the Practice project

### Setting up and building UI

1. Nuxt, Javascript, Vuetify, and Vuex will be used in this project.

2. Add a folder to the pages folder with your name on it (eg. abraham) to put all your pages in.

3. Add a folder to the components folder with your name on it (eg. abraham) to put all your components in.

4. Add a card or link to the landing page that when clicked will redirect to your landing page.

5. In your section you will implement a blog website with all the CRUD operations.

6. Add a file called index.vue in your pages folder. This page will be used to display a list of blogs.

7. Add a file called \_id.vue in your pages folder. This page will be used to display a single blog.

8. Add any components you want to use in your pages to your components folder. (ex. the component used to display a single blog on the list page.)

9. Create UI for edit and delete operations in any way you prefer. (Buttons, Components, Pages)

### Integration with Backend

10. To retrieve data we'll use https://blog-app-backend.onrender.com/api/

11. To work on vuex, go to the store folder and create a new file with your name on it (eg. abraham.js)

12. Use your store file to make requests to the API and populate the UI you built.

### Unit Testing

13. We will use the Jest package for unit tests.

14. Write unit tests for each of your store files.

15. Since we haven't found concrete resources for testing, refer to the tests written here or on the hakim hub project and reach out to your TLs for questions.
    #### Pointers for testing
        - Inoder to unit test the store functions without api requests and nuxt auth, we will mock these functions.
        - Use the jest.mock function to mock API requests for the different types of http methods. These will return mock values of your choice. You can use a variable to control whether these return a success or a failure response.
        - Use a custom file to hold mock implementations of nuxt's auth functions.
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

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

## Code Style Conventions

### Variable Naming

- Variables and Functions -> `pascalCase`
- CSS Classes -> `kebab-case`

### Store Variables Naming

- State -> `noun` or `noun + adjective`
- Getters -> Same as state variable
- Mutations -> `"set" + stateName`
- Actions -> `"fetch" + stateName`

  #### Example Store:

  - state: hospitals
  - getter: hospitals
  - mutations: setHospitals
  - actions: fetchHospitals

### File Naming

- Folders and files -> `kebab-case`
- Files in the 'components' folder -> `PascalCase`

  #### Example folder structure for the 'pages' folder

  - hospitals
    - index.vue
    - \_id.vue
    - insert.vue
    - edit.vue

## Good Practices

- Follow the github workflow provided to you by your TLs.
- Call actions in the `created()` function
- Have three states for all data:
  - `loading`: Display a loading component
  - `empty` : Show that no data is retrieved
  - `has data`: Display the retrieved data
- Make sure UI is reponsive before pushing to github
- Use semantically consistent variable and test value names
- Use as little custom css as possible
- Use vuetify components as much as possible
- Make sure all tests pass before pushing
