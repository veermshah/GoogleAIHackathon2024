# This is just to convert the dataset to a CSV file for fine tuning the model
import pandas as pd

with open('medical_chat_data.json', encoding='utf-8') as inputfile:
    df = pd.read_json(inputfile)

df.to_csv('medical_chat_data.csv', encoding='utf-8', index=False)