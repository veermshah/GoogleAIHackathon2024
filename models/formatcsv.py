import csv

# Function to extract human questions and AI responses from the input column
def extract_dialogue(input_text):
    dialogue = input_text.split("[|Human|]")[1:]  # Split by "|Human|" tag and remove the first empty element
    human_questions = [dialogue[i].strip() for i in range(0, len(dialogue), 2)]  # Extract human questions
    ai_responses = [dialogue[i].strip() for i in range(1, len(dialogue), 2)]  # Extract AI responses
    return human_questions, ai_responses

# Read the original CSV file and create a new CSV file with human questions and AI responses
with open('medical_chat_data.csv', 'r', newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    
    # Create a new CSV file for writing
    with open('formatted_medical_dataset.csv', 'w', newline='', encoding='utf-8') as new_csvfile:
        fieldnames = ['human_question', 'ai_response']
        writer = csv.DictWriter(new_csvfile, fieldnames=fieldnames)
        writer.writeheader()

        # Extract dialogue and write to the new CSV file
        for row in reader:
            human_questions, ai_responses = extract_dialogue(row['input'])
            for human_question, ai_response in zip(human_questions, ai_responses):
                writer.writerow({'human_question': human_question, 'ai_response': ai_response})