# reusable-react-component
## Handle Broken Image URLs:
To handle cases where the image URL is broken or not loading, we can use the onError event of the img tag. In case the image fails to load, the onError event will trigger, and we can update the src attribute to a fallback image URL or a placeholder image.
In the example above, I've used 'https://andersnoren.se/themes/koji/wp-content/themes/koji/assets/images/default-fallback-image.png' as the fallback image URL.
Now, when rendering the Card component, if the imageUrl is not valid, the fallback image will be displayed instead. This approach ensures a better user experience by not leaving a broken image icon for the user to see.
