def average(numbers):
    total = 0
    for n in numbers:
        total += n
    return total / len(numbers)


def get_first(items):
    return items[0]