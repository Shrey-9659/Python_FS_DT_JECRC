# integer - 1,2,3,-100
# float - 1.1, 1.2
# complex - a + ij
# string - "Something"
# list - [1,2,"Hello"]
# tuple - (1,2,"Hello")
# set - {1,2,3,4,4,5,5,5}
# frozenSet - {1,2,3,4,4,5,5,5}
# Boolean - True/False
# Dictionary - { "key" : "value"}

# type method - used to find the datatype.

# name = True
# print(type(name))

# used to take the value from the user
# value1 = input("Enter a value : ")

# Arithematic Operations :  + - * / % **

# Take two values from the user and print the sum on terminal

# value1 = int(input("Enter first value : "))
# value2 = int(input("Enter second value : "))


# print(value1 + value2)

# Comparison Operations : > < <= >= !=

# print(5>6)
# print(7<6)
# print(5>=5)
# print(5<=6)
# print(5!=6)

# Assignment Operations : = += -= 

# a = b -- putting the value of variable b in variable a
# a += b : a = a+b
# a -= b : a = a-b

# Logical Operators : and, or, not

# number = 15

# print(number > 10 and number < 20) -- true
# print(number > 15 and number < 20) -- false
# print(number > 15 or number < 20) -- true
# print(not(number > 15)) -- true

# Identity Operators : is, is not

# myList = [1,2,3,4,5]
# anotherList = myList
# list_2 = [1,2,3,4,5]

# print(myList is anotherList) -- true
# print(myList is list_2) -- false

# str = "Studying in JECRC Foundation"

# print("JECRC" in str) -- true


# Control Statements :
# 1 : Conditionals : if, else, elif, nested if

# age = int(input("Enter your age : "))

# if age <= 0:
#     print("Invalid Input")
# elif age>=18 and age<75:
#     license = int(input("Enter 1 if you have license else 0 : "))
#     if(license) :
#         print("Eligible to drive")
#     else:
#         print("Not eligible, reason : No license")
# else:
#     print("Not Eligible")

# Questions on conditionals
# Q1 : Take three values from the user, and print the 
# biggest value out of all
# Sample answer : a,b,c (considering b is biggest)
# OUTPUT : b is the biggest value out of a,b and c

# Q2 : Create a basic calculator by taking 2 values and the
# operation from the user


# 2 : Loops
# For Loop : 
# for i in range:
#     logic

# for i in range(6):
#     print(i)

# students = ["Rohit", "Rahul", "Vipul"]

# for student in students:
#     print(student)

# Questions on for loop
# Q1 : Print series of n natural numbers
# Q2 : Print the sum of n natural numbers
# Q3 : Print the value present at the nth position
# in a fibonaci series

# num = int(input("Enter a number : "))
# first = 0
# second = 1
# if(num == 0):
#     print(0)
# elif(num == 1):
#     print(1)
# else:
#     for i in range(3, num + 1):
#         third = first + second
#         first = second
#         second = third
#     print(second)


# 0,1,1,2,3,5,8,13,21


# while loop
# while condition:
    # logic
# number = 1

# while number%7!=0:
#     print(number)
#     number += 1