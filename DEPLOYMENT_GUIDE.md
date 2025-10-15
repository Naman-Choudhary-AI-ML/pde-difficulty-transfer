# 🚀 Deployment Guide for PDE Difficulty Transfer Website

This guide will help you deploy your research website to GitHub Pages in just a few minutes.

## ✅ What's Already Done

- ✅ Website fully built with all sections
- ✅ CMU branding and colors applied
- ✅ Responsive design for all devices
- ✅ All key figures from paper included
- ✅ Interactive features (smooth scroll, copy BibTeX)
- ✅ Git repository initialized with initial commit
- ✅ All files staged and committed

## 📋 Deployment Steps

### Step 1: Create GitHub Repository

1. Go to: **https://github.com/new**

2. Fill in the repository details:
   - **Repository name:** `pde-difficulty-transfer`
   - **Description:** `Website for Pre-Generating Multi-Difficulty PDE Data For Few-Shot Neural PDE Solvers`
   - **Visibility:** **Public** (required for free GitHub Pages)
   - **Important:** Do NOT check any of these boxes:
     - ❌ Add a README file
     - ❌ Add .gitignore
     - ❌ Choose a license

3. Click **"Create repository"**

### Step 2: Push to GitHub

Open Git Bash or terminal in the `pde-difficulty-transfer` directory and run:

```bash
# Add GitHub remote
git remote add origin https://github.com/Naman-Choudhary-AI-ML/pde-difficulty-transfer.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

You may be prompted for GitHub credentials. Use your GitHub username and a **Personal Access Token** (not password).

### Step 3: Enable GitHub Pages

1. Go to your repository: **https://github.com/Naman-Choudhary-AI-ML/pde-difficulty-transfer**

2. Click **"Settings"** (top right)

3. In the left sidebar, click **"Pages"**

4. Under "Build and deployment":
   - **Source:** Select **"Deploy from a branch"**
   - **Branch:** Select **"main"**
   - **Folder:** Select **"/ (root)"**

5. Click **"Save"**

6. Wait 1-2 minutes for GitHub Pages to build and deploy

7. Your site will be live at: **https://naman-choudhary-ai-ml.github.io/pde-difficulty-transfer/**

### Step 4: Verify Deployment

1. Visit: https://naman-choudhary-ai-ml.github.io/pde-difficulty-transfer/

2. Check that:
   - All sections load correctly
   - Images display properly
   - Navigation works (click on nav links)
   - BibTeX copy button works
   - Links to GitHub repo work
   - Responsive design works (try resizing browser or checking on mobile)

## 🔧 Troubleshooting

### Issue: GitHub asks for credentials

**Solution:** Use a Personal Access Token instead of your password

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name like "Website Deployment"
4. Check the "repo" scope
5. Click "Generate token"
6. Copy the token and use it as your password when pushing

### Issue: Images not loading

**Solution:** Images with PDF extension might not display in browsers. GitHub Pages handles PDFs correctly when referenced via `<img>` tags, but browsers will try to render them. This is expected behavior.

### Issue: Site not updating after push

**Solution:** GitHub Pages caching

1. Go to repository → Actions tab
2. Check if the "pages build and deployment" workflow succeeded
3. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
4. Wait 2-3 minutes and try again

### Issue: 404 error on GitHub Pages

**Solution:** Ensure GitHub Pages is enabled

1. Go to repository Settings → Pages
2. Verify "main" branch and "/ (root)" folder are selected
3. Click "Save" again
4. Wait 2 minutes

## 📝 Making Updates

To update the website in the future:

```bash
# Navigate to directory
cd D:/Research_ICLR/pde-difficulty-transfer

# Make your changes to files...

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Update: [describe your changes]"

# Push to GitHub
git push
```

GitHub Pages will automatically rebuild and deploy within 1-2 minutes.

## 🎨 Customization Tips

### Update Content

- **Abstract/Results:** Edit `index.html` sections
- **Styling:** Modify `assets/css/style.css`
- **Functionality:** Update `assets/js/main.js`

### Add More Images

```bash
# Copy new image to assets/images/
cp /path/to/new/image.png assets/images/

# Update index.html to reference it
# <img src="assets/images/new/image.png" alt="Description">

# Commit and push
git add assets/images/new_image.png index.html
git commit -m "Add new figure: [description]"
git push
```

### Update Paper Link (When Available)

Edit `index.html` line ~104:

```html
<!-- Change from: -->
<a href="#" class="btn btn-primary disabled" title="Coming soon">

<!-- To: -->
<a href="https://arxiv.org/abs/XXXXX" class="btn btn-primary" target="_blank">
```

### Update Dataset Link (When Released)

Edit `index.html` line ~118:

```html
<!-- Change from: -->
<a href="#dataset" class="btn btn-secondary">

<!-- To: -->
<a href="https://your-dataset-url.com" class="btn btn-secondary" target="_blank">
```

## 📧 Support

If you encounter issues:

1. Check the GitHub Pages documentation: https://docs.github.com/pages
2. Verify all files are committed: `git status`
3. Check GitHub Actions logs in your repository

## 🎉 You're Done!

Once deployed, share your website:
- Twitter/X: "Check out our new paper on neural PDE solvers! 🧠⚡ [URL]"
- LinkedIn: Post with the website link
- Email to collaborators
- Add to your personal website
- Include in paper acknowledgments/footnotes

---

**Website URL:** https://naman-choudhary-ai-ml.github.io/pde-difficulty-transfer/

**Repository:** https://github.com/Naman-Choudhary-AI-ML/pde-difficulty-transfer

---

*Created with Claude Code by Anthropic*
