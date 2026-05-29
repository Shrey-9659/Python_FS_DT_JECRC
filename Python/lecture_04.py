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

# Sample data in data.txt
# John, 85
# Sam, 65
# Alice, 92
# Bob, 70

def filter_high_scores(input_file, output_file):
    try:
        with open(input_file, "r") as file:
            lines = file.readlines()

        with open(output_file, "w") as passed_file:

            for line in lines:
                line = line.strip()
                name, score = line.split(",")
                score = int(score.strip())

                if score >= 70:
                    passed_file.write(f"{name.strip()}, {score}\n")

        print("Filtered data written successfully!")

    except FileNotFoundError:
        print("Input file not found.")

    except Exception as e:
        print("Error:", e)


filter_high_scores("Demo.txt", "passed.txt")