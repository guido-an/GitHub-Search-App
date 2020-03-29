# GitHub Search App 
https://github-api-search-app.herokuapp.com/

A mini app for searching among the vast world of GitHub repositories. 
<br>

### Prerequisites
<strong>server</strong><br>
.env file<br>
PORT=5000<br>

<strong>client</strong><br>
.env.development<br>
REACT_APP_API_URL=http://localhost:5000/

## Main features:

### Server
A minimal Node/Express server in order to solve the CORS error and to already have an extra layer for hipotetically future data caching.

### Lazy load 
Both the Home and the RepoDetail page are mounted using React.lazy().
A small spinner will appear before these components will properly be displayed on the page. 

### API response 
By using the browser navigator properties the user can see in the SearchBar what is the response time of each API call. 

### Watchers 
Once the user make the first search and the repos appear on the page he can decide to order them based on the repo's number of watchers. That's the reason of the reposCopy array on the state. 

### RepoPage
Here the user can check the details of a specific repo. At the bottom of the page there is a slider containing all the relative repos in the state. By clicking in one of them the page will scroll to the top and new data will be loaded. 

### Translations
By detecting the browser language the UI is translated in: English, Dutch and Italian. If the current browser language is not one of the three above, English will be the default language. 

### User experience
The app is responsive and the style wants to be clean and elegant. The use of shadows and the little changes on hover add a touch of aliviness. 
