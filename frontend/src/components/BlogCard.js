import React from 'react';

const BlogCard = ({ title, description, image }) => (
  <article class="bg-white rounded-lg shadow-md p-4">
    <img src={image} alt={title} class="w-full h-48 object-cover rounded-md mb-4" />
    <h2 class="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
    <p class="text-gray-600">{description}</p>
  </article>
);

export default BlogCard;
