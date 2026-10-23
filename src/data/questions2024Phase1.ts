import { QuizQuestion } from './types';

export const questions2024Phase1: QuizQuestion[] = [
  // ============================================================================
  // 2024 ASSIGNMENT 01
  // ============================================================================
  {
    id: '2024-a1-q1',
    year: 2024,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC24-CS36',
    questionNumber: 1,
    question: 'What is the primary focus of Java programming?',
    options: [
      'Low-level optimizations',
      'Hardware-specific operations',
      'Platform independence',
      'Assembly language programming',
    ],
    correctIndex: 2,
    explanation:
      'Java\'s primary feature is its ability to run on any platform without modification, thanks to the concept of Write Once, Run Anywhere (WORA).',
  },
  {
    id: '2024-a1-q2',
    year: 2024,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC24-CS36',
    questionNumber: 2,
    question: 'Which of the following programming principles is a key aspect of Java?',
    options: [
      'Code obfuscation',
      'Platform dependence',
      'Object-oriented programming',
      'Global variables',
    ],
    correctIndex: 2,
    explanation:
      'Java is designed based on the principles of object-oriented programming, promoting concepts like encapsulation, inheritance, and polymorphism.',
  },
  {
    id: '2024-a1-q3',
    year: 2024,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC24-CS36',
    questionNumber: 3,
    question: 'What is the last step in the Java programming process?',
    options: [
      'Java Program Execution',
      'Java Program Editing',
      'Java Program Compilation',
      'C/C++ versus Java',
    ],
    correctIndex: 0,
    explanation:
      'The final step in the Java programming process is the execution of the compiled Java program on the Java Virtual Machine (JVM).',
  },
  {
    id: '2024-a1-q4',
    year: 2024,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC24-CS36',
    questionNumber: 4,
    question: 'Which of the following is NOT a Java programming tool?',
    options: [
      'Eclipse',
      'NetBeans',
      'IntelliJ IDEA',
      'GCC',
    ],
    correctIndex: 3,
    explanation:
      'GCC (GNU Compiler Collection) is not a Java-specific tool. It is commonly used for compiling C, C++, and other languages.',
  },
  {
    id: '2024-a1-q5',
    year: 2024,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC24-CS36',
    questionNumber: 5,
    question: 'What does the term "Write Once, Run Anywhere" (WORA) imply in Java?',
    options: [
      'Code reusability',
      'Platform independence',
      'Cross-compilation',
      'Dynamic typing',
    ],
    correctIndex: 1,
    explanation:
      '"Write Once, Run Anywhere" (WORA) is a key concept in Java, indicating that code writen in Java can run on any platform without modification.',
  },
  {
    id: '2024-a1-q6',
    year: 2024,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC24-CS36',
    questionNumber: 6,
    question: 'In Java, what is used to store multiple values of the same type?',
    options: [
      'Structures',
      'Pointers',
      'Arrays',
      'Lists',
    ],
    correctIndex: 2,
    explanation:
      'Arrays in Java are used to store multiple values of the same type in a single variable.',
  },
  {
    id: '2024-a1-q7',
    year: 2024,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC24-CS36',
    questionNumber: 7,
    question: 'Which of the following is a valid identifier in Java?',
    options: [
      '123identifier',
      '_identifier',
      '#identifier',
      'identifier-123',
    ],
    correctIndex: 1,
    explanation:
      'Identifiers in Java can start with a leter, underscore (_), or dollar sign ($).',
  },
  {
    id: '2024-a1-q8',
    year: 2024,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC24-CS36',
    questionNumber: 8,
    question: 'What is the purpose of Java Language Subset?',
    options: [
      'To limit the capabilities of Java',
      'To make Java code compatible with other languages',
      'To define a smaller set of Java features for specific purposes',
      'To enhance the performance of Java programs',
    ],
    correctIndex: 2,
    explanation:
      'Java Language Subset is a set of features tailored for specific purposes, limiting the use of certain Java features.',
  },
  {
    id: '2024-a1-q9',
    year: 2024,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC24-CS36',
    questionNumber: 9,
    question: 'What is the primary purpose of the Java Virtual Machine (JVM) in the Java programming language?',
    options: [
      'Code optimization',
      'Platform independence',
      'Memory management',
      'Hardware-specific operations',
    ],
    correctIndex: 1,
    explanation:
      'The Java Virtual Machine (JVM) enables platform independence by interpreting Java bytecode, allowing Java programs to run on any device with a compatible JVM.',
  },
  {
    id: '2024-a1-q10',
    year: 2024,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC24-CS36',
    questionNumber: 10,
    question: 'What is emphasized during the Java Program Editing phase?',
    options: [
      'Writing platform-specific code',
      'Debugging the program',
      'Compiling the program',
      'Writing and modifying the source code',
    ],
    correctIndex: 3,
    explanation:
      'Java Program Editing involves writing and modifying the source code to implement the desired functionality before compilation.',
  },

  // ============================================================================
  // 2024 ASSIGNMENT 02
  // ============================================================================
  {
    id: '2024-a2-q1',
    year: 2024,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC24-CS36',
    questionNumber: 1,
    question: 'In Java programming an object can take many forms. This feature called ______.',
    options: [
      'Abstraction',
      'Polymorphism',
      'Encapsulation',
      'Inheritance',
    ],
    correctIndex: 1,
    explanation:
      'Polymorphism means "many forms", and it occurs when we have many classes that are related to each other by inheritance. Object variables (instance variables) represent the behavior of polymorphic variables in Java. It is because object variables of a class can refer to objects of its class as well as objects of its subclasses.',
  },
  {
    id: '2024-a2-q2',
    year: 2024,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC24-CS36',
    questionNumber: 2,
    question: 'Which of the following is a valid declaration of an object of class, say NPTEL?',
    options: [
      'NPTEL obj = new NPTEL ();',
      'NPTEL obj = new NPTEL;',
      'obj = new NPTEL ();',
      'new NPTEL obj;',
    ],
    correctIndex: 0,
    explanation:
      'The correct syntax for declaring an object is: <class_name> <object_name> = new <class_name>(). So the correct declaration of an object named obj is: NPTEL obj = new NPTEL(); Others are invalid declarations.',
  },
  {
    id: '2024-a2-q3',
    year: 2024,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC24-CS36',
    questionNumber: 3,
    question: 'A default constructor:',
    options: [
      'has no arguments',
      'has no return type',
      'has one argument but no return type',
      'has two arguments',
    ],
    correctIndex: 0,
    explanation:
      'A default constructor is a constructor created by the compiler if we do not define any constructor(s) for a class. A constructor is called "Default Constructor" when it doesn\'t have any parameter. The Syntax of default constructor: <class_name>(){} . The default constructor is used to provide the default values to the object like 0, null, etc., depending on the type. Example: class NPTEL { //creating a default constructor NPTEL() { System.out.println("Programming in Java"); } //main method public static void main(String args[]) { //calling a default constructor NPTEL obj = new NPTEL(); } } Output: "Programming in Java"',
  },
  {
    id: '2024-a2-q4',
    year: 2024,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC24-CS36',
    questionNumber: 4,
    question: 'A top-level class may have which one of the following access modifiers?',
    options: [
      'package',
      'private',
      'protected',
      'public',
    ],
    correctIndex: 3,
    explanation:
      'At the top level only public, or package-private (no explicit modifier) access modifier is allowed in Java. For top level class only two access modifiers are allowed: public and default. If a class is declared as public it is visible everywhere. If a class is declared default it is visible only in same package.',
  },
  {
    id: '2024-a2-q5',
    year: 2024,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC24-CS36',
    questionNumber: 5,
    question: 'Integer in Java is a\\an _______.',
    options: [
      'Adapter class',
      'Inner class',
      'Not a class',
      'Wrapper class',
    ],
    correctIndex: 3,
    explanation:
      'Byte, Short, Integer, Long, Character, Boolean, Double, Float are called wrapper class in Java.',
  },
  {
    id: '2024-a2-q6',
    year: 2024,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC24-CS36',
    questionNumber: 6,
    question: 'What is true about the new operator?',
    options: [
      'returns a pointer to a variable',
      'creates a variable called new',
      'obtains memory for a new variable',
      'tells how much memory is available',
    ],
    correctIndex: 2,
    explanation:
      'The new operator is used in Java to create new objects. It can also be used to create an array object. The new operator instantiates a class by allocating memory for a new object and returning a reference to that memory. The new operator also invokes the object constructor. It is used for dynamic memory allocation which puts variables on heap memory.',
  },
  {
    id: '2024-a2-q7',
    year: 2024,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC24-CS36',
    questionNumber: 7,
    question: 'Which one is not supported by OOP?',
    options: [
      'Abstraction',
      'Polymorphism',
      'Encapsulation',
      'Global variables',
    ],
    correctIndex: 3,
    explanation:
      'Java does not support global variables. A global variable is one declared at the start of the code and is accessible to all parts of the program. Since Java is object-oriented, everything is part of a class. The intent is to protect data from being changed. A static variable can be declared, which can be available to all instances of a class.',
  },
  {
    id: '2024-a2-q8',
    year: 2024,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC24-CS36',
    questionNumber: 8,
    question: 'Which of the following modifiers can be used to disallow a method from being overridden?',
    options: [
      'final',
      'transient',
      'volatile',
      'static',
    ],
    correctIndex: 0,
    explanation:
      'The final keyword is a non-access modifier used for classes, atributes and methods, which makes them non-changeable (impossible to inherit or override). The final keyword is useful when you want a variable to always store the same value, like PI (3.14159...).',
  },
  {
    id: '2024-a2-q9',
    year: 2024,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC24-CS36',
    questionNumber: 9,
    question: 'Consider the following code segment\nIdentify the line number(s) where there is/are error(s) in the above code.',
    code: `1  class Question{
2    public static void main(String args){
3         System.out.print("Welcome to NPTEL");
4    }
5 }`,
    options: [
      '1',
      '2',
      '3',
      '4 and 5',
    ],
    correctIndex: 1,
    explanation:
      'The String argument in the main method is an array hence the args should be changed to args[].',
  },
  {
    id: '2024-a2-q10',
    year: 2024,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC24-CS36',
    questionNumber: 10,
    question: 'Which of the following is TRUE about print() and println() methods?',
    options: [
      'print() prints in a single line only and multiple lines cannot be printed in any way.',
      'println() prints and then appends a line break.',
      'println() prints in a single line only and multiple lines cannot be printed.',
      'print() prints and then appends a line break.',
    ],
    correctIndex: 1,
    explanation:
      'Method print() can be used to print in a single line only but multiple lines can be printed using escape sequence \'\\n\'. Similarly, println() prints in a single line only and multiple lines can be printed using escape sequence \'\\n\'. Method print() prints but does not appends a line break. So, option (b) println() prints and then appends a line break is the only correct option.',
  },

  // ============================================================================
  // 2024 ASSIGNMENT 03
  // ============================================================================
  {
    id: '2024-a3-q1',
    year: 2024,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC24-CS36',
    questionNumber: 1,
    question: 'Which of the following statement is true regarding the order of execution of constructors in an inheritance hierarchy?',
    options: [
      'Base class constructor will be called followed by the derived class constructor.',
      'Derived class constructor will be called followed by the base class constructor.',
      'Only Base class constructor will be called.',
      'Only derived class constructor will be called.',
    ],
    correctIndex: 0,
    explanation:
      'On object creation of derived class, first base class constructor and then the derived class constructor will be called.',
  },
  {
    id: '2024-a3-q2',
    year: 2024,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC24-CS36',
    questionNumber: 2,
    question: 'The super() method is used to:',
    options: [
      'Call constructor of friend class',
      'Is a declared method',
      'Call constructor of the parent class',
      'Call constructor',
    ],
    correctIndex: 2,
    explanation:
      'In Java programming language, the super() is a reference variable that is used to refer parent class constructors. The super can be used to call parent class\'s variables and methods. The super() can be used to call parent class\' constructors only.',
  },
  {
    id: '2024-a3-q3',
    year: 2024,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC24-CS36',
    questionNumber: 3,
    question: 'What will be the output of the following Java program?',
    code: `class A {

  int i;

  void display() {
    System.out.println(i);
  }
}

class B extends A {

  int j;

  void display() {
    System.out.println(j);
  }
}

class inheritance_demo {

  public static void main(String args[]) {
    B obj = new B();
    obj.i = 1;
    obj.j = 2;
    obj.display();
  }
}`,
    options: [
      '0',
      '1',
      '2',
      'Compilation Error',
    ],
    correctIndex: 2,
    explanation:
      'Class A & class B both contain display() method, class B inherits class A, when display() method is called by object of class B, display() method of class B is executed rather than that of Class A.',
  },
  {
    id: '2024-a3-q4',
    year: 2024,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC24-CS36',
    questionNumber: 4,
    question: 'In Java, is it possible to override a static method?',
    options: [
      'Yes, we can override a static method just like we do with instance methods.',
      'No, static methods cannot be overridden because they belong to the class, not the object.',
      'It depends on whether the static method is declared as final or not.',
      'It depends on the access modifier of the static method.',
    ],
    correctIndex: 1,
    explanation:
      'In Java, a static method is bound to the class and not to the instance. Hence, it is not part of the state of the object and doesn\'t participate in polymorphism and dynamic dispatch, which are necessary for method overriding.',
  },
  {
    id: '2024-a3-q5',
    year: 2024,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC24-CS36',
    questionNumber: 5,
    question: 'What is the output of the following Java program?',
    code: `public class Vehicle {
    public void move() {
        System.out.println("The vehicle moves");
    }
}

public class Car extends Vehicle {
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
      'In Java, a subclass can override methods from its superclass. In this example, the Car class is overriding the move method of the Vehicle class. Since the object is instantiated as a Car, the overridden move method in the Car class is called, producing the output "The car moves"',
  },
  {
    id: '2024-a3-q6',
    year: 2024,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC24-CS36',
    questionNumber: 6,
    question: 'What is the output of the below Java program with inheritance?',
    code: `class Sweet {

  void price() {
    System.out.print("Sweet=$10 ");
  }
}

class Sugar extends Sweet {

  void price() {
    super.price();
    System.out.print("Sugar=$20");
  }
}

public class JavaInheritance1 {

  public static void main(String[] args) {
    Sugar su = new Sugar();
    su.price();
  }
}`,
    options: [
      'Sweet=$10 Sugar=$20',
      'Sweet=$10 Sugar=$10',
      'Sweet=$20 Sugar=$20',
      'Compiler error',
    ],
    correctIndex: 0,
    explanation:
      'Notice the use of the keyword "super". Using this keyword, you can call superclass\'s methods and variables.',
  },
  {
    id: '2024-a3-q7',
    year: 2024,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC24-CS36',
    questionNumber: 7,
    question: 'What is the purpose of method hiding in Java inheritance?',
    options: [
      'To prevent a subclass from inheriting methods',
      'To override superclass methods with new implementations',
      'To expose private methods of the superclass',
      'To define methods with the same name in both the superclass and subclass',
    ],
    correctIndex: 3,
    explanation:
      'Method hiding occurs when a subclass defines a static method with the same name as a static method in the superclass.',
  },
  {
    id: '2024-a3-q8',
    year: 2024,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC24-CS36',
    questionNumber: 8,
    question: 'What is the output of the following Java program?',
    code: `class Parent {

  String name = "parent";

  String message() {
    return "from parent";
  }
}

class Child extends Parent {

  String name = "child";

  String message() {
    return "from child";
  }
}

public class Main {

  public static void main(String[] args) {
    Parent p = new Child();
    System.out.println(p.name + " " + p.message());
  }
}`,
    options: [
      '"parent from parent"',
      '"child from child"',
      '"parent from child"',
      '"child from parent"',
    ],
    correctIndex: 2,
    explanation:
      'In Java, while methods are overridden (dynamic binding), variables are not overridden (static binding). Therefore, p.name refers to the Parent class variable, and p.message() refers to the Child class method.',
  },
  {
    id: '2024-a3-q9',
    year: 2024,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC24-CS36',
    questionNumber: 9,
    question: 'Can a class be marked as both "final" and "abstract" in Java?',
    options: [
      'Yes, but only if it has no methods.',
      'Yes, a class can be marked as both "final" and "abstract."',
      'No, a class cannot be both "final" and "abstract."',
      'Yes, but only if it is marked as "protected."',
    ],
    correctIndex: 2,
    explanation:
      'A class marked as "final" cannot be extended (subclassed), while an abstract class is meant to be extended. Therefore, they are contradictory modifiers.',
  },
  {
    id: '2024-a3-q10',
    year: 2024,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC24-CS36',
    questionNumber: 10,
    question: 'In Java, is it possible to override a static method?',
    options: [
      'Yes, we can override a static method just like we do with instance methods.',
      'No, static methods cannot be overridden because they belong to the class, not the object.',
      'It depends on whether the static method is declared as final or not.',
      'It depends on the access modifier of the static method.',
    ],
    correctIndex: 1,
    explanation:
      'In Java, a static method is bound to the class and not to the instance. Hence, it is not part of the state of the object and doesn\'t participate in polymorphism and dynamic dispatch, which are necessary for method overriding.',
  },

  // ============================================================================
  // 2024 ASSIGNMENT 04
  // ============================================================================
  {
    id: '2024-a4-q1',
    year: 2024,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC24-CS36',
    questionNumber: 1,
    question: 'Which is the keyword used to specify the default access modifier in java?',
    options: [
      'default',
      'DEFAULT',
      'package',
      '"There is no keyword"',
    ],
    correctIndex: 3,
    explanation:
      'If you do not specify any access modifier before a variable or method, it is considered to be declared under the default access modifier.',
  },
  {
    id: '2024-a4-q2',
    year: 2024,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC24-CS36',
    questionNumber: 2,
    question: 'What is the output of the Java program with access modifiers?',
    code: `package nptel1;

public class ProgrammingInJava {

  public String week = "FOUR";
}
// ---------------
package nptel2;

import nptel1;

public class Course {

  public static void main(String[] args) {
    ProgrammingInJava java = new ProgrammingInJava();
    System.out.println(java.week);
  }
}`,
    options: [
      'FOUR',
      'Runtime Error',
      'null',
      'Compiler Error',
    ],
    correctIndex: 3,
    explanation:
      'In order to use instance variables, one should import either a specific Class or all Classes of a Java Package. So, without using import nptel1.*; or import nptel1.ProgrammingInJava; there will be a compiler error: ProgrammingInJava cannot be resolved to a type.',
  },
  {
    id: '2024-a4-q3',
    year: 2024,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC24-CS36',
    questionNumber: 3,
    question: 'What is the output of the below Java Code Snippet with access modifiers?',
    code: `package nptel1;

public class ProgrammingInJava {

  int weeks = 12; // course duration
}

// ------------------
package nptel1;

public class Course {

  public static void main(String[] args) {
    ProgrammingInJava obj = new ProgrammingInJava();
    System.out.println("Weeks = " + obj.weeks);
  }
}`,
    options: [
      'Weeks = 0',
      'Weeks = 12',
      'No Error, blank output',
      'Compiler error',
    ],
    correctIndex: 1,
    explanation:
      'The default variables or methods of class can be called inside any class of the same Package.',
  },
  {
    id: '2024-a4-q4',
    year: 2024,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC24-CS36',
    questionNumber: 4,
    question: 'Which of the following is the correct representation of access modifiers in order of increasing visibility?',
    options: [
      'private < default < protected < public',
      'private < protected < default < public',
      'public < protected < default < private',
      'protected < default < private < public',
    ],
    correctIndex: 0,
    explanation:
      'Here\'s the order of the access modifiers from the least restrictive to the most restrictive: public > protected > default > private Thus, the correct representation of access modifiers in order of increasing visibility: private < default < protected < public',
  },
  {
    id: '2024-a4-q5',
    year: 2024,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC24-CS36',
    questionNumber: 5,
    question: 'Which of the following package stores all the standard java classes?',
    options: [
      'java.util',
      'java.lang',
      'java.java',
      'java.packages',
    ],
    correctIndex: 1,
    explanation:
      'In Java, two packages java.lang package and a no-name package (also called default package) are imported by default in all the classes of Java. Default Package doesn\'t have a name but it is present by default and thus, it is named the default package. Java Virtual Machine imports these packages by default in Java internally. And that is the reason we are able to access all the classes of these packages. We are not required to explicitly import java.lang package or any of its classes like we import other packages and their classes such as java.math or java.util.',
  },
  {
    id: '2024-a4-q6',
    year: 2024,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC24-CS36',
    questionNumber: 6,
    question: 'Which of the following is/are true about packages in Java?\n1. Every class is part of some package.\n2. All classes in a file are part of the same package.\n3. If no package is specified, the classes in the file go into a special unnamed package.\n4. If no package is specified, a new package is created with folder name of class and the class is put in this package.',
    options: [
      'Only 1, 2 and 3',
      'Only 1, 2 and 4',
      'Only 4',
      'Only 1 and 3',
    ],
    correctIndex: 0,
    explanation:
      'In Java, a package can be considered as equivalent to C++ language\'s namespace. Thus, every class is part of some package. All classes in a file are part of the same package. If no package is specified, the classes in the file go into a special unnamed package.',
  },
  {
    id: '2024-a4-q7',
    year: 2024,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC24-CS36',
    questionNumber: 7,
    question: 'What is the output of following Java program?',
    code: `import static java.lang.System.*;

class ProgrammingInJava {

  public static void main(String args[]) {
    out.println("Welcome!");
  }
}`,
    options: [
      'Compiler Error',
      'Runtime Error',
      'Welcome!',
      'None of the above',
    ],
    correctIndex: 2,
    explanation:
      'Static import is a feature introduced in Java programming language (versions 5 and above) that allows members (fields and methods) defined in a class as public static to be used in Java code without specifying the class in which the field is defined. The only time we need to pay atention to packages is when we have a name conflict . For example both, java.util and java.sql packages have a class named Date. So if we import java.util.*; and import java.sql.*; then the compiler will not be able to figure out which Date class do we want.',
  },
  {
    id: '2024-a4-q8',
    year: 2024,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC24-CS36',
    questionNumber: 8,
    question: 'Which of these access specifiers can be used for an interface?',
    options: [
      'Public',
      'Protected',
      'private',
      'All of the mentioned',
    ],
    correctIndex: 0,
    explanation:
      'Access specifier of an interface is either public or no specifier. When no access specifier is used then default access specifier is used due to which interface is available only to other members of the package in which it is declared, when declared public it can be used by any code.',
  },
  {
    id: '2024-a4-q9',
    year: 2024,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC24-CS36',
    questionNumber: 9,
    question: 'Which of the following is the correct way of implementing an interface NPTEL by class Java?',
    options: [
      'class Java extends NPTEL {}',
      'class Java implements NPTEL {}',
      'class Java imports NPTEL {}',
      'none of the mentioned',
    ],
    correctIndex: 1,
    explanation:
      'interface is inherited by a class using implements.',
  },
  {
    id: '2024-a4-q10',
    year: 2024,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC24-CS36',
    questionNumber: 10,
    question: 'What will be the output of the following Java program?',
    code: `interface calculate {
  void cal(int item);
}

class display implements calculate {
  int x;

  public void cal(int item) {
    x = item * item;
  }
}

class interfaces {
  public static void main(String args[])
        {
            display arr = new display();
            arr.x = 0;
            arr.cal(2);
            System.out.print(arr.x);
        }
}`,
    options: [
      '0',
      '2',
      '4',
      'Compiler Error',
    ],
    correctIndex: 2,
    explanation:
      'There is no error in the program and the cal() function is called successfully, computes the square of item and stores in x. Which is successfully printed.',
  },
];
