# Welcome to My Printf
***

## Task
This project rewrite pritf fuuction in C. It is a task to implement the use of va_list, va_start and va_end. The challenge here is to understand the project requirements and know how to implement the my_printf() function such that it produce output according to a format specified. 

## Description
To solve this problem, I made google search on va_list, va_end and va_start. I also find out the meaning of some other keywords like va_arg, va_copy, write(2)
, malloc. etc. 
Most importantly, I made use of write() function inside my_putchar() to writes a single character to the standard output. I defined a function convert() that takes two arguments: base, an integer representing the base of the number system to which the input number should be converted, and number, an unsigned long integer representing the number to be converted. The function returns a pointer to a character array that represents the converted number. For loop, while loop and nested if statements were also implemented i this code.

## Installation
The program used makefile to compile the source code.

## Usage
The code compiled with the flags -Wall -Wextra -Werror.
```
./my_project argument1 argument2
```

### The Core Team


<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px'></span>
