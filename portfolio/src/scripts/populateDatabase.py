import firebase_admin
import json
from firebase_admin import credentials
from firebase_admin import firestore

# Use the service account
cred = credentials.Certificate('portfolio/src/scripts/adminSdk.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

# Path to your JSON file
json_file_path = 'portfolio/src/scripts/projectData.json'

# Function to upload data to Firestore
def upload_data_to_firestore(collection_name, json_file_path):
    # Open and read the JSON file
    with open(json_file_path, 'r') as file:
        data = json.load(file)

        # Count the number of items and print
        num_items = len(data)
        print(f"Uploading {num_items} items to Firestore...")

        for index, document in enumerate(data):
            # Add an ID field with the index as the ID
            document['id'] = index
            db.collection(collection_name).document(str(index)).set(document)
            print(f'Uploaded document with generated ID: {index}')

# Upload data to Firestore
upload_data_to_firestore('Project', json_file_path)  # Replace 'Project' with your actual collection name if needed
