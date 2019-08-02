# Lyrics-React-App
## Live Preview
[lyrics-react-app.surge.sh](http://lyrics-react-app.surge.sh)
## MVP
* get input value and call api
* pass data/input value as props through the route
* get lyrics to appear

## Extra Features
* add itunes api
  * add song preview
  * add album cover
* add youtube search in case apis don't have the input value

## issues
- [x] route from submit happens occurs before fetching data from api

solved with pushing to results route after fetching data, as appose to wrapping submit button with Link tags 
```this.props.history.push('/results')```

- [x] can't store data once page is refreshed

solved by setting local storage
