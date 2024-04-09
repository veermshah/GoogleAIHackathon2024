import json
import csv

# Load JSON data from the file
with open('models/medical_chat_data.json', 'r') as json_file:
    data = json.load(json_file)

# Extract human sentences and AI responses from each conversation
conversations = []
for entry in data:
    input_text = entry['input']
    fragments = input_text.split('[|')
    human_sentences = [fragment.split(']')[1].strip() for fragment in fragments if fragment.startswith('Human|]')]
    ai_responses = [fragment.split(']')[1].strip() for fragment in fragments if fragment.startswith('AI|]')]
    conversations.extend(list(zip(human_sentences, ai_responses)))

# Write the extracted data to a CSV file
with open('models/dataset.csv', 'w', newline='', encoding='utf-8') as csv_file:
    writer = csv.writer(csv_file)
    # Write the header
    writer.writerow(['human_sentence', 'ai_response'])
    # Write the rows
    writer.writerows(conversations)

print("CSV file created successfully.")
