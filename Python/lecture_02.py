# String Methods -->

# name = "Shrey" 
# print(name[0])
# print(name[-1])
# print(len(name))
# print(name[len(name) - 1])

# str = "I am learning python"

# print(str.upper())
# print(str.lower())
# print(str.capitalize())
# print(str.title())
# print(str.replace("Python", "Django")) **
# print("   Shrey.   ".strip())
# print(str.split()) **
# print(str.split("a"))

# strList = str.split()
# print(strList)
# ['I', 'am', 'learning', 'python']

# print("_".join(strList)) **

# print(str.startswith("I"))
# print(str.endswith("Python"))
# print(str.count("a"))
# print(str.find("z")) -- returns -1 if not available
# print(str.index("z")) -- throws error if not available

# str_2 = "JECRC Foundation"
# print(str_2[3:7:1])

# print(str_2[::-1]) - to reverse a string


# LIST Methods -->
# myList = [1,2,3,4,5,5,1]
# anotherList = [10,20,30,40]
# Allow duplicates
# Mutable
# Ordered

# print(myList) -- prints complete list
# print(myList[0]) -- prints the element present at that index
# myList[0] = 10 -- changes the value
# print(myList)

# for i in myList: -- prints every elements of the list
#     print(i)

# myList.append(6) -- adds an element at the end
# myList.insert(3,7) -- adds value at the specific index (index, value)
# print(myList + anotherList) -- does not changes the list
# myList.extend(anotherList) -- changes the list
# myList.remove(4) -- removes the given value from the list
# myList.sort() -- sorts in ascensing format
# myList.sort(reverse=True) -- sorts in descending order
# myList.reverse() -- reverses the list
# myList.pop() -- removes the last value of the list
# myList.pop(4) -- removes the value by the given index
# print(myList.count(5)) -- counts the occurence of the given value
# print(myList.index(3)) -- tells the index value at which the element is present
# list_2 = myList.copy() -- creates the copy of the list
# myList.clear() 
# print(myList)

# Q : Take n values from the user and find the sum, min, max of the values. Also show the list in ascending order
# n = int(input("Enter number of values to enter : "))
# myList = []
# sum = 0
i = 1
# Create a list
# while(i<=n):
#     myList.append(int(input("Enter the value")))
#     i += 1
# Sum of the given list
# for i in myList:
#     sum += i
# myList.sort()
# print(myList)
# print(f"Min : {myList[0]}")
# print(f"Max : {myList[-1]}")
# print(f"Sum : {sum}")

# Dictionary -->

# How to create
obj = {
    "name" : "Shrey",
    "university" : "LPU",
    "year" : 2026
}
# How to add/update
# obj["phone"] = 9876543210

# How to access
# print(obj["university"])

# get()
# print(obj.get("nameeeee"))

# deletedValue = obj.pop("name") -- deletes the key (Can store the deleted value)
# print(deletedValue)

# del obj["name"]
# print(obj)

# print(obj.keys()) -- to get keys

# print(obj.values()) -- to get values

# print(obj.items()) -- to get individual key values pairs

# for keys in obj: -- to iterate through keys
#     print(keys)

# for values in obj.values(): -- to iterate through values
#     print(values)

# for key,value in obj.items(): -- to iterate through both keys and values
#     print(key, value)

# Nested Dictionary
# studentData = {
#     1: {"name" : "mohit", "year" : 2026},
#     2: {"name" : "rohit", "year" : 2025}
# }

# Check exist
# print("name" in obj)

# Length
# print(len(obj))

# Copy
# newObj = obj.copy()
# print(newObj)

# Clear
# obj.clear()
# print(obj)