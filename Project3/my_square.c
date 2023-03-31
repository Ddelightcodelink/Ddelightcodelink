/*
This program implements the use of scanf and printf as standard input and output to accept input from user via the keyboard and display output.
It implement pow function to find square any given number.
*/

#include <stdio.h>
#include <math.h>

int main() {
    // Declaration of Variable
    char name[15];
    printf("Please enter your name: ");
    scanf("%s", name);
    printf("Welcome, %s! How are you today?\n", name);

    // To calculate square of a number
    int number;
    double square;
    printf("Enter any number: ");
    scanf("%d", &number);
    square = pow(number, 2);
    printf("The number you entered is %d\n", number);
    printf("The square of your number is %.1f\n", square);

    return 0;
}