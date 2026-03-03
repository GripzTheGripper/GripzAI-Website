# 🚀 Gripz AI Website - Complete Deployment Guide

**For first-time GitHub and Vercel users**

This guide will walk you through uploading your website to GitHub and deploying it to the internet. Follow each step carefully!

---

## 📋 What You'll Need

Before starting, make sure you have:
- ✅ Extracted the `gripz-website` folder to your computer
- ✅ Created a GitHub account (https://github.com)
- ✅ Installed Git on your computer
- ✅ A terminal/command prompt open

---

## Part 1: Install Git (Skip if already installed)

### Windows
1. Download from: https://git-scm.com/download/windows
2. Run the installer
3. Keep clicking "Next" with default settings
4. Click "Finish"

### Mac
1. Open Terminal (Cmd+Space, type "Terminal")
2. Type: `git --version` and press Enter
3. If prompted, click "Install" and follow instructions

### Linux (Ubuntu/Debian)
```bash
sudo apt-get update
sudo apt-get install git
```

**Verify Installation:**
```bash
git --version
```
You should see something like: `git version 2.x.x`

---

## Part 2: Configure Git (First Time Setup)

Open Terminal (Mac/Linux) or Git Bash (Windows) and run:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Replace with your actual name and email (use the same email as your GitHub account).

---

## Part 3: Upload to GitHub

### Step 1: Navigate to Your Project Folder

**Mac/Linux:**
```bash
cd ~/Downloads/gripz-website
```

**Windows (in Git Bash):**
```bash
cd /c/Users/YourUsername/Downloads/gripz-website
```

💡 **Tip:** You can drag the folder into Terminal to auto-fill the path!

### Step 2: Initialize Git Repository

Run these commands one by one:

```bash
# Initialize Git in this folder
git init

# Add all files to Git
git add .

# Create your first commit
git commit -m "Initial commit: Gripz AI website v1.0"
```

**What this does:**
- `git init` - Makes this folder a Git repository
- `git add .` - Stages all files for commit
- `git commit` - Saves a snapshot of your code

### Step 3: Create GitHub Repository

1. Go to https://github.com
2. Click the **"+"** icon (top right) → **"New repository"**
3. Fill in:
   - **Repository name:** `gripz-website`
   - **Description:** `Official website for Gripz AI - Smart handlebar grips`
   - **Visibility:** Choose Public or Private
   - **DO NOT** check "Initialize with README"
4. Click **"Create repository"**

### Step 4: Connect Local Code to GitHub

GitHub will show you commands. Use these instead (they're the same but with explanation):

```bash
# Tell Git where your GitHub repo is (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/gripz-website.git

# Rename your branch to 'main'
git branch -M main

# Upload your code to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username!

**If prompted for credentials:**
- Username: Your GitHub username
- Password: Use a Personal Access Token (not your password)
  - Get token at: https://github.com/settings/tokens
  - Click "Generate new token (classic)"
  - Give it a name, check "repo" scope, generate
  - Copy and paste when prompted for password

### Step 5: Verify Upload

1. Refresh your GitHub repository page
2. You should see all your files!
3. ✅ Your code is now on GitHub!

---

## Part 4: Deploy to Vercel

### Step 1: Create Vercel Account

1. Go to https://vercel.com
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub
5. ✅ You're now logged into Vercel!

### Step 2: Import Your Project

1. Click **"Add New..."** → **"Project"**
2. Find `gripz-website` in your repository list
3. Click **"Import"**

### Step 3: Configure & Deploy

1. **Project Name:** Leave as `gripz-website`
2. **Framework Preset:** Vercel should auto-detect "Next.js"
3. **Root Directory:** Leave as `./`
4. **Build Settings:** Leave all as default
5. Click **"Deploy"**

**Wait 2-3 minutes** while Vercel builds your site...

### Step 4: View Your Live Site!

Once deployment completes:
1. You'll see: 🎉 "Congratulations! Your project has been deployed"
2. Click the preview image or "Visit" button
3. Your website is now LIVE at: `https://gripz-website-xxxxx.vercel.app`

---

## Part 5: Connect Your Custom Domain (gripz.ai)

### Step 1: Add Domain in Vercel

1. In your Vercel project, go to **Settings** → **Domains**
2. Type `gripz.ai` in the input field
3. Click **"Add"**
4. Vercel will show you DNS records to add

### Step 2: Get DNS Values from Vercel

Vercel will show something like:

**For root domain (gripz.ai):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

**Keep this tab open!** You'll need these values.

### Step 3: Update DNS in Namecheap

1. Log into your **Namecheap account**
2. Go to **Domain List**
3. Click **"Manage"** next to gripz.ai
4. Click the **"Advanced DNS"** tab

### Step 4: Add DNS Records

**Add A Record:**
1. Click **"Add New Record"**
2. Type: Select **"A Record"**
3. Host: Enter `@`
4. Value: Enter `76.76.21.21`
5. TTL: Select **"Automatic"**
6. Click the **checkmark** to save

**Add CNAME Record:**
1. Click **"Add New Record"**
2. Type: Select **"CNAME Record"**
3. Host: Enter `www`
4. Value: Enter `cname.vercel-dns.com`
5. TTL: Select **"Automatic"**
6. Click the **checkmark** to save

**Remove conflicting records (if any):**
- If there's an existing Parking Page or URL Redirect, **delete it**
- We only want the A and CNAME records we just added

### Step 5: Verify Domain in Vercel

1. Go back to Vercel → Settings → Domains
2. Wait a few minutes (DNS can take up to 60 minutes to propagate)
3. Refresh the page
4. Once verified, you'll see a green checkmark ✅
5. Your site is now live at **https://gripz.ai**!

---

## Part 6: Making Updates Later

Whenever you want to update your website:

### Option A: Edit on GitHub (Simple Text Changes)

1. Go to your repository on GitHub
2. Navigate to the file (e.g., `app/page.js`)
3. Click the **pencil icon** to edit
4. Make your changes
5. Scroll down, add commit message
6. Click **"Commit changes"**
7. **Vercel automatically deploys** in 2-3 minutes!

### Option B: Edit Locally (Bigger Changes)

1. Open Terminal in your project folder
2. Make your changes in your code editor
3. Save all files
4. Run these commands:

```bash
# See what changed
git status

# Add all changes
git add .

# Commit with a message
git commit -m "Update: describe what you changed"

# Push to GitHub
git push
```

5. **Vercel automatically deploys** the changes!

---

## 🎉 You're Done!

Your website is now:
- ✅ Backed up on GitHub
- ✅ Live on the internet
- ✅ Accessible at gripz.ai
- ✅ Auto-deploys when you push changes
- ✅ Has SSL certificate (https)
- ✅ Distributed globally via CDN

---

## 🆘 Troubleshooting

### "Permission denied" when pushing to GitHub

**Solution:** You need a Personal Access Token
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name it "Gripz Website"
4. Check the "repo" checkbox
5. Click "Generate token"
6. Copy the token (you won't see it again!)
7. Use this token as your password when Git asks

### Domain not working after 60 minutes

**Check:**
1. Namecheap DNS records are correct
2. No conflicting records (parking page, URL redirect)
3. Use https://dnschecker.org to verify propagation
4. Try accessing in incognito/private browser

### Build fails on Vercel

**Check:**
1. All files uploaded correctly to GitHub
2. `package.json` is in root directory
3. Check build logs in Vercel for specific error
4. Verify Node.js version (should be 18+)

### Changes not showing up

**Solution:**
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Clear browser cache
3. Check in incognito window
4. Wait 2-3 minutes for Vercel deployment

---

## 📞 Need Help?

- **Email:** hello@gripz.ai
- **Vercel Docs:** https://vercel.com/docs
- **GitHub Docs:** https://docs.github.com

---

## 📚 Useful Commands Cheat Sheet

```bash
# Check Git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push

# Pull latest from GitHub
git pull

# See commit history
git log

# Create a new branch
git checkout -b feature-name

# Switch branches
git checkout main
```

---

**Congratulations!** 🎉 You've successfully deployed your first website!

Your site: **https://gripz.ai**
Your GitHub: **https://github.com/YOUR_USERNAME/gripz-website**
Your Vercel: **https://vercel.com/dashboard**
