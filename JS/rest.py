from functools import reduce
def nummbers(x, y, *num, z):
    return reduce(lambda x, y: x + y, num)

# print(nummbers(1, 2, 3, 4, z = 5))

a, b, *lists = {"Name": "Niraj Khatiwada", "Age": 23, "Education": "Engineering"}
print(a, b,)    