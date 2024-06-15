import React from 'react'
import { InstagramFeed } from 'react-instagram-feed';


const InstaGrid = () => {
  return (
    <div>
    <h2>Instagram Feed</h2>
    <InstagramFeed
      userId="YOUR_USER_ID"
      accessToken="YOUR_ACCESS_TOKEN"
      clientId="YOUR_CLIENT_ID"
      resolution="thumbnail" // thumbnail, low_resolution, or standard_resolution
      limit="12" // Number of images to display
      sortBy="most-recent" // Sorting order
    />
  </div>
  )
}

export default InstaGrid