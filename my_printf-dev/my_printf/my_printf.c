#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <stdarg.h>


void my_putchar(char c) {
    write(1, &c, 1); 
}

void my_puts(char* str) {
    for (char* s = str; *s != '\0'; s++) {
        write(1, s, 1);
    }
}

char* convert(int base, unsigned long number) {
    char* result;
    int last_index = 0;
    if (number == 0) {
        return "0";
    }

    char ch;
    unsigned long digit, num_copy = number;
    int size_of_output = 0;
    while (number!=0) {
        number = number / base;
        size_of_output++;
    }
    
    result = (char*)malloc(sizeof(result)*size_of_output);
    last_index = --size_of_output;
    
    while (num_copy != 0) {
        digit = num_copy % base;
        if (digit > 9 && digit < 16 && base == 16) {
            ch = digit + '0' + 7;
        } else {
            ch = digit + '0';
        }
        result[last_index] = ch;
        last_index--;
        num_copy = num_copy / base;
    }
    
    return result;
    free(result);
}


int my_printf(char* restrict format, ...) {
    int output = 0;
    char* str;
    unsigned long num_for_case;
    int num;
    char* sample;
    
    va_list params;
    
    va_start(params, format);
    str = format;
    
    while (*str != '\0') {
        if (*str == '%') {
            str++;
            if (*str == 'd') {
                num = va_arg(params, int);
                if (num < 0) {
                    my_putchar('-');
                    output++;
                    num = -num;
                }
                my_puts(convert(10, num));
                sample = convert(10, num);
                while (*sample != '\0') {
                    output++;
                    sample++;    
                }
            } else if (*str == 'o') {
                num = va_arg(params, int);
                if (num < 0) {
                    my_putchar('-');
                    output++;
                    num = -num;
                }
                my_puts(convert(8, num));
                sample = convert(8, num);
                while (*sample != '\0') {
                    output++;
                    sample++;    
                }
            } else if (*str == 'u') {
                num = va_arg(params, int);
                if (num < 0) {
                    my_putchar('-');
                    output++;
                    num = -num;
                }
                my_puts(convert(10, num));
                sample = convert(10, num);
                while (*sample != '\0') {
                    output++;
                    sample++;    
                }
            } else if (*str == 'x') {
                num = va_arg(params, int);
                if (num < 0) {
                    my_putchar('-');
                    output++;
                    num = -num;
                }
                my_puts(convert(16, num));
                sample = convert(16, num);
                while (*sample != '\0') {
                    output++;
                    sample++;    
                }
            } else if (*str == 'c') {
                num_for_case = va_arg(params, int);
                my_putchar(num_for_case);
                output++;  
            } else if (*str == 's') {
                sample = va_arg(params, char*);
                if (sample == NULL) {
                    my_puts("NULL");
                    output += 4;
                } else {
                    my_puts(sample);
                    while (*sample != '\0') {
                        output++;
                        sample++;    
                    }
                }
            } else if (*str == 'p') {
                num_for_case = (unsigned long)va_arg(params, void*);
                my_putchar('0'); // convert to the format, to which it has to be written, i.e 0x, so first 0
                my_putchar('x'); // then x
                output += 2;
                my_puts(convert(16, num_for_case)); // and then the same as for the hexadecimal 
                sample = convert(16, num_for_case);
                while (*sample != '\0') {
                    output++;
                    sample++;    
                }
            }
        } else { 
            my_putchar(*str);
            output++;
        }
        str++;
    }
    va_end(params);
    
    return output;
}                                            
