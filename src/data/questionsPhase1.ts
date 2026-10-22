import { QuizQuestion } from './types';

export const questionsPhase1: QuizQuestion[] = [
  // ============================================================================
  // ASSIGNMENT 01 (NOC26-CS36 Jan-2026 25S)
  // ============================================================================
  {
    id: 'a1-q1',
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 1,
    question: 'Which of the following is true regarding how Java handles code execution?',
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
  {
    id: 'a1-q2',
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 2,
    question: "A Java file with extension '.class' contains:",
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
    question: 'Which of the following is NOT an object-oriented programming paradigm?',
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
    question: 'What is the correct sequence of steps to execute a Java program?',
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
    question: 'Which program is used to compile Java source code into bytecode?',
    options: ['javap', 'javac', 'java', 'javad'],
    correctIndex: 1,
    explanation:
      "The JDK includes a tool called 'javac' that compiles from Java source code to a target of Java bytecodes. The program 'java' is used to execute Java bytecode.",
  },
  {
    id: 'a1-q6',
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 6,
    question: 'In Java, what is the role of the public static void main(String[] args) method?',
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
    id: 'a1-q8',
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 8,
    question: 'What is the primary purpose of the Java Virtual Machine (JVM) in the Java programming language?',
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
    question: 'Consider the following program.\nWhat is the output of the above code?',
    code: `public class Question {
    public static void main(String[] args) {
        int x = 5;
        x *= (2 + 8);
        System.out.println(x);
    }
}`,
    options: ['50', '10', 'Compiler error', '5'],
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
    question: 'Consider the following program.\nWhat is the output of the above code?',
    code: `class NPTEL {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    options: ['Hello, World!', 'HelloWorld!', 'Compilation Error', 'Runtime Error'],
    correctIndex: 0,
    explanation:
      'This is the standard syntax for a Java program to print the string "Hello, World!" to the console.',
  },

  // ============================================================================
  // ASSIGNMENT 02 (NOC26-CS36 JAN-2026 25S)
  // ============================================================================
  {
    id: 'a2-q1',
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC26-CS36 (JAN-2026 25S)',
    questionNumber: 1,
    question: 'How do you read a line of text from the console using the Scanner class in Java?',
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
    id: 'a2-q2',
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC26-CS36 (JAN-2026 25S)',
    questionNumber: 2,
    question: 'What will be the output of the following Java program?',
    code: `public class VarPrint {
    int x = 30;
    static int y = 20;

    public static void main(String[] args) {
        VarPrint t1 = new VarPrint();
        t1.x = 99;
        t1.y = 88;
        int z1 = t1.x + t1.y;
        VarPrint t2 = new VarPrint();
        System.out.println(t2.x + " " + t2.y + " " + z1);
    }
}`,
    options: ['30 99 178', '30 88 129', '30 99 187', '30 88 187'],
    correctIndex: 3,
    explanation:
      'If you perform any change for instance variable these changes won’t be reflected for the remaining objects. Because for every object a separate copy of instance variable will be there. But if you do any change to the static variable, that change will be reflected for all objects because a static instance maintains a single copy in memory.\nPlease refer to chapter 3 of book Joy With Java for a more detailed explaination.',
  },
  {
    id: 'a2-q3',
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC26-CS36 (JAN-2026 25S)',
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
            System.out.print(a + b + "");
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
      '839 459foo45 9foo',
      '9 7 7 foo 7 7foo',
    ],
    correctIndex: 2,
    explanation:
      'Here, print() methods internally converts the data in its argument into a String object and then print the composition. Here, + is the concatenation of different String representation.\nPlease refer to chapter 3 of book Joy With Java for a more detailed explaination.',
  },
  {
    id: 'a2-q4',
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC26-CS36 (JAN-2026 25S)',
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
    id: 'a2-q5',
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC26-CS36 (JAN-2026 25S)',
    questionNumber: 5,
    question: 'Consider the following code snippet\nWhat will be the output of the code given above?',
    code: `class NPTEL_W2 {
    int x;

    NPTEL_W2(int x) {
        this.x = x+1;
    }

    void printX() {
        System.out.println(this.x);
    }

    public static void main(String[] args) {
        NPTEL_W2 obj = new NPTEL_W2(100);
        obj.printX();
    }
}`,
    options: ['0', '101', '100', 'Runtime error'],
    correctIndex: 1,
    explanation:
      'The constructor NPTEL_W2 (int x) initializes the instance variable x with the value passed as an argument. The method printX() prints the value of x, which is 101. Refer to Lecture 7 for more details.',
  },
  {
    id: 'a2-q6',
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC26-CS36 (JAN-2026 25S)',
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
    id: 'a2-q7',
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC26-CS36 (JAN-2026 25S)',
    questionNumber: 7,
    question: 'Which method is used as the starting point of execution in a Java program?',
    options: ['init method', 'start method', 'main method', 'run method'],
    correctIndex: 2,
    explanation:
      'You are encouraged to review the role of program execution flow in Java on your own.\nNote: Please refer to the book Joy with Java Chapter 3 for more detailed explanation.',
  },
  {
    id: 'a2-q8',
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC26-CS36 (JAN-2026 25S)',
    questionNumber: 8,
    question: 'Which of the following is used to display output in Java?',
    options: ['input', 'display', 'print', 'System'],
    correctIndex: 2,
    explanation:
      'The print method is used to display output on the screen in Java.\nIt is available through the System.out object.\nYou should practice identifying commonly used output statements.\nNote: Please refer to the book Joy with Java Chapter 3 for more detailed explanation.',
  },
  {
    id: 'a2-q9',
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC26-CS36 (JAN-2026 25S)',
    questionNumber: 9,
    question: 'Which symbol is used to end a statement in Java?',
    options: [':', '.', ';', ','],
    correctIndex: 2,
    explanation:
      'In Java, every statement must end with a semicolon.\nIt tells the compiler that the statement is complete.\nRevise Java syntax rules carefully.\nRefer to Joy with Java Chapter 2 for clarification.',
  },
  {
    id: 'a2-q10',
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC26-CS36 (JAN-2026 25S)',
    questionNumber: 10,
    question: 'Which of the following is a valid Java keyword?',
    options: ['number', 'class', 'include', 'define'],
    correctIndex: 1,
    explanation:
      'The class keyword is used to define a class in Java.\nJava keywords have predefined meanings.\nStudents should memorize basic Java keywords.\nNote: Please refer to chapter 3 of book Joy With Java for a more detailed explaination.',
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
  // ASSIGNMENT 04 (NOC25-CS57 JAN-2025 25S)
  // ============================================================================
  {
    id: 'a4-q1',
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC25-CS57 (JAN-2025 25S)',
    questionNumber: 1,
    question: 'Which access modifier allows access only inside the same package?',
    options: ['default', 'private', 'public', 'protected'],
    correctIndex: 0,
    explanation:
      'The default access modifier allows access within the same package only.\nIt is applied when no access modifier is written.\nRevise package-level access rules carefully.',
  },
  {
    id: 'a4-q2',
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC25-CS57 (JAN-2025 25S)',
    questionNumber: 2,
    question:
      'Which constructor is called first when an object of a child class is created? The method will be accessible.',
    options: [
      'Child class constructor',
      'Parent class constructor',
      'Interface constructor',
      'Package constructor',
    ],
    correctIndex: 1,
    explanation:
      'The parent class constructor is invoked first automatically.\nThis happens through an implicit call to super().\nRevisit inheritance basics and constructor order.',
  },
  {
    id: 'a4-q3',
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC25-CS57 (JAN-2025 25S)',
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
        System.out.println(""+a + b + " Java " );
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
      '1 Java\n01 Java',
      '1 java 1\n0 Java 0',
    ],
    correctIndex: 2,
    explanation:
      'If no super() or this() is included explicitly within the derived class constructor, the super() is implicitly invoked by the compiler. Therefore, in this case, the Person class constructor is called first and then the Employee class constructor is called. Up casting is allowed.',
  },
  {
    id: 'a4-q4',
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC25-CS57 (JAN-2025 25S)',
    questionNumber: 4,
    question: 'Which statement is used to use a class from another package?',
    options: ['package', 'include', 'import', 'extends'],
    correctIndex: 2,
    explanation:
      'The import statement allows access to classes from other packages.\nIt improves code readability and reuse.\nPractice basic import statements.',
  },
  {
    id: 'a4-q5',
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC25-CS57 (JAN-2025 25S)',
    questionNumber: 5,
    question: 'What keyword is used to define a package in Java?',
    options: ['define', 'package', 'import', 'namespace'],
    correctIndex: 1,
    explanation:
      'The `package` keyword is used in Java to define a package. For example, `package mypackage;` defines a package named `mypackage`.',
  },
  {
    id: 'a4-q6',
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC25-CS57 (JAN-2025 25S)',
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
    id: 'a4-q7',
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC25-CS57 (JAN-2025 25S)',
    questionNumber: 7,
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
      'Both Main1 and Main2 classes give the same output.',
      'Pre-increment and post-increment operators don’t work during print.',
    ],
    correctIndex: 2,
    explanation:
      'The output of both the program are 22. Therefore, option c is correct and we can eliminate option d that the operators don’t work. Further, the operators are doing exactly what they are supposed to do i.e. pre-increment first increases the values and post-increment increases the value during the next operation. The print statement is the next operation; hence it received the post incremented value as well making option a and b invalid.',
  },
  {
    id: 'a4-q8',
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC25-CS57 (JAN-2025 25S)',
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
    options: ['100 Marks', 'No output', 'Compiler error', 'None of the above'],
    correctIndex: 0,
    explanation:
      'Through inheritance, one can access a protected variable or method of a class even from outside the package. Here, we accessed Teacher class of nptel1 from Student class of nptel2.',
  },
  {
    id: 'a4-q9',
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC25-CS57 (JAN-2025 25S)',
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
    id: 'a4-q10',
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC25-CS57 (JAN-2025 25S)',
    questionNumber: 10,
    question: 'Which access modifier provides the most restrictive access in Java?',
    options: ['default', 'protected', 'private', 'public'],
    correctIndex: 2,
    explanation:
      'The `private` modifier provides the most restrictive access, allowing access only within the class where it is defined.',
  },
];
