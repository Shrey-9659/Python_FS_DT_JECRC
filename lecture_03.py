# SETS -->

# How to create
mySet = {1,2,3,4,5}
anotherSet = {4,5,6,7,8}
set = {1,2}

# Print
# print(mySet)

# Add one value
# mySet.add(6)
# mySet.add(5)

# Update multiple values
# mySet.update({5,6,7,8,9})

# Remove -- gives error
# mySet.remove(10)

# Discard -- doesn't throw any error
# mySet.discard(10)

# pop
# mySet.pop()

# clear
# mySet.clear()

# copy
# newSet = mySet.copy()
# print(newSet)

# union |
# print(mySet.union(anotherSet))
# print(mySet | anotherSet)

# intersection &
# print(mySet.intersection(anotherSet))
# print(mySet & anotherSet)

# difference -
# print(mySet.difference(anotherSet))
# print(mySet - anotherSet)

# issubset
# print(set.issubset(mySet))

# issuperset
# print(mySet.issuperset(set))

# print(mySet)


# ----- FUNCTIONS -----

# How to create a function
# def numberCall():
#     print(1)
#     print(2)
#     print(3)
#     print(4)
#     print(5)

# numberCall() -- function execution
# numberCall -- function reference

# def sayMyName(name): -- name is parameter
#     print(name)

# sayMyName("Shrey") -- Shrey is argument
# sayMyName("Khushi")

# def addValue(num1, num2):
#     print(num1 + num2)

# addValue(5,6)
# addValue(6,6)


# def addValue(num1=0, num2=5):
#     print("One")
#     return num1 + num2
#     print("Two")

# sumvalue = addValue(6,4)

# print(sumvalue)


# QUESTIONS ON FUNCTIONS
# Q1. Print a multiplication table
# Q2. Reverse a number using function
# Q3. Check if the number is Armstrong number.
# Return Yes if it is, else return not


# def armstrongNumber(input):
#     checkInput = input
#     AN = 0
#     power = len(str(input))
#     while input > 0:
#         rem = input % 10
#         singleDigit = rem ** power
#         AN = AN + singleDigit
#         input = input // 10
#     if(checkInput == AN): return "Yes"
#     else: return "No"

# print(armstrongNumber(12))
# print(armstrongNumber(370))


# EXCEPTION HANDLING

try:
    number = 10%2
    if number == 0:
        raise Exception("Number is zero")
    print(number)
except ValueError:
    print("Enter valid number")
except ZeroDivisionError as e:
    print(f"Cannot divide by zero : {e}")
except Exception as e:
    print(f"error : {e}")
else:
    print("Try executed successfully")
finally:
    print("M hamesha run karunga")

# ZeroDivisionError
# ValueError

# Q1 : ATM machine
# Balance : 2000
# Withdrawl is more than balance throw error "-----"