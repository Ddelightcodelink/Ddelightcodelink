# My Makefile script used to automate the building process of a my_ngram.
# cflags to enable warnings and treat them as errors
CC = gcc
CFLAGS = -Wall -Wextra -Werror

all: my_ngram #manually specifying the source file

my_ngram: my_ngram.o
	$(CC) $(CFLAGS) -o my_ngram my_ngram.o

my_ngram.o: my_ngram.c
	$(CC) $(CFLAGS) -c my_ngram.c

clean:
	rm -f *.o my_ngram

fclean: clean
		rm -f my_ngram

re: fclean all