import { QuizQuestion } from './types';

export const questions2025Phase2: QuizQuestion[] = [
  // ============================================================================
  // 2025 ASSIGNMENT 05 (Pages 43–53)
  // ============================================================================
  {
    id: '2025-a5-q1',
    year: 2025,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC25-CS57',
    questionNumber: 1,
    question: `Which of the following statement(s) is/are true about finally in Java?
I. The finally block is executed regardless of whether an exception is thrown or not.
II. A finally block can exist without a catch block.
III. The finally block will not execute if System.exit() is called in the try block.
IV. A finally block can have a return statement, but it is not recommended to use.`,
    options: ['I and II', 'II and III', 'I, II and III', 'I, II, III and IV'],
    correctIndex: 3,
    explanation:
      'The finally block always executes except when the JVM exits using System.exit(). It can exist without a catch block and may contain a return statement, though this is not recommended.',
  },
  {
    id: '2025-a5-q2',
    year: 2025,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC25-CS57',
    questionNumber: 2,
    question: 'What will be the output of the following Java program?',
    code: `interface A {
    int x = 10;
    void display();
}
class B implements A {
    public void display() {
        System.out.println("Value of x: " + x);
    }
}
public class Main {
    public static void main(String[] args) {
        B obj = new B();
        obj.display();
    }
}`,
    options: ['Value of x: 10', 'Value of x: 0', 'Compilation Error', 'Runtime Error'],
    correctIndex: 0,
    explanation:
      'Variables in interfaces are public, static, and final by default. Hence, the value of x is accessible in the display method.',
  },
  {
    id: '2025-a5-q3',
    year: 2025,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC25-CS57',
    questionNumber: 3,
    question: 'What will be the output of the following program?',
    code: `class NPTEL {
    public static void main(String[] args) {
        try {
            int a = 5;
            int b = 0;
            System.out.println(a / b);
        } catch (ArithmeticException e) {
            System.out.print("Error ");
        } finally {
            System.out.print("Complete");
        }
    }
}`,
    options: ['5 Complete', 'Error Complete', 'Runtime Error', 'Compilation Error'],
    correctIndex: 1,
    explanation:
      'An ArithmeticException is caught in the catch block, which prints “Error”. The finally block executes afterward, printing “Complete”.',
  },
  {
    id: '2025-a5-q4',
    year: 2025,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC25-CS57',
    questionNumber: 4,
    question: `Which of the following is TRUE regarding abstract class and an interface in Java?
I. Abstract classes can contain constructors, but interfaces cannot.
II. Interfaces support multiple inheritance, but abstract classes do not.
III. Abstract classes can have both abstract and concrete methods, whereas interfaces only had abstract methods before Java 8.`,
    options: ['I, II and III', 'II only', 'I and II only', 'II and III only'],
    correctIndex: 0,
    explanation:
      'Abstract classes can have constructors and concrete methods. Interfaces support multiple inheritance. Before Java 8, interfaces could only contain abstract methods, but now they can include default and static methods.',
  },
  {
    id: '2025-a5-q5',
    year: 2025,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC25-CS57',
    questionNumber: 5,
    question: 'Which of the following is a checked exception in Java?',
    options: [
      'NullPointerException',
      'ArrayIndexOutOfBoundsException',
      'IOException',
      'ArithmeticException',
    ],
    correctIndex: 2,
    explanation:
      'IOException is a checked exception, meaning it must be either caught or declared in the throws clause of a method. The others are unchecked exceptions, which do not require explicit handling.',
  },
  {
    id: '2025-a5-q6',
    year: 2025,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC25-CS57',
    questionNumber: 6,
    question: 'Which keyword is NOT used by Java during exception handling?',
    options: ['try', 'catch', 'final', 'finally'],
    correctIndex: 2,
    explanation:
      'In Java, exceptions are handled using the try, catch, and finally blocks. The try block contains code that might throw an exception, the catch block handles specific exceptions, and the finally block executes regardless of whether an exception occurs.',
  },
  {
    id: '2025-a5-q7',
    year: 2025,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC25-CS57',
    questionNumber: 7,
    question: 'What is the purpose of the throws keyword in Java?',
    options: [
      'To declare exceptions that a method can throw',
      'To throw an exception immediately',
      'To catch an exception',
      'It is not a keyword in Java',
    ],
    correctIndex: 0,
    explanation:
      'The throws keyword is used in a method signature to declare the exceptions that the method might throw, alerting callers to handle or propagate these exceptions.',
  },
  {
    id: '2025-a5-q8',
    year: 2025,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC25-CS57',
    questionNumber: 8,
    question: 'Which of the following is TRUE about interfaces in Java?',
    options: [
      'Interfaces should always be defined as final',
      'Interfaces can be instantiated directly.',
      'Interfaces can extend multiple interfaces.',
      'Interfaces cannot have any methods signatures',
    ],
    correctIndex: 2,
    explanation:
      'In Java, an interface can extend multiple interfaces. Interfaces can also contain public, static, and final variables, but they cannot be instantiated directly.',
  },
  {
    id: '2025-a5-q9',
    year: 2025,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC25-CS57',
    questionNumber: 9,
    question: 'What will be the output of the following code?',
    code: `interface Demo {
    void display();
}

class Test implements Demo {
    public void display() {
        System.out.println("Hello, NPTEL!");
    }
}

public class Main {
    public static void main(String[] args) {
        Test obj = new Test();
        obj.display();
    }
}`,
    options: ['Hello, NPTEL!', 'Compilation Error', 'Runtime Error', 'No Output'],
    correctIndex: 0,
    explanation:
      'The Test class implements the Demo interface and provides a definition for the display method. When display() is called, it prints “Hello, NPTEL!”.',
  },
  {
    id: '2025-a5-q10',
    year: 2025,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC25-CS57',
    questionNumber: 10,
    question: 'What will be the output of the following Java program?',
    code: `interface Calculator {
    void calculate(int value);
}

class Square implements Calculator {
    int result;
    public void calculate(int value) {
        result = value * value;
        System.out.print("Square: " + result + " ");
    }
}

class Cube extends Square {
    public void calculate(int value) {
        result = value * value * value;
        super.calculate(value);
        System.out.print("Cube: " + result + " ");
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator obj = new Cube();
        obj.calculate(3);
    }
}`,
    options: [
      'Square: 9 Cube: 9',
      'Cube: 27 Square: 9',
      'Square: 9 Square: 27 Cube: 27',
      'Square: 9 Cube: 27 Square: 27',
    ],
    correctIndex: 0,
    explanation:
      'The Cube class overrides the calculate method of the Square class. In the Cube class’s calculate method, super.calculate(value) is called, which executes the calculate method of the Square class. First, "Square: 9" is printed by the superclass method. Then, the overridden method in Cube prints "Cube: 9".',
  },

  // ============================================================================
  // 2025 ASSIGNMENT 06 (Pages 54–64)
  // ============================================================================
  {
    id: '2025-a6-q1',
    year: 2025,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC25-CS57',
    questionNumber: 1,
    question: 'Consider the following code snippet.\nWhat will be the output of the program?',
    code: `class MyThread extends Thread {
    public void run() {
        for (int i = 0; i < 3; i++) {
            System.out.println("Running thread: " + i);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.run();
        System.out.println("Main method complete.");
    }
}`,
    options: [
      'Running thread: 0\nRunning thread: 1\nRunning thread: 2\nMain method complete.',
      'Running thread: 0\nMain method complete.\nRunning thread: 1\nRunning thread: 2',
      'Main method complete.',
      'Error: The thread was not started using start()',
    ],
    correctIndex: 0,
    explanation:
      'In this program, the run() method is called directly instead of using start(). When run() is called like this, it does not create a new thread; it behaves like a regular method call and runs on the main thread. As a result, the output is sequential. To create a separate thread, you must call the start() method.For a more detailed understanding of thread methods like run() and start(), refer to the book Joy with Java.',
  },
  {
    id: '2025-a6-q2',
    year: 2025,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC25-CS57',
    questionNumber: 2,
    question: 'Which of the following best describes the concept of multithreading in Java?',
    options: [
      'Multiple threads execute concurrently, sharing the same memory space.',
      'Only one thread executes at a time, ensuring sequential execution.',
      'Threads in Java cannot communicate with each other.',
      'Threads require separate memory allocation for each thread to run.',
    ],
    correctIndex: 0,
    explanation:
      'Multithreading in Java allows multiple threads to run concurrently within the same program, sharing the same memory space. This feature makes Java programs more efficient, especially for tasks like multitasking or background processing. However, proper synchronization is crucial to avoid issues like data inconsistency. For a more detailed explanation of multithreading concepts, refer to the book Joy with Java.',
  },
  {
    id: '2025-a6-q3',
    year: 2025,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC25-CS57',
    questionNumber: 3,
    question: 'What will happen when the following code is executed?',
    code: `class ExampleThread extends Thread {
    public void run() {
        System.out.println("Thread is running.");
    }
}

public class Main {
    public static void main(String[] args) {
        ExampleThread thread = new ExampleThread();
        thread.start();
        thread.start();
    }
}`,
    options: [
      'The program will execute successfully, printing "Thread is running." twice.',
      'The program will throw an error when attempting to start the thread a second time.',
      'The program will terminate without any output.',
      'The thread will run only once, and the second start() call will be ignored.',
    ],
    correctIndex: 1,
    explanation:
      'In Java, a thread can only be started once. If you try to call start() on the same thread object more than once, the JVM will throw an IllegalThreadStateException. This is because a thread\'s lifecycle allows it to transition to the "terminated" state after completing execution, and it cannot be restarted.\nFor more details about the thread lifecycle, refer to the book Joy with Java.',
  },
  {
    id: '2025-a6-q4',
    year: 2025,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC25-CS57',
    questionNumber: 4,
    question: 'Find the error in the following program:',
    code: `class RunnableExample implements Runnable {
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println("Runnable thread: " + i);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        RunnableExample runnable = new RunnableExample();
        runnable.run();
        System.out.println("Main method ends.");
    }
}`,
    options: [
      'The program will throw an error because Runnable cannot be executed directly.',
      'The program will run successfully but will not create a new thread.',
      'The program will create a new thread and execute concurrently.',
      'The program will throw a runtime error because Thread is not used.',
    ],
    correctIndex: 1,
    explanation: `In this code, the Runnable object is created, but it is executed directly using the run() method instead of passing it to a Thread object. To create a new thread, you need to use:
Thread t = new Thread(runnable);
t.start();
Without this, the run() method behaves like a regular method call, and no new thread is created.
For more detailed guidance on creating threads using Runnable, refer to the book Joy with Java.`,
  },
  {
    id: '2025-a6-q5',
    year: 2025,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC25-CS57',
    questionNumber: 5,
    question: 'What will happen when the following code is executed?',
    code: `class RunnableExample implements Runnable {
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println("Thread running: " + i);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        RunnableExample task = new RunnableExample();
        Thread thread = new Thread(task);
        thread.start();
    }
}`,
    options: [
      'The program will throw a compile-time error because Runnable is not a thread.',
      'The program will execute successfully, and the run() method will run in a new thread.',
      'The program will execute the run() method directly on the main thread.',
      'The program will throw a runtime error because Runnable is not properly implemented.',
    ],
    correctIndex: 1,
    explanation:
      'The Runnable interface is implemented by the class RunnableExample. To create a thread, the Runnable object is passed to the Thread constructor, and calling start() ensures that the run() method is executed in a new thread.For more details on creating threads using Runnable, refer to the book Joy with Java.',
  },
  {
    id: '2025-a6-q6',
    year: 2025,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC25-CS57',
    questionNumber: 6,
    question: 'Which of the following states can a thread enter during its lifecycle in Java?',
    options: [
      'New, Runnable, Running, Blocked',
      'New, Runnable, Waiting, Blocked, Terminated',
      'New, Runnable, Running, Sleeping, Dead',
      'New, Active, Waiting, Suspended, Terminated',
    ],
    correctIndex: 1,
    explanation: `The states of a thread in Java are:
• New: Thread is created but not started.
• Runnable: Thread is ready to run but waiting for CPU time.
• Waiting/Blocked: Thread is paused or waiting for some resource.
• Terminated: Thread has completed execution.
For a detailed explanation of thread states, refer to the book Joy with Java.`,
  },
  {
    id: '2025-a6-q7',
    year: 2025,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC25-CS57',
    questionNumber: 7,
    question:
      'What does the thread scheduler use to decide which thread to run when multiple threads are in the runnable state?',
    options: [
      'Thread priority',
      "Thread's execution time",
      'Thread name',
      'Thread creation order',
    ],
    correctIndex: 0,
    explanation:
      "The thread scheduler uses thread priorities as a hint to determine the execution order of threads in the runnable state. However, thread scheduling also depends on the operating system's scheduling policies and may not strictly follow priority.\nFor more on thread scheduling, refer to the book Joy with Java.",
  },
  {
    id: '2025-a6-q8',
    year: 2025,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC25-CS57',
    questionNumber: 8,
    question: 'Consider the following program:\nWhich of the following is true about the output?',
    code: `class PriorityExample extends Thread {
    public void run() {
        System.out.println(Thread.currentThread().getName() +
            " with priority " +
            Thread.currentThread().getPriority());
    }
}

public class Main {
    public static void main(String[] args) {
        PriorityExample t1 = new PriorityExample();
        PriorityExample t2 = new PriorityExample();

        t1.setPriority(Thread.MIN_PRIORITY);
        t2.setPriority(Thread.MAX_PRIORITY);

        t1.start();
        t2.start();
    }
}`,
    options: [
      'The thread with the higher priority is guaranteed to execute first.',
      'The thread with the lower priority will never execute.',
      'The order of execution depends on the JVM and OS scheduling policies.',
      'The program will throw an error due to invalid priority values.',
    ],
    correctIndex: 2,
    explanation:
      'Thread priority is a hint to the thread scheduler but does not guarantee execution order. The actual behavior depends on the JVM and the underlying OS.For more on thread priorities, refer to the book Joy with Java.',
  },
  {
    id: '2025-a6-q9',
    year: 2025,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC25-CS57',
    questionNumber: 9,
    question: 'What is the primary purpose of thread synchronization in Java?',
    options: [
      'To allow multiple threads to execute a method at the same time',
      'To ensure thread execution follows a specific order',
      'To prevent race conditions and ensure data consistency',
      'To allow threads to communicate with each other',
    ],
    correctIndex: 2,
    explanation:
      'Thread synchronization is used to control the access of multiple threads to shared resources, ensuring data consistency and preventing race conditions. This is typically done using synchronized methods or blocks. For more details on thread synchronization, refer to the book Joy with Java.',
  },
  {
    id: '2025-a6-q10',
    year: 2025,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC25-CS57',
    questionNumber: 10,
    question: 'What is the primary difference between Byte Streams and Character Streams in Java?',
    options: [
      'Byte Streams handle characters, while Character Streams handle bytes.',
      'Byte Streams are used for binary data, while Character Streams are used for text data.',
      'Character Streams are faster than Byte Streams in all cases.',
      'Character Streams cannot handle international characters like Unicode.',
    ],
    correctIndex: 1,
    explanation:
      'Byte Streams: Handle raw binary data like images or files (InputStream, OutputStream).\nCharacter Streams: Handle text data and support encoding like Unicode (Reader, Writer).\nCharacter Streams are better for text processing, especially when handling international characters.\nFor a detailed understanding of Java I/O streams, refer to the book Joy with Java.',
  },

  // ============================================================================
  // 2025 ASSIGNMENT 07 (Pages 65–74)
  // ============================================================================
  {
    id: '2025-a7-q1',
    year: 2025,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC25-CS57',
    questionNumber: 1,
    question: 'What will be the output of the following Java program?',
    code: `import java.io.*;
class ReadFile {
    public static void main(String[] args) throws IOException {
        FileReader fr = new FileReader("NPTEL.txt");
        BufferedReader br = new BufferedReader(fr);
        System.out.println(br.readLine());
        br.close();
    }
}`,
    codeNote: 'Assume NPTEL.txt contains:\nThis is Programming in Java online course.',
    options: [
      'Hello, World!',
      'This is Programming in Java online course.',
      'IOException',
      'null',
    ],
    correctIndex: 1,
    explanation:
      'BufferedReader to read the first line from the file NPTEL.txt. Since the file contains “This is Programming in Java online course.”, it is printed.',
  },
  {
    id: '2025-a7-q2',
    year: 2025,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC25-CS57',
    questionNumber: 2,
    question:
      'Which of these classes is used to write primitive data types to an output stream in Java?',
    options: [
      'FileWriter',
      'DataOutputStream',
      'PrintWriter',
      'BufferedOutputStream',
    ],
    correctIndex: 1,
    explanation:
      'The DataOutputStream class is used to write primitive data types (e.g., int, float, boolean) to an output stream.',
  },
  {
    id: '2025-a7-q3',
    year: 2025,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC25-CS57',
    questionNumber: 3,
    question: 'What will the following code print?',
    code: `import java.io.*;

class RandomAccessFileExample {
    public static void main(String[] args) throws IOException {
        RandomAccessFile file = new RandomAccessFile("test.dat", "rw");
        file.writeInt(100);
        file.seek(0);
        System.out.println(file.readInt());
        file.close();
    }
}`,
    options: ['0', 'Runtime Error', 'Compilation Erro', '100'],
    correctIndex: 3,
    explanation:
      'The program writes the integer 100 to the file test.dat. Using the seek(0) method, the file pointer is reset to the beginning, and the integer is read back and printed.',
  },
  {
    id: '2025-a7-q4',
    year: 2025,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC25-CS57',
    questionNumber: 4,
    question: 'Complete the following snippet with the required code.',
    code: `File file = new File("file.txt");
if (__________________) // Fill in the blanks
{
    System.out.println("File exists.");
} else
{
    System.out.println("File does not exist.");
}`,
    options: [
      'file.exists()',
      'file.isFile()',
      'file.fileExists()',
      'file.isAvailable()',
    ],
    correctIndex: 0,
    explanation:
      'The exists() method in the File class checks if a file or directory exists in the specified path.',
  },
  {
    id: '2025-a7-q5',
    year: 2025,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC25-CS57',
    questionNumber: 5,
    question: 'What will the following Java program output?',
    code: `import java.io.*;

class SequenceInputStreamExample {
    public static void main(String[] args) throws IOException {
        ByteArrayInputStream input1 = new ByteArrayInputStream("123".getBytes());
        ByteArrayInputStream input2 = new ByteArrayInputStream("ABC".getBytes());
        SequenceInputStream sequence = new SequenceInputStream(input1, input2);

        int i;
        while ((i = sequence.read()) != -1) {
            System.out.print((char) i);
        }
    }
}`,
    options: ['123ABC', 'ABC123', 'Compilation Error', 'Runtime Error'],
    correctIndex: 0,
    explanation:
      'The SequenceInputStream combines input1 and input2 streams sequentially. It first reads the content of input1 (123), followed by input2 (ABC), resulting in 123ABC.',
  },
  {
    id: '2025-a7-q6',
    year: 2025,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC25-CS57',
    questionNumber: 6,
    question: 'What is the output of the following Java program?',
    code: `class Main {

    public static void main(String args[]) {
        final int i;
        i = 20;
        i = 30;
        System.out.println(i);
    }
}`,
    options: ['30', 'Compiler Error', 'Garbage value', '0'],
    correctIndex: 1,
    explanation:
      'i is assigned a value twice. Final variables can be assigned values only one. Following is the compiler error “Main.java:5: error: variable i might already have been assigned”.',
  },
  {
    id: '2025-a7-q7',
    year: 2025,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC25-CS57',
    questionNumber: 7,
    question: 'What will be the output of the following Java program?',
    code: `import java.io.*;
class Chararrayinput {
    public static void main(String[] args) {
        String obj = "abcdefgh";
        int length = obj.length();
        char c[] = new char[length];
        obj.getChars(0, length, c, 0);
        CharArrayReader input1 = new CharArrayReader(c);
        CharArrayReader input2 = new CharArrayReader(c, 1, 4);
        int i, j;
        try {
            while ((i = input1.read()) == (j = input2.read())) {
                System.out.print((char) i);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`,
    options: ['abc', 'abcd', 'abcde', 'none of the mentioned'],
    correctIndex: 3,
    explanation:
      'No output is printed. CharArrayReader object input1 contains string “abcdefgh” whereas object input2 contains string “bcde”, when while((i=input1.read())==(j=input2.read())) is executed the starting character of each object is compared since they are unequal control comes out of loop and nothing is printed on the screen.',
  },
  {
    id: '2025-a7-q8',
    year: 2025,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC25-CS57',
    questionNumber: 8,
    question: 'What will be the output of the following Java program?',
    code: `public class Calculator {
    int num = 100;

    public void calc(int num) {
        this.num = num * 10;
    }

    public void printNum() {
        System.out.println(num);
    }

    public static void main(String[] args) {
        Calculator obj = new Calculator();
        obj.calc(2);
        obj.printNum();
    }
}`,
    options: ['20', '100', '1000', '2'],
    correctIndex: 0,
    explanation:
      'Here the class instance variable name(num) is same as calc() method local variable name(num). So for referencing class instance variable from calc() method, this keyword is used. So in statement this.num = num * 10, num represents local variable of the method whose value is 2 and this.num represents class instance variable whose initial value is 100. Now in printNum() method, as it has no local variable whose name is same as class instance variable, so we can directly use num to reference instance variable, although this.num can be used.',
  },
  {
    id: '2025-a7-q9',
    year: 2025,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC25-CS57',
    questionNumber: 9,
    question: 'What will be the output of the following code?',
    code: `import java.io.*;

public class W7 {
    public static void main(String[] args) {
        try {
            PrintWriter writer = new PrintWriter(System.out);
            writer.write(9 + 97);
            writer.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}`,
    options: [
      'It will give compile-time error',
      'It will give run-time error',
      'j',
      '106',
    ],
    correctIndex: 2,
    explanation:
      "The output of this program will be the character 'j' because the Unicode code point for 106 corresponds to 'j'.",
  },
  {
    id: '2025-a7-q10',
    year: 2025,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC25-CS57',
    questionNumber: 10,
    question:
      'What will be the output of the following code.\nfile.txt contain "This is Programming in Java online course." (without quotes)',
    code: `import java.io.File;

class FileSizeEample {
    public static void main(String[] args) {
        // Specify the file path
        String filePath = "file.txt";

        // Create a File object
        File file = new File(filePath);

        // Get the size of the file
        long fileSize = file.length();

        // Print the size of the file
        System.out.println(fileSize);
    }
}`,
    options: ['42', '35', '7', '0'],
    correctIndex: 0,
    explanation:
      'The length() method on the File object, which returns the size of the file in bytes.',
  },

  // ============================================================================
  // 2025 ASSIGNMENT 08 (Pages 75–84)
  // ============================================================================
  {
    id: '2025-a8-q1',
    year: 2025,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC25-CS57',
    questionNumber: 1,
    question: 'Which of the following is TRUE regarding check box and radio button?',
    options: [
      'Check box is used for single selection item whereas radio button is used for multiple selection.',
      'Check box is used for multiple selection items whereas radio button is used for single selection.',
      'Both are used for multiple as well as single item selection.',
      'Checkbox is always preferred than radio buttons.',
    ],
    correctIndex: 1,
    explanation:
      'Check box is used for multiple selection items whereas radio button is used for single selection. For example, if a form is asking for your favorite hobbies, there might be multiple correct answers to it, in that case check box is preferred. And if a form is asking about gender, there must be only one true option among the multiple choices, in that case radio buttons are used.',
  },
  {
    id: '2025-a8-q2',
    year: 2025,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC25-CS57',
    questionNumber: 2,
    question: 'Which of the following is the latest graphics and media package for Java?',
    options: ['Applet', 'AWT', 'Swing', 'JavaFX'],
    correctIndex: 3,
    explanation:
      'JavaFX is a set of latest graphics and media packages in Java that enables developers to design, create, test, debug, and deploy rich client applications that operate consistently across diverse platforms.\nMore details can be found here: https://docs.oracle.com/javafx/2/overview/jfxpub-overview.htm',
  },
  {
    id: '2025-a8-q3',
    year: 2025,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC25-CS57',
    questionNumber: 3,
    question: 'Which of the following is/are NOT an exception of java.awt package?',
    options: [
      'HeadlessException',
      'AWTException',
      'FontFormatException',
      'IllegalStateException',
    ],
    correctIndex: 3,
    explanation: 'IllegalStateException doesnot belong to java.awt package.',
  },
  {
    id: '2025-a8-q4',
    year: 2025,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC25-CS57',
    questionNumber: 4,
    question:
      'Which of the following statement is FALSE about the update() in java.awt package?',
    options: [
      'Sets the color of the graphics context to be the foreground color of this component.',
      "Calls this component's paint method to completely redraw this component.",
      'Updates the component by checking an online repository.',
      'Clears this component by filling it with the background color.',
    ],
    correctIndex: 2,
    explanation:
      "The update() function does not update the component by checking an online repository rather it, sets the color of the graphics context to be the foreground color of this component, calls this component's paint method to completely redraw this component and clears this component by filling it with the background color.",
  },
  {
    id: '2025-a8-q5',
    year: 2025,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC25-CS57',
    questionNumber: 5,
    question:
      'Which of the following method is used to remove all items from scrolling list in java.awt.list?',
    options: ['hide()', 'remove()', 'clear()', 'close()'],
    correctIndex: 2,
    explanation:
      'The function clear() in java.awt.list is used for remove all items from scrolling list.',
  },
  {
    id: '2025-a8-q6',
    year: 2025,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC25-CS57',
    questionNumber: 6,
    question: 'Which layout manager arranges components in a single row or column in Java?',
    options: ['FlowLayout', 'BorderLayout', 'GridLayout', 'CardLayout'],
    correctIndex: 0,
    explanation:
      'The FlowLayout arranges components sequentially, either in a single row or column, based on the available space.',
  },
  {
    id: '2025-a8-q7',
    year: 2025,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC25-CS57',
    questionNumber: 7,
    question: 'What does "AWT" stand for in Java?',
    options: [
      'Abstract Widget Toolkit',
      'Advanced Window Toolkit',
      'Abstract Window Toolkit',
      'Advanced Widget Toolkit',
    ],
    correctIndex: 2,
    explanation:
      'AWT is the Java library for creating GUI components like buttons and windows.',
  },
  {
    id: '2025-a8-q8',
    year: 2025,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC25-CS57',
    questionNumber: 8,
    question: 'Which AWT component is used to create a button in a GUI?',
    options: ['Label', 'Button', 'TextField', 'Checkbox'],
    correctIndex: 1,
    explanation:
      'The Button class in AWT is used to create clickable buttons in a GUI.',
  },
  {
    id: '2025-a8-q9',
    year: 2025,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC25-CS57',
    questionNumber: 9,
    question: 'Which of the following is TRUE about the following GUI?',
    diagramType: 'awt-label-textfield',
    options: [
      'There is a Frame and two TextFields.',
      'There is a Frame with two Labels and two non-editable TextFields.',
      'There are two Labels.',
      'There is a Frame with two Labels and two TextFields.',
    ],
    correctIndex: 3,
    explanation:
      'There is a Frame with two Labels and two TextFields in the given GUI.',
  },
  {
    id: '2025-a8-q10',
    year: 2025,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC25-CS57',
    questionNumber: 10,
    question: 'Which of the following is TRUE about check box in Java?',
    options: [
      'A check box can’t be in either an "on" (true) or "off" (false) state.',
      'Clicking on a check box changes its state from "on" to "off," or from "off" to "on."',
      'A check box can be in an "on" (true) and in "off" (false) state simultaneously.',
      'Check boxes cannot be grouped together.',
    ],
    correctIndex: 1,
    explanation:
      'A check box is a graphical component that can be in either an "on" (true) or "off" (false) state. Clicking on a check box changes its state from "on" to "off," or from "off" to "on.". A check box cannot be in both “on” and “off” state simultaneously. Further, several check boxes can be grouped together under the control of a single object, using the CheckboxGroup class. In a check box group, at most one button can be in the "on" state at any given time. Clicking on a check box to turn it on forces any other check box in the same group that is on into the "off" state.',
  },
];
