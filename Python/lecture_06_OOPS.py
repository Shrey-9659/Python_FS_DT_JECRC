# -- Encapsulation --

class BankAccount:
    def __init__(self, name, accountNo, balance):
        self.name = name
        self._accountNo = accountNo
        self.__balance = balance

    def showBalance(self):
        print(f"Your balance is {self.__balance}")
    def updateBalance(self, newBalance):
        self.__balance = newBalance
        print(f"Balance added : {self.__balance}")
# _BankAccout__balace

# class AnotherAccout(BankAccount):
#     def printAccNo(self):
#         print(f"{self._accountNo} --")

# p1 = BankAccount("Shrey", 12345, 5000)
# p2 = AnotherAccout("Rohan", 1234567,1234567)
# print(p1.balance)
# p1.balance = 50000
# print(p1.balance)
# print(p1._accountNo)
# print(p2.printAccNo())
# private

# p1.__balance = 50000
# print(dir(p1))
# print(p1.__balance)
# print(p1._BankAccount__balance)

# p1 = BankAccount("Shrey", 12345, 5000)
# p1.showBalance()
# p1.updateBalance(7500)
# p1.showBalance()

from abc import ABC, abstractmethod

# Parent Class
class DataBaseImp(ABC):
    @abstractmethod
    def security(self):
        print("Hello World")

class MobileDev(DataBaseImp):
    def views(self):
        print("This is views from Mobile dev")
    def security(self):
        print("Security Implemented")

abhi = MobileDev()
abhi.views()
abhi.security()