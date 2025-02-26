import csv
input_csv = "file name"   
output_csv = "output file name"

names = []
with open(input_csv, newline='', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        if row: 
            names.append(row[0]) 
names.sort()

with open(output_csv, mode="w", newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)
    for name in names:
        writer.writerow([name])

print(f"saved in {output_csv}")