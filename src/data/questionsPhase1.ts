import { QuizQuestion } from './types';

export const questionsPhase1: QuizQuestion[] = [
  // ============================================================================
  // ASSIGNMENT 01 (NOC26-CS36 Jan-2026 25S) — W01 / NOC26-CS153 (July-2026 26A)
  // ============================================================================
  {
    id: 'a1-q1',
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 1,
    question:
      'Consider the following program.\nWhat is the output of the above code?',
    code: `class NPTEL {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    options: [
      'Hello, World!',
      'HelloWorld!',
      'Compilation Error',
      'Runtime Error',
    ],
    correctIndex: 0,
    explanation:
      'This is the standard syntax for a Java program to print the string "Hello, World!" to the console.',
  },
  {
    id: 'a1-q2',
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 2,
    question:
      'A Java file with extension ‘.class’ contains:',
    options: [
      'Java source code',
      'HTML tags',
      'Java Byte code',
      'A program file written in Java programming language',
    ],
    correctIndex: 2,
    explanation:
      'A .class file is a compiled version of the .java file in byte code. It is a kind of object code with the JVM (Java Virtual Machine) as the target machine.',
  },
  {
    id: 'a1-q3',
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 3,
    question:
      'Which of the following is NOT an object-oriented programming paradigm?',
    options: [
      'Encapsulation',
      'Inheritance',
      'Polymorphism',
      'Dynamic memory allocation',
    ],
    correctIndex: 3,
    explanation:
      'Encapsulation, Inheritance, and Polymorphism are core paradigms. Dynamic memory allocation is a memory allocation strategy and not a programming paradigm.',
  },
  {
    id: 'a1-q4',
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 4,
    question:
      'What is the correct sequence of steps to execute a Java program?',
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
    id: 'a1-q5',
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 5,
    question:
      'Which program is used to compile Java source code into bytecode?',
    options: [
      'javap',
      'javac',
      'java',
      'javad',
    ],
    correctIndex: 1,
    explanation:
      'The JDK includes a tool called ‘javac’ that compiles from Java source code to a target of Java bytecodes. The program ‘java’ is used to execute Java bytecode.',
  },
  {
    id: 'a1-q6',
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 6,
    question:
      'In Java, what is the role of the public static void main(String[] args) method?',
    options: [
      'Initialization method',
      'Execution entry point',
      'Constructor',
      'Destructor',
    ],
    correctIndex: 1,
    explanation:
      'The public static void main(String[] args) method is the entry point for the execution of a Java program.',
  },
  {
    id: 'a1-q7',
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 7,
    question:
      'Which of the following is not a feature of Java?',
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
    id: 'a1-q8',
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 8,
    question:
      'What is the primary purpose of the Java Virtual Machine (JVM) in the Java programming language?',
    options: [
      'Graphical User Interface',
      'Platform independence',
      'Code Debugging',
      'Game Engine',
    ],
    correctIndex: 1,
    explanation:
      'The Java Virtual Machine (JVM) enables platform independence by interpreting Java bytecode, allowing Java programs to run on any device with a compatible JVM.',
  },
  {
    id: 'a1-q9',
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 9,
    question:
      'Consider the following program.\nWhat is the output of the above code?',
    code: `public class Question {
    public static void main(String[] args) {
        int x = 5;
        x *= (2 + 8);
        System.out.println(x);
    }
}`,
    options: [
      '50',
      '10',
      '0',
      '5',
    ],
    correctIndex: 0,
    explanation:
      'Here, x *= (2 + 8) is equivalent to x = x * (2 + 8), which results in x = x * 10. Therefore, x = 5 * 10 => x = 50.',
  },
  {
    id: 'a1-q10',
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 10,
    question:
      'Which of the following is true regarding how Java handles code execution?',
    options: [
      'Java uses only interpreter.',
      'Java uses only compiler.',
      'Java uses both interpreter and compiler.',
      'None of the above.',
    ],
    correctIndex: 2,
    explanation:
      'Creating a .class file from .java using the javac command is a compilation task, whereas execution of a .class file using java is the process of interpretation.',
  },
  // ============================================================================
  // ASSIGNMENT 02 (NOC26-CS36 Jan-2026 25S) — W02 / NOC26-CS153 (July-2026 26A)
  // ============================================================================
  {
    id: 'a2-q1',
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 1,
    question:
      'What is the correct signature of the main method in Java?',
    options: [
      'public static void main(String[] args)',
      'public void main(String args[])',
      'void main(String[] args)',
      'public static void main(Sting [])',
    ],
    correctIndex: 0,
    explanation:
      'The main method in Java must be declared as public static void main(String[] args) to be recognized by the JVM as the entry point of the program. The public modifier allows the method to be accessible from anywhere, static ensures it can be called without creating an instance of the class, and String[] args is the parameter used for command-line arguments.\nNote: Please refer to the book Joy with Java Chapter 3 for more detailed explanation.',
  },
  {
    id: 'a2-q2',
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 2,
    question:
      'Consider the code given below.\nWhat will be the output of the above Java program?',
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
    options: [
      '30 99 178',
      '30 88 129',
      '30 99 187',
      '99 99 187',
    ],
    correctIndex: 2,
    explanation:
      'If you perform any change for instance variable these changes won’t be reflected for the remaining objects. Because for every object a separate copy of instance variable will be there. But if you do any change to the static variable, that change will be reflected for all objects because a static instance maintains a single copy in memory.\nPlease refer to chapter 3 of book Joy With Java for a more detailed explaination.',
  },
  {
    id: 'a2-q3',
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 3,
    question:
      'Consider the code given below.\nWhat will be the output of the code given above?',
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
      '839 45foo45 9foo',
      '9 7 7 foo34 34foo',
      '72 34 34 foo34 34foo',
      '839 45foo45 9foo9',
    ],
    correctIndex: 0,
    explanation:
      'Here, print() methods internally converts the data in its argument into a String object and then print the composition. Here, + is the concatenation of different String representation.\nPlease refer to chapter 3 of book Joy With Java for a more detailed explaination.',
  },
  {
    id: 'a2-q4',
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 4,
    question:
      'Which keyword is used in Java to refer to the current object?',
    options: [
      'this',
      'that',
      'self',
      'current',
    ],
    correctIndex: 0,
    explanation:
      'In Java, the this keyword is used to refer to the current object within an instance method or a constructor. Refer to Lecture 8 for more details.',
  },
  {
    id: 'a2-q5',
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 5,
    question:
      'Which of the following is true about constructors in a class?',
    options: [
      'Constructors do not have a return type.',
      'Constructors aren’t used to initialize objects.',
      'A class can have only one constructor.',
      'Constructors cannot be overloaded.',
    ],
    correctIndex: 0,
    explanation:
      'A constructor is a special method in a class that is automatically called when an object of the class is created. Its main purpose is to initialize the object\'s properties (variables). Unlike other methods, constructors:\n● Have the same name as the class.\n● Do not have a return type, not even void. A class can have multiple constructors with different parameter lists (constructor overloading) to allow flexibility in object creation.\nPlease refer book Joy with Java Chapter 3 for mored etailed explaination.',
  },
  {
    id: 'a2-q6',
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 6,
    question:
      'Consider the following code snippet\nWhat will be the output of the code given above?',
    code: `class NPTEL_W2 {
    int x;

    NPTEL_W2(int x) {
        this.x = x;
    }

    void printX() {
        System.out.println(this.x);
    }

    public static void main(String[] args) {
        NPTEL_W2 obj = new NPTEL_W2(000);
        obj.printX();
    }
}`,
    options: [
      '0',
      '10',
      '100',
      'Runtime error',
    ],
    correctIndex: 0,
    explanation:
      'The constructor NPTEL_W2 (int x) initializes the instance variable x with the value passed as an argument. The method printX() prints the value of x, which is 0. Refer to Lecture 7 for more details.',
  },
  {
    id: 'a2-q7',
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 7,
    question:
      'Consider the code snippet give below.\n(\\n in output is to be assumed to be the new line character)\nWhat will be the output of the code given above?',
    code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello");
        System.out.println("World");
        System.out.printf("Number: %d", 10);
    }
}`,
    options: [
      'Hello World\\nNumber: 10',
      'Hello WorldNumber: 10',
      'Hello\\nWorld\\nNumber: 10',
      'Hello World\\nNumber: 10\\n',
    ],
    correctIndex: 2,
    explanation:
      'The print method prints text without a newline, println prints text with a newline, and printf prints formatted text. The output is Hello World on the first line and Number: 10 on the second line. Refer to Lecture 10 for more details.',
  },
  {
    id: 'a2-q8',
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 8,
    question:
      'Which class is used in Java to take runtime data input from the user?',
    options: [
      'BufferReader',
      'UserInputStreamReader',
      'Scanner',
      'DataInputStreamReader',
    ],
    correctIndex: 2,
    explanation:
      'The Scanner class is used to take runtime data input from the user. It provides methods to read various types of input such as strings, integers, and floating-point numbers. Refer to Lecture 9 for more details.',
  },
  {
    id: 'a2-q9',
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 9,
    question:
      'How do you read a line of text from the console using the Scanner class in Java?',
    options: [
      'scanner.readLine()',
      'scanner.nextLine()',
      'scanner.getLine()',
      'scanner.fetchLine()',
    ],
    correctIndex: 1,
    explanation:
      'The nextLine() method of the Scanner class reads a line of text from the console. Refer to Lecture 10 for more details.',
  },
  {
    id: 'a2-q10',
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 10,
    question:
      'Which of the following is the correct way to declare a class in Java?',
    options: [
      'public class MyClass {}',
      'class MyClass[] {}',
      'public MyClass class {}',
      'MyClass public class {}',
    ],
    correctIndex: 0,
    explanation:
      'The correct way to declare a class in Java is by using the class keyword followed by the class name and curly braces. Refer to Lecture 7 for more details.',
  },
  // ============================================================================
  // ASSIGNMENT 03 (NOC26-CS36 Jan-2026 25S)
  // ============================================================================
  {
    id: 'a3-q1',
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 1,
    question:
      'Which of the following statements is true regarding the order of execution of constructors in an inheritance hierarchy?',
    options: [
      'Derived class constructor will be called followed by the base class constructor.',
      'Only Base class constructor will be called.',
      'Only derived class constructor will be called.',
      'Base class constructor will be called followed by the derived class constructor.',
    ],
    correctIndex: 3,
    explanation:
      "On object creation of a derived class, Java ensures that the base (parent) class constructor is executed first to initialize the parent's state before executing the derived class constructor.",
  },
  {
    id: 'a3-q2',
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 2,
    question: 'The super() method is used to:',
    options: [
      'Call constructor of friend class',
      'Call constructor of the parent class',
      'Call constructor',
      'Is a declared method',
    ],
    correctIndex: 1,
    explanation:
      "In Java, `super()` is used to invoke the constructor of the immediate parent class. It allows the subclass to initialize the parent class's state.",
  },
  {
    id: 'a3-q3',
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 3,
    question: 'What is the output of the following Java program?',
    code: `class Vehicle {
    public void move() {
        System.out.println("The vehicle moves");
    }
}

class Car extends Vehicle {
    public void move() {
        System.out.println("The car moves");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle vehicle = new Car();
        vehicle.move();
    }
}`,
    options: [
      '"The vehicle moves"',
      '"The car moves"',
      'The code does not compile',
      'None of the above',
    ],
    correctIndex: 1,
    explanation:
      'This is an example of method overriding. Since the object is instantiated as a `Car`, the overridden `move` method in the `Car` class is executed, even though the reference type is `Vehicle`.',
  },
  {
    id: 'a3-q4',
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 4,
    question: 'Which of the following is NOT true regarding the final keyword in Java?',
    options: [
      'A final method cannot be overridden in a subclass.',
      'A final variable can only be assigned once.',
      'A final class can have subclasses.',
      'A final variable can be assigned during declaration or in the constructor.',
    ],
    correctIndex: 2,
    explanation:
      'A class marked as `final` cannot be extended, meaning it cannot be subclassed (it cannot have any child classes).',
  },
  {
    id: 'a3-q5',
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 5,
    question: 'Which type of inheritance leads to the "Diamond Problem"?',
    options: ['Single level', 'Multi-level', 'Multiple', 'Hierarchical'],
    correctIndex: 2,
    explanation:
      'The diamond problem arises in multiple inheritance when a class inherits from two classes that have a common ancestor, leading to ambiguity regarding which path to follow for inherited members. Java avoids this by not supporting multiple inheritance with classes.',
  },
  {
    id: 'a3-q6',
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 6,
    question:
      'Members of a class which are not intended to be inherited by subclasses should be declared as:',
    options: [
      'Public members',
      'Protected members',
      'Private members',
      'Private or Protected members',
    ],
    correctIndex: 2,
    explanation:
      'The `private` access specifier is the most restrictive. Private members are not visible to subclasses and therefore are not inherited.',
  },
  {
    id: 'a3-q7',
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 7,
    question: 'In Java, is it possible to override a static method?',
    options: [
      'Yes, we can override a static method just like we do with instance methods.',
      'No, static methods cannot be overridden because they belong to the class, not the object.',
      'It depends on whether the static method is declared as final or not.',
      'It depends on the access modifier of the static method.',
    ],
    correctIndex: 1,
    explanation:
      'Static methods are bound to the class rather than the instance (static binding). If a subclass defines a static method with the same signature, it "hides" the parent method rather than overriding it.',
  },
  {
    id: 'a3-q8',
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 8,
    question: 'What is the output of the following Java program?',
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
      'The `fun` method is a recursive function calculating the factorial of `n`. For input 5, it calculates 5 * 4 * 3 * 2 * 1 = 120.',
  },
  {
    id: 'a3-q9',
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 9,
    question: 'Which of the following statements about abstract classes in Java is correct?',
    options: [
      'Abstract classes can be instantiated directly.',
      'An abstract class must contain at least one abstract method.',
      'A class inheriting from an abstract class must implement all its abstract methods unless it is itself abstract.',
      'Abstract classes can be marked as final.',
    ],
    correctIndex: 2,
    explanation:
      'Abstract classes cannot be instantiated. Any concrete subclass (non-abstract) must provide implementations for all abstract methods defined in the parent abstract class.',
  },
  {
    id: 'a3-q10',
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 10,
    question: 'What will be the output of the below program?',
    code: `class superDemoClass {
    final int a = 20;
}

class subDemoClass extends superDemoClass {
    void subFunc() {
        a = 40;
        System.out.println("value of a = " + a);
    }
}

class demo {
    public static void main(String[] args) {
        subDemoClass subc = new subDemoClass();
        subc.subFunc();
    }
}`,
    options: [
      'value of a = 20',
      'error: cannot assign a value to final variable a',
      "error: unknown variable 'a' in class subDemoClass",
      'value of a = 40',
    ],
    correctIndex: 1,
    explanation:
      'The variable `a` is declared as `final` in the superclass. While it is inherited, its value cannot be modified (re-assigned) by the subclass, causing a compilation error.',
  },

  // ============================================================================
  // ASSIGNMENT 04 (NOC26-CS36 Jan-2026 25S) — W04 / NOC26-CS153 (July-2026 26A)
  // ============================================================================
  {
    id: 'a4-q1',
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 1,
    question:
      'What is the process by which we can control what parts of a program can access the members of a class?',
    options: [
      'Polymorphism',
      'Augmentation',
      'Encapsulation',
      'Recursion',
    ],
    correctIndex: 2,
    explanation:
      'Encapsulation in Java is the process by which data (variables) and the code that acts upon them (methods) are integrated as a single unit. By encapsulating a class\'s variables, other classes cannot access them, and only the methods of the class can access them.',
  },
  {
    id: 'a4-q2',
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 2,
    question:
      'Consider the program given below.\nWhat will be the output if the program is executed?',
    code: `public class Main{
    public static void main(String args[]){
        System.out.println(cos(2*PI));
    }
}`,
    options: [
      'It will give compile-time error',
      'It will give run-time error',
      '1.0',
      '3.14',
    ],
    correctIndex: 0,
    explanation:
      'The program gives a compile time error as the Math class is missing.\nThe static import statement needs to be used to import the static members (e.g., PI) of java.lang.Math.\nimport static java.lang.Math.*;\nThis will allow the program to use PI directly.',
  },
  {
    id: 'a4-q3',
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 3,
    question:
      'Consider the following code:\nWhat will be the output of the code given above?',
    code: `class Person {
    int a = 1;
    int b = 1;
    public Person() {
        System.out.print(a * b + "Java" + a);
    }
}

class Employee extends Person {
    int a = 0;
    int b = 1;
    public Employee() {
        System.out.print(a + b + "Java" + a);
    }
}

public class Question {
    public static void main(String args[]) {
        Person p = new Employee();
    }
}`,
    options: [
      '1Java11Java0',
      '1Java10Java0',
      '10Java0Java',
      '0Java11Java0',
    ],
    correctIndex: 0,
    explanation:
      'If no super() or this() is included explicitly within the derived class constructor, the super() is implicitly invoked by the compiler. Therefore, in this case, the Person class constructor is called first and then the Employee class constructor is called. Up casting is allowed.',
  },
  {
    id: 'a4-q4',
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 4,
    question:
      'In Java, can a subclass in a different package access a superclass’s protected method?',
    options: [
      'Yes, without any restrictions.',
      'Yes, but only if they are in the same package.',
      'No, protected methods are not accessible by subclasses.',
      'Yes, but only through inheritance (i.e., using super or this, not via an object)',
    ],
    correctIndex: 3,
    explanation:
      '-  A subclass in a different package can access protected members only through inheritance (directly via super or this).\n-  It cannot access the superclass’s protected method via an instance of the superclass.\n-  Protected also allows access to classes in the same package without subclassing, but that’s not the case here.',
  },
  {
    id: 'a4-q5',
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 5,
    question:
      'A package is a collection of:',
    options: [
      'Only classes',
      'Only interfaces',
      'editing tools',
      'classes,methods and interfaces',
    ],
    correctIndex: 3,
    explanation:
      'In Java (and many other object-oriented languages), a package is a namespace that organizes a set of related classes, interfaces, and methods.',
  },
  {
    id: 'a4-q6',
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 6,
    question:
      'Consider the following 2 programs:\nChoose the best option among the following for the code snippet given above',
    code: `// Main1.java ------------------
public class Main1{
    public static void main(String args[]){
        int number = 10;
        System.out.println(number++ + ++number);
    }
}`,
    secondaryCode: `// Main2.java ------------------
public class Main2{
    public static void main(String args[]){
        int number = 10;
        System.out.println(++number + number++);
    }
}`,
    options: [
      'Both pre-increment and post-increment operators becomes pre-increment during print.',
      'Both pre-increment and post-increment operators becomes post-increment during print.',
      'Both Main1 and Main2 classes give the same output (but can depend on the compiler).',
      'Pre-increment and post-increment operators don’t work during print.',
    ],
    correctIndex: 2,
    explanation:
      'The output of both the program are 22 (but can depend on the compiler). Therefore, option c is correct and we can eliminate option d that the operators don’t work. Further, the operators are doing exactly what they are supposed to do i.e. pre-increment first increases the values and post-increment increases the value during the next operation. The print statement is the next operation; hence it received the post incremented value as well making option a and b invalid.',
  },
  {
    id: 'a4-q7',
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 7,
    question:
      'Consider the following program:\nHow many errors does this program contain?',
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
    options: [
      'None',
      '1',
      '2',
      '3',
    ],
    correctIndex: 1,
    explanation:
      'This code has one error:\n1. Incorrect visibility of `main` method:\nThe `main` method is defined as `private static void main(String[] args)`. The `main` method must be `public static void main(String[] args)` to be recognized as the entry point of the program by the Java Virtual Machine (JVM).',
  },
  {
    id: 'a4-q8',
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 8,
    question:
      'Consider the code given below.\nWhat is the output of the above Java Code Snippet with protected access modifier?',
    code: `// Teacher.java ------------------
package nptel1;
public class Teacher {
  protected void showMarks() {
    System.out.println("100 Marks");
  }
}`,
    secondaryCode: `// Student.java ------------------
package nptel2;
import nptel1.*;
public class Student extends Teacher {
  void show() {
    showMarks();
  }
  public static void main(String[] args) {
    Student st1 = new Student();
    st1.show();
  }
}`,
    options: [
      '100 marks',
      'No output',
      'Compiler error',
      'None of the above',
    ],
    correctIndex: 0,
    explanation:
      'Through inheritance, one can access a protected variable or method of a class even from outside the package. Here, we accessed Teacher class of nptel1 from Student class of nptel2.',
  },
  {
    id: 'a4-q9',
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 9,
    question:
      'Choose the correct syntax of a Java Package below.',
    options: [
      'package PACKAGE_NAME;',
      'package PACKAGE_NAME.*;',
      'pkg PACKAGE_NAME;',
      'pkg PACKAGE_NAME.*;',
    ],
    correctIndex: 0,
    explanation:
      'A package declaration statement should end with a package name but not with *.',
  },
  {
    id: 'a4-q10',
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 10,
    question:
      'Which of these access specifiers must be used for main() method?',
    options: [
      'private',
      'public',
      'protected',
      'default',
    ],
    correctIndex: 1,
    explanation:
      'main() method must be specified public as it called by Java run time system, outside of the program. If no access specifier is used then by default member is public within its own package & cannot be accessed by Java run time system.',
  },

];
