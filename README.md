# Carouselider
[Live Demo](https://dannam.xyz/Carouselider/)

## Summary
Carouselider demonstrates use of an infinite carousel slider for viewing media, dynamic css styling built to accommodate browser windows on mobile, a search bar to filter articles, and a display toggle to select your view.

## Infinite Carousel Slider
This application uses the nuka-carousel component. Nuka-carousel is responsive and is touch friendly, so it works well on mobile browsers. There is a vertical option as well, but for this application we only used it for the horizontal option. Reason being that horizontally we would want to limit ourselves to what can fit on the screen at once, but vertically it would be natural and intuitive that the list continues down past what is immediately visible on the screen.

I created a SliderMedia component to stylize each element of the carousel and then mapped through the media data held in state to create an array of SliderMedia components. Nuka-carousel will take all of it's child elements and use them in the carousel.

```
const SliderMedia = ({ media }) => {
  const { name, show, backgroundImage } = media;
  const imgSource = `images/${backgroundImage}`;

  return (
    <div className="Slider-media-div">
      <img src={imgSource} className="Slider-media-image" alt="media" />
      <div className="Slider-labels-div">
        <label className="Slider-label-show">{show}</label>
        <label className="Slider-label-name">{name}</label>
      </div>
    </div>
  )
}

const Slider = ({ media, windowWidth }) => {
  const slidesToShow = windowWidth > 500 ? 4 : 1;

  return (
    <div className="Slider-div">
      <div className="Slider-headline-div">
        <label className="Slider-headline">Recent Articles</label>
      </div>
      <Carousel
        wrapAround={true}
        slidesToShow={slidesToShow}
        framePadding="20px"
        cellSpacing={30}
        renderBottomCenterControls={() => false}
        width="85%"
      >

        { media.map((m) => <SliderMedia media={m} key={m.id}/>) }

      </Carousel>
    </div>
  )
}
```
## Dynamic Styling
You might have noticed that the slider component starts with a variable that tells it how many slides to show. This is part of creating dynamic styling. One of the props passed into the component is the width of the window. Bring the width of your browser to at least 500px, and you'll see the carousel changes from having four slides at once to showing just one slide at a time, as you would expect to see on a mobile device.

Additionally, CSS using @media is controlling the rest of the styling for when the browser screen gets as small as 500px.
```
@media screen and (max-width:500px) {
  .App {
    width: auto;
  }
  .App-logo {
    height: 20px;
    padding-top: 20px;
  }
  .App-header {
    height: 100px;
  }
  .Slider-container {
    margin-top: 25px;
  }
  .List-container {
    margin-top: 25px;
  }
}
```
## Search Bar
The search bar will re-query the data every time the value of the input changes. With every key stroke you'll see the media content change. However, the action that filters the data also knows to retrieve all the media if an empty search string is passed in as the search filter.
```
class SearchBar extends Component {
  state = { search: "" }

  onChangeText = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
    this.props.searchMedia(value);
  }

  render() {
    return (
      <div className="Search-bar-container">

        <div className="Search-bar-div">
          <input
            className="Search-bar-input"
            value={this.state.search}
            type="text"
            name="name"
            placeholder='Search "Walmart"'
            onChange={this.onChangeText}
          />
        <img src="images/iconSearch.svg" className="Search-bar-icon" alt="logo" />
        </div>
      </div>
    )
  }
}
```
## Toggle Display
The display component will receive from state what the selected display is. Clicking on the display choice will simply fire an action that updates our state to the selected display. Based on the choice that comes in from state, either the Slider (horizontal) or List (vertical) display component will be returned. The default state is set to Slider.
```
class Display extends Component {
  componentDidMount() {
    this.props.fetchMedia();
  }

  render() {
    const { media, windowWidth } = this.props;
    return (
      <div>
        {
          this.props.display === 'Slider' ?
          <div className="Slider-container">
            <Slider media={media} windowWidth={windowWidth} />
          </div>
          :
          <div className="List-container">
            <List media={this.props.media} />
          </div>
        }
      </div>
    );
  }
}
```
#### Thanks for stopping by and checking out my work!
