# Portto Interview

_Preliminary interview project for [Portto](https://portto.io/)_

A live demo is available [here](https://victorcazanave.github.io/portto-interview/).

## 🎯 Features

### ✅ Completed features (< 4h)

These are the features done during the expected time (2-4 hours):
* List page and detail page following UI spec
* API requests with pagination
* Infinite scrolling
* Basic RWD
* Multi-browsers support (tested on Chrome 83, Firefox 78, Safari 13 and on phone/tablet with Chrome DevTools)

⚠️ **Note:** I did not use the [single asset API](https://docs.opensea.io/reference#retrieving-a-single-asset), because the [multilple assets API](https://docs.opensea.io/reference#getting-assets) already provides all the data for the detail page. Then an extra request can be avoided using the stored data when going to the detail page. Depending on the project, a different strategy (e.g. always refresh data) may be better.
Currently the assets are stored in the session storage, so you must clear it (closing the tab or using a dev tool) to refresh the data.

### 🕟 Overtime features (> 4h)

These are the extra features done after the expected time:
* Use web3.js and Metamask Chrome extension: although this is a bonus item, I was curious and wanted to give it a try. Since I don't know how to use Metamask, I couldn't really test it. So the code is in a dedicated branch [web3](https://github.com/VictorCazanave/portto-interview/tree/web3).
* Write unit tests: although this is not a requirement and not necessary for test/POC projects, I think it's very important for production applications. So I decided to quickly write some unit tests.

### 💡 Improvements

These are some ideas to improve the application:
* Handle all the errors properly (KO response from API, unknown token ID...)
* Handle direct access to the detail page (when asset is not fetched yet)
* Lazy load images (e.g. [vue-lazyload](https://www.npmjs.com/package/vue-lazyload))
* Improve the design (UX, accessibilty, UI)

## 👨‍💻 Development

### 🖥️ Local

To run the application locally:
1. Clone the repository: `git clone https://github.com/VictorCazanave/portto-interview.git`
2. Install all the dependencies: `cd portto-interview && npm install`
3. Run the application: `npm run serve`

### 🧪 Tests

To run the unit tests: `npm run test`

### 🚀 Deployment

To deploy the application on GitHub pages: `npm run deploy`

### 🔧 Tools

This application is built with:
* [Vue.js](https://vuejs.org/) ([Vue CLI](https://cli.vuejs.org/))
* [Vue Router](https://router.vuejs.org/)
* [Vuex](https://vuex.vuejs.org/)
* [vuex-persist](https://www.npmjs.com/package/vuex-persist)
* [vue-infinite-loading](https://www.npmjs.com/package/vue-infinite-loading)
* [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) ([whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch))
