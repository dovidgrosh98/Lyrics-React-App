# Lyrics-React-App
## Live Preview
[lyrics-react-app.surge.sh](http://lyrics-react-app.surge.sh)

## MVP
* get input value and call api
* pass data/input value as props through the route
* get lyrics to appear
* have button to route back to search again

## Extra Features
* add itunes api
  * add song preview
  * add album cover
* add youtube search in case apis don't have the input value

## issues
* <del>route from submit happens occurs before fetching data from api</del>

solved with pushing to results route after fetching data, as appose to wrapping submit button with Link tags 
```this.props.history.push('/results')```

* <del>can't store data once page is refreshed</del>

solved by setting local storage

## Apis
1. lyrics.ovh
2. iTunes

## ![](https://res.cloudinary.com/dg98/image/upload/c_limit,w_428/v1564714215/Screen_Shot_2019-08-01_at_10.24.10_PM.png)
