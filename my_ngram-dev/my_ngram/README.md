# Welcome to My Ngram
***

## Task
This project takes in multiple command line arguments, which are treated as strings, and counts the number of occurrences of each character in all of the arguments combined. It then prints out each character along with its count.
The challenge is understanding n_gram and Makefile script which is used to automate the building process of my_ngram. 
## Description
The macro `MAX_ANAGRAM_LEN` defines the maximum length of the anagram input string. We created the `main()` which is the entry point of the program. `argc` is an integer that contains the number of arguments passed to the program, including the name of the program itself. `argv` is an array of strings containing the actual arguments. In this code, two integer variables, `apple` and `orange`, are declared. `countgram` is an integer array of size 215 initialized with zeros. `input_anagram` is a character array of size `MAX_ANAGRAM_LEN`. `anagram_len` is an integer to store the length of the current input argument. The `if` statement checks whether any arguments have been provided, and if not, prints an error message to standard error using `write()` function. 
The For loop iterates through each argument passed to the program starting from index 1 (index 0 contains the program name) while the second iterates through all 215 ASCII characters (including the special characters).

## Installation
Run "make my_ngram" in the command line to create object and binary executable files.
## Usage
Run `./my_ngram string` to analyze string argument
./my_project argument1 argument2
```

### The Core Team
A project of two participants: <a href='https://upskill.us.qwasar.io/users/ogundain_g'>and</a> <a href='https://upskill.us.qwasar.io/users/oyewumi_o'<a/> 
 <span><i>Under the supervision of<a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span><span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px'></span>
<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px'></span>