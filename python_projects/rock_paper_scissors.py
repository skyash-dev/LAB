import random

user_input = input("Type Rock/Paper/Scissors or Q to quit: ").lower()

options = ["rock", "paper", "scissors"]

if user_input not in options:
    quit()

random_num = random.randint(0,2)
computer = options[random_num]

if user_input == "rock" and computer == "scissors":
    print("Computer picked", computer)
    print("You WON!")
elif user_input == "paper" and computer == "rock":
    print("Computer picked", computer)
    print("You WON!")
elif user_input == "scissors" and computer == "paper":
    print("Computer picked", computer)
    print("You WON!")
elif user_input == computer:
    print("oops! it's a tie!")
else:
    print("Computer picked", computer)    
    print("You LOST!")

