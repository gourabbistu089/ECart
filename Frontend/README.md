# Learning

# Tailwind CSS `group` Utility

In Tailwind CSS, `group` is used to apply styles to child elements based on the state of a parent element. It helps when you want to change how an element looks based on whether the parent is being hovered over or has a specific state.

## Example:
Suppose you have a card with an image and text. You want the text to change color when you hover over the entire card (not just the text itself).

Here’s how `group` helps:

```html
<div class="group p-4 bg-gray-200 hover:bg-gray-300">
  <img src="image.jpg" alt="Image" class="w-full h-32">
  <p class="text-gray-700 group-hover:text-blue-500">Hover over the card to change my color!</p>
</div>


