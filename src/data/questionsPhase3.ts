import { QuizQuestion } from './types';

export const questionsPhase3: QuizQuestion[] = [
  // ============================================================================
  // ASSIGNMENT 09 (NOC26-CS36 Jan-2026 25S)
  // ============================================================================
  {
    id: 'a9-q1',
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 1,
    question:
      'The container displays a number of components in a row, but adjusts according to the window size.\nWhich of the following layout manager(s) is most naturally suited for the layout given below?',
    diagramType: 'flowlayout-window',
    options: ['FlowLayout', 'BorderLayout', 'GridLayout', 'BoxLayout'],
    correctIndex: 0,
    explanation:
      'FlowLayout arranges components left-to-right, wrapping to the next row as needed.',
  },
  {
    id: 'a9-q2',
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 2,
    question: 'In Java, what is the primary purpose of a layout manager?',
    options: [
      'To manage memory allocation',
      'To arrange GUI components within a container',
      'To handle exception handling',
      'To control database connections',
    ],
    correctIndex: 1,
    explanation:
      'A layout manager in Java is responsible for arranging and positioning GUI components within a container.',
  },
  {
    id: 'a9-q3',
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 3,
    question:
      'Consider the following code.\nWhat happens when the button in this Java code snippet is clicked?',
    code: `import javax.swing.*;
import java.awt.event.*;
public class NPTEL {
    public static void main(String[] args) {
        JFrame frame = new JFrame("NPTEL Java Course");
        JButton button = new JButton("Click Me");
        button.setBounds(50, 100, 100, 40);
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                JOptionPane.showMessageDialog(null, "Welcome to the course");
            }
        });
        frame.add(button);
        frame.setSize(300, 200);
        frame.setLayout(null);
        frame.setVisible(true);
    }
}`,
    diagramType: 'swing-dialog-solution',
    options: [
      'The program exits',
      'A message dialog with the text "Welcome to the course" is displayed',
      'The button label changes to "Welcome to the course"',
      'Nothing happens',
    ],
    correctIndex: 1,
    explanation:
      'The code creates a button with label “Click Me” and in the frame titled “NPTEL Java Course”. An action listener is defined that opens a new message dialog with the text “Welcome to the course” when the button is clicked.',
  },
  {
    id: 'a9-q4',
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 4,
    question: 'Consider the following code.\nWhat will be the output of the above code?',
    code: `import javax.swing.*;

public class NPTEL extends JFrame {
    JButton button;

    public NPTEL() {
        button = new JButton("Programming in Java");
        add(button);
        setSize(300, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    public static void main(String[] args) {
        new NPTEL();
    }
}`,
    diagramType: 'swing-frame-solution',
    options: [
      'Creates a JFrame with a JButton labeled "Programming in Java"',
      'Compiles with errors',
      'Displays a message dialog',
      'Creates a JPanel with a JButton labeled "Programming in Java"',
    ],
    correctIndex: 0,
    explanation:
      'The code extends JFrame and uses the JButton class object to create a button with the name of “Programming in Java”.',
  },
  {
    id: 'a9-q5',
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 5,
    question:
      'Consider the following code.\nWhat should replace // INSERT CODE HERE to create a JFrame with a JButton labeled "Click Me"?',
    code: `import javax.swing.*;

public class FrameExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Demo Frame");
        JButton button = new JButton("Click Me");
        // INSERT CODE HERE
        frame.setSize(300, 200);
        frame.setVisible(true);
    }
}`,
    options: [
      'frame.add(button);',
      'frame.insert(button);',
      'frame.append(button);',
      'frame.push(button);',
    ],
    correctIndex: 0,
    explanation:
      'The add() method is used to add components like buttons, text fields, or panels to a JFrame.',
  },
  {
    id: 'a9-q6',
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 6,
    question:
      'Identify and correct the error in the following program:\nWhat should the erroneous line (panel.setFlowLayout();) be replaced with?',
    code: `import javax.swing.*;
import java.awt.*;

public class PanelExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Panel Example");
        JPanel panel = new JPanel();
        JButton button = new JButton("Submit");
        panel.setFlowLayout(); // ERROR
        panel.add(button);
        frame.add(panel);
        frame.setSize(300, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}`,
    options: [
      'panel.setLayout(new);',
      'panel.addFlowLayout();',
      'panel.appendLayout(new FlowLayout());',
      'panel.setLayout(new FlowLayout());',
    ],
    correctIndex: 3,
    explanation:
      'The setLayout() method is used to define the layout manager for a panel. FlowLayout is the default layout for JPanel.',
  },
  {
    id: 'a9-q7',
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 7,
    question: 'Which method is used to remove a component from a container in AWT?',
    options: [
      'remove()',
      'deleteComponent()',
      'removeComponent()',
      'destroy()',
    ],
    correctIndex: 0,
    explanation:
      'The remove() method is used to remove a component from a container in AWT. It takes a Component object as an argument and removes it from the container.',
  },
  {
    id: 'a9-q8',
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 8,
    question: 'Which method is used to handle mouse click events in Java Swing?',
    options: [
      'mouseClicked()',
      'keyPressed()',
      'actionPerformed()',
      'componentShown()',
    ],
    correctIndex: 0,
    explanation:
      'The mouseClicked() method in the MouseListener interface is used to handle mouse click events in Java Swing.',
  },
  {
    id: 'a9-q9',
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 9,
    question:
      'Which Swing component is best suited for displaying a drop-down list of selectable options?',
    options: ['JButton', 'JComboBox', 'JTextField', 'JPanel'],
    correctIndex: 1,
    explanation:
      'JComboBox is a Swing component that provides a drop-down list from which users can select one option.',
  },
  {
    id: 'a9-q10',
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 10,
    question: 'Which of the following function is used to specify the layout of a container.',
    options: ['UseLayout()', 'setLayout()', 'layout()', 'DesignLayout()'],
    correctIndex: 1,
    explanation:
      'The setLayout() function is used to specify the layout of a container.',
  },

  // ============================================================================
  // ASSIGNMENT X / 10 (NOC26-CS36 Jan-2026 25S)
  // ============================================================================
  {
    id: 'a10-q1',
    assignmentId: 10,
    assignmentLabel: 'Assignment X',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 1,
    question: 'Which Swing component is used to display a window?',
    options: ['JFrame', 'JButton', 'JLabel', 'JTextField'],
    correctIndex: 0,
    explanation:
      'JFrame is the top-level Swing container that represents a window with a title bar and borders. JButton, JLabel, and JTextField are components placed inside a window.',
  },
  {
    id: 'a10-q2',
    assignmentId: 10,
    assignmentLabel: 'Assignment X',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 2,
    question: 'Which Swing component is used to enter a single line of text?',
    options: ['JButton', 'JLabel', 'JTextField', 'JPanel'],
    correctIndex: 2,
    explanation:
      'JTextField is a single-line text input component. JLabel only displays text, JButton is a clickable button, and JPanel is a container.',
  },
  {
    id: 'a10-q3',
    assignmentId: 10,
    assignmentLabel: 'Assignment X',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 3,
    question:
      'Which Swing component is commonly used to display non-editable text?',
    options: ['JLabel', 'JButton', 'JFrame', 'JTextField'],
    correctIndex: 0,
    explanation:
      'JLabel displays a short, non-editable string of text or an icon.',
  },
  {
    id: 'a10-q4',
    assignmentId: 10,
    assignmentLabel: 'Assignment X',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 4,
    question: 'Which JDBC interface is used to execute SQL statements?',
    options: ['ResultSet', 'Statement', 'Connection', 'DriverManager'],
    correctIndex: 1,
    explanation:
      'The Statement interface is used to execute SQL statements. ResultSet holds query results, Connection represents a database connection, and DriverManager manages JDBC drivers.',
  },
  {
    id: 'a10-q5',
    assignmentId: 10,
    assignmentLabel: 'Assignment X',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 5,
    question: 'Which JDBC object contains the result of a SELECT query?',
    options: ['Connection', 'Statement', 'ResultSet', 'DriverManager'],
    correctIndex: 2,
    explanation:
      'A ResultSet object contains the rows returned by a SELECT query.',
  },
  {
    id: 'a10-q6',
    assignmentId: 10,
    assignmentLabel: 'Assignment X',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 6,
    question: 'Which JDBC class is used to establish a database connection?',
    options: ['DriverManager', 'ResultSet', 'Statement', 'Scanner'],
    correctIndex: 0,
    explanation:
      'DriverManager is the JDBC class used to establish a database connection, typically through DriverManager.getConnection().',
  },
  {
    id: 'a10-q7',
    assignmentId: 10,
    assignmentLabel: 'Assignment X',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 7,
    question: 'Which Java class is used to connect a client to a server?',
    options: ['ServerSocket', 'Socket', 'URL', 'NetworkInterface'],
    correctIndex: 1,
    explanation:
      'The Socket class represents the client endpoint and is used to connect a client to a server.',
  },
  {
    id: 'a10-q8',
    assignmentId: 10,
    assignmentLabel: 'Assignment X',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 8,
    question:
      'Which class is used by a server to listen for client connections?',
    options: ['Socket', 'URL', 'ServerSocket', 'NetworkInterface'],
    correctIndex: 2,
    explanation:
      'ServerSocket is used by a server to listen for incoming client connection requests and accept them using accept().',
  },
  {
    id: 'a10-q9',
    assignmentId: 10,
    assignmentLabel: 'Assignment X',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 9,
    question: 'Which protocol is used in the URL https://nptel.ac.in?',
    options: ['FTP', 'HTTP', 'HTTPS', 'SMTP'],
    correctIndex: 2,
    explanation:
      'The URL begins with https://, so it uses the HTTPS protocol (HTTP over TLS).',
  },
  {
    id: 'a10-q10',
    assignmentId: 10,
    assignmentLabel: 'Assignment X',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 10,
    question:
      'Which method of NetworkInterface is used to check whether a network interface is up?',
    options: ['isActive()', 'isUp()', 'isRunning()', 'isConnected()'],
    correctIndex: 1,
    explanation:
      'NetworkInterface.isUp() returns true if the network interface is up and running.',
  },

  // ============================================================================
  // ASSIGNMENT 11 (NOC26-CS36 Jan-2026 25S)
  // ============================================================================
  {
    id: 'a11-q1',
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 1,
    question: 'How do you establish a connection to a database using JDBC?',
    options: [
      'By creating an instance of the Connection interface',
      'By using the DriverManager.getConnection() method',
      'By implementing the Connection interface',
      'By extending the Connection class',
    ],
    correctIndex: 1,
    explanation:
      'To establish a connection to a database using JDBC, you use the DriverManager.getConnection() method. This method takes a JDBC URL, username, and password as parameters and returns a Connection object, which represents a connection to the database. The JDBC URL specifies the database type, location, and other connection details.',
  },
  {
    id: 'a11-q2',
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 2,
    question: 'Which method executes a simple query and returns a single Result Set object?',
    options: ['executeQuery()', 'executeUpdate()', 'execute()', 'run()'],
    correctIndex: 0,
    explanation:
      'The executeQuery() method is used to execute a simple SQL query that returns a single ResultSet object.',
  },
  {
    id: 'a11-q3',
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 3,
    question:
      'Which of the following ensures that the correct driver is used to access each data source?',
    options: [
      'java.sql.Manager',
      'java.sql.DriverManager',
      'java.sql.Statement',
      'java.sql.DriverSession',
    ],
    correctIndex: 1,
    explanation:
      'The DriverManager class ensures that the correct driver is used to access each data source. It manages a list of database drivers and handles establishing connections to the database.',
  },
  {
    id: 'a11-q4',
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 4,
    question: 'What is the purpose of the ResultSet interface in JDBC?',
    options: [
      'To store the result of a query',
      'To execute SQL queries',
      'To manage database connections',
      'To update data in the database',
    ],
    correctIndex: 0,
    explanation:
      'The ResultSet interface in JDBC represents the result set returned by a query. It provides methods to navigate through the result set, retrieve data, and get information about the columns in the result set. The ResultSet interface allows you to process and extract data from a database query.',
  },
  {
    id: 'a11-q5',
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 5,
    question: 'What does setAutoCommit(false) do?',
    options: [
      'commits transaction after each query',
      'explicitly commits transaction',
      'does not commit transaction automatically after each query',
      'never commits transaction',
    ],
    correctIndex: 2,
    explanation:
      'setAutoCommit(false) does not commit transaction automatically after each query. That saves a lot of time of the execution and hence improves performance.',
  },
  {
    id: 'a11-q6',
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 6,
    question:
      'The following is a statement in Java using JDBC.\nWhich of the following statement is FALSE?',
    code: `Connection con = DriverManager.getConnection(
    "jdbc:mysql://localhost:3306/nptel","joy","java"
);`,
    options: [
      '3306 is the default MySQL port.',
      'Database name is ‘nptel’',
      'The database server is hosted on IP 127.0.0.1',
      'Username is ‘java’ and the password is ‘joy’',
    ],
    correctIndex: 3,
    explanation:
      'In the statement, joy is the username and java is the password. Therefore, statement d, which incorrectly claims that the password for the java user is joy, is false.',
  },
  {
    id: 'a11-q7',
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 7,
    question: 'What is the correct order to close database resources?',
    options: [
      'Connection then Statement then ResultSet',
      'ResultSet then Statement then Connection',
      'Statement then Connection then ResultSet',
      'Statement then ResultSet then Connection',
    ],
    correctIndex: 1,
    explanation:
      'The correct order to close database resources is to first close the ResultSet, then the Statement, and finally the Connection. This ensures that all resources are properly released in the correct sequence.',
  },
  {
    id: 'a11-q8',
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 8,
    question: 'What is the full form of JDBC?',
    options: [
      'Java Database Connectivity',
      'Java Data Code',
      'Java Data Communication',
      'Java Development Connectivity',
    ],
    correctIndex: 0,
    explanation:
      'JDBC stands for Java Database Connectivity, a Java API used to connect and interact with relational databases. It provides methods to query and update data in a database.',
  },
  {
    id: 'a11-q9',
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 9,
    question:
      'Fill in the missing code to establish a connection to a MySQL database.\nWhat should replace // INSERT CODE HERE ?',
    code: `import java.sql.*;

public class JDBCExample {
    public static void main(String[] args) {
        try {
            // Load JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Establish Connection
            Connection connection = // INSERT CODE HERE;

            System.out.println("Connected to the database.");
            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`,
    options: [
      'DriverManager.connect("mysql:localhost:mydb", "user", "password");',
      'DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "user", "password");',
      'Connection.get("jdbc:mysql://localhost:3306/mydb", "user", "password");',
      'Driver.connect("jdbc:mysql://localhost:mydb", "user", "password");',
    ],
    correctIndex: 1,
    explanation:
      'The DriverManager.getConnection method establishes a connection to the specified database URL with the provided username and password.',
  },
  {
    id: 'a11-q10',
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 10,
    question: 'What is the purpose of the DriverManager class in JDBC?',
    options: [
      'To manage database connections.',
      'To execute SQL queries.',
      'To fetch data from a database.',
      'To represent a database record.',
    ],
    correctIndex: 0,
    explanation:
      'The DriverManager class loads the JDBC drivers and establishes connections to databases.',
  },

  // ============================================================================
  // ASSIGNMENT XII / 12 (NOC26-CS36 Jan-2026 25S)
  // ============================================================================
  {
    id: 'a12-q1',
    assignmentId: 12,
    assignmentLabel: 'Assignment XII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 1,
    question: 'Which JDBC object is used to iterate over records returned by a SELECT query?',
    options: ['Statement', 'Connection', 'ResultSet', 'DriverManager'],
    correctIndex: 2,
    explanation:
      'A ResultSet object stores and allows traversal of rows returned by a SELECT query.',
  },
  {
    id: 'a12-q2',
    assignmentId: 12,
    assignmentLabel: 'Assignment XII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 2,
    question: 'Which method is used to display a Swing JFrame on the screen?',
    options: ['display()', 'setVisible(true)', 'showFrame()', 'open()'],
    correctIndex: 1,
    explanation:
      'A Swing frame becomes visible only after calling setVisible(true).',
  },
  {
    id: 'a12-q3',
    assignmentId: 12,
    assignmentLabel: 'Assignment XII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 3,
    question: 'What is the index of the first element in a Java array?',
    options: ['1', '-1', '0', 'Depends on array size'],
    correctIndex: 2,
    explanation: 'Java arrays are zero-indexed.',
  },
  {
    id: 'a12-q4',
    assignmentId: 12,
    assignmentLabel: 'Assignment XII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 4,
    question: 'Consider the following program: (note space appears only one at a time)',
    code: `public class Question {
    public static void main(String[] args) {

        String str = "NPTEL - Programming in JAVA - JAN 2026";

        System.out.println(str.length());
    }
}`,
    options: ['38', '39', '40', '41'],
    correctIndex: 0,
    explanation:
      'The provided Java program calculates and prints the length of the string str, which contains the text "NPTEL - Programming in JAVA - JAN 2026".\nThe output of this program will be: 38',
  },
  {
    id: 'a12-q5',
    assignmentId: 12,
    assignmentLabel: 'Assignment XII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 5,
    question: 'Which keyword is used to handle exceptions in Java?',
    options: ['error', 'handle', 'catch', 'throwable'],
    correctIndex: 2,
    explanation: 'The catch block handles exceptions thrown in the try block.',
  },
  {
    id: 'a12-q6',
    assignmentId: 12,
    assignmentLabel: 'Assignment XII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 6,
    question: 'What is the output of the following program?',
    code: `public class Test {
    public static void aMethod() throws Exception {
        try {
            throw new Exception();
        } finally {
            System.out.print("finally ");
        }
    }

    public static void main(String args[]) {
        try {
            aMethod();
        } catch (Exception e) {
            System.out.print("exception ");
        }
        System.out.print("finished ");
    }
}`,
    options: [
      'finally',
      'exception finished',
      'finally exception finished',
      'Compilation fails',
    ],
    correctIndex: 2,
    explanation: `The program is syntactically correct and here for two try blocks, there is one catch block.
Here's the step-by-step explanation:
I. The main method calls aMethod(), which throws an Exception.
II. Inside aMethod(), an Exception is thrown in the try block.
III. The finally block is always executed, regardless of whether an exception is thrown or not. In this case, it prints "finally ".
IV. Since aMethod() throws an Exception, control moves to the catch block in main.
V. The catch block prints "exception ".
VI. After the try-catch block in main, "finished " is printed.
VII. Therefore, the complete output is "finally exception finished".`,
  },
  {
    id: 'a12-q7',
    assignmentId: 12,
    assignmentLabel: 'Assignment XII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 7,
    question: 'What is the output of the following program?',
    code: `class Program {
    public static void main(String[] args) {
        int counter = 10;
        do {
            System.out.print(2 / counter);
            counter--;
        } while (counter > 2);
    }
}`,
    options: ['00000012', '00000000', '10011001', '12211221'],
    correctIndex: 1,
    explanation: `The provided program uses a do-while loop to iterate from counter = 10 down to counter = 3. During each iteration, it prints the result of 2 / counter.
1. counter = 10: 2 / 10 results in 0 (integer division).
2. counter = 9: 2 / 9 results in 0.
3. counter = 8: 2 / 8 results in 0.
4. counter = 7: 2 / 7 results in 0.
5. counter = 6: 2 / 6 results in 0.
6. counter = 5: 2 / 5 results in 0.
7. counter = 4: 2 / 4 results in 0.
8. When counter = 3: 2 / 3 results in 0.
After counter becomes 2, the loop condition counter > 2 fails, and the loop terminates.
Therefore, the output of the program is 00000000.`,
  },
  {
    id: 'a12-q8',
    assignmentId: 12,
    assignmentLabel: 'Assignment XII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 8,
    question:
      'What should be the value of X and Y for the output of the below program to be 36?',
    code: `public class Question {
    public static void main(String[] args) {
        int X = 4;
        int Y = 5;
        int sum = 0;
        for (int i = 0; i < X; i++) {
            for (int j = i; j < Y; j++) {
                sum = sum + j;
            }
        }
        System.out.print(sum);
    }
}`,
    options: [
      'X = 6 and Y = 5',
      'X = 2 and Y = 7',
      'X = 1 and Y = 10',
      'X = 4 and Y = 5',
    ],
    correctIndex: 3,
    explanation: `The following is the output of the program for different values of X and Y:
a. when X = 6 and Y = 5 output is 40
b. when X = 2 and Y = 7 output is 42
c. when X = 1 and Y = 10 output is 45
d. when X = 4 and Y = 5 output is 36`,
  },
  {
    id: 'a12-q9',
    assignmentId: 12,
    assignmentLabel: 'Assignment XII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 9,
    question:
      'Which of the following options correctly initializes the elements of the numbers array with values 1, 2, 3, 4, and 5?',
    code: `public class NPTEL {
    public static void main(String[] args) {
        int[] numbers = new int[5];
        // #1 : Missing code block
        System.out.println("First element: " + numbers[0]);
    }
}`,
    options: [
      'numbers = {1, 2, 3, 4, 5};',
      'for (int i = 1; i < numbers.length; i++) {\n    numbers[i] = i;\n}',
      'numbers[] = {1, 2, 3, 4, 5};',
      'numbers = new int[]{1, 2, 3, 4, 5};',
    ],
    correctIndex: 3,
    explanation:
      'numbers = new int[]{1, 2, 3, 4, 5}; is the correct answer because it initializes the numbers array with values 1, 2, 3, 4, and 5 using array initializer syntax.',
  },
  {
    id: 'a12-q10',
    assignmentId: 12,
    assignmentLabel: 'Assignment XII',
    courseCode: 'NOC26-CS36 (Jan-2026 25S)',
    questionNumber: 10,
    question:
      'Which of the following statements are correct and would NOT cause a compilation error?',
    code: `  I.   float[] = new float(3);
 II.   float f1[] = new float[];
III.   float[] f2 = new float[3];
 IV.   float f3[] = new float[3];
  V.   float f4[]= { 1.0f, 2.0f, 2.0f };
 VI.   float f5[] = new float[] { 1.0f, 2.0f, 3.0f};`,
    options: ['iii, iv, v, vi', 'i, ii, iii, iv', 'ii, iii, v, vi', 'i, ii, iv, vi'],
    correctIndex: 0,
    explanation:
      'Option iii, iv, v and vi are syntactically correct for declaration of an array.',
  },
];
