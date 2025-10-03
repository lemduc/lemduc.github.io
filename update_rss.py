#!/usr/bin/env python3
"""
Simple script to help manage RSS feed updates for the academic website.
This script can be used to add new updates to the _data/updates.yml file.
"""

import yaml
import datetime
from pathlib import Path

def add_update(title, content, update_type="general", link=""):
    """Add a new update to the updates.yml file."""
    
    # Load existing updates
    updates_file = Path("_data/updates.yml")
    if updates_file.exists():
        with open(updates_file, 'r') as f:
            updates = yaml.safe_load(f) or []
    else:
        updates = []
    
    # Create new update
    new_update = {
        "title": title,
        "content": content,
        "date": datetime.date.today().strftime("%Y-%m-%d"),
        "type": update_type,
        "link": link
    }
    
    # Add to beginning of list (most recent first)
    updates.insert(0, new_update)
    
    # Save back to file
    with open(updates_file, 'w') as f:
        yaml.dump(updates, f, default_flow_style=False, sort_keys=False)
    
    print(f"Added update: {title}")
    return new_update

def add_publication(title, authors, venue, date, pub_type="conference", pdf_link="", bibtex=""):
    """Add a new publication to the publications.yml file."""
    
    # Load existing publications
    pubs_file = Path("_data/publications.yml")
    if pubs_file.exists():
        with open(pubs_file, 'r') as f:
            publications = yaml.safe_load(f) or []
    else:
        publications = []
    
    # Create new publication
    new_pub = {
        "title": title,
        "authors": authors,
        "venue": venue,
        "date": date,
        "type": pub_type,
        "pdf": pdf_link,
        "bibtex": bibtex
    }
    
    # Add to beginning of list (most recent first)
    publications.insert(0, new_pub)
    
    # Save back to file
    with open(pubs_file, 'w') as f:
        yaml.dump(publications, f, default_flow_style=False, sort_keys=False)
    
    print(f"Added publication: {title}")
    return new_pub

if __name__ == "__main__":
    print("RSS Feed Update Manager")
    print("=======================")
    print("This script helps manage updates for your RSS feed.")
    print("\nExample usage:")
    print("python update_rss.py")
    print("\nYou can also use the functions directly:")
    print("add_update('New paper accepted!', 'Details about the paper...', 'publication')")
    print("add_publication('Paper Title', 'Author List', 'Conference Name', '2024-01-01')")

