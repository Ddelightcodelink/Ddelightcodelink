#include <stdio.h>
#include <stdlib.h>

//void my_square(int x, int y) 

int main(int ac, char **av) {
    int x = 0, y = 0;
     int i, j;
     if(ac == 2){
            y=0;
        }
        else if(ac==3){

    x = atoi(av[1]);
    y = atoi(av[2]);
        }
    for (i = 0; i < y; i++) {
        for (j = 0; j < x; j++) {
            if (i == 0 || i == y - 1) {
                if (j == 0 || j == x - 1) {
                    printf("o");
                } else {
                    printf("-");
                }
            } else {
                if (j == 0 || j == x - 1) {
                    printf("|");
                } else {
                    printf(" ");
                }
            }
        }
        printf("\n");
    }
}
