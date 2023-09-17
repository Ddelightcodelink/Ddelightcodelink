# Makefile script used to automate the building process of a my_printf.
# cflags to enable warnings and treat them as errors
CC = gcc
CFLAGS = -Wall -Wextra -Werror

all: my_printf #manually specifying the source file
my_printf: my_printf.o
	$(CC) $(CFLAGS) -o my_printf my_printf.o

my_printf.o: my_printf.c
	$(CC) $(CFLAGS) -c my_printf.c

clean:
	rm -f *.o my_printf

fclean: clean
		rm -f my_printf

re: fclean all