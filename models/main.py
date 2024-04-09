import pandas as pd

# Read the CSV file into a pandas DataFrame
df = pd.read_csv('formatted_medical_dataset.csv')

# Print the first ten lines of the DataFrame
print(df.head(10))
