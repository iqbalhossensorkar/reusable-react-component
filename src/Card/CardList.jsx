// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const CardList = ({ imageUrl, description }) => {
    return (
        <div>
            <div className="item-card">
                <img src={imageUrl} alt="Item" onError={(e) => e.target.src = 'https://andersnoren.se/themes/koji/wp-content/themes/koji/assets/images/default-fallback-image.png'} style={{ height: '200px' }} />
                {/* Handle Broken Image URLs:
                To handle cases where the image URL is broken or not loading, we can use the onError event of the img tag. In case the image fails to load, the onError event will trigger, and we can update the src attribute to a fallback image URL or a placeholder image.
                In the example above, I've used 'https://andersnoren.se/themes/koji/wp-content/themes/koji/assets/images/default-fallback-image.png' as the fallback image URL.

                Now, when rendering the Card component, if the imageUrl is not valid, the fallback image will be displayed instead. This approach ensures a better user experience by not leaving a broken image icon for the user to see.*/}
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CardList;