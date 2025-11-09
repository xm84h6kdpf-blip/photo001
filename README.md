# Photos 001 - Photography Portfolio Website

A minimal, responsive photography portfolio and blog website built with HTML, CSS, and JavaScript.

## 📁 Files Included

- `index.html` - Homepage with photo collage
- `albums.html` - Albums page with photo galleries
- `blog.html` - Blog page with posts
- `styles.css` - All styling and responsive design
- `script.js` - Interactive features and lightbox
- `README.md` - This file

## 🚀 Getting Started

### Option 1: Open Locally
1. Download all files to a folder on your computer
2. Double-click `index.html` to open in your browser
3. Navigate between pages using the menu

### Option 2: Host Online (Recommended)
The easiest way to get your site online is using free hosting services:

**Netlify (Recommended):**
1. Go to [netlify.com](https://netlify.com)
2. Sign up for a free account
3. Drag and drop your entire folder onto Netlify
4. Your site will be live in seconds!

**GitHub Pages:**
1. Create a GitHub account
2. Create a new repository
3. Upload all your files
4. Enable GitHub Pages in Settings

**Vercel:**
1. Go to [vercel.com](https://vercel.com)
2. Sign up and import your folder
3. Deploy!

## 🖼️ Adding Your Own Photos

### Quick Method: Replace Placeholder Images

Currently, the site uses Unsplash placeholder images. To add your photos:

**Method 1: Use Image URLs**
1. Upload your photos to a service like [Imgur](https://imgur.com) or Google Drive
2. Get the direct image URL
3. Open the HTML files and replace the Unsplash URLs with your own

**Method 2: Use Local Images (Better)**
1. Create an `images` folder in the same directory as your HTML files
2. Put your photos in this folder (e.g., `images/photo1.jpg`)
3. In your HTML, replace:
   ```html
   src="https://images.unsplash.com/photo..."
   ```
   with:
   ```html
   src="images/photo1.jpg"
   ```

### Example: Adding Photos to Vancouver Album

Open `albums.html` and find the gallery section. Replace the image sources:

```html
<!-- Before -->
<img src="https://images.unsplash.com/photo-..." alt="Vancouver architecture">

<!-- After -->
<img src="images/vancouver/hero.jpg" alt="Vancouver architecture">
```

## ✏️ Customizing Content

### Changing Your Name
Find and replace "Micah Mulock" in the footer of each HTML file with your name.

### Adding/Removing Albums
1. Open `albums.html`
2. In the sidebar, add or remove album links:
   ```html
   <a href="albums.html?album=newyork" class="album-link">New York</a>
   ```
3. Open `script.js`
4. Add your album data to the `albums` object:
   ```javascript
   newyork: {
       title: 'New York',
       images: [
           'images/newyork/photo1.jpg',
           'images/newyork/photo2.jpg',
           'images/newyork/photo3.jpg',
           'images/newyork/photo4.jpg'
       ]
   }
   ```

### Adding Blog Posts
1. Open `blog.html`
2. In the sidebar, add a blog link:
   ```html
   <a href="blog.html?post=008" class="blog-link">Blog 008</a>
   ```
3. Create your content in the `.blog-post` div
4. Update the navigation links at the bottom

## 🎨 Customizing Design

### Colors
Open `styles.css` and change these values at the top:

```css
body {
    background-color: #d9d9d9;  /* Main background - currently light gray */
    color: #000;                 /* Text color - currently black */
}
```

Want a dark theme? Try:
```css
body {
    background-color: #1a1a1a;  /* Dark background */
    color: #ffffff;              /* White text */
}
```

### Font
Change the font family in `styles.css`:

```css
body {
    font-family: 'Courier New', Courier, monospace; /* Current */
    /* OR try: */
    font-family: 'Arial', sans-serif;
    /* OR: */
    font-family: 'Georgia', serif;
}
```

For custom fonts from Google Fonts:
1. Go to [fonts.google.com](https://fonts.google.com)
2. Select a font and copy the `<link>` tag
3. Add it to the `<head>` section of each HTML file
4. Update the `font-family` in CSS

### Layout Sizes
Adjust spacing and sizes in `styles.css`:

```css
.gallery {
    gap: 20px;  /* Space between gallery images */
}

.site-title {
    font-size: 3.5rem;  /* Size of "Photos 001" title */
}
```

## 🔧 Features Included

### Lightbox
- Click any image to view it full-screen
- Navigate with arrow buttons or keyboard (← →)
- Press ESC or click outside to close

### Responsive Design
- Automatically adjusts for mobile, tablet, and desktop
- Touch-friendly navigation on mobile devices

### Navigation
- Sidebar navigation for Albums and Blog pages
- Previous/Next links for albums and blog posts
- Smooth scrolling and transitions

## 📱 Testing Your Site

Test on different devices:
1. Desktop browser (Chrome, Firefox, Safari)
2. Mobile phone (portrait and landscape)
3. Tablet
4. Use browser DevTools (F12) to test responsive views

## 🆘 Troubleshooting

**Images not showing?**
- Check that file paths are correct
- Make sure image files are in the right folder
- Verify image file extensions (.jpg, .png, etc.)

**Links not working?**
- Ensure all HTML files are in the same folder
- Check that hrefs match file names exactly

**Layout looks broken?**
- Make sure `styles.css` is in the same folder
- Check browser console (F12) for errors

**JavaScript not working?**
- Ensure `script.js` is in the same folder
- Check browser console for errors

## 🎓 Learning Resources

Want to learn more about the code?

**HTML:**
- [MDN HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)

**CSS:**
- [CSS Tricks](https://css-tricks.com/)
- [MDN CSS Guide](https://developer.mozilla.org/en-US/docs/Learn/CSS)

**JavaScript:**
- [JavaScript.info](https://javascript.info/)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 💡 Next Steps

1. **Add Your Photos** - Replace placeholder images with your work
2. **Customize Colors** - Make it match your style
3. **Write Content** - Add blog posts about your photography
4. **Deploy Online** - Share your portfolio with the world
5. **Get Feedback** - Share with friends and iterate

## 📝 Code Comments

The code includes detailed comments explaining how everything works. Look for comments like:

```javascript
// This function opens the lightbox
function openLightbox(index) {
    // Your code here
}
```

Feel free to experiment and break things - that's how you learn!

## 📧 Contact

For questions about this template or to share what you built, reach out!

---

Built with ❤️ for photographers who want full control of their portfolio.
