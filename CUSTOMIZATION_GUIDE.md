# Portfolio Customization Guide

This professional portfolio has been enhanced with modern features specifically designed for senior software engineers. Follow this guide to customize it with your information.

## Quick Start

1. **Update Your Information**: Edit `public/resumeData.json` with your details
2. **Add Your Resume PDF**: Place your resume at `public/resume.pdf`
3. **Add Your Photos**: Add your images to `public/images/`
4. **Run Locally**: `npm install && npm start`
5. **Build**: `npm run build`

---

## Detailed Customization

### 1. Personal Information (`resumeData.json` → `main`)

Edit the following fields:

```json
{
  "main": {
    "name": "Your Full Name",
    "occupation": "Your Title (e.g., Senior Software Engineer)",
    "description": "Your tagline",
    "image": "yourphoto.jpg",  // Place in public/images/
    "bio": "Your bio paragraph",
    "email": "your.email@example.com",
    "phone": "+1 234 567 8900",
    "address": {
      "city": "Your City",
      "state": "Your State/Country",
      "zip": "Zip Code"
    },
    "website": "https://yourwebsite.com",
    "resumedownload": "/resume.pdf",
    "social": [
      // Update your social media URLs
    ]
  }
}
```

**Action Items:**
- [ ] Replace all placeholder text with your information
- [ ] Update social media links (LinkedIn, GitHub, Twitter, Medium)
- [ ] Add your profile photo to `public/images/yourphoto.jpg`
- [ ] Add your resume PDF to `public/resume.pdf`

---

### 2. Technology Stack (`techStack`)

Customize the technologies you work with:

```json
{
  "techStack": {
    "categories": [
      {
        "name": "Frontend",  // Or Backend, Database, etc.
        "technologies": [
          {
            "name": "React",
            "icon": "⚛️",  // Use emoji or icon
            "proficiency": 95  // 0-100
          }
        ]
      }
    ]
  }
}
```

**Tips:**
- Group technologies by category (Frontend, Backend, Database, DevOps, etc.)
- Use emojis for icons (easily searchable online)
- Set realistic proficiency levels (be honest!)
- Include 4-6 technologies per category

---

### 3. Work Experience & Education (`resume`)

Update your professional background:

```json
{
  "resume": {
    "skillmessage": "Brief summary of your expertise",
    "education": [
      {
        "school": "University Name",
        "degree": "Degree Type in Major",
        "graduated": "Month Year",
        "description": "GPA, honors, specialization"
      }
    ],
    "work": [
      {
        "company": "Company Name",
        "title": "Your Title",
        "years": "Start Date - End Date (or Present)",
        "description": "Key achievements with metrics"
      }
    ],
    "skills": [
      {
        "name": "Skill Name",
        "level": "95%"  // Displayed as progress bar
      }
    ]
  }
}
```

**Best Practices:**
- List work experience in reverse chronological order (most recent first)
- Include metrics and impact in descriptions (e.g., "Reduced latency by 60%")
- Focus on achievements, not just responsibilities
- Keep descriptions concise but impactful

---

### 4. Projects (`portfolio`)

Showcase your best work with detailed case studies:

```json
{
  "portfolio": {
    "projects": [
      {
        "title": "Project Name",
        "category": "Project Type",
        "image": "project-image.jpg",  // Place in public/images/portfolio/
        "url": "https://project-url.com",
        "description": "Detailed description with technical challenges",
        "technologies": ["React", "Node.js", "AWS"],
        "github": "https://github.com/username/repo",
        "live": "https://live-demo.com",  // null if no demo
        "metrics": {
          "performance": "99.99% uptime",
          "scale": "100K requests/day",
          "impact": "Reduced costs by 40%"
        }
      }
    ]
  }
}
```

**Tips:**
- Choose 3-5 most impressive projects
- Include both personal and professional work
- Add measurable metrics (users, performance, scale, impact)
- Link to GitHub repos and live demos when possible
- Use high-quality project screenshots

---

### 5. Achievements (`achievements`)

Highlight your professional accomplishments:

```json
{
  "achievements": {
    "items": [
      {
        "title": "Achievement Title",
        "description": "What you accomplished",
        "icon": "🌟",  // Emoji icon
        "stats": "Quantifiable metric",
        "link": "https://link-to-proof.com"  // null if no link
      }
    ]
  }
}
```

