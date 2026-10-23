import { QuizQuestion } from './types';

export const questions2023Phase1: QuizQuestion[] = [
  // ============================================================================
  // 2023 ASSIGNMENT 01
  // ============================================================================
  {
    id: '2023-a1-q1',
    year: 2023,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC23-CS36',
    questionNumber: 1,
    question: 'Which of the following is NOT a primitive data type in Java?',
    options: [
      'int',
      'boolean',
      'String',
      'char',
    ],
    correctIndex: 2,
    explanation:
      'String is not a primitive data type.',
  },
  {
    id: '2023-a1-q2',
    year: 2023,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC23-CS36',
    questionNumber: 2,
    question: 'Consider the following program.\nWhat is the output of the above code?',
    code: `public class Question{
 public static void main(String[] args){
 byte x = 127;
 x++;
 ++x;
 System.out.print(x);
 }
}`,
    options: [
      '127',
      '-127',
      '129',
      '2',
    ],
    correctIndex: 1,
    explanation:
      'Range of byte data in java is -128 to 127. But the byte data type in java is cyclic in nature.',
  },
  {
    id: '2023-a1-q3',
    year: 2023,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC23-CS36',
    questionNumber: 3,
    question: 'Which of the following concept that Java doesn\'t support?',
    options: [
      'inheritance',
      'encapsulation',
      'pointer',
      'array',
    ],
    correctIndex: 2,
    explanation:
      'Java does not support pointer.',
  },
  {
    id: '2023-a1-q4',
    year: 2023,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC23-CS36',
    questionNumber: 4,
    question: 'Which of the following is not a keyword in java?',
    options: [
      'import',
      'super',
      'method',
      'class',
    ],
    correctIndex: 2,
    explanation:
      'Here, import, super and class are reserved keywords in Java, which cannot be used for naming a variable or class.',
  },
  {
    id: '2023-a1-q5',
    year: 2023,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC23-CS36',
    questionNumber: 5,
    question: 'Consider the following program.\nWhat will be the output of the program if it is executed?',
    code: `public class Question{
 public static void main(String[] args){
int[] x = {12, 20, 015};
 for(int i = 0; i < x.length; i++){
System.out.print(x[i] + " ");  }
 }
}`,
    options: [
      '12 20 13',
      '12 20 15',
      '12 20 015',
      '12 20 F',
    ],
    correctIndex: 0,
    explanation:
      '015 is an octal number, its equivalent decimal number is 13.',
  },
  {
    id: '2023-a1-q6',
    year: 2023,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC23-CS36',
    questionNumber: 6,
    question: 'Match the following java terms with their descriptions?\nA. JDK 1. A software development kit that provides all the necessary tools and libraries to develop, compile, and run Java applications.\nB. JRE 2. A software package that provides the necessary runtime environment for executing Java applications.\nC. JVM 3. An abstract machine that executes java bytecode.\nChoose the correct option.',
    options: [
      'A-1 , B-2, C-3',
      'A-2 , B-3, C-1',
      'A-3, B-2 ,C-1',
      'A-3, B-1,C-2',
    ],
    correctIndex: 0,
    explanation:
      'Option a is correct.',
  },
  {
    id: '2023-a1-q7',
    year: 2023,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC23-CS36',
    questionNumber: 7,
    question: 'Consider the following program.\nWhat will be the output of the program if it is executed ?',
    code: `public class Question{
 public static void main(String[] args){
short x = 20;
 x = x * 2;
 System.out.print(x);  }
}`,
    options: [
      '20',
      '2',
      'Compiler error',
      '40',
    ],
    correctIndex: 2,
    explanation:
      'This will give compile error - "Lossy conversion from int to short".',
  },
  {
    id: '2023-a1-q8',
    year: 2023,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC23-CS36',
    questionNumber: 8,
    question: 'What is the output of the following code ?',
    code: `public class Question{
 public static void main(String[] args){
 boolean x = true;
 boolean y = false;
 boolean z=(x==y);
 System.out.println(z);
 }
}`,
    options: [
      'null',
      'true',
      'false',
      '1',
    ],
    correctIndex: 2,
    explanation:
      'Test by run.',
  },
  {
    id: '2023-a1-q9',
    year: 2023,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC23-CS36',
    questionNumber: 9,
    question: 'Which program is used to compile Java source code into bytecode?',
    options: [
      'javap',
      'javac',
      'java',
      'javad',
    ],
    correctIndex: 1,
    explanation:
      'The JDK includes a tool, \'javac\' that compiles from Java source code to a target of Java bytecodes. The program \'java\' is used to execute Java bytecode. Note that there is no program like \'javap\' and \'javad\'.',
  },
  {
    id: '2023-a1-q10',
    year: 2023,
    assignmentId: 1,
    assignmentLabel: 'Assignment 01',
    courseCode: 'NOC23-CS36',
    questionNumber: 10,
    question: 'Consider the following program.\nWhat will be the output of the program if it is executed ?',
    code: `public class Question{
 public static void main(String[] args){
 int x = 5;
 x *= (2 + 8);
 System.out.println(x);
 }
}`,
    options: [
      '50',
      '10',
      'Compiler error',
      '5',
    ],
    correctIndex: 0,
    explanation:
      'Here, x* = 2 + 8 is equivalent to x * (2+ 8) = x * 10. Therefore, x = 50.',
  },

  // ============================================================================
  // 2023 ASSIGNMENT 02
  // ============================================================================
  {
    id: '2023-a2-q1',
    year: 2023,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC23-CS36',
    questionNumber: 1,
    question: 'Consider the following code segment:\nIdentify the line number(s) where there is/are error(s) in the above code.',
    code: `1 class Question{
2 public static void main(String args){
3 System.out.print("Welcome to NPTEL");
4 }
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
    id: '2023-a2-q2',
    year: 2023,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC23-CS36',
    questionNumber: 2,
    question: 'Consider the following code segment:\nIdentify the line number(s) where there is error in the above code.',
    code: `1 class Question{
2 public static void main(String[] param){
3 System.out.print("Welcome to NPTEL");}}
4 }
5 }`,
    options: [
      '1',
      '2',
      '3',
      '4 and 5',
    ],
    correctIndex: 3,
    explanation:
      'The String argument in the main method can have any valid variable name, so line 2 have no error. The closing brackets in line 4 and 5 are extra as the scope is already ended in line 3.',
  },
  {
    id: '2023-a2-q3',
    year: 2023,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC23-CS36',
    questionNumber: 3,
    question: 'Consider the following code segment:\nSelect the correct output description for the above code.',
    code: `1 class Question{
2 public static void main(String args[]){
3 for(int n=1; n<=10; n++){
4 System.out.print(n+ " ");
5 }
6 }
7 }`,
    options: [
      'Prints first n natural numbers in a single line.',
      'Prints first n natural numbers, one number in a single line.',
      'Prints first 10 natural numbers in a single line.',
      'Prints first 10 natural numbers in a single line with no spaces.',
    ],
    correctIndex: 2,
    explanation:
      'The code segment prints first 10 natural numbers in a single line with spaces in between.',
  },
  {
    id: '2023-a2-q4',
    year: 2023,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC23-CS36',
    questionNumber: 4,
    question: 'Consider the following code segment:\nModify the above code such that it prints all the even numbers till 100.',
    code: `1 class Question{
2 public static void main(String args[]){
3 for(int n=1; n<=100; n++){
4 System.out.print(n+ " ");
5 }
6 }
7 }`,
    options: [
      'Replace line 3 with for(int n=2; n<=100; n++){',
      'Replace line 3 with for(int n=1; n<=100; n+=2){',
      'Replace line 4 with System.out.print(++n + " ");',
      'Both option a and c.',
    ],
    correctIndex: 2,
    explanation:
      'If option a is considered, then all natural numbers starting from 2 will be printed. Considering option b, instead of even numbers, all odd numbers will be printed. Option c will print all the even numbers, as pre-increment operator in the print statement increments one value and variable updating parameter post-increments one value. Option d, again prints all the odd numbers instead of the even numbers.',
  },
  {
    id: '2023-a2-q5',
    year: 2023,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC23-CS36',
    questionNumber: 5,
    question: 'Following is a program given for this question.\nWhat will be the output of the above program?',
    code: `public class Question{
public static void main(String[] args){
 int[] x = {222, 220, 022};

 for(int i = 0; i < x.length; i++){
 System.out.print(x[i] + "");
 }
 }
}`,
    options: [
      '22221018',
      '22222018',
      '22101018',
      '22221218',
    ],
    correctIndex: 1,
    explanation:
      'Since, int[2] numeral value have 0 in leading, therefore, it\'s taken as octal base (8) with the output being it\'s corresponding decimal value.',
  },
  {
    id: '2023-a2-q6',
    year: 2023,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC23-CS36',
    questionNumber: 6,
    question: 'Consider the following incorrect program.\nHow to correct the above code segment?',
    code: `1 public class Question{
2 public static void main(String[] args){
3 short x = 10;
4 x = x * 5;
5 System.out.print(x);
7 }
8 }`,
    options: [
      'Change line 4 as x =(short) (x * 5);',
      'Change line 4 as x =(short) x * 5;',
      'Change line 4 as x =(short) x * (short) 5;',
      'Change line 4 as (short) x = x * 5;',
    ],
    correctIndex: 0,
    explanation:
      'It works if the proper type casting is followed, for example, x = (short) ( x * 5);',
  },
  {
    id: '2023-a2-q7',
    year: 2023,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC23-CS36',
    questionNumber: 7,
    question: 'What is the output of the following program?',
    code: `public class Question{
 public static void main(String[] args){
 int[] A = {1,0,1};
 for(int i = 0; i < A.length; i++){
 A[i] = A[(A[i] + 3) % A.length];
 }
 for(int i = 0; i < A.length; i++){
 System.out.print(A[i]);
 }
 }
}`,
    options: [
      '210',
      '120',
      '012',
      '000',
    ],
    correctIndex: 3,
    explanation:
      'The output can be checked by execution.',
  },
  {
    id: '2023-a2-q8',
    year: 2023,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC23-CS36',
    questionNumber: 8,
    question: 'Consider the following piece of code.\nWhich of the following option is the output of the above program?',
    code: `public class Question{
 public static void main(String[] args){
 String str = "anpctdelqjpava";
 System.out.println(str.substring(1,3)+str.substring(4,5)+
str.substring(6,8));
 }
}`,
    options: [
      'java',
      'npteljava',
      'nptel java',
      'nptel',
    ],
    correctIndex: 3,
    explanation:
      'The output can be checked by execution.',
  },
  {
    id: '2023-a2-q9',
    year: 2023,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC23-CS36',
    questionNumber: 9,
    question: 'What is the output of the following program?',
    code: `public class Main{
public void static main(String args[]){
char a = 'a';
int b = 20;
System.out.println(a+b);
}
}`,
    options: [
      '60',
      '117',
      '33',
      'Compilation error',
    ],
    correctIndex: 3,
    explanation:
      'There is a compilation error due to incorrect syntax in the statement public void static main(String args[]); it should be public static void main(String args[]){.',
  },
  {
    id: '2023-a2-q10',
    year: 2023,
    assignmentId: 2,
    assignmentLabel: 'Assignment 02',
    courseCode: 'NOC23-CS36',
    questionNumber: 10,
    question: 'Consider the following program.\nWhat will be the output of the program if it is executed?',
    code: `public class Question{
 public static void main(String[] args){
 int x = 5;
 x *= (2 + 8);
 System.out.println(x);
 }
}`,
    options: [
      '50',
      '10',
      'Compiler error',
      '5',
    ],
    correctIndex: 0,
    explanation:
      'Here, x* = 2 + 8 is equivalent to x * (2+ 8) = x * 10. Therefore, x = 50.',
  },

  // ============================================================================
  // 2023 ASSIGNMENT 03
  // ============================================================================
  {
    id: '2023-a3-q1',
    year: 2023,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC23-CS36',
    questionNumber: 1,
    question: 'In which of the following scenario(s), the static block is used in Java?',
    options: [
      'To create static variables.',
      'To initialize instance variables.',
      'To initialize static variables.',
      'To create new objects.',
    ],
    correctIndex: 2,
    explanation:
      'The static keyword can be used to create a block to be used to initialize static variables. This static block executes when classloader loads the class.',
  },
  {
    id: '2023-a3-q2',
    year: 2023,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC23-CS36',
    questionNumber: 2,
    question: 'Consider the following piece of code.\nFill in the blank with the appropriate keyword(s) from the list given below so that the program compiles successfully.',
    code: `public class Question {
 private static int count = 0;
 public static void main(String[] args) {
 incrementCount();
 System.out.println("Count: " + count);
 }
 _______________ incrementCount() {
 count++;
 }
}`,
    options: [
      'public void',
      'private void',
      'public static void',
      'private static void',
    ],
    correctIndex: 2,
    correctIndexes: [2, 3],
    explanation:
      'Option c and d are correct keyword(s).',
  },
  {
    id: '2023-a3-q3',
    year: 2023,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC23-CS36',
    questionNumber: 3,
    question: 'Consider the following piece of code.\nWhat is the output of the above code?',
    code: `class A {
 public void display() {
 System.out.println("A's display method");  }
}
class B extends A {
 public void display() {
 System.out.println("B's display method");  }
}
public class Main {
 public static void main(String[] args) {
 A a = new B();
 a.display();
 ((B) a).display();
 }
}`,
    options: [
      'A\'s display method\nB\'s display method',
      'A\'s display method\nA\'s display method',
      'B\'s display method\nB\'s display method',
      'B\'s display method\nA\'s display method',
    ],
    correctIndex: 2,
    explanation:
      'Test by run.',
  },
  {
    id: '2023-a3-q4',
    year: 2023,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC23-CS36',
    questionNumber: 4,
    question: 'Which of the following statement(s) is/are false?',
    options: [
      'You can write a new instance method in the subclass with the same signature as the one in the superclass, thus overriding it.',
      'You can write a new static method in the subclass with the same signature as the one in the superclass, thus hiding it.',
      'A subclass inherits all of its parent\'s public and protected members, no matter what\npackage the subclass is in.',
      'You cannot declare new methods in the subclass that are not in the superclass.',
    ],
    correctIndex: 3,
    explanation:
      'You can declare new methods in the subclass that are not in the superclass.',
  },
  {
    id: '2023-a3-q5',
    year: 2023,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC23-CS36',
    questionNumber: 5,
    question: 'Which of the following statement(s) is/are true?',
    options: [
      'You will get a compile-time error if you attempt to change an instance method in the superclass to a static method in the subclass.',
      'You can prevent a class from being subclassed by using the final keyword in the class\'s declaration.',
      'An abstract class can be instantiated.',
      'Common behaviour can be defined in a superclass and inherited into a subclass using the extends keyword.',
    ],
    correctIndex: 0,
    correctIndexes: [0, 1, 3],
    explanation:
      'An abstract class cannot be instantiated.',
  },
  {
    id: '2023-a3-q6',
    year: 2023,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC23-CS36',
    questionNumber: 6,
    question: 'Consider the following program.\nWhat is the output of the above program?',
    code: `public class Question{
 public static void main(String[] args){
 String str = " programming in java ";
 System.out.println(str.substring(1,3)+str.substring(4,5)+
str.substring(6,8));
 }
}`,
    options: [
      'prgam',
      'program',
      'gramm',
      'ing in',
    ],
    correctIndex: 0,
    explanation:
      'Test by a run.',
  },
  {
    id: '2023-a3-q7',
    year: 2023,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC23-CS36',
    questionNumber: 7,
    question: 'Consider the following piece of code.\nWhich of the following is the output of the above program?',
    code: `class Question{
static int a =10;
}
class Question1 extends Question{
static int a =20;
}
public class Quest extends Question1{
public static void main(String args[]){
a =100;
System.out.println(Question.a);
System.out.println(Question1.a);
}
}`,
    options: [
      '10\n100',
      '10\n20',
      '100\n10',
      '10\n10',
    ],
    correctIndex: 0,
    explanation:
      'Test by run.',
  },
  {
    id: '2023-a3-q8',
    year: 2023,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC23-CS36',
    questionNumber: 8,
    question: 'Consider the following program.\nIf the program is executed, then what will be the output from the execution?',
    code: `class Question {
 int a=400;
 int b=200;
}
public class Child1 extends Question {
 int a=1000;
 int b=2000;
void add(int a,int b) {
 System.out.println(a+this.b-super.a);
 }
public static void main(String[] args) {
 Child1 c = new Child1();
 c.add(100,300);
 }
}`,
    options: [
      '1700',
      '1300',
      '0',
      '2600',
    ],
    correctIndex: 0,
    explanation:
      'a = 100 , this.b=2000, super.a=400 , 100+2000-400=1700',
  },
  {
    id: '2023-a3-q9',
    year: 2023,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC23-CS36',
    questionNumber: 9,
    question: 'Which of the following statement(s) is/are true?',
    options: [
      'Hiding internal data from the outside world and accessing it only through publicly exposed methods is known as data encapsulation.',
      'Static methods in interfaces are never inherited.',
      'The term "class variable" is another name for a non-static field.',
      'A local variable stores a temporary state; it is declared inside a method.',
    ],
    correctIndex: 0,
    correctIndexes: [0, 1, 3],
    explanation:
      'The term "class variable" is another name for a static field.',
  },
  {
    id: '2023-a3-q10',
    year: 2023,
    assignmentId: 3,
    assignmentLabel: 'Assignment 03',
    courseCode: 'NOC23-CS36',
    questionNumber: 10,
    question: 'All classes in java are inherited from which class?',
    options: [
      'java.lang.class',
      'java.class.inherited',
      'java.class.object',
      'java.lang.Object',
    ],
    correctIndex: 3,
    explanation:
      'All classes in java are inherited from Object class.',
  },

  // ============================================================================
  // 2023 ASSIGNMENT 04
  // ============================================================================
  {
    id: '2023-a4-q1',
    year: 2023,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC23-CS36',
    questionNumber: 1,
    question: 'Which of the following is the correct statement for creating a package?',
    options: [
      '<package name> package;',
      'package <package name>;',
      'package;',
      '<package name>;',
    ],
    correctIndex: 1,
    explanation:
      'To define a package, every source file needs to start with the statement \'package\' followed by the package name.',
  },
  {
    id: '2023-a4-q2',
    year: 2023,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC23-CS36',
    questionNumber: 2,
    question: 'How Java Runtime Environment (JRE) knows where to look for a package that you create?',
    options: [
      'It searches in the current directory.',
      'It searches in the location set in the CLASSPATH environment variable.',
      'A user can set the path during runtime using the -classpath option.',
      'Using the -path option, a user can set the path.',
    ],
    correctIndex: 0,
    correctIndexes: [0, 1, 2],
    explanation:
      '- First, by default, the Java run-time system uses the current working directory as its starting point. Thus, if your package is in a sub-directory of the current directory, it will be found. - Second, you can specify a directory path or paths by setting the CLASSPATH environmental variable. - Third, you can use the -classpath option with java and javac to specify the path to your classes.',
  },
  {
    id: '2023-a4-q3',
    year: 2023,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC23-CS36',
    questionNumber: 3,
    question: 'Which of the following statement(s) is/are false?',
    options: [
      'Java packages are hierarchical.',
      'System.out.println() is a predefined java function.',
      'Java can have a nested class structure.',
      'The Java static keyword is a non-access modifier.',
    ],
    correctIndex: 0,
    explanation:
      'At first, packages appear to be hierarchical, but they are not. For example, the Java API includes a java.awt package, a java.awt.color package, a java.awt.font package, and many others that begin with java.awt. However, the java.awt.color package, the java.awt.font package, and other java.awt.xxxx packages are not included in the java.awt package. The prefix java.awt (the Java Abstract Window Toolkit) is used for a number of related packages to make the relationship evident, but not to show inclusion. All the other options are correct.',
  },
  {
    id: '2023-a4-q4',
    year: 2023,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC23-CS36',
    questionNumber: 4,
    question: 'Which of the following is/are NOT correct regarding packages in Java?',
    options: [
      'Java supports both pre-defined and user-defined packages.',
      'Packages are used to organize a set of related classes and interfaces.',
      'Pre-defined packages help to develop programs easily by providing thousands of classes.',
      'Packages are used to organize only a set of related classes and not interfaces.',
    ],
    correctIndex: 3,
    explanation:
      'A package is a namespace that organizes a set of related classes and interfaces. It is just like a folder in your computer, where, you might keep HTML pages in one folder, images in another, and scripts or applications in yet another. Since, Java programs can be composed of hundreds or thousands of individual classes, it makes sense to keep things organized by placing related classes and interfaces into packages.',
  },
  {
    id: '2023-a4-q5',
    year: 2023,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC23-CS36',
    questionNumber: 5,
    question: 'Consider the program given below.\nWhat will be the output if the above program is executed?',
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
      'Test by run. The static import statement is used to import the static members (e.g., PI) of java.lang.Math. import static java.lang.Math.*;',
  },
  {
    id: '2023-a4-q6',
    year: 2023,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC23-CS36',
    questionNumber: 6,
    question: 'Which of the following is the minimum requirement for executing a Java program?',
    options: [
      'JDK',
      'JRE',
      'JDK without JRE',
      'JRE without JDK',
    ],
    correctIndex: 1,
    correctIndexes: [1, 3],
    explanation:
      'JRE (Java Runtime Environment) is required for the execution of the Java programs. JDK contains JRE by default. Therefore, if we talk about minimum requirement, then both b and d options are correct.',
  },
  {
    id: '2023-a4-q7',
    year: 2023,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC23-CS36',
    questionNumber: 7,
    question: 'Which of the following is required for developing a Java program?',
    options: [
      'JDK',
      'JRE',
      'JDK without JRE',
      'JRE without JDK',
    ],
    correctIndex: 0,
    explanation:
      'JDK (Java Development Kit) is required for developing the Java programs. Since, JDK already comes packed with JRE and there is no option to select JDK without JRE, option a is the only valid option.',
  },
  {
    id: '2023-a4-q8',
    year: 2023,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC23-CS36',
    questionNumber: 8,
    question: 'Which of the following is/are valid declaration(s) of an interface?',
    options: [
      'public interface Question {\nvoid method (int value) {\nSystem.out.println("Nptel");\n}\n}',
      'public interface Question {\nvoid method (int value);\n}',
      'public interface Question {\n}',
      'public interface Question {\ndefault void method (int value) {\nSystem.out.println("Nptel");\n}\n}',
    ],
    correctIndex: 1,
    correctIndexes: [1, 2, 3],
    explanation:
      'In option (a), It has a method implementation in it. Only default and static methods have implementations. So, option (a) is not a valid interface. All others are valid.',
  },
  {
    id: '2023-a4-q9',
    year: 2023,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC23-CS36',
    questionNumber: 9,
    question: 'Which of the following statement(s) is/are NOT true?',
    options: [
      'The default package in the Java language is java.lang.',
      'String is a final class and it is present in java.lang package.',
      'Runnable is a class present in java.lang package.',
      'Thread is a class present in java.lang package.',
    ],
    correctIndex: 2,
    explanation:
      'Runnable is an interface in java.lang package.',
  },
  {
    id: '2023-a4-q10',
    year: 2023,
    assignmentId: 4,
    assignmentLabel: 'Assignment 04',
    courseCode: 'NOC23-CS36',
    questionNumber: 10,
    question: 'Which of the following statement(s) is/are true?',
    options: [
      'With the import statement, generally import only a single package member or an entire package.',
      'To import all the types contained in a particular package, use the import statement with\nthe asterisk (*) wildcard character.\nimport package.*;',
      'import package.A*; it used to match a subset of the classes in a package starts with "A".',
      'import package.A*; it generates compilation error.',
    ],
    correctIndex: 0,
    correctIndexes: [0, 1, 3],
    explanation:
      'import package.A*; it generates compilation error.',
  },
];
