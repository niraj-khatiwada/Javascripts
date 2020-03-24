from functools import reduce
def nummbers(x, y, *num, z):
    return reduce(lambda x, y: x + y, num)

# print(nummbers(1, 2, 3, 4, z = 5))

a, b, *lists, z = [1, 2, 3, 4, 5]
print(a, b, lists, z)