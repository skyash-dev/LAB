print("Welcome to the QUIZ GAME!")

playing = input("Do you want to play? ").lower()

if playing != "yes":
    quit()

score = 0

print("Let's play!")

questions = [
    "What does CPU stand for? ",
    "What does GPU stand for? ", 
    "What does PSU stand for? ",
    "What does RAM stand for? "
]
answers = [
    "central processing unit",
    "graphics processing unit",
    "power supply",
    "random access memory"
]

for i in [0,1,2,3]:
    answer = input(questions[i]).lower()
    if answer == answers[i]:
        print("CORRECT!")
        score+=1
    else:
        print("INCORRECT!")

print("You got "+str(score)+" questions right out of 4")
print("You got "+str((score/4)*100)+"%.")