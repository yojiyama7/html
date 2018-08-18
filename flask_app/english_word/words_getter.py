with open("words.txt", "r", encoding="utf-8") as f:
    a = [line.split(": ") for line in f.read().split("\n")]

