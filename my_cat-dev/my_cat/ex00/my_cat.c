#include <unistd.h>
#include <fcntl.h>
#include <errno.h>

int main (int arg_count, char **arg_values) {
  int file, ch;

  if (arg_count >= 2) {
    int i = 1;
    while (arg_values[i]) {
      file = open(arg_values[i], O_RDONLY);
      if (file < 0) {
        errno;
        return -1;
      }
      while (read(file, &ch, 1)) {
        write(STDOUT_FILENO, &ch, 1);
      }
      close(file);
      i++;
    }
  } else {
    
    while (read(STDIN_FILENO, &ch, 1) > 0) {
      write(STDOUT_FILENO, &ch, 1);
    }
  }
  return 0;
}
