import os
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

def csv_to_bar_chart(csv_file, x_column, y_column, save_path):
    # Read CSV file into a DataFrame
    data = pd.read_csv(csv_file, delimiter=";")
    
    # Check if specified columns exist in the DataFrame
    if x_column not in data.columns or y_column not in data.columns:
        print(f"Error: Column '{x_column}' or '{y_column}' not found in {csv_file}")
        return

    grouped_data = data.groupby(['Name', 'Activty'])['Duration'].sum()
        
    grouped_data.unstack().plot(kind='bar', colormap='Set1', stacked=True)

    file_name = os.path.splitext(os.path.basename(csv_file))[0]

    plt.xlabel("Benutzer")
    plt.ylabel("Zeit in Stunden")
    plt.title(f"Zeiterfassung {file_name}")
    plt.xticks(rotation=0)
    plt.legend()
    plt.savefig(save_path, dpi=180)

def plot_all_csv_files_in_folder(folder_path, x_column, y_column, output_folder):
    # Create output folder if it does not exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    # Iterate over all files in the folder
    for file in os.listdir(folder_path):
        if file.endswith('.csv'):
            csv_file = os.path.join(folder_path, file)
            output_file = os.path.splitext(file)[0] + '.png'  # Output file name with .png extension
            save_path = os.path.join(output_folder, output_file)
            
            print(f"Plotting data from {csv_file} and saving to {save_path}...")
            csv_to_bar_chart(csv_file, x_column, y_column, save_path)
            print("\n")

# Example usage
folder_path = 'data'    # Replace 'csv_folder' with your folder path containing CSV files
output_folder = 'statistics' # Replace 'output_plots' with the folder where you want to save the plots
x_column = 'Name'                # Replace 'X' with the column name for x-axis
y_column = 'Duration'                # Replace 'Y' with the column name for y-axis

plot_all_csv_files_in_folder(folder_path, x_column, y_column, output_folder)

