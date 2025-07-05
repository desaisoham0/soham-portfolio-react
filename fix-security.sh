#!/bin/bash

echo "🔧 Dependency Security Fix Script"
echo "================================"
echo ""

echo "📊 Current security status:"
npm audit || true

echo ""
echo "🔍 Checking what fixes are available:"
npm audit fix --dry-run || true

echo ""
echo "💡 Options to fix security issues:"
echo ""
echo "1. Safe fixes only (recommended):"
echo "   npm audit fix"
echo ""
echo "2. Force fixes (may include breaking changes):"
echo "   npm audit fix --force"
echo ""
echo "3. Manual fixes:"
echo "   - Update specific packages: npm update [package-name]"
echo "   - Update all packages: npm update"
echo ""

read -p "Do you want to run safe fixes now? (y/n): " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🔧 Running safe fixes..."
    npm audit fix
    echo ""
    echo "✅ Safe fixes applied. Checking status..."
    npm audit || true
else
    echo "ℹ️ No fixes applied. You can run them manually later."
fi

echo ""
echo "📋 Current package versions:"
npm list --depth=0 || true

echo ""
echo "💡 Tip: The esbuild vulnerability is in development dependencies"
echo "    and doesn't affect your production build security."
echo "    Consider updating to Vite 7 when you're ready for breaking changes."
