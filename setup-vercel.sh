#!/bin/bash

# Vercel Setup Script
# This script helps you set up Vercel integration for GitHub Actions

echo "🚀 Setting up Vercel integration for GitHub Actions"
echo "=================================================="
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed. Installing..."
    npm install -g vercel
    echo "✅ Vercel CLI installed successfully"
else
    echo "✅ Vercel CLI is already installed"
fi

echo ""
echo "📋 Follow these steps to complete the setup:"
echo ""
echo "1. Link your project to Vercel:"
echo "   vercel link"
echo ""
echo "2. Get your Vercel token:"
echo "   - Go to https://vercel.com/account/tokens"
echo "   - Create a new token"
echo "   - Copy the token"
echo ""
echo "3. Add these secrets to your GitHub repository:"
echo "   - Go to your GitHub repository"
echo "   - Navigate to Settings > Secrets and variables > Actions"
echo "   - Add the following secrets:"
echo ""
echo "   VERCEL_TOKEN: [Your Vercel token from step 2]"
echo ""
echo "4. Get your Vercel Organization and Project IDs:"
echo "   After running 'vercel link', you'll find these in:"
echo "   - .vercel/project.json (contains projectId and orgId)"
echo ""
echo "5. Add these additional secrets to GitHub:"
echo "   VERCEL_ORG_ID: [Your organization ID]"
echo "   VERCEL_PROJECT_ID: [Your project ID]"
echo ""
echo "6. Test your setup by running:"
echo "   vercel --prod"
echo ""
echo "🎉 Once completed, your GitHub Actions will automatically deploy to Vercel!"
echo ""
echo "For more help, visit: https://vercel.com/docs/concepts/git/vercel-for-github"
