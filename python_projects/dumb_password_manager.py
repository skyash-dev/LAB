# [] master password.
# [x] mode.
# [x] view.
# [x] add.


# master_pwd = input("Enter master password!")
from cryptography.fernet import Fernet

# def generate_key():
#     key = Fernet.generate_key()
#     with open("key.txt", 'a') as f:
#         f.write(key.decode())

# generate_key()

def get_key():
    file = open("key.txt")
    key = file.read()
    file.close()
    return key;

key = get_key()
fernet = Fernet(key)

def add():
    title = input("Enter the title for entry: ")
    pwd = input("Please enter the password: ")
    with open ('entries.txt', 'a') as f:
        pwd = fernet.encrypt(pwd.encode())
        f.write(title+"|"+pwd.decode()+ "\n")

def view():
    file = open('entries.txt', 'r')
    content = file.readlines()
    file.close

    for line in content:
        [title, pwd] = line.rstrip().split("|")
        pwd = fernet.decrypt(pwd)
        print(title+"|"+pwd.decode())

while True:
    mode = input("You can either add entry or view the entries, (add/view). Press 'q' to quit! ").lower().strip()

    if mode == "q":
        break
    if mode == "add":
        add()
    if mode == "view":
        view()