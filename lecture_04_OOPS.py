class Admission:
    def __init__(self, name, course, fee):
        self.name = name
        self.course = course
        self.fee = fee

    def success(self):
        print(f"{self.name} has successfully taken admission for {self.course} course")

# Shrey = Admission()
# Shrey.info("Shrey", "CSE", 100)
# Shrey.success()
# Rohit = Admission("Rohit", "Mechanical", 200)
# Rohit.success()


class Vehicle:
    def __init__(self, brand, max_speed):
        self.brand = brand
        self.max_speed = max_speed


class Driver:
    def __init__(self, name):
        self.name = name
        self.current_car = None
        self.speed_limit = 0


    # 1. We pass the 'car_object' into the method
    def enter_car(self, car_object):
        # 2. We extract the data FROM the car_object using dot notation
        self.current_car = car_object.brand
        self.speed_limit = car_object.max_speed


    def drive(self):
        if self.current_car is None:
            print(f"{self.name} is walking because they have no car!")
        else:
            print(f"{self.name} is driving a {self.current_car} at {self.speed_limit} mph!")

# --- Testing the code ---
driver1 = Driver("Sarah")
sports_car = Vehicle("Ferrari", 200)

# Sarah enters the Ferrari
driver1.enter_car(sports_car)
driver1.drive()