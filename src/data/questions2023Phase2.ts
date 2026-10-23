import { QuizQuestion } from './types';

export const questions2023Phase2: QuizQuestion[] = [
  // ============================================================================
  // 2023 ASSIGNMENT 05
  // ============================================================================
  {
    id: '2023-a5-q1',
    year: 2023,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC23-CS36',
    questionNumber: 1,
    question: 'Consider the following program.\nIf the program is executed, then what will be the output?',
    code: `class Question
{
 int i;
 public Question(int i)
 {
 this.i = i--;
 }
}
class Question1 extends
Question {
 public Question1(int i)
 {
 super(++i);
 System.out.println(i);
 }
}
public class Check
{
 public static void main(String[] args)
{
 Question1 n = new Question1(20);  }
}`,
    options: [
      '20',
      '21',
      '19',
      '22',
    ],
    correctIndex: 1,
    explanation:
      'The output can be checked by execution.',
  },
  {
    id: '2023-a5-q2',
    year: 2023,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC23-CS36',
    questionNumber: 2,
    question: 'Which of the following statement(s) is/are false?\n1. A class can extend more than one class.\n2. An interface can extend many interfaces.\n3. An interface can implement many interfaces.\n4. A class can extend one class and implement many interfaces.',
    options: [
      '1',
      '2',
      '3',
      '4',
    ],
    correctIndex: 0,
    correctIndexes: [0, 2],
    explanation:
      'An interface can extend many interfaces. A class can extend one class and implement many interfaces. These statements are true.',
  },
  {
    id: '2023-a5-q3',
    year: 2023,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC23-CS36',
    questionNumber: 3,
    question: 'What is the output of the following code?',
    code: `class Question
{
 static int x;
 static
 {
 x++;
 }
 {
 ++x;
 }
}
class Question1 extends Question
{
 static
 {
 --x;
 }
 {
 x--;
 }
}
public class Check
{
 public static void main(String[] args)
{
 System.out.println(new Question1().x);  }
}`,
    options: [
      '1',
      '2',
      '0',
      'Compiler error',
    ],
    correctIndex: 2,
    explanation:
      'The output can be checked by execution.',
  },
  {
    id: '2023-a5-q4',
    year: 2023,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC23-CS36',
    questionNumber: 4,
    question: 'Which of the following statement(s) is/are false?',
    options: [
      'Interface can provide the implementation of an abstract class.',
      'The variables defined inside an interface are static and final by default.',
      'An interface is used to achieve full abstraction.',
      'Inside an interface, a constructor can be called using the super keyword with hierarchy.',
    ],
    correctIndex: 0,
    correctIndexes: [0, 3],
    explanation:
      'A constructor cannot be called inside an interface using the super keyword with hierarchy. Interface can\'t provide the implementation of an abstract class.',
  },
  {
    id: '2023-a5-q5',
    year: 2023,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC23-CS36',
    questionNumber: 5,
    question: 'What is the output of the following code?',
    code: `class Q
{
 public void disp()
 {
 System.out.println("java");
 }
}

class P extends Q
{
 public void disp()
 {
 System.out.println("nptel");   }
}

class C extends P
{
 public void disp()

 {
 super.super.disp();
 System.out.println("course");   }
}

public class Question
{
 public static void main(String[] args)
{
 C c = new C();
 c.disp();
 }
}`,
    options: [
      'java',
      'java\ncourse',
      'nptel\ncourse',
      'Compiler error',
    ],
    correctIndex: 3,
    explanation:
      'The output can be checked by execution. In Java, it is not allowed to do super.super.',
  },
  {
    id: '2023-a5-q6',
    year: 2023,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC23-CS36',
    questionNumber: 6,
    question: 'Which of the following keywords is/are a part of exception handling?',
    options: [
      'finally',
      'throws',
      'throw',
      'thrown',
    ],
    correctIndex: 0,
    correctIndexes: [0, 1, 2],
    explanation:
      'Exceptional handling have 5 keywords - try, catch, throws, throw and finally.',
  },
  {
    id: '2023-a5-q7',
    year: 2023,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC23-CS36',
    questionNumber: 7,
    question: 'Consider the following piece of code.\nFill the blank in the above program to print the output "Java".',
    code: `interface X
{
 void display();
}
class Y implements X
{
 ___________ display()
 {
 System.out.println("Java");
 }
}
public class MainClass
{
 public static void main(String[] args)
 {
 Y r = new Y();
 r.display();
 }
}`,
    options: [
      'public void',
      'void',
      'private void',
      'static void',
    ],
    correctIndex: 0,
    explanation:
      'Interface methods must be implemented as public. Because, interface methods are public by default and you should not reduce the visibility of any methods while overriding.',
  },
  {
    id: '2023-a5-q8',
    year: 2023,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC23-CS36',
    questionNumber: 8,
    question: 'Exception class exist in which of the following package?',
    options: [
      'java.void',
      'java.io',
      'java.lang',
      'java.awt',
    ],
    correctIndex: 2,
    explanation:
      'The Exception class is part of the java.lang package.',
  },
  {
    id: '2023-a5-q9',
    year: 2023,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC23-CS36',
    questionNumber: 9,
    question: 'Consider the following code .\nFill in the blank with appropriate syntax for creating an object "c" to run the above program successfully.',
    code: `interface X
{
 class Question
 {
 int i;

 public Question(int i)
 {
 this.i = ++i;
 }

 int disp()
 {
 return ++i;
 }
 }
}
public class Question1
{
 public static void main(String[] args)
 {
 _________________________ // fill in the blank
 System.out.println(c.disp());
 }
}`,
    options: [
      'X c = new X(1);',
      'X c = new X( );',
      'X.Question c = new X.Question(0);',
      'X.Question c = new X.Question(1);',
    ],
    correctIndex: 2,
    correctIndexes: [2, 3],
    explanation:
      'The output can be checked by execution.',
  },
  {
    id: '2023-a5-q10',
    year: 2023,
    assignmentId: 5,
    assignmentLabel: 'Assignment 05',
    courseCode: 'NOC23-CS36',
    questionNumber: 10,
    question: 'If the program is executed, then how many times "Java" will print?',
    code: `class X
{

 static
 {
 Y.display();
 }
}
class Y extends X
{
 static void display()
 {
 System.out.println("Java");
 }
}
public class MainClass
{
 public static void main(String[] args)
 {
 Y.display();
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
      'The output can be checked by execution.',
  },

  // ============================================================================
  // 2023 ASSIGNMENT 06
  // ============================================================================
  {
    id: '2023-a6-q1',
    year: 2023,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC23-CS36',
    questionNumber: 1,
    question: 'Which of the following is NOT a method of the Thread class in Java?',
    options: [
      'isInterrupted()',
      'interrupt()',
      'joins()',
      'sleep()',
    ],
    correctIndex: 2,
    explanation:
      'join() is a method in the pre-defined Java class Thread but not joins(). Other methods like isInterrupted (),interrupt () and sleep() are defined in the Thread class.',
  },
  {
    id: '2023-a6-q2',
    year: 2023,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC23-CS36',
    questionNumber: 2,
    question: 'Which of the following statement(s) is/are true?',
    options: [
      'public int getId(): returns the id of the thread.',
      'public boolean isAlive(): tests if the thread is alive.',
      'public void interrupt(): interrupts the thread.',
      'public boolean isInterrupted(): tests if the thread has been interrupted.',
    ],
    correctIndex: 0,
    correctIndexes: [0, 1, 2, 3],
    explanation:
      'All options are correct.',
  },
  {
    id: '2023-a6-q3',
    year: 2023,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC23-CS36',
    questionNumber: 3,
    question: 'Which of the following can be used to create an instance of Thread?',
    options: [
      'By implementing the Runnable interface.',
      'By extending the Thread class.',
      'By creating a new class named Thread and calling method run ().',
      'By importing the Thread class from package.',
    ],
    correctIndex: 0,
    correctIndexes: [0, 1],
    explanation:
      'An application that creates an instance of Thread must provide the code that will run in that thread. There are two ways to do this: - Provide a Runnable object. The Runnable interface defines a single method, run, meant to contain the code executed in the thread. The Runnable object is passed to the Thread constructor - Subclass Thread. The Thread class itself implements Runnable, though its run method does nothing. An application can subclass Thread, providing its own implementation of run Reference:https://docs.oracle.com/javase/tutorial/essential/concurrency/runthread.html',
  },
  {
    id: '2023-a6-q4',
    year: 2023,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC23-CS36',
    questionNumber: 4,
    question: 'What is the output of the following program?',
    code: `public class Question
 {
public static void main(String[] args) {

 try {
 int a=5/0;
 } catch (Exception e) {

 catch (ArithmeticException a) {

 }

 }
System.out.println("Hello World");
}
}`,
    options: [
      'Hello World',
      '5',
      'Compile time error',
      'ArithmeticException',
    ],
    correctIndex: 2,
    explanation:
      'This first handler catches exceptions of type Exception; therefore, it catches any exception, including ArithmeticException. The second handler could never be reached. This code will not compile.',
  },
  {
    id: '2023-a6-q5',
    year: 2023,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC23-CS36',
    questionNumber: 5,
    question: 'Which one of these keywords must be used to handle the exception thrown by try block in some rational manner?',
    options: [
      'try',
      'finally',
      'throw',
      'catch',
    ],
    correctIndex: 3,
    explanation:
      'The catch block is responsible for handling the exceptions raised by try block.',
  },
  {
    id: '2023-a6-q6',
    year: 2023,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC23-CS36',
    questionNumber: 6,
    question: 'Assume the following method is properly synchronized and called from a thread A on an object B: wait(2000); After calling this method, when will the thread A become a candidate to get another turn at the CPU?',
    options: [
      'After thread A is notified, or after two seconds.',
      'Two seconds after thread A is notified.',
      'After the lock on B is released, or after two seconds.',
      'Two seconds after lock B is released.',
    ],
    correctIndex: 0,
    explanation:
      'Either of the two events (notification or wait time expiration) will make the thread become a candidate for running again',
  },
  {
    id: '2023-a6-q7',
    year: 2023,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC23-CS36',
    questionNumber: 7,
    question: 'The following is a simple program using the concept of thread.\nWhat is the output of the above program?',
    code: `public class Question extends Thread{
public void run(){
 for(int i=1;i<5;i++){

 System.out.println(i++);
 }
}
public static void main(String args[]){
 Question t1=new Question();
 t1.run();

}
}`,
    options: [
      '1\n3',
      '1\n2\n3\n4',
      'Runtime error',
      '1\n2',
    ],
    correctIndex: 0,
    explanation:
      'Run to see the output.',
  },
  {
    id: '2023-a6-q8',
    year: 2023,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC23-CS36',
    questionNumber: 8,
    question: 'For the program given below, what will be the output after its execution?',
    code: `public class Main{
public static void main(String[]args){
 Thread thread=Thread.currentThread();
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
      'java.lang.Thread.activeCount() : Returns an estimate of the number of active threads in the current thread\'s thread group and its subgroups.',
  },
  {
    id: '2023-a6-q9',
    year: 2023,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC23-CS36',
    questionNumber: 9,
    question: 'Which of the following is a correct constructor for a thread object?',
    options: [
      'Thread(Runnable a, String str);',
      'Thread(Runnable a, int priority);',
      'Thread(Runnable a, ThreadGroup t);',
      'Thread(int priority);',
    ],
    correctIndex: 0,
    explanation:
      'Thread(Runnable a, String str)creates a new Thread object. The others are not valid constructors to create a thread object.',
  },
  {
    id: '2023-a6-q10',
    year: 2023,
    assignmentId: 6,
    assignmentLabel: 'Assignment 06',
    courseCode: 'NOC23-CS36',
    questionNumber: 10,
    question: 'Which of these keyword(s) is used to manually throw an exception?',
    options: [
      'try',
      'finally',
      'throw',
      'catch',
    ],
    correctIndex: 2,
    explanation:
      'The throw keyword is used to manually throw an exception.',
  },

  // ============================================================================
  // 2023 ASSIGNMENT 07
  // ============================================================================
  {
    id: '2023-a7-q1',
    year: 2023,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC23-CS36',
    questionNumber: 1,
    question: 'Consider the following program.\nWhat will be the output if the above program is executed?',
    code: `import java.io.*;
 public class Question {
 public static void main(String[] args)
 {
 try {
 PrintWriter writer = new PrintWriter(System.out);
writer.write('4'+ '2');
 writer.close();
 }
 catch (Exception e) {
 System.out.println(e);
 }
 }
}`,
    options: [
      'It will give a compile-time error.',
      '102',
      '42',
      'f',
    ],
    correctIndex: 3,
    explanation:
      'The expression \'4\'+\'2\' add 52 with 50(i.e, Ascii value of 4 and 2)=102 and print the corresponding char, in this case, f.',
  },
  {
    id: '2023-a7-q2',
    year: 2023,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC23-CS36',
    questionNumber: 2,
    question: 'Which method is used to write an array of byte to the current output stream?',
    options: [
      'public void write(int b)throws IOException{{',
      'public void flush(byte[ ] b)throws IOException{}',
      'public void write(byte[ ] b)throws IOException{}',
      'public int write(int b)throws IOException{}',
    ],
    correctIndex: 2,
    explanation:
      'public void write(byte[ ] b)throws IOException{} is used to write an array of byte to the current output stream.',
  },
  {
    id: '2023-a7-q3',
    year: 2023,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC23-CS36',
    questionNumber: 3,
    question: 'Which of the following is NOT a Standard Stream?',
    options: [
      'System.in',
      'System.out',
      'System.err',
      'System.console',
    ],
    correctIndex: 3,
    explanation:
      'The Java platform supports three Standard Streams: Standard Input, accessed through System.in; Standard Output, accessed through System.out; and Standard Error, accessed through System.err.',
  },
  {
    id: '2023-a7-q4',
    year: 2023,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC23-CS36',
    questionNumber: 4,
    question: 'Which of the following method(s) is not included in the OutputStream class?',
    options: [
      'close( )',
      'write( )',
      'skip( )',
      'flush( )',
    ],
    correctIndex: 2,
    explanation:
      'skip( ) is not a valid method in the OutputStream class.',
  },
  {
    id: '2023-a7-q5',
    year: 2023,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC23-CS36',
    questionNumber: 5,
    question: 'Which of the following methods of the BufferedReader class is used for reading lines of text from the console, the file, or other input streams?',
    options: [
      'read( )',
      'readLine( )',
      'readByte( )',
      'read(byte [ ] b)',
    ],
    correctIndex: 1,
    explanation:
      'readLine( ) method of the BufferedReader class is used for reading lines of text from the console, the file, or other input streams.',
  },
  {
    id: '2023-a7-q6',
    year: 2023,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC23-CS36',
    questionNumber: 6,
    question: 'Consider the following program.\nWhat is the output of the above code?',
    code: `import java.io.*;
 public class files
 {
 public static void main(String args[])
 {
 File obj = new File("java/course/july/2023");
System.out.print(obj.getPath());
 }
 }`,
    options: [
      'java/course/july/2023',
      'java/course/july/',
      'java/course/',
      '2023',
    ],
    correctIndex: 0,
    explanation:
      'Test by run.',
  },
  {
    id: '2023-a7-q7',
    year: 2023,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC23-CS36',
    questionNumber: 7,
    question: 'Which of the following is/are interface(s) in the java.io package?',
    options: [
      'FileWriter',
      'FileFilter',
      'ObjectOutput',
      'DataOutput',
    ],
    correctIndex: 1,
    correctIndexes: [1, 2, 3],
    explanation:
      'FileWriter is a class in the java.io package. All others are interfaces.',
  },
  {
    id: '2023-a7-q8',
    year: 2023,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC23-CS36',
    questionNumber: 8,
    question: 'Fill in the blanks. The class DataInputStream extends ____________ and implements the interface _____________.',
    options: [
      'FileInputStream , FileInput',
      'FilterInputStream , DataInput',
      'FilterInputStream , FileInput',
      'FileInputStream , DataInput',
    ],
    correctIndex: 1,
    explanation:
      'public class DataInputStream extends FilterInputStream implements DataInput.',
  },
  {
    id: '2023-a7-q9',
    year: 2023,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC23-CS36',
    questionNumber: 9,
    question: 'Which of the following method(s) is not included in InputStream class?',
    options: [
      'available( )',
      'reset( )',
      'read( )',
      'flush( )',
    ],
    correctIndex: 3,
    explanation:
      'flush( ) is not a valid method in the InputStream class.',
  },
  {
    id: '2023-a7-q10',
    year: 2023,
    assignmentId: 7,
    assignmentLabel: 'Assignment 07',
    courseCode: 'NOC23-CS36',
    questionNumber: 10,
    question: 'Which of the following package(s) contains a large number of stream classes that provide capabilities for processing all types of data?',
    options: [
      'java.awt.',
      'java.io',
      'java.net',
      'java.util',
    ],
    correctIndex: 1,
    explanation:
      'java.io contains a large number of stream classes that provide capabilities for processing all types of data.',
  },

  // ============================================================================
  // 2023 ASSIGNMENT 08
  // ============================================================================
  {
    id: '2023-a8-q1',
    year: 2023,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC23-CS36',
    questionNumber: 1,
    question: 'Which of the following method is/are of class button in java.awt package ?',
    options: [
      'getLabel()',
      'setLabel(String label)',
      'getCurrent()',
      'getItem(int index)',
    ],
    correctIndex: 0,
    correctIndexes: [0, 1],
    explanation:
      'setLabel(String label) method Changes this button\'s label to be the String argument and and getLabel() method returns the current label of the button.',
  },
  {
    id: '2023-a8-q2',
    year: 2023,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC23-CS36',
    questionNumber: 2,
    question: 'Which of the following is NOT a class of java.awt package?',
    options: [
      'Button',
      'Component',
      'Dialog',
      'Paint',
    ],
    correctIndex: 3,
    explanation:
      'Paint is interface of java.awt package.',
  },
  {
    id: '2023-a8-q3',
    year: 2023,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC23-CS36',
    questionNumber: 3,
    question: 'Which of the following statement(s) is/are correct?',
    options: [
      'AWT components are platform-independent.',
      'AWT follows the MVC (Model View Controller).',
      'Swing components are platform-dependent.',
      'Swing follows MVC (Model View Controller).',
    ],
    correctIndex: 3,
    explanation:
      'AWT components are platform dependent and not follow MVC.Swing components follow MVC and are platform independent.',
  },
  {
    id: '2023-a8-q4',
    year: 2023,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC23-CS36',
    questionNumber: 4,
    question: 'When we invoke repaint() for a java.awt.Component object, the AWT invokes which of the following method ?',
    options: [
      'draw( )',
      'show( )',
      'update( )',
      'paint( )',
    ],
    correctIndex: 2,
    explanation:
      'The repaint() method calls automatically update() method and in turn update() method calls paint( ) method.',
  },
  {
    id: '2023-a8-q5',
    year: 2023,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC23-CS36',
    questionNumber: 5,
    question: 'Which package provides many event classes and Listener interfaces for event handling?',
    options: [
      'java.awt',
      'java.lang',
      'java.io',
      'java.util',
    ],
    correctIndex: 0,
    explanation:
      'The class Event is declared in java.awt package which is used for event classes and Listener interfaces for event handling.',
  },
  {
    id: '2023-a8-q6',
    year: 2023,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC23-CS36',
    questionNumber: 6,
    question: 'Which of the following is TRUE about the following GUI?',
    codeNote: 'GUI image unavailable in the source PDF.',
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
    id: '2023-a8-q7',
    year: 2023,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC23-CS36',
    questionNumber: 7,
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
    id: '2023-a8-q8',
    year: 2023,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC23-CS36',
    questionNumber: 8,
    question: 'Which of the following is TRUE about check box in Java?',
    options: [
      'A check box can be in either an "on" (true) or "off" (false) state.',
      'Clicking on a check box changes its state from "on" to "off," or from "off" to "on."',
      'A check box can be in an "on" (true) and in "off" (false) state simultaneously.',
      'Check boxes cannot be grouped together.',
    ],
    correctIndex: 0,
    correctIndexes: [0, 1],
    explanation:
      'A check box is a graphical component that can be in either an "on" (true) or "off" (false) state. Clicking on a check box changes its state from "on" to "off," or from "off" to "on.". A check box cannot be in both "on" and "off" state simultaneously. Further, several check boxes can be grouped together under the control of a single object, using the CheckboxGroup class. In a check box group, at most one button can be in the "on" state at any given time. Clicking on a check box to turn it on forces any other check box in the same group that is on into the "off" state.',
  },
  {
    id: '2023-a8-q9',
    year: 2023,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC23-CS36',
    questionNumber: 9,
    question: 'Which of the following is the latest graphics and media package for Java?',
    options: [
      'Applet',
      'AWT',
      'Swing',
      'JavaFX',
    ],
    correctIndex: 3,
    explanation:
      'JavaFX is a set of latest graphics and media packages in Java that enables developers to design, create, test, debug, and deploy rich client applications that operate consistently across diverse platforms. More details can be found here: https://docs.oracle.com/javafx/2/overview/jfxpub-overview.htm.',
  },
  {
    id: '2023-a8-q10',
    year: 2023,
    assignmentId: 8,
    assignmentLabel: 'Assignment 08',
    courseCode: 'NOC23-CS36',
    questionNumber: 10,
    question: 'If setText(String text) is a method of Label class, then why it is called non editable?',
    options: [
      'Because user-input is unavailable during runtime.',
      'A Label is just a TextField with non-editable property turned on.',
      'Labels are editable by default.',
      'setText(String text) is not a method of Label class.',
    ],
    correctIndex: 0,
    explanation:
      'A label class is non-editable during runtime by the user, but internal functions can change the text using the setText(String text) function.',
  },
];
