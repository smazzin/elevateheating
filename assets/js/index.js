/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

async function init() {
  const { Place } = await google.maps.importLibrary("places");

  getPlaceDetails(Place);
}

async function getPlaceDetails(Place) {
  // Use place ID to create a new Place instance.
  const place = new Place({
    id: "ChIJo5ruhcADlVQRUVig_GrmEl0",
    requestedLanguage: "en", // optional
  });

  // Call fetchFields, passing the desired data fields.
  await place.fetchFields({
    fields: ["displayName", "formattedAddress", "location", "reviews"],
  });

  // Display the reviews
  displayReviews(place.reviews);
}

function displayReviews(reviews) {
  const reviewsContainer = document.getElementById('reviews-container');
  reviewsContainer.innerHTML = ''; // Clear any existing reviews

  reviews.forEach(review => {
    const reviewElement = document.createElement('div');
    reviewElement.className = 'review';
    reviewElement.innerHTML = `
      <p><strong>${review.author_name}</strong> (${review.rating}/5)</p>
      <p>${review.text}</p>
    `;
    reviewsContainer.appendChild(reviewElement);
  });
}

document.addEventListener('DOMContentLoaded', init);
