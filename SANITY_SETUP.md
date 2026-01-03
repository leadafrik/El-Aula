#!/bin/bash
# Sanity Studio Setup Script for El Aula
# This script initializes the Sanity Studio for content management

echo "Setting up Sanity Studio for El Aula..."
echo "Project ID: vlyb715a"
echo "Dataset: production"
echo ""

# Create studio directory
mkdir -p studio

# Copy sanity config to studio
cp sanity.config.ts studio/

echo "✅ Sanity configuration ready!"
echo ""
echo "Next steps:"
echo "1. cd studio"
echo "2. npm install"
echo "3. npm run dev"
echo "4. Open http://localhost:3333"
echo ""
echo "Then create documents for each schema in Sanity Studio:"
echo "  - Hero Section"
echo "  - Statistics"
echo "  - Why Choose"
echo "  - Programs"
echo "  - Resources"
echo "  - CTA Section"
echo "  - Subscribe"
echo "  - Footer"
echo "  - Navigation Bar"
