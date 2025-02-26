#from googlesearch import search
#query=input("What to search: ")

#for url in search(query):
#	print(url)

import re

# Input string
text = "The war is over, but the warld remains chaotic."

# Dictionary of replacements
replacements = {
    r"\bwar\b": "battle",  # Replace "war" as a whole word
    r"\bwarld\b": "world"  # Replace "warld" as a whole word
}

# Perform replacements
for pattern, replacement in replacements.items():
    text = re.sub(pattern, replacement, text)

print(text)