import { QuizQuestion } from './types';

export const questions2024Phase2: QuizQuestion[] = [
  // ============================================================================
  // 2024 ASSIGNMENT 05
  // ============================================================================
  {
    id: '2024-a5-q1',
    year: 2024,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC24-CS36',
    questionNumber: 1,
    question: 'Which of the following is an incorrect statement about interfaces?',
    options: [
      'Interfaces specifies what class must do but not how it does.',
      'Interfaces are specified public if they are to be accessed by any code in the program.',
      'All variables in interface are implicitly final and static.',
      'All variables are static and methods are public if interface is defined public.',
    ],
    correctIndex: 3,
    explanation:
      'All methods and variables are implicitly public if interface is declared public.',
  },
  {
    id: '2024-a5-q2',
    year: 2024,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC24-CS36',
    questionNumber: 2,
    question: 'How do you access a static method of an interface?',
    options: [
      'Using the interface name',
      'Using the method name directly',
      'Through an object of the interface',
      'Through an implementation class',
    ],
    correctIndex: 0,
    explanation:
      'Static methods in an interface are accessed using the interface name, similar to static methods in classes.',
  },
  {
    id: '2024-a5-q3',
    year: 2024,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC24-CS36',
    questionNumber: 3,
    question: 'What is the output of the below Java program with an Interface?',
    code: `interface Car {
  int basePrice = 1000;
}

public class InterfaceTest2 implements Car {
  void changePrice() {
    basePrice = 2000;
    System.out.print(basePrice);
  }

  public static void main(String[] args) {
    new InterfaceTest2().changePrice();
  }
}`,
    options: [
      '1000',
      '2000',
      'Compiler error',
      'None of the above',
    ],
    correctIndex: 2,
    explanation:
      'Java Interface treats its variables like constants. So, the classes implementing Interfaces, can not reassign values to the variables.',
  },
  {
    id: '2024-a5-q4',
    year: 2024,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC24-CS36',
    questionNumber: 4,
    question: 'What happens when we access the same variable defined in two interfaces implemented by the same class?',
    options: [
      'Compilation failure',
      'Runtime Exception',
      'The JVM is not able to identify the correct variable',
      'The interfaceName.variableName needs to be defined',
    ],
    correctIndex: 3,
    explanation:
      'Explanation: The JVM needs to distinctly know which value of variable it needs to use. To avoid confusion to the JVM interfaceName.variableName is mandatory.',
  },
  {
    id: '2024-a5-q5',
    year: 2024,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC24-CS36',
    questionNumber: 5,
    question: 'Predict the output of following Java program',
    code: `class Test extends Exception {}

class Main {

  public static void main(String args[]) {
    try {
      throw new Test();
    } catch (Test t) {
      System.out.println("Got the Test Exception");
    } finally {
      System.out.println("Inside finally block ");
    }
  }
}`,
    options: [
      'Got the Test Exception\nInside finally block',
      'Got the Test Exception',
      'Inside finally block',
      'Compiler Error',
    ],
    correctIndex: 0,
    explanation:
      'In Java, the finally is always executed after the try-catch block. This block can be used to do the common cleanup work.',
  },
  {
    id: '2024-a5-q6',
    year: 2024,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC24-CS36',
    questionNumber: 6,
    question: 'What happens if an exception is not caught in the catch block?',
    options: [
      'The finally block handles it',
      'The exception is ignored',
      'The exception is thrown to the caller method',
      'The program terminates immediately',
    ],
    correctIndex: 2,
    explanation:
      'If an exception is not caught in the catch block, it is propagated back to the caller method.',
  },
  {
    id: '2024-a5-q7',
    year: 2024,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC24-CS36',
    questionNumber: 7,
    question: 'What will be the output of the following Java program?',
    code: `class exception_handling {

  public static void main(String args[]) {
    try {
      System.out.print("Hello" + " " + 1 / 0);
    } catch (ArithmeticException e) {
      System.out.print("World");
    }
  }
}`,
    options: [
      'Hello',
      'World',
      'HelloWorld',
      'Hello World',
    ],
    correctIndex: 1,
    explanation:
      'System.out.print() function first converts the whole parameters into a string and then prints, before "Hello" goes to output stream 1 / 0 error is encountered which is cached by catch block printing just "World".',
  },
  {
    id: '2024-a5-q8',
    year: 2024,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC24-CS36',
    questionNumber: 8,
    question: 'What is the output of the below Java code with Exceptions?',
    code: `public class ExceptionTest2 {

  public static void main(String[] args) {
    try {
      int ary[] = { 10, 20, 30 };
      int tempt = ary[4];
    } catch (ArrayIndexOutOfBoundsException e1) {
      System.out.println(e1.getMessage());
    } catch (Exception e2) {
      System.out.println("Some exception");
    }
  }
}`,
    options: [
      'Index 4 out of bounds for length 3',
      'Index 4 out of bounds for length 3\nSome exception',
      'Some exception',
      'No exception occurs',
    ],
    correctIndex: 0,
    explanation:
      'IndexOutOfBoundsException is raised by TRY block. Observe the order of catching the exceptions. Always catch a Subclass exception before a Superclass exception.',
  },
  {
    id: '2024-a5-q9',
    year: 2024,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC24-CS36',
    questionNumber: 9,
    question: 'What is the output of the Java code with FINALLY block and RETURN statement?',
    code: `public class ExceptionTest6 {

  static void show() {
    try {
      System.out.println("inside TRY");
      return;
    } finally {
      System.out.println("inside FINALLY");
    }
  }

  public static void main(String[] args) {
    show();
  }
}`,
    options: [
      'inside TRY',
      'inside TRY\ninside FINALLY',
      'inside FINALLY',
      'Compiler error',
    ],
    correctIndex: 1,
    explanation:
      'Even if a RETURN statement is present at the last line of TRY block, the control is not returned to the calling method. The JVM searches for the suitable FINALLY block and executes it before returning. So, the FINALLY block has higher priority than a RETURN statement.',
  },
  {
    id: '2024-a5-q10',
    year: 2024,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC24-CS36',
    questionNumber: 10,
    question: 'What is the purpose of the finally block in Java exception handling?',
    options: [
      'To handle an exception',
      'To catch an exception',
      'To clean up resources after a try block',
      'None of the above',
    ],
    correctIndex: 2,
    explanation:
      'The purpose of the finally block in Java exception handling is to clean up resources after a try block. The finally block is executed whether or not an exception is thrown in the try block. It is typically used to release resources such as open files, database connections, or network sockets that were acquired in the try block. The finally block ensures that these resources are released even if an exception is thrown, which helps prevent resource leaks and other issues. The finally block is optional, but it is good practice to use it when dealing with resources that need to be released.',
  },

  // ============================================================================
  // 2024 ASSIGNMENT 06
  // ============================================================================
  {
    id: '2024-a6-q1',
    year: 2024,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC24-CS36',
    questionNumber: 1,
    question: 'What is the output of the following program?',
    code: `public class Nptel{

  public static void main(String[] args) {
    try {
      int a = 5 / 0;
    } catch (Exception e) {
        catch (ArithmeticException a) {

       }
    }
    System.out.println("Programming In Java");
  }
}`,
    options: [
      '"Programming In Java"',
      'Run time error',
      'Compile time error',
      'ArithmeticException',
    ],
    correctIndex: 2,
    explanation:
      'This first handler catches exceptions of type Exception; therefore, it catches any exception, including ArithmeticException. The second handler could never be reached. This code will not compile.',
  },
  {
    id: '2024-a6-q2',
    year: 2024,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC24-CS36',
    questionNumber: 2,
    question: 'What is the output of the following program?',
    code: `public class Nptel extends Thread {

  public void run() {
    for (int i = 1; i < 5; i++) {
      System.out.print(i++ + " ");
    }
  }

  public static void main(String args[]) {
    Nptel t1 = new Nptel();
    t1.run();
  }
}`,
    options: [
      '1 3',
      '1 2 3 4',
      'Runtime error',
      '1 2',
    ],
    correctIndex: 0,
    explanation:
      'Inside the for loop, the increment operation i++ is used, which is a post-increment operation. This means that the increment happens after the value of i is used. But since this increment operation is inside the print statement, it will increment i by 1 right after printing it, effectively skipping every other number. So, the output of this code will be: "1 3" This is because the i++ operation inside the System.out.print statement causes i to increment by an additional 1 each time through the loop, resulting in only the odd numbers between 1 and 3 being printed.',
  },
  {
    id: '2024-a6-q3',
    year: 2024,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC24-CS36',
    questionNumber: 3,
    question: 'For the program given below, what will be the output after its execution?',
    code: `public class Nptel extends Thread {

  public static void main(String[] args) {
    Thread thread = Thread.currentThread();
    System.out.println(thread.activeCount());
  }
}`,
    options: [
      '0',
      'true',
      '1',
      'false',
    ],
    correctIndex: 2,
    explanation:
      'java.lang.Thread.activeCount() returns an estimate of the number of active threads in the current thread\'s thread group and its subgroups which is 1 in this case since it\'s the only thread running the program.',
  },
  {
    id: '2024-a6-q4',
    year: 2024,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC24-CS36',
    questionNumber: 4,
    question: 'Which of the following is a correct constructor for a thread object?',
    options: [
      'Thread(Runnable a, String str);',
      'Thread(Runnable a, int priority);',
      'Thread(Runnable a, ThreadGroup t);',
      'Thread(int priority);',
    ],
    correctIndex: 0,
    explanation:
      'Thread(Runnable a, String str) creates a new Thread object. The others are not valid constructors to create a Thread object.',
  },
  {
    id: '2024-a6-q5',
    year: 2024,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC24-CS36',
    questionNumber: 5,
    question: 'What is the output of the following program?',
    code: `class Nptel extends Thread {

  public void run() {
    System.out.println("Running");
  }
}

public class ThreadTest {

  public static void main(String args[]) throws InterruptedException {
    Runnable r = new Nptel();
    Thread myThread = new Thread(r);
    myThread.start();
  }
}`,
    options: [
      'Compiler Error',
      '"Running"',
      'Runtime Exception',
      'No output, but no error',
    ],
    correctIndex: 1,
    explanation:
      'The class Thread implements the Runnable interface, so the assignment is valid. Also, you can create a new thread object by passing a Runnable reference to a Thread constructor, is also valid. Hence, the program will compile without errors and print "Running" in the console.',
  },
  {
    id: '2024-a6-q6',
    year: 2024,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC24-CS36',
    questionNumber: 6,
    question: 'How many threads does the following program run on?',
    code: `public class ThreadExtended extends Thread {

  public void run() {
    System.out.println("\\nThread is running now\\n");
  }

  public static void main(String[] args) {
    ThreadExtended threadE = new ThreadExtended();

    threadE.start();
  }
}`,
    options: [
      '0',
      '1',
      '2',
      '3',
    ],
    correctIndex: 2,
    explanation:
      'There are 2 threads. Main program is also run as a thread. And, program has created one child thread. Hence, total 2 threads are there in the program.',
  },
  {
    id: '2024-a6-q7',
    year: 2024,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC24-CS36',
    questionNumber: 7,
    question: 'In the following java program, what is the NAME of the thread?',
    code: `class Nptel extends Thread{

    public static void main(String args[]) {
      Thread t = Thread.currentThread();
      System.out.println(t);
    }
}`,
    options: [
      'thread',
      'main',
      'system',
      'None of the above',
    ],
    correctIndex: 1,
    explanation:
      'The name of the Tread t is main as it\'s the only tread that is running. It is set to currentThread() which is main.',
  },
  {
    id: '2024-a6-q8',
    year: 2024,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC24-CS36',
    questionNumber: 8,
    question: 'Which of the following line(s) of code is suitable to START a thread at #1?',
    code: `class Nptel extends Thread {

  public static void main(String args[]) {
    /* Missing code */
    _______________________ // #1
  }

  public void run() {}
}`,
    options: [
      'Thread t = new Thread(Nptel);',
      'Thread t = new Thread(Nptel);\nt.start();',
      'Nptel run = new Nptel();\nThread t = new Thread(run);\nt.start();',
      'Thread t = new Thread();\nNptel.run();',
    ],
    correctIndex: 2,
    explanation:
      'An instance of the Nptel class is created. This class should implement the Runnable interface, which means it must have a run method. This run method contains the code that will be executed in the new thread. (Nptel run = new Nptel();) A new Thread object is created, passing the Nptel instance (run) to the Thread constructor. This tells the Thread that it should execute the run method of the Nptel instance in the new thread. (Thread t = new Thread(run);) The start method of the Thread instance is called. This method starts the new thread and calls the run method of the Nptel instance in that new thread. (t.start();) So, the run method of the Nptel instance will be executed in a new thread, separate from the main thread of the application.',
  },
  {
    id: '2024-a6-q9',
    year: 2024,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC24-CS36',
    questionNumber: 9,
    question: 'What is the name of the priority of this Thread in this program?',
    code: `class Nptel extends Thread{

  public static void main(String args[]) {
    Thread t = Thread.currentThread();
    System.out.println(t.getPriority());
  }
}`,
    options: [
      '1',
      '4',
      '0',
      '5',
    ],
    correctIndex: 3,
    explanation:
      'The default priority given to a thread is 5.',
  },
  {
    id: '2024-a6-q10',
    year: 2024,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC24-CS36',
    questionNumber: 10,
    question: 'What does I/O stand for in Java?',
    options: [
      'Input/Output',
      'Inheritance/Overriding',
      'Integer/Object',
      'Iteration/Observation',
    ],
    correctIndex: 0,
    explanation:
      'I/O stands for Input/Output in Java. It refers to the process of reading data from input sources and writing data to output destinations.',
  },

  // ============================================================================
  // 2024 ASSIGNMENT 07
  // ============================================================================
  {
    id: '2024-a7-q1',
    year: 2024,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC24-CS36',
    questionNumber: 1,
    question: 'Which stream does Java application uses to read data from a source, it may be a file, an array, peripheral device or socket?',
    options: [
      'InputStream',
      'OutputStream',
      'Input/OutputStream',
      'None of the above',
    ],
    correctIndex: 0,
    explanation:
      'InputSteam is used to read data from any source in Java.',
  },
  {
    id: '2024-a7-q2',
    year: 2024,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC24-CS36',
    questionNumber: 2,
    question: 'What is the primary purpose of input streams in Java?',
    options: [
      'To write data to a file.',
      'To read data from a file.',
      'To append data to a file.',
      'To create directories.',
    ],
    correctIndex: 1,
    explanation:
      'Input streams are used to read data from a file or another source.',
  },
  {
    id: '2024-a7-q3',
    year: 2024,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC24-CS36',
    questionNumber: 3,
    question: 'Which class in Java is used to create a new directory?',
    options: [
      'FileReader',
      'FileWriter',
      'File',
      'Directory',
    ],
    correctIndex: 2,
    explanation:
      'The File class is used to create directories and manipulate files.',
  },
  {
    id: '2024-a7-q4',
    year: 2024,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC24-CS36',
    questionNumber: 4,
    question: 'Which class in Java is used to read data line by line from a file?',
    options: [
      'BufferedReader',
      'FileInputStream',
      'FileWriter',
      'OutputStream',
    ],
    correctIndex: 0,
    explanation:
      'BufferedReader is commonly used to read data line by line from a file.',
  },
  {
    id: '2024-a7-q5',
    year: 2024,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC24-CS36',
    questionNumber: 5,
    question: 'What does the following code do?',
    code: `FileInputStream fis = new FileInputStream("test.dat");`,
    options: [
      'It creates a new file named test.dat if it does not exist and opens the file so you can write to it, if write permission is available.',
      'It throws an error if the file named test.dat does not exist and opens the file, if it exists, so you can read from it and write into it, if write permission is available.',
      'It creates a new file named test.dat regardless of whether it exists or not and opens the file so you can write to it, if write permission is available.',
      'It creates a new file named test.dat regardless of whether it exists or not and opens the file so you can read from it and write to it, if write permission is available.',
    ],
    correctIndex: 1,
    explanation:
      'The provided Java code is creating a FileInputStream object. FileInputStream is a class in Java that is used for reading data from files. It\'s part of the Java I/O (Input/Output) package. The string "test.dat" is the path to the file. If only a filename is provided (like in this case), Java will look for the file in the current directory of the program. If the file is located in a different directory, you would need to provide the full path to the file. Once the FileInputStream is created, you can use its methods to read data from the file. For example, the read method can be used to read a single byte of data from the file, and the read(byte[] b) method can be used to read up to b.length bytes of data from the file into an array of bytes.',
  },
  {
    id: '2024-a7-q6',
    year: 2024,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC24-CS36',
    questionNumber: 6,
    question: 'What is the output of this program? (Assume \'inputoutput.java\' file exists in the current directory)',
    code: `import java.io.*;

class filesinputoutput {
    public static void main(String args[]) throws FileNotFoundException,
IOException {
        InputStream obj = new FileInputStream("inputoutput.java");
        System.out.print(obj.available());
        obj.close();
    }
}`,
    options: [
      'true',
      'false',
      'prints number of bytes in file',
      'prints number of characters in the file',
    ],
    correctIndex: 2,
    explanation:
      'obj.available() returns the number of bytes.',
  },
  {
    id: '2024-a7-q7',
    year: 2024,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC24-CS36',
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
    options: [
      'abc',
      'abcd',
      'abcde',
      'none of the mentioned',
    ],
    correctIndex: 3,
    explanation:
      'No output is printed. CharArrayReader object input1 contains string "abcdefgh" whereas object input2 contains string "bcde", when while((i=input1.read())==(j=input2.read())) is executed the starting character of each object is compared since they are unequal control comes out of loop and nothing is printed on the screen.',
  },
  {
    id: '2024-a7-q8',
    year: 2024,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC24-CS36',
    questionNumber: 8,
    question: 'What is the output of the following Java program?',
    code: `class Main {

  public static void main(String args[]) {
    final int i;
    i = 20;
    i = 30;
    System.out.println(i);
  }
}`,
    options: [
      '30',
      'Compiler Error',
      'Garbage value',
      '0',
    ],
    correctIndex: 1,
    explanation:
      'i is assigned a value twice. Final variables can be assigned values only one. Following is the compiler error "Main.java:5: error: variable i might already have been assigned".',
  },
  {
    id: '2024-a7-q9',
    year: 2024,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC24-CS36',
    questionNumber: 9,
    question: 'In order to restrict a variable of a class from inheriting to subclass, how variable should be declared?',
    options: [
      'Protected',
      'Private',
      'Public',
      'Static',
    ],
    correctIndex: 1,
    explanation:
      'By declaring variable private, the variable will not be available in inherited to subclass.',
  },
  {
    id: '2024-a7-q10',
    year: 2024,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC24-CS36',
    questionNumber: 10,
    question: 'A ________ is a type of object that organizes components in a container.',
    options: [
      'Event adapter',
      'Event Handler',
      'Layout manager',
      'Grid Manager',
    ],
    correctIndex: 2,
    explanation:
      'A layout manager is a type of object that organizes components in a container.',
  },

  // ============================================================================
  // 2024 ASSIGNMENT 08
  // ============================================================================
  {
    id: '2024-a8-q1',
    year: 2024,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC24-CS36',
    questionNumber: 1,
    question: 'What does AWT stand for in Java?',
    options: [
      'Applet Windowing Toolkit',
      'Abstract Window Toolkit',
      'Absolute Windowing Toolkit',
      'None of the above',
    ],
    correctIndex: 1,
    explanation:
      'The Abstract Window Toolkit (AWT) is Java\'s original platform-dependent windowing, graphics, and user- interface widget toolkit, preceding Swing.',
  },
  {
    id: '2024-a8-q2',
    year: 2024,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC24-CS36',
    questionNumber: 2,
    question: 'When we invoke repaint() for a java.awt.Component object, the AWT invokes which of the following method ?',
    options: [
      'draw( )',
      'show( )',
      'update( )',
      'none of the mentioned',
    ],
    correctIndex: 2,
    explanation:
      'The repaint() method calls automatically update() method and in turn update() method calls paint() method.',
  },
  {
    id: '2024-a8-q3',
    year: 2024,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC24-CS36',
    questionNumber: 3,
    question: 'Which is/are used to create a Frame?\n1. By creating the object of Frame class (association)\n2. By extending Frame class (inheritance)',
    options: [
      'Only 1',
      'Only 2',
      'Both',
      'None',
    ],
    correctIndex: 2,
    explanation:
      'A Frame object can be created using the Frame class itself as well as extending the Frame class.',
  },
  {
    id: '2024-a8-q4',
    year: 2024,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC24-CS36',
    questionNumber: 4,
    question: 'Which AWT concept allows you to handle events such as button clicks or mouse movements?',
    options: [
      'Event Handling',
      'Component Interaction',
      'Process Management',
      'GUI Processing',
    ],
    correctIndex: 0,
    explanation:
      'Event Handling in AWT enables the response to user actions, such as button clicks or mouse movements, in a graphical user interface.',
  },
  {
    id: '2024-a8-q5',
    year: 2024,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC24-CS36',
    questionNumber: 5,
    question: 'Which of the following methods can be used to change the size of a java.awt.Component object?\n1. dimension()\n2. setSize()\n3. area()\n4. size()\n5. resetSize()',
    options: [
      '1, 2, 3 & 5',
      '4 & 5',
      '1, 2 & 5',
      'only 2',
    ],
    correctIndex: 3,
    explanation:
      'The method setSize() can only be used to change the size of a component.',
  },
  {
    id: '2024-a8-q6',
    year: 2024,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC24-CS36',
    questionNumber: 6,
    question: 'Which of the following is TRUE regarding checkbox and radio button?',
    options: [
      'Checkbox is used for single selection item whereas radio button is used for multiple selection.',
      'Checkbox is used for multiple selection items whereas radio button is used for single selection.',
      'Both are used for multiple as well as single item selection.',
      'Checkbox is the same as radio buttons.',
    ],
    correctIndex: 1,
    explanation:
      'Checkbox is used for multiple selection items whereas radio button is used for single selection. For example, if a form is asking for your favorite hobbies, there might be multiple correct answers to it, in that case checkbox is preferred. And if a form is asking about gender, there must be only one true option among the multiple choices, in that case radio buttons are used.',
  },
  {
    id: '2024-a8-q7',
    year: 2024,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC24-CS36',
    questionNumber: 7,
    question: 'How is AWT different from Swing in Java?',
    options: [
      'AWT is for web applications, Swing is for desktop applications',
      'AWT uses heavyweight components, Swing uses lightweight components',
      'AWT is newer than Swing',
      'AWT and Swing are synonyms, used interchangeably',
    ],
    correctIndex: 1,
    explanation:
      'AWT components are platform-dependent and use native components, whereas Swing components are implemented in Java and are platform-independent.',
  },
  {
    id: '2024-a8-q8',
    year: 2024,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC24-CS36',
    questionNumber: 8,
    question: 'What is the primary purpose of AWT components in GUI programming?',
    options: [
      'To perform mathematical calculations',
      'To interact with databases',
      'To create graphical user interfaces',
      'To handle network communications',
    ],
    correctIndex: 2,
    explanation:
      'AWT components provide the building blocks for creating graphical user interfaces (GUIs) in Java applications.',
  },
  {
    id: '2024-a8-q9',
    year: 2024,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC24-CS36',
    questionNumber: 9,
    question: 'What will be the output of the Java code given below?',
    code: `import java.awt.*;
import java.awt.event.*;

public class ButtonExample extends Frame {
    public static void main(String[] args) {
        ButtonExample frame = new ButtonExample();
        Button b = new Button("NPTEL - Programming in Java");
        b.setBounds(30, 50, 80, 30);
        frame.add(b);
        frame.setSize(300, 200);
        frame.setLayout(null);
        frame.setVisible(true);
    }
}`,
    options: [
      'A frame with a button "NPTEL - Programming in Java" at coordinates (30, 50)',
      'Compilation error',
      'An empty frame with no button',
      'A frame with a button, but not at the specified coordinates',
    ],
    correctIndex: 0,
    explanation:
      'The code creates a frame and adds a button with the label "NPTEL - Programming in Java" at coordinates (30, 50).',
  },
  {
    id: '2024-a8-q10',
    year: 2024,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC24-CS36',
    questionNumber: 10,
    question: 'What is the layout manager used in the Java code given below?',
    code: `import java.awt.*;
import java.awt.event.*;

public class GridLayoutExample extends Frame {
    public static void main(String[] args) {
        GridLayoutExample frame = new GridLayoutExample();
        Button b1 = new Button("Button 1");
        Button b2 = new Button("Button 2");
        Button b3 = new Button("Button 3");
        frame.add(b1);
        frame.add(b2);
        frame.add(b3);
        frame.setLayout(new GridLayout(2, 2));
        frame.setSize(300, 200);
        frame.setVisible(true);
    }
}`,
    options: [
      'Border Layout',
      'Flow Layout',
      'Grid Layout',
      'Card Layout',
    ],
    correctIndex: 2,
    explanation:
      'The code sets the layout manager of the 1frame to a 2x2 grid layout using frame.setLayout(new GridLayout(2, 2)).',
  },
];
