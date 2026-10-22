import { QuizQuestion } from './types';

export const questions2025Phase1: QuizQuestion[] = [
  // ============================================================================
  // 2025 ASSIGNMENT 01 (Pages 1–10)
  // ============================================================================
  {
    id: '2025-a1-q1',
    year: 2025,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC25-CS57',
    questionNumber: 1,
    question: 'Which of the following is true?',
    options: [
      'Java uses only interpreter.',
      'Java uses only compiler.',
      'Java uses both interpreter and compiler.',
      'None of the above.',
    ],
    correctIndex: 2,
    explanation:
      'Creating a .class file from .java using javac command is a compilation task, whereas execution of a .class file using java is the process of interpretation.',
  },
  {
    id: '2025-a1-q2',
    year: 2025,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC25-CS57',
    questionNumber: 2,
    question: "A Java file with extension '.class' contains",
    options: [
      'Java source code',
      'HTML tags',
      'Java Byte code',
      'A program file written in Java programming language',
    ],
    correctIndex: 2,
    explanation:
      'A .class file is a complied version of the .java file in byte code (it is a kind of object code with JVM (Java Virtual Machine) as the target machine.',
  },
  {
    id: '2025-a1-q3',
    year: 2025,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC25-CS57',
    questionNumber: 3,
    question: 'Which of the following is not an object-oriented programming paradigm?',
    options: [
      'Encapsulation',
      'Inheritance',
      'Polymorphism',
      'Dynamic memory allocation',
    ],
    correctIndex: 3,
    explanation:
      'Dynamic memory allocation is a memory allocation strategy and not a programming paradigm.',
  },
  {
    id: '2025-a1-q4',
    year: 2025,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC25-CS57',
    questionNumber: 4,
    question: 'Java is a platform independent programming language because',
    options: [
      'It compiles an intermediate code targeting a virtual machine, which can be interpreted by an interpreter for a given OS.',
      'The Java compiler translates the source code directly into the machine-level language.',
      'It follows the concept of “write once and compile everywhere”.',
      'It is written almost similar to the English language.',
    ],
    correctIndex: 0,
    explanation:
      'The compiled code (byte code) can be executed (interpreted) on any platform running a JVM.',
  },
  {
    id: '2025-a1-q5',
    year: 2025,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC25-CS57',
    questionNumber: 5,
    question: 'Which of the following is not a Language Processor?',
    options: ['Assembler', 'Compiler', 'Interpreter', 'Fortran'],
    correctIndex: 3,
    explanation:
      'A computer understands instructions in machine code i.e., in the form of 0s and 1s. Special translators are required for this operation like Assembler, Compiler and Interpreter. Fortran is a programming language but not a language processor.',
  },
  {
    id: '2025-a1-q6',
    year: 2025,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC25-CS57',
    questionNumber: 6,
    question:
      'A platform is the hardware or software environment in which a program runs. Which of the following is/are Java platform component(s)?',
    options: ['HTML', 'Java Virtual Machine', 'Javascript', 'HotJava'],
    correctIndex: 1,
    explanation:
      '"A platform is the hardware or software environment in which a program runs. Some of the most popular platforms are Microsoft Windows, Linux, Solaris OS, and Mac OS. Most platforms can be described as a combination of the operating system and underlying hardware. The Java platform differs from other platforms as it is a software-only platform that runs on top of other hardware-based platforms.\nThe Java platform has two components:\nThe Java Virtual Machine\nThe Java Application Programming Interface (API)',
  },
  {
    id: '2025-a1-q7',
    year: 2025,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC25-CS57',
    questionNumber: 7,
    question: `What is the correct sequence of steps to execute a Java program?
I. Compile the Program: Use the javac command to compile the code into bytecode.
II. Edit the Program: Write the code in a text editor or IDE.
III. Run the Program: Use the java command to execute the bytecode.
Which of the following options represents this sequence?`,
    options: [
      'Run → Edit → Compile',
      'Edit → Run → Compile',
      'Compile → Edit → Run',
      'Edit → Compile → Run',
    ],
    correctIndex: 3,
    explanation:
      'The Java development process involves writing code (Edit), converting it to bytecode (Compile), and then executing it on the JVM (Run).',
  },
  {
    id: '2025-a1-q8',
    year: 2025,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC25-CS57',
    questionNumber: 8,
    question: 'What is the primary difference between javac and java commands?',
    options: [
      'javac is used to edit Java code, while java runs Java programs.',
      'javac compiles Java source code to bytecode, while java executes the bytecode on the JVM.',
      'javac executes Java programs, while java is used for compilation.',
      'Both are used for compiling Java programs.',
    ],
    correctIndex: 1,
    explanation:
      'The javac command converts .java source files into .class bytecode files.\nThe java command executes the .class file using the Java Virtual Machine (JVM).',
  },
  {
    id: '2025-a1-q9',
    year: 2025,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC25-CS57',
    questionNumber: 9,
    question: 'Which of the following is not a feature of Java?',
    options: [
      'Platform Independence',
      'Object-Oriented Programming',
      'Supports Explicit Pointers',
      'Supports Polymorphism',
    ],
    correctIndex: 2,
    explanation:
      'Java is platform-independent, object-oriented, and secure. It does not support explicit pointers, as they can lead to memory management issues and compromise security.',
  },
  {
    id: '2025-a1-q10',
    year: 2025,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC25-CS57',
    questionNumber: 10,
    question: 'What is the output of the following code?',
    code: `class NPTEL {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    options: ['Hello, World!', 'HelloWorld!', 'Compilation Error', 'Runtime Error'],
    correctIndex: 0,
    explanation: 'Java program to print Hello, World!',
  },

  // ============================================================================
  // 2025 ASSIGNMENT 02 (Pages 11–20)
  // ============================================================================
  {
    id: '2025-a2-q1',
    year: 2025,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC25-CS57',
    questionNumber: 1,
    question:
      'Consider the following object declaration statement\nWhat does System.in stands for in the above declaration?',
    code: `Scanner in = new Scanner(System.in);`,
    options: [
      'Any file storing data',
      'Refers to the standard input stream, which is typically the keyboard by default.',
      'Reference to scanner as an input device',
      'It is a mouse as an input device',
    ],
    correctIndex: 1,
    explanation:
      'System.in refers to the standard input device and the keyboard is treated as standard input device. Thus, the code implies reading a data from keyboard.\nPlease refer to chapter 3 of book Joy With Java for a more detailed explaination.',
  },
  {
    id: '2025-a2-q2',
    year: 2025,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC25-CS57',
    questionNumber: 2,
    question: 'What will be the output of the following Java program?',
    code: `public class VarPrint {
    int x = 30;
    static int y = 20;

    public static void main(String[] args) {
        VarPrint t1 = new VarPrint();
        t1.x = 88;
        t1.y = 99;
        int z1 = t1.x + t1.y;
        VarPrint t2 = new VarPrint();
        System.out.println(t2.x + " " + t2.y + " " + z1);
    }
}`,
    options: ['30 99 178', '30 88 129', '30 99 187', '88 99 178'],
    correctIndex: 2,
    explanation:
      'If you perform any change for instance variable these changes won’t be reflected for the remaining objects. Because for every object a separate copy of instance variable will be there. But if you do any change to the static variable, that change will be reflected for all objects because a static instance maintains a single copy in memory.\nPlease refer to chapter 3 of book Joy With Java for a more detailed explaination.',
  },
  {
    id: '2025-a2-q3',
    year: 2025,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC25-CS57',
    questionNumber: 3,
    question: 'What will be the output of the following Java program?',
    code: `public class ArgumenTest {
    public static void main(String[] args) {
        Test t = new Test();
        t.start();
    }

    static class Test {
        void start() {
            int a = 4;
            int b = 5;
            System.out.print("" + 8 + 3 + "");
            System.out.print(a + b);
            System.out.print(" " + a + b + "");
            System.out.print(foo() + a + b + " ");
            System.out.println(a + b + foo());
        }

        String foo() {
            return "foo";
        }
    }
}`,
    options: [
      '9 7 7 foo34 34foo',
      '839 45foo45 9foo',
      '72 34 34 foo34 34foo',
      '9 7 7 foo 7 7foo',
    ],
    correctIndex: 1,
    explanation:
      'Here, print() methods internally converts the data in its argument into a String object and then print the composition. Here, + is the concatenation of different String representation.\nPlease refer to chapter 3 of book Joy With Java for a more detailed explaination.',
  },
  {
    id: '2025-a2-q4',
    year: 2025,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC25-CS57',
    questionNumber: 4,
    question: 'What is encapsulation in object-oriented programming?',
    options: [
      'Hiding implementation details and exposing only functionality',
      'The process of creating multiple objects in a program',
      'Writing multiple methods in a single class',
      'Using the this keyword to reference an object',
    ],
    correctIndex: 0,
    explanation:
      'Please refer to chapter 3 of book Joy With Java for a more detailed explaination.\nEncapsulation is one of the fundamental principles of object-oriented programming. It involves bundling the data (variables) and the methods (functions) that operate on the data into a single unit, typically a class. By making certain data private and providing public methods to access or modify it, encapsulation helps hide implementation details from the outside world while exposing only the required functionality. This improves code modularity, security, and maintainability.',
  },
  {
    id: '2025-a2-q5',
    year: 2025,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC25-CS57',
    questionNumber: 5,
    question: 'Which of the following is true about constructors in a class?',
    options: [
      'Constructors must have a return type.',
      'Constructors are used to initialize objects.',
      'A class can have only one constructor.',
      'Constructors cannot be overloaded.',
    ],
    correctIndex: 1,
    explanation: `A constructor is a special method in a class that is automatically called when an object of the class is created. Its main purpose is to initialize the object's properties (variables). Unlike other methods, constructors:
• Have the same name as the class.
• Do not have a return type, not even void. A class can have multiple constructors with different parameter lists (constructor overloading) to allow flexibility in object creation.
Please refer book Joy with Java Chapter 3 for more detailed explanation.`,
  },
  {
    id: '2025-a2-q6',
    year: 2025,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC25-CS57',
    questionNumber: 6,
    question: 'What does the this keyword in Java help to achieve?',
    options: [
      'Avoiding name space collision between instance variables and method parameters',
      'Overloading methods in a class',
      'Accessing private methods in another class',
      'Creating multiple objects in a program',
    ],
    correctIndex: 0,
    explanation: `The this keyword is used to refer to the current instance of a class. It is commonly used to resolve ambiguity when instance variables and method parameters have the same name. For example:

class Example {
    int value;
    Example(int value) {
        this.value = value; // Resolves name collision by referring to the instance variable
    }
}

Here, this.value refers to the instance variable, while value refers to the parameter of the constructor. This avoids confusion and ensures the proper assignment of values.
Please refer book Joy with Java Chapter 3 for more detailed explanation.`,
  },
  {
    id: '2025-a2-q7',
    year: 2025,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC25-CS57',
    questionNumber: 7,
    question: 'What is the correct signature of the main method in Java?',
    options: [
      'public void main(String args[])',
      'public static void main(String args[])',
      'void main(String[] args)',
      'public static void main(String[] args)',
    ],
    correctIndex: 3,
    explanation:
      'The main method in Java must be declared as public static void main(String[] args) to be recognized by the JVM as the entry point of the program. The public modifier allows the method to be accessible from anywhere, static ensures it can be called without creating an instance of the class, and String[] args is the parameter used for command-line arguments.\nNote: Please refer book Joy with Java Chapter 3 for more detailed explanation.',
  },
  {
    id: '2025-a2-q8',
    year: 2025,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC25-CS57',
    questionNumber: 8,
    question: 'Which of the following is used to take runtime input in Java?',
    options: [
      'BufferedReader',
      'Scanner',
      'DataInputStream',
      'All of the above',
    ],
    correctIndex: 3,
    explanation: `Java provides several ways to take runtime input:
BufferedReader: Reads text from the input stream efficiently.
Scanner: Parses primitive types and strings using regular expressions.
DataInputStream: Reads primitive data types and strings in a binary format. Each serves different purposes based on requirements.
Note: Please refer book Joy with Java Chapter 3 for more detailed explanation.`,
  },
  {
    id: '2025-a2-q9',
    year: 2025,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC25-CS57',
    questionNumber: 9,
    question: 'Which method is used to format output in Java?',
    options: ['print()', 'println()', 'printf()', 'format()'],
    correctIndex: 2,
    explanation: `The printf() method is used in Java to produce formatted output. It follows the syntax of System.out.printf(format, arguments) where the format specifies how the output should appear. For example:
System.out.printf("%d %s", 5, "Apples");
prints "5 Apples".
Note: Please refer book Joy with Java Chapter 3 for more detailed explanation.`,
  },
  {
    id: '2025-a2-q10',
    year: 2025,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC25-CS57',
    questionNumber: 10,
    question: 'Which Java class is primarily used to read input from the console?',
    options: ['Scanner', 'BufferedReader', 'Console', 'DataInputStream'],
    correctIndex: 0,
    explanation:
      'The Scanner class is widely used to read input from the console in Java. It provides methods to parse and read primitive types (e.g., nextInt(), nextDouble()) and strings (e.g., next(), nextLine()). It is a versatile and easy-to-use class for input handling.\nNote: Please refer to chapter 3 of book Joy With Java for a more detailed explaination.',
  },

  // ============================================================================
  // 2025 ASSIGNMENT 03 (Pages 21–30)
  // ============================================================================
  {
    id: '2025-a3-q1',
    year: 2025,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC25-CS57',
    questionNumber: 1,
    question: 'Which of the following is true about the super keyword in Java?',
    options: [
      'super can be used to call a parent class constructor.',
      'super is used to access private variables of the parent class.',
      'super is used to call a static method in the parent class.',
      'super can only be used inside a static method.',
    ],
    correctIndex: 0,
    explanation:
      'The super keyword is used to refer to the immediate parent class. It is commonly used to invoke the parent class constructor or access its non-private methods and variables. However, it cannot access private members of the parent class or be used in static methods.',
  },
  {
    id: '2025-a3-q2',
    year: 2025,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC25-CS57',
    questionNumber: 2,
    question: 'What is the output of the following Java program?',
    code: `class StaticScopeDemo {
    static int x = 5;

    public static void main(String[] args) {
        int x = 10;
        {
            int x = 15; // Compilation Error
            System.out.println(x);
        }
    }
}`,
    options: ['15', 'Compilation Error', '5', '10'],
    correctIndex: 1,
    explanation:
      'The block within main() tries to declare a local variable x that has the same name as an already existing variable in the same scope, which causes a compilation error. Variable names must be unique within the same scope',
  },
  {
    id: '2025-a3-q3',
    year: 2025,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC25-CS57',
    questionNumber: 3,
    question: 'What will be the output of the following program?',
    code: `class Parent {
    void display() {
        System.out.println("Parent display");
    }
}

class Child extends Parent {
    void display() {
        System.out.println("Child display");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent obj = new Child();
        obj.display();
    }
}`,
    options: [
      'Parent display',
      'Child display',
      'Compilation Error',
      'Runtime Error',
    ],
    correctIndex: 1,
    explanation:
      'This is an example of method overriding. The display() method in the Child class overrides the method in the Parent class. When the method is called, Java uses dynamic method dispatch to execute the Child class implementation.',
  },
  {
    id: '2025-a3-q4',
    year: 2025,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC25-CS57',
    questionNumber: 4,
    question: 'Which of the following statements about abstract classes in Java is correct?',
    options: [
      'Abstract classes can be instantiated directly.',
      'An abstract class must contain at least one abstract method.',
      'A class inheriting from an abstract class must implement all its abstract methods unless it is itself abstract.',
      'Abstract classes can be marked as final.',
    ],
    correctIndex: 2,
    explanation:
      'Abstract classes cannot be instantiated directly. They may or may not contain abstract methods. A subclass inheriting an abstract class must provide implementations for all abstract methods unless it is also declared abstract.',
  },
  {
    id: '2025-a3-q5',
    year: 2025,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC25-CS57',
    questionNumber: 5,
    question: 'What will be the output of the following Java program?',
    code: `public class NptelExample {
    public static int fun(int n) {
        if (n == 0) {
            return 1;
        }
        return n * fun(n - 1);
    }

    public static void main(String[] args) {
        System.out.println(fun(5));
    }
}`,
    options: ['5', '24', '120', 'Runtime Error'],
    correctIndex: 2,
    explanation:
      'The fun method is a recursive function that calculates the factorial of a number. For fun(5), the computation is 5 * 4 * 3 * 2 * 1 = 120.',
  },
  {
    id: '2025-a3-q6',
    year: 2025,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC25-CS57',
    questionNumber: 6,
    question: 'Which of the following is NOT true regarding the final keyword in Java?',
    options: [
      'A final method cannot be overridden in a subclass.',
      'A final variable can only be assigned once.',
      'A final class can have subclasses.',
      'A final variable can be assigned during declaration or in the constructor.',
    ],
    correctIndex: 2,
    explanation:
      'A class marked as final cannot be extended, meaning it cannot have subclasses. The other statements about the final keyword are correct.',
  },
  {
    id: '2025-a3-q7',
    year: 2025,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC25-CS57',
    questionNumber: 7,
    question: 'What is the output of the following Java program?',
    code: `class Test {
    static int count = 0;

    public Test() {
        count++;
    }

    public static void main(String[] args) {
        Test obj1 = new Test();
        Test obj2 = new Test();
        Test obj3 = new Test();
        System.out.println("Count: " + Test.count);
    }
}`,
    options: ['Count: 0', 'Compilation Error', 'Runtime Error', 'Count: 3'],
    correctIndex: 3,
    explanation:
      'The count variable is static, meaning it is shared among all instances of the class. Each time a Test object is created, the constructor increments count. Since three objects are created, the output is Count: 3.',
  },
  {
    id: '2025-a3-q8',
    year: 2025,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC25-CS57',
    questionNumber: 8,
    question: 'Which of these is NOT an example of method overriding in Java?',
    options: [
      'A subclass defining a method with the same name but different parameters than a superclass method.',
      'A subclass providing a new implementation for a method in the superclass.',
      'A subclass defining a method with the same name and parameters as a superclass method.',
      'Using the super keyword to call the superclass version of an overridden method.',
    ],
    correctIndex: 0,
    explanation:
      'If a method in a subclass has the same name but different parameters, it is method overloading, not method overriding. Method overriding requires the same name and parameters.',
  },
  {
    id: '2025-a3-q9',
    year: 2025,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC25-CS57',
    questionNumber: 9,
    question: 'What is the output of the following Java program?',
    code: `class Parent {
    String message() {
        return "Parent";
    }
}

class Child extends Parent {
    String message() {
        return "Child";
    }
}

public class Main {
    public static void main(String[] args) {
        Child p = new Parent();
        System.out.println(p.message());
    }
}`,
    options: [
      'Parent',
      'Child',
      'Compilation Error',
      'No error and nothing is printed',
    ],
    correctIndex: 2,
    explanation:
      'There will be a compilation error: Type mismatch: cannot convert from Parent to Child',
  },
  {
    id: '2025-a3-q10',
    year: 2025,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC25-CS57',
    questionNumber: 10,
    question: 'What is the output of the following program?',
    code: `public class Nptel {
    public static int fun(int n) {
        if (n == 0) {
            return 0;
        }
        return n + fun(n - 1);
    }

    public static void main(String[] args) {
        System.out.println(fun(5));
    }
}`,
    options: ['5', '10', '15', 'Runtime Error'],
    correctIndex: 2,
    explanation:
      'The fun function calculates the sum of the first n natural numbers using recursion. For fun(5), the computation is 5 + 4 + 3 + 2 + 1 = 15.',
  },

  // ============================================================================
  // 2025 ASSIGNMENT 04 (Pages 31–42)
  // ============================================================================
  {
    id: '2025-a4-q1',
    year: 2025,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC25-CS57',
    questionNumber: 1,
    question:
      'Which access modifier allows a method to be accessible within the same package but not from outside the package?',
    options: ['default', 'private', 'public', 'protected'],
    correctIndex: 0,
    explanation:
      'The default access modifier (no explicit modifier specified) allows access to the method within the same package but not from outside. It is also known as "package-private."',
  },
  {
    id: '2025-a4-q2',
    year: 2025,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC25-CS57',
    questionNumber: 2,
    question:
      'What will happen if you attempt to access a private method from another class in Java?',
    options: [
      'The method will be accessible.',
      'The method will throw an exception.',
      'The method will be inaccessible.',
      'The method will be converted to protected.',
    ],
    correctIndex: 2,
    explanation:
      'A private method is accessible only within the same class. Any attempt to access it from another class results in a compilation error.',
  },
  {
    id: '2025-a4-q3',
    year: 2025,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC25-CS57',
    questionNumber: 3,
    question: 'What will be the output of the following code?',
    code: `class Person {
    int a = 1;
    int b = 0;
    public Person() {
        System.out.println(a + b + " Java " );
    }
}

class Employee extends Person {
    int a = 0;
    int b = 1;
    public Employee() {
        System.out.println(a * b + " Java " );
    }
}

public class Question {
    public static void main(String args[]) {
        Person p = new Employee();
    }
}`,
    options: [
      '1 Java 10\n0 Java 0',
      '1 Java\n0 Java',
      '10 Java\n0 Java',
      '1 java 1\n0 Java 0',
    ],
    correctIndex: 1,
    explanation:
      'If no super() or this() is included explicitly within the derived class constructor, the super() is implicitly invoked by the compiler. Therefore, in this case, the Person class constructor is called first and then the Employee class constructor is called. Up casting is allowed.',
  },
  {
    id: '2025-a4-q4',
    year: 2025,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC25-CS57',
    questionNumber: 4,
    question: 'Which of the following is a built-in Java package?',
    options: [
      'java.util',
      'my.package.util',
      'default.package',
      'system.java',
    ],
    correctIndex: 0,
    explanation:
      '`java.util` is a built-in Java package containing utility classes such as `ArrayList`, `HashMap`, and `Scanner`.',
  },
  {
    id: '2025-a4-q5',
    year: 2025,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC25-CS57',
    questionNumber: 5,
    question: 'What keyword is used to define a package in Java?',
    options: ['define', 'package', 'import', 'namespace'],
    correctIndex: 1,
    explanation:
      'The `package` keyword is used in Java to define a package. For example, `package mypackage;` defines a package named `mypackage`.',
  },
  {
    id: '2025-a4-q6',
    year: 2025,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC25-CS57',
    questionNumber: 6,
    question: 'How do you import a specific class from a package in Java?',
    options: [
      'import package.*;',
      'import package.ClassName;',
      'include package.ClassName;',
      'use package.ClassName;',
    ],
    correctIndex: 1,
    explanation:
      'The syntax `import package.ClassName;` imports a specific class from a package. For example, `import java.util.Scanner;` imports the `Scanner` class from the `java.util` package.',
  },
  {
    id: '2025-a4-q7',
    year: 2025,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC25-CS57',
    questionNumber: 7,
    question: 'Consider the following program:\nHow many errors does this program contain?',
    code: `class Base {
    public void print() {
        System.out.println("Base class...");
    }
}
class Derived extends Base {
    public void print() {
        System.out.println("Derived class...");
    }
}
public class Main {
    private static void main (String[] args) {
        Base b = new Base();
        b.print();
        Derived d = new Derived();
        d.print();
    }
}`,
    options: ['None', '1', '2', '3'],
    correctIndex: 1,
    explanation: `This code has one error:
1. Incorrect visibility of \`main\` method:
The \`main\` method is defined as \`private static void main(String[] args)\`. The \`main\` method must be \`public static void main(String[] args)\` to be recognized as the entry point of the program by the Java Virtual Machine (JVM).`,
  },
  {
    id: '2025-a4-q8',
    year: 2025,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC25-CS57',
    questionNumber: 8,
    question: 'Which of the following is true about Java interfaces?',
    options: [
      'They cannot contain method implementations.',
      'An interface can extend multiple classes.',
      'An interface can only contain abstract methods.',
      'They allow a class to achieve multiple inheritance.',
    ],
    correctIndex: 3,
    explanation:
      'Interfaces in Java provide a mechanism to achieve multiple inheritance because a class can implement multiple interfaces.',
  },
  {
    id: '2025-a4-q9',
    year: 2025,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC25-CS57',
    questionNumber: 9,
    question:
      'What will happen if you do not specify an access modifier for a class in a package?',
    options: [
      'The class will be `private` by default.',
      'The class will be `protected` by default.',
      'The class will be accessible only within the same package.',
      'The class will be `public` by default.',
    ],
    correctIndex: 2,
    explanation:
      'If no access modifier is specified for a class, it gets the default access level, making it accessible only within the same package.',
  },
  {
    id: '2025-a4-q10',
    year: 2025,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC25-CS57',
    questionNumber: 10,
    question: 'Which access modifier provides the most restrictive access in Java?',
    options: ['default', 'protected', 'private', 'public'],
    correctIndex: 2,
    explanation:
      'The `private` modifier provides the most restrictive access, allowing access only within the class where it is defined.',
  },
];
