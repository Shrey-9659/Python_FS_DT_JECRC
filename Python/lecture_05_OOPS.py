# class Room:
#     color = "white"
#     fan = 4

#     def showRoom(self):
#         print("Room has been created")

# room1 = room()
# print(room1.color)
# room1.color = "black"
# print(room1.color)

# room2 = room()
# print(room2.color)


# room1.showRoom()

# class Room:
#     def __init__(self, color, room):
#         self.color = color
#         self.room = room

#     def printHello():
#         print("Hello")

#     def showRoom(self):
#         print(f"{self.color} - {self.room}")

# room1 = Room("Black", 4)

# room1.showRoom()
# room1.printHello()


# POLYMORPHISM : Many Forms, different class can have same functions with different data and different behavious


# class BE6:
#     def wheel(self):
#         print("It's a RWD car")


# class Thar:
#     def wheel(self):
#         print("It's 4X4")
#     def wheel(self, name = "qwert"):
#         print("It's a RWD car")


# car1 = Thar()
# car2 = Thar()

# car1.wheel()
# car2.wheel("H")


# Create a class Payment with method pay().

# Create:

# UPI
# CreditCard
# Cash

# Each should display different payment processing messages.


# ----- INHERITANCE -----

# Single Level -- When properties of parent class to inherited to child class
# class Parent:
#     def func1(self):
#         pass

# class Child1(Parent):
#     def func2(self):
#         pass

# Hierarical Level - When properties of parent class is inherited by multiple child class
# class Parent:
#     def func1(self):
#         pass

# class Child1(Parent):
#     def func2(self):
#         pass
# class Child2(Parent):
#     def func3(self):
#         pass

# Multi Level - derived class inherits from a base class, which itself is derived from another class
# class GrandParent:
#     def func1(self):
#         pass

# class Parent(GrandParent):
#     def func2(self):
#         pass
# class Child(Parent):
#     def func3(self):
#         pass

# Multiple -- When child class inherits from multilple parent class
# class Parent1:
#     def func1(self):
#         pass

# class Parent2:
#     def func2(self):
#         pass
# class Child(Parent1, Parent2):
#     def func3(self):
#         pass



# class Vehicle:
#     def __init__(self, name, brand):
#         self.name = name
#         self.brand = brand

# class Car(Vehicle):
#     def showData(self):
#         print(f"{self.name} - {self.brand}")

# class Bike(Vehicle):
#     def showData(self):
#         print(f"{self.name} - {self.brand}")

# BE6 = Car("BE6", "Mahindra")
# Pulsar = Bike("Pulsar", "Bajaj")

# BE6.showData()
# Pulsar.showData()


# class Car():
#     def __init__(self, name, maxspeed, price):
#         self.name = name
#         self.maxspeed = maxspeed
#         self.price = price

# class Computer():
#     def __init__(self, name, processor = None, price = 0):
#         self.name = name
#         self.processor = processor
#         self.price = price
        
# class ABC(Car, Computer):
#     def showData(self):
#         print(f"{self.name} - {self.maxspeed} - {self.price} - {self.name} - {self.processor} - {self.price}")

# a1 = ABC("thar", 100, 1000, )

# a1.showData()


# Create a class Person with:
# name
# age

# Create a child class Student with:
# roll_no

# Print all details.


# class Person:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age


# class Student(Person):
#     def __init__(self, name, age, roll_no):
#         Person.__init__(self, name, age)
#         self.roll_no = roll_no

#     def display(self):
#         print("Name:", self.name)
#         print("Age:", self.age)
#         print("Roll No:", self.roll_no)


# s1 = Student("Shrey", 26, 101)

# s1.display()

# ----- ENCAPSULATION -----
# Wrapping data and methods together inside a class and giving
# controlled access of the data
# - Data is protected and access is controlled
# Without encapsulation:
# - Anyone can change data
# - Data may become invalid
# - Security problems occur

# To perform encapsulation we have 3 types of access modifiers.
# - Public - Can be accessed anywhere
# - Protected - Internal Use
# - Private - Restricted access


# Getters and Setters
# - Used to safely access data and safely modify data
# - Getters used to read data
# - Setters used to modify data


# ----- ABSTRACTION -----
# - Hides implementations
# - Focuses on : users should know what to do, user does not know how
# it happens internally
# - uses abc and abstract method

