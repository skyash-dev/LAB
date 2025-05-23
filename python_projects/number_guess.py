import random

print("Welcome to NUMBER GUESSING GAME!")

top_of_range = input("Select the number! ")

if top_of_range.isdigit():
    top_of_range = int(top_of_range)

    if top_of_range == 0:
        print("Please type a number greater than 0, next time.")
        quit()
else:
    print("Please type a valid number, next time.")
    quit()

random_number = random.randint(0,top_of_range)
guesses = 0
while True:
        guess = input("Guess the number! ")

        if guess.isdigit():
            guesses+=1
            guess = int(guess)
        else:
            print("Invalid number")
            continue
        
        if guess == random_number:
            print("CORRECT!")
            break
        elif guess>random_number:
            print("Your guess is greater!")
        elif guess<random_number:
            print("Your guess is smaller!")
    
    
print("You guessed",guesses,"time")