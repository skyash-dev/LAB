name = input("Type your name: ")

print("Welcome", name, "to choose your own adventure!!")

choice = input("you are on the road alone you can either take left or right (left/right)? ")

if choice == "left":
    choice = input("you took the left way and you have reached a place where ther is water and a club (water/club)? ")
    if choice == "water":
        print("You swam and got out of breath, you lose!")
    elif choice == "club":
        print("you found a beautiful girl who gave you gold, YOU WON!")
    else:
        print("Choose the valid option, you loser!")
elif choice == "right":
    choice = input("the road ended on the right path, (continue/go back) ")
    if choice == "continue":
        print("You drowned, you lose!")
    elif choice == "go back":
        print("going back? you loser!")
    else: 
        print("Choose the valid option, you loser!")
else: 
    print("Choose the valid option, you loser!")