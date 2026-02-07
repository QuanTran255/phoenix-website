# Hosting Guide for Phoenix Website

This guide provides multiple options for hosting your Phoenix website. Since this is a simple static HTML website, you have many easy and free hosting options available.

## Quick Start (Easiest Options)

### Option 1: GitHub Pages (Recommended)

GitHub Pages is a free hosting service that works perfectly for static websites like this one.

#### Steps:
1. Go to your repository on GitHub: `https://github.com/QuanTran255/phonex-website`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Under **Branch**, select `main` (or `master`) and `/root` folder
6. Click **Save**
7. Wait 1-2 minutes for deployment
8. Your site will be live at: `https://quantran255.github.io/phonex-website/`

**Note:** If you want a custom domain, you can configure it in the GitHub Pages settings.

### Option 2: Netlify

Netlify offers free hosting with automatic deployments from GitHub.

#### Steps:
1. Sign up at [netlify.com](https://www.netlify.com)
2. Click **Add new site** → **Import an existing project**
3. Connect your GitHub account
4. Select the `QuanTran255/phonex-website` repository
5. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/` (root directory)
6. Click **Deploy site**
7. Your site will be live at a URL like: `https://random-name.netlify.app`
8. You can customize the subdomain or add a custom domain in settings

### Option 3: Vercel

Vercel is another excellent free option with GitHub integration.

#### Steps:
1. Sign up at [vercel.com](https://vercel.com)
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Vercel will auto-detect it as a static site
5. Click **Deploy**
6. Your site will be live at: `https://phonex-website.vercel.app` (or similar)

### Option 4: Cloudflare Pages

Cloudflare Pages offers free hosting with excellent performance.

#### Steps:
1. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Click **Create a project**
3. Connect your GitHub account
4. Select the repository
5. Build settings:
   - Build command: (leave empty)
   - Build output directory: `/`
6. Click **Save and Deploy**
7. Your site will be live at: `https://phonex-website.pages.dev`

## Advanced Options

### Option 5: Custom Web Server

If you have your own web server or VPS, you can host it there.

#### Using Apache:
```bash
# Copy index.html to your web server directory
sudo cp index.html /var/www/html/

# Your site will be available at: http://your-domain.com/
```

#### Using Nginx:
```bash
# Copy index.html to your web server directory
sudo cp index.html /usr/share/nginx/html/

# Your site will be available at: http://your-domain.com/
```

### Option 6: Local Testing

Before deploying, you can test the website locally:

#### Using Python:
```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

#### Using Node.js:
```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server

# Then visit: http://localhost:8080
```

#### Using PHP:
```bash
php -S localhost:8000

# Then visit: http://localhost:8000
```

## Custom Domain Setup

Once your site is hosted on any of the platforms above, you can configure a custom domain:

1. Purchase a domain from a registrar (e.g., Namecheap, Google Domains, GoDaddy)
2. In your domain registrar's DNS settings, add records pointing to your hosting provider
3. Configure the custom domain in your hosting platform's settings

### Example DNS Records for GitHub Pages:
```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     quantran255.github.io
```

## SSL/HTTPS

All recommended hosting platforms (GitHub Pages, Netlify, Vercel, Cloudflare Pages) provide free SSL certificates automatically. Your site will be served over HTTPS without any additional configuration.

## Updating Your Website

To update your website after deployment:

1. Make changes to `index.html` locally
2. Commit and push to GitHub:
   ```bash
   git add index.html
   git commit -m "Update website content"
   git push
   ```
3. Your hosting platform will automatically redeploy (usually within 1-2 minutes)

## Performance Tips

Your website is already optimized as a single HTML file with inline CSS. However, here are some optional improvements:

1. **Add a favicon**: Create a `favicon.ico` file
2. **Enable caching**: Most hosting platforms do this automatically
3. **Add meta tags**: For better SEO and social media sharing
4. **Compress assets**: Consider minifying CSS if the file grows larger

## Troubleshooting

### Site not showing after deployment
- Wait 2-5 minutes for DNS propagation
- Check your hosting platform's deployment logs
- Ensure `index.html` is in the root directory

### Changes not appearing
- Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check if deployment completed successfully
- Verify you pushed to the correct branch

## Need Help?

If you encounter issues:
1. Check your hosting platform's documentation
2. Verify your repository settings
3. Check deployment logs for errors
4. Ensure `index.html` is committed to your repository

## Comparison of Hosting Options

| Platform | Setup Time | Free Tier | Custom Domain | Auto Deploy | SSL |
|----------|-----------|-----------|---------------|-------------|-----|
| GitHub Pages | 2 min | ✅ | ✅ | ✅ | ✅ |
| Netlify | 3 min | ✅ | ✅ | ✅ | ✅ |
| Vercel | 3 min | ✅ | ✅ | ✅ | ✅ |
| Cloudflare Pages | 3 min | ✅ | ✅ | ✅ | ✅ |

All options are excellent for this static website. GitHub Pages is recommended for its simplicity and direct integration with your repository.
