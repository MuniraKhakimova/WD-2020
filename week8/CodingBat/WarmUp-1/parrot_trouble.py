def parrot_trouble(talking, hour):
    return talking & (hour < 7 or hour > 20)


print(parrot_trouble(bool(input()), int(input())))
