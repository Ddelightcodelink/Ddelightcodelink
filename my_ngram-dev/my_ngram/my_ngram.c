#include <stdio.h>
#include <unistd.h>
#include <string.h>

#define MAX_ANAGRAM_LEN 1500
// 1.	Parsing the input arguments and make use of a function to count the arguments characters
// 2. Then loop over input arguments and join the results.
// 3. Sort the result and print the output

// using the argc and argv to loop over the input arguments and storing them in a list.
int main(int argc, char *argv[]) {
    int apple, orange;
    int countgram[216] = {0};
    char input_anagram[MAX_ANAGRAM_LEN];
    int anagram_len;

    // Statement to see any argument was provided in the command line
    if (argc < 1) {
        write(2, "No argument was provided!\n", 25);
        
    }

    // using a for loop to loop over input arguments and copying them to get length
    for (apple = 1; apple < argc; apple++) 
    {
        strncpy(input_anagram, argv[apple], MAX_ANAGRAM_LEN);
        anagram_len = strlen(input_anagram);

        for (orange = 0; orange < anagram_len; orange++) {
            countgram[(int) input_anagram[orange]]++;
        }
    }

    // Looping over arguments and counting them
    for (apple = 0; apple < 216; apple++) {
        if (countgram[apple] > 0 && apple != '\"') {
            printf("%c:%d\n", apple, countgram[apple]);
        }
    }

    
}

