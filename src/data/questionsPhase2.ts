import { QuizQuestion } from './types';

export const questionsPhase2: QuizQuestion[] = [
  // ============================================================================
  // ASSIGNMENT 05 (NOC26-CS36 Jan-2026 25S)
  // ============================================================================
  {
    id: 'a5-q1',
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 1,
    question: 'Which keyword is NOT used by Java during exception handling?',
    options: ['try', 'catch', 'final', 'finally'],
    correctIndex: 2,
    explanation:
      'In Java, exceptions are handled using the try, catch, and finally blocks. The try block contains code that might throw an exception, the catch block handles specific exceptions, and the finally block executes regardless of whether an exception occurs.',
  },
  {
    id: 'a5-q2',
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 2,
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
    id: 'a5-q3',
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 3,
    question: 'Which of the following is TRUE about interfaces in Java?',
    options: [
      'Interfaces should always be defined as final',
      'Interfaces can be instantiated directly.',
      'Interfaces can extend multiple interfaces.',
      'Interfaces cannot have any method signatures',
    ],
    correctIndex: 2,
    explanation:
      'In Java, an interface can extend multiple interfaces. Interfaces can also contain public, static, and final variables, but they cannot be instantiated directly.',
  },
  {
    id: 'a5-q4',
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 4,
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
    id: 'a5-q5',
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 5,
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
      'The Cube class overrides the calculate method of the Square class. In the Cube class’s calculate method, super.calculate(value) is called, which executes the calculate method of the Square class. First, "Square: 9" is printed by the superclass method. The call to super.calculate(value) overwrites the previously computed cube value. Then, the overridden method in Cube prints "Cube: 9".',
  },
  {
    id: 'a5-q6',
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 6,
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
    id: 'a5-q7',
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 7,
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
    id: 'a5-q8',
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 8,
    question: 'Which keyword is used by Java during exception handling?',
    options: ['final', 'finally', 'caught', 'finished'],
    correctIndex: 1,
    explanation:
      'In Java, exceptions are handled using the try, catch, and finally blocks. The try block contains code that might throw an exception, the catch block handles specific exceptions, and the finally block executes regardless of whether an exception occurs.',
  },
  {
    id: 'a5-q9',
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 9,
    question:
      'A method that potentially generates a checked exception must include this keyword in its method signature:',
    options: ['throw', 'extend', 'throws', 'extends'],
    correctIndex: 2,
    explanation:
      'Any Java class that generates a checked exception and does not handle it internally must use the throws keyword to alert other methods of its instability.',
  },
  {
    id: 'a5-q10',
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 10,
    question: 'Consider the following code.\nWhat will be the output of the above code?',
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

  // ============================================================================
  // ASSIGNMENT 06 (NOC26-CS36 Jan-2026 25S)
  // ============================================================================
  {
    id: 'a6-q1',
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 1,
    question: 'Which method is used to start a new thread in Java?',
    options: ['run()', 'start()', 'execute()', 'begin()'],
    correctIndex: 1,
    explanation:
      'Calling start() creates a new thread and internally invokes the run() method. Calling run() directly does not create a new thread.',
  },
  {
    id: 'a6-q2',
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 2,
    question:
      'Which interface must be implemented to create a thread using the Runnable approach?',
    options: ['Threadable', 'Runnable', 'Callable', 'Executor'],
    correctIndex: 1,
    explanation:
      'The Runnable interface contains a single method run() and is used when a class needs to be executed by a thread.',
  },
  {
    id: 'a6-q3',
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 3,
    question: 'What happens if a thread’s run() method completes execution?',
    options: [
      'The thread enters the waiting state',
      'The thread can be restarted',
      'The thread enters the terminated state',
      'The thread returns to the runnable state',
    ],
    correctIndex: 2,
    explanation:
      'Once the run() method finishes, the thread completes its lifecycle and enters the terminated state. A terminated thread cannot be restarted.',
  },
  {
    id: 'a6-q4',
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 4,
    question: 'Which keyword is used to synchronize a method in Java?',
    options: ['Lock', 'Threadsafe', 'Synchronized', 'Volatile'],
    correctIndex: 2,
    explanation:
      'The synchronized keyword ensures that only one thread can access a method or block at a time, preventing race conditions.',
  },
  {
    id: 'a6-q5',
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 5,
    question: 'Which of the following is the default priority of a Java thread?',
    options: ['1', '3', '5', '2'],
    correctIndex: 2,
    explanation:
      'Java thread priorities range from 1 (MIN_PRIORITY) to 10 (MAX_PRIORITY). The default priority is 5 (NORM_PRIORITY).',
  },
  {
    id: 'a6-q6',
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 6,
    question: 'Which method causes the currently executing thread to pause for a specified time?',
    options: ['wait()', 'sleep()', 'pause()', 'delay()'],
    correctIndex: 1,
    explanation:
      'The sleep() method pauses the currently executing thread for a specified number of milliseconds without releasing any locks.',
  },
  {
    id: 'a6-q7',
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 7,
    question: 'Which exception is thrown when sleep() is interrupted?',
    options: [
      'RuntimeException',
      'IOException',
      'InterruptedException',
      'ThreadException',
    ],
    correctIndex: 2,
    explanation:
      'sleep() throws InterruptedException if another thread interrupts the sleeping thread.',
  },
  {
    id: 'a6-q8',
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 8,
    question: 'Which class is used to read text data efficiently from a file in Java?',
    options: [
      'FileInputStream',
      'BufferedReader',
      'DataInputStream',
      'ObjectInputStream',
    ],
    correctIndex: 1,
    explanation:
      'BufferedReader reads text efficiently using buffering and provides the readLine() method for line-by-line input.',
  },
  {
    id: 'a6-q9',
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 9,
    question: 'Which method is used to read a line of text using BufferedReader?',
    options: ['read()', 'readText()', 'readLine()', 'getLine()'],
    correctIndex: 2,
    explanation:
      'The readLine() method reads an entire line of text and returns it as a String. It returns null at end of file.',
  },
  {
    id: 'a6-q10',
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 10,
    question: 'Which class is the superclass of all input byte streams in Java?',
    options: ['Reader', 'InputStream', 'FileInputStream', 'BufferedInputStream'],
    correctIndex: 1,
    explanation:
      'InputStream is the abstract superclass for all byte-based input streams in Java, such as FileInputStream.',
  },

  // ============================================================================
  // ASSIGNMENT VII / 07 (NOC26-CS36 Jan-2026 25S)
  // ============================================================================
  {
    id: 'a7-q1',
    assignmentId: 7,
    assignmentLabel: 'Assignment VII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
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
    id: 'a7-q2',
    assignmentId: 7,
    assignmentLabel: 'Assignment VII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 2,
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
    id: 'a7-q3',
    assignmentId: 7,
    assignmentLabel: 'Assignment VII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 3,
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
    id: 'a7-q4',
    assignmentId: 7,
    assignmentLabel: 'Assignment VII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 4,
    question:
      'Which of these values is returned by read() method when the end of file (EOF) is encountered?',
    options: ['0', '1', '-1', 'Null'],
    correctIndex: 2,
    explanation:
      'Each time read() is called, it reads a single byte from the file and returns the byte as an integer value. read() returns -1 when the end of the file is encountered.',
  },
  {
    id: 'a7-q5',
    assignmentId: 7,
    assignmentLabel: 'Assignment VII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 5,
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
    id: 'a7-q6',
    assignmentId: 7,
    assignmentLabel: 'Assignment VII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 6,
    question: 'What is the primary difference between Byte Streams and Character Streams in Java?',
    options: [
      'Byte Streams handle characters, while Character Streams handle bytes.',
      'Byte Streams are used for binary data, while Character Streams are used for image data.',
      'Character Streams are faster than Byte Streams in all cases.',
      'Byte Streams are used for binary data, while Character Streams are used for text data.',
    ],
    correctIndex: 3,
    explanation:
      'Byte Streams: Handle raw binary data like images or files (InputStream, OutputStream).\nCharacter Streams: Handle text data and support encoding like Unicode (Reader, Writer).\nCharacter Streams are better for text processing, especially when handling international characters.\nFor a detailed understanding of Java I/O streams, refer to the book Joy with Java.',
  },
  {
    id: 'a7-q7',
    assignmentId: 7,
    assignmentLabel: 'Assignment VII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 7,
    question: 'What is the primary purpose of thread synchronization in Java?',
    options: [
      'To allow multiple threads to execute a method at the same time',
      'To ensure thread execution follows a specific order',
      'To prevent rare conditions and ensure data in-consistency',
      'To prevent race conditions and ensure data consistency',
    ],
    correctIndex: 3,
    explanation:
      'Thread synchronization is used to control the access of multiple threads to shared resources, ensuring data consistency and preventing race conditions. This is typically done using synchronized methods or blocks.\nFor more details on thread synchronization, refer to the book Joy with Java.',
  },
  {
    id: 'a7-q8',
    assignmentId: 7,
    assignmentLabel: 'Assignment VII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 8,
    question:
      'Which stream does Java application uses to only READ data from a source, it may be a file, an array, peripheral device or socket?',
    options: [
      'InputStream',
      'OutputStream',
      'Input/OutputStream',
      'DataOutputStream',
    ],
    correctIndex: 0,
    explanation: 'InputStream is used to read data from any source in Java.',
  },
  {
    id: 'a7-q9',
    assignmentId: 7,
    assignmentLabel: 'Assignment VII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 9,
    question: 'Which class in Java is used to create a new directory?',
    options: ['FileReader', 'FileWriter', 'File', 'Directory'],
    correctIndex: 2,
    explanation: 'The File class is used to create directories and manipulate files.',
  },
  {
    id: 'a7-q10',
    assignmentId: 7,
    assignmentLabel: 'Assignment VII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 10,
    question: 'What is the primary purpose of input streams in Java?',
    options: [
      'To write data to a file.',
      'To read data from a file.',
      'To delete a file.',
      'To create directories.',
    ],
    correctIndex: 1,
    explanation: 'Input streams are used to read data from a file or another source.',
  },

  // ============================================================================
  // ASSIGNMENT VIII / 08 (NOC26-CS36 Jan-2026 25S)
  // ============================================================================
  {
    id: 'a8-q1',
    assignmentId: 8,
    assignmentLabel: 'Assignment VIII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 1,
    question: 'Which package must be imported to use AWT components in Java?',
    options: ['java.swing.*', 'java.awt.*', 'java.gui.*', 'java.window.*'],
    correctIndex: 1,
    explanation:
      'All AWT components such as Frame, Button, and layout managers are defined in the java.awt package.',
  },
  {
    id: 'a8-q2',
    assignmentId: 8,
    assignmentLabel: 'Assignment VIII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 2,
    question: 'Which AWT class is used to create a top-level window?',
    options: ['Panel', 'Dialog', 'Frame', 'WindowManager'],
    correctIndex: 2,
    explanation:
      'The Frame class is used to create a top-level window with a title bar, border, and close button.',
  },
  {
    id: 'a8-q3',
    assignmentId: 8,
    assignmentLabel: 'Assignment VIII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 3,
    question: 'Which method is used to make an AWT Frame visible?',
    options: ['show()', 'display()', 'setVisible(true)', 'open()'],
    correctIndex: 2,
    explanation:
      'The setVisible(true) method displays the frame on the screen. Without this call, the window is not shown.',
  },
  {
    id: 'a8-q4',
    assignmentId: 8,
    assignmentLabel: 'Assignment VIII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 4,
    question: 'Which layout manager is the default for an AWT Frame?',
    options: ['FlowLayout', 'GridLayout', 'BorderLayout', 'CardLayout'],
    correctIndex: 2,
    explanation: 'An AWT Frame uses BorderLayout as its default layout manager.',
  },
  {
    id: 'a8-q5',
    assignmentId: 8,
    assignmentLabel: 'Assignment VIII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 5,
    question: 'Which method is used to add a component to an AWT container?',
    options: ['insert()', 'attach()', 'add()', 'append()'],
    correctIndex: 2,
    explanation:
      'The add() method is used to place components such as buttons or labels into a container.',
  },
  {
    id: 'a8-q6',
    assignmentId: 8,
    assignmentLabel: 'Assignment VIII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 6,
    question: 'Which AWT component is used to display non-editable text?',
    options: ['TextField', 'TextArea', 'Label', 'Button'],
    correctIndex: 2,
    explanation:
      'The Label component is used to display read-only text in an AWT application.',
  },
  {
    id: 'a8-q7',
    assignmentId: 8,
    assignmentLabel: 'Assignment VIII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 7,
    question:
      'Which layout manager places components one after another from left to right and wraps to the next line if needed?',
    options: ['GridLayout', 'BorderLayout', 'FlowLayout', 'CardLayout'],
    correctIndex: 2,
    explanation:
      'FlowLayout arranges components from left to right and moves to the next line when space runs out.',
  },
  {
    id: 'a8-q8',
    assignmentId: 8,
    assignmentLabel: 'Assignment VIII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 8,
    question: 'Which method is used to enable absolute positioning for components in AWT?',
    options: [
      'setBounds()',
      'setLayout(null)',
      'setPosition()',
      'setCoordinates()',
    ],
    correctIndex: 1,
    explanation:
      'Calling setLayout(null) disables layout management and allows manual positioning using setBounds().',
  },
  {
    id: 'a8-q9',
    assignmentId: 8,
    assignmentLabel: 'Assignment VIII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 9,
    question: 'Which listener interface is used to handle button click events in AWT?',
    options: [
      'PrintListener',
      'KeyListener',
      'ActionListener',
      'WindowListener',
    ],
    correctIndex: 2,
    explanation:
      'Button click events in AWT are handled using the ActionListener interface.',
  },
  {
    id: 'a8-q10',
    assignmentId: 8,
    assignmentLabel: 'Assignment VIII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 10,
    question: 'Which method is used to specify the size of an AWT Frame?',
    options: ['resize()', 'setBounds()', 'setSize()', 'setDimension()'],
    correctIndex: 2,
    explanation:
      'The setSize(width, height) method defines the size of a frame in pixels.',
  },
];