**Ideas:**
- Open source contributions
- Conference talks/presentations
- Certifications (AWS, Google Cloud, etc.)
- Published articles/blog posts
- Hackathon wins
- Patents or research publications

---

### 6. Leadership & Impact (`leadership`)

Demonstrate your leadership experience:

```json
{
  "leadership": {
    "items": [
      {
        "title": "Leadership Activity",
        "description": "What you did and why it mattered",
        "icon": "👥",
        "impact": "Measurable outcome"
      }
    ]
  }
}
```

**Examples:**
- Mentoring engineers
- Leading architecture decisions
- Improving development processes
- Cross-functional collaboration
- Hiring and interviewing
- Performance optimization initiatives

---

### 7. Technical Blog (`blog`)

Feature your best articles:

```json
{
  "blog": {
    "posts": [
      {
        "title": "Article Title",
        "excerpt": "Brief description",
        "date": "Month Year",
        "readTime": "X min read",
        "url": "https://article-url.com",
        "tags": ["Tag1", "Tag2", "Tag3"]
      }
    ]
  }
}
```

**Best Practices:**
- Include your 3-4 most popular articles
- Add read time estimates
- Use descriptive tags
- Link to Medium, Dev.to, or personal blog

---

### 8. Testimonials (`testimonials`)

Add recommendations:

```json
{
  "testimonials": {
    "testimonials": [
      {
        "text": "The testimonial quote",
        "user": "Name, Title/Company"
      }
    ]
  }
}
```

**Sources:**
- LinkedIn recommendations
- Peer feedback
- Manager reviews
- Client testimonials

---

## SEO Optimization

Update meta tags in `public/index.html`:

```html
<meta name="description" content="Your custom description">
<meta name="keywords" content="your, relevant, keywords">
<meta name="author" content="Your Name">

<!-- Update Open Graph tags -->
<meta property="og:title" content="Your Name | Senior Software Engineer">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yoursite.com/og-image.jpg">

<!-- Update Twitter tags -->
<meta property="twitter:title" content="Your Name | Senior Software Engineer">
```

**Action Items:**
- [ ] Update all meta descriptions
- [ ] Add your actual website URL
- [ ] Create and add Open Graph image (1200x630px recommended)
- [ ] Update the page title

---

## Features Included

### ✅ Dark/Light Mode
- Toggle button in top-right corner
- Persists user preference in localStorage
- Accessible with keyboard navigation

### ✅ Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly navigation

### ✅ Smooth Animations
- Fade-in animations on scroll
- Hover effects on interactive elements
- Respects user's motion preferences

### ✅ Performance Optimized
- Lazy loading images
- Minimal dependencies
- Fast load times

### ✅ SEO Ready
- Semantic HTML
- Meta tags for social sharing
- Optimized for search engines

### ✅ Accessible
- ARIA labels
- Keyboard navigation
- Screen reader friendly

---

## Deployment

### Deploy to Netlify

1. Build your project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repo for auto-deployment

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Install: `npm install gh-pages --save-dev`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

---

## Customization Tips

### Change Colors

Edit the primary color in `public/css/custom.css`:

```css
/* Find and replace #11ABB0 with your brand color */
```

### Add Google Analytics

Uncomment and update in `src/App.js`:

```javascript
ReactGA.initialize('UA-XXXXXXXXX-X');
ReactGA.pageview(window.location.pathname);
```

### Add More Sections

1. Create a new component in `src/Components/`
2. Import it in `src/App.js`
3. Add data to `resumeData.json`
4. Update navigation in `Header.js`

---

## Need Help?

If you run into issues:

1. Check that `resumeData.json` is valid JSON (use JSONLint.com)
2. Ensure all image paths are correct
3. Clear browser cache and restart dev server
4. Check browser console for errors

---

## Checklist Before Going Live

- [ ] All personal information updated
- [ ] Resume PDF added
- [ ] Profile photo added
- [ ] All project images added
- [ ] Social media links working
- [ ] All external links tested
- [ ] SEO meta tags updated
- [ ] Mobile responsiveness tested
- [ ] Dark mode tested
- [ ] All sections reviewed for typos
- [ ] Analytics configured (optional)
- [ ] Custom domain configured (optional)

---

## License

This portfolio template is free to use and customize for your personal portfolio.

---

**Good luck with your job search! 🚀**
