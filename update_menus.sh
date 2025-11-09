#!/bin/bash

# List of HTML files to update (excluding index.html, community.html, complaints.html which are already updated)
FILES=(
    "disease-info.html"
    "hospital.html"
    "caregivers.html"
    "rehab.html"
    "insurance.html"
    "support.html"
    "supplies.html"
    "medical.html"
    "emergency.html"
    "forum.html"
    "papers.html"
    "caregiver-videos.html"
    "contact-info.html"
    "funeral-services.html"
    "organ-donation.html"
    "patient-rights.html"
)

cd /home/user/webapp

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "Updating $file..."
        
        # Remove insurance, support, supplies, complaints lines from desktop menu
        sed -i '/<a href="insurance\.html" class="menu-link/d' "$file"
        sed -i '/<a href="support\.html" class="menu-link/d' "$file"
        sed -i '/<a href="supplies\.html" class="menu-link/d' "$file"
        sed -i '/<a href="complaints\.html" class="menu-link/d' "$file"
        
        echo "  - Removed menu items from $file"
    fi
done

echo "Menu updates complete!"
