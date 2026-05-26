# ---- FILE HANDLING ----

# file = open("Task1.txt", "r")

# data = file.read()

# print(data)

# file.close()

# try:
#     file = open("Task11111.txt", "r")
#     data = file.read()
#     print(data)
# except:
#     print("Unable to read file")
# finally:
#     file.close()
# try:
#     file = open("Task11111.txt", "r")
#     data = file.read()
#     print(data)
# except NameError:
#     print("Unable to read file")
# finally:
#     print("Error occurred using reading the file")

# Writing
# file = open("Demo.txt", "w")

# file.write("JECRC Foundation")

# file.close()

# Append
# file = open("Demo.txt", "a")

# file.write("\nJECRC Foundation - 3")

# file.close()

# ReadLine
# file = open("Demo.txt", "r")

# # print(file.readline())
# # print(file.readline())

# print(file.readlines())

# with open() as demoFile:
#     print(demoFile.read())

# Scenario: You have a text file named data.txt that contains a list of names and scores, with each line formatted as Name, Score.

# Task: Write a Python function named filter_high_scores(input_file, output_file) that reads data.txt, filters out anyone with a score below 70, and writes the passing students' names and scores to a new file named passed.txt.