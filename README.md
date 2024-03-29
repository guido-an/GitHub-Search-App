# GitHub Search App 
<img src="https://user-images.githubusercontent.com/30729360/77848707-fc628600-71c6-11ea-9ce5-d6dac5c3e6b5.png" />

A mini app for searching among the vast world of GitHub repositories. 
<br>
On the main page we have a search input where the user can type in a repository name. The results are loaded when the user is done typing. By clicking in one of them the user will see the details about that specific repo. 

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
Both the Home and the <em>RepoPage</em> are mounted using React.lazy().
A small spinner will appear before these components will properly be displayed on the page. 

### API response 
By using the browser navigator properties the user can see in the <em>SearchBar</em> what is the response time of each API call. 

### Watchers 
Once the user make the first search and the repos appear on the page he can decide to order them based on the repo's number of watchers. That's the reason of the <em>reposCopy</em> array on the state. 

### RepoPage
Here the user can check the details of a specific repo. At the bottom of the page there is a slider containing all the relative repos in the state. By clicking in one of them the page will scroll to the top and new data will be loaded. 

### User experience
The app wants to be easy to use with a clean and elegant style. A touch of aliviness is given by the use of shadows and the little changes on hover. 

### Translations
By detecting the browser language the UI is translated in: English, Dutch and Italian. If the current browser language is not one of the three above, English will be the default language. 
<br/><br/>
