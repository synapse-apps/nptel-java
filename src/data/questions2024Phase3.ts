import { QuizQuestion } from './types';

export const questions2024Phase3: QuizQuestion[] = [
  // ============================================================================
  // 2024 ASSIGNMENT 09
  // ============================================================================
  {
    id: '2024-a9-q1',
    year: 2024,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC24-CS36',
    questionNumber: 1,
    question: 'What is the parent class of all AWT components?',
    options: [
      'java.awt.Panel',
      'java.awt.Component',
      'java.awt.Container',
      'java.awt.Frame',
    ],
    correctIndex: 1,
    explanation:
      'java.awt.Component is the parent class of all AWT components. It provides methods for setting and getting the properties of a component, such as its size and position.',
  },
  {
    id: '2024-a9-q2',
    year: 2024,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC24-CS36',
    questionNumber: 2,
    question: 'Which event is generated when a user clicks a button in AWT?',
    options: [
      'MouseEvent',
      'ActionEvent',
      'KeyEvent',
      'WindowEvent',
    ],
    correctIndex: 1,
    explanation:
      'The ActionEvent is generated when a user clicks a button in AWT. An ActionListener handles the event and performs the necessary actions.',
  },
  {
    id: '2024-a9-q3',
    year: 2024,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC24-CS36',
    questionNumber: 3,
    question: 'Which of the following architecture does the Swing framework use?',
    options: [
      'MVC',
      'MVP',
      'Layered architecture',
      'Master-Slave architecture',
    ],
    correctIndex: 0,
    explanation:
      'Swing framework uses MVC architecture.',
  },
  {
    id: '2024-a9-q4',
    year: 2024,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC24-CS36',
    questionNumber: 4,
    question: 'A ____ is the basic class for all SWING UI components?',
    options: [
      'Container',
      'JComponent',
      'Component',
      'Jbox',
    ],
    correctIndex: 1,
    explanation:
      'A JComponent is a basic class for all SWING UI components.',
  },
  {
    id: '2024-a9-q5',
    year: 2024,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC24-CS36',
    questionNumber: 5,
    question: 'Which event is generated when a window is resized in AWT?',
    options: [
      'WindowEvent',
      'ComponentEvent',
      'ResizeEvent',
      'ContainerEvent',
    ],
    correctIndex: 1,
    explanation:
      'The ComponentEvent is generated when a window is resized in AWT. It is used to handle changes in the size or position of components.',
  },
  {
    id: '2024-a9-q6',
    year: 2024,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC24-CS36',
    questionNumber: 6,
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
    id: '2024-a9-q7',
    year: 2024,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC24-CS36',
    questionNumber: 7,
    question: 'What is true about the following code.',
    code: `import javax.swing.*;

public class Nptel {
    public static void main(String[] args) {
        JFrame frame = new JFrame("My Frame");
        frame.add(new JButton("OK"));
        frame.add(new JButton("Cancel"));
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(200, 200);
        frame.setVisible(true);
    }
}`,
    options: [
      'Both "OK" and "Cancel" button is added, but only "Cancel" button is visible.',
      'Only "OK" button is added and visible, "Cancel" button is not added.',
      'Only "Cancel" button will be added and visible, "OK" button is not added.',
      'Code throws an ERROR.',
    ],
    correctIndex: 0,
    explanation:
      'By default, the layout of the content pane in a JFrame is BorderLayout. Button OK is placed in the center of content pane, then button Cancel is placed in the same place. So you only can see button Cancel.',
  },
  {
    id: '2024-a9-q8',
    year: 2024,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC24-CS36',
    questionNumber: 8,
    question: 'Which of the following function is used to generate the application\'s top-level window?',
    options: [
      'JPanel',
      'JFrame',
      'JCombo',
      'JBox',
    ],
    correctIndex: 1,
    explanation:
      'JFrame is used to generate the application\'s top-level window.',
  },
  {
    id: '2024-a9-q9',
    year: 2024,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC24-CS36',
    questionNumber: 9,
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
    id: '2024-a9-q10',
    year: 2024,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC24-CS36',
    questionNumber: 10,
    question: 'Which layout manager divides the container into five regions: North, South, East, West, and Center?',
    options: [
      'Border Layout',
      'Grid Layout',
      'Flow Layout',
      'Card Layout',
    ],
    correctIndex: 0,
    explanation:
      'Border Layout divides the container into five regions, and components can be added to each region: North, South, East, West, and Center.',
  },

  // ============================================================================
  // 2024 ASSIGNMENT 10
  // ============================================================================
  {
    id: '2024-a10-q1',
    year: 2024,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC24-CS36',
    questionNumber: 1,
    question: 'Which class provides methods to work with URLs?',
    options: [
      'URLConnection',
      'HttpURL',
      'NetURL',
      'URL',
    ],
    correctIndex: 3,
    explanation:
      'The URL class provides methods to work with Uniform Resource Locators.',
  },
  {
    id: '2024-a10-q2',
    year: 2024,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC24-CS36',
    questionNumber: 2,
    question: 'What does the following code do?',
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
    options: [
      'Creates a JFrame with a JButton labeled "Programming in Java"',
      'Compiles with errors',
      'Displays a message dialog',
      'Creates a JPanel with a JButton labeled "Programming in Java"',
    ],
    correctIndex: 0,
    explanation:
      'The code extends JFrame and uses the JButton class object to create a button with the name of "Programming in Java".',
  },
  {
    id: '2024-a10-q3',
    year: 2024,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC24-CS36',
    questionNumber: 3,
    question: 'What happens when the button in this Java code snippet is clicked?',
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
    options: [
      'The program exits',
      'A message dialog with the text "Welcome to the course" is displayed',
      'The button label changes to "Welcome to the course"',
      'Nothing happens',
    ],
    correctIndex: 1,
    explanation:
      'The code creates a button with label "Click Me" and in the frame titled "NPTEL Java Course". A action listener is defined that opens a new message dialog with the text "Welcome to the course" when the button is clicked.',
  },
  {
    id: '2024-a10-q4',
    year: 2024,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC24-CS36',
    questionNumber: 4,
    question: 'What GUI component is used to input the password in this Java code snippet?',
    code: `import javax.swing.*;
public class NPTELLoginGUI extends JFrame {
    JTextField username;
    JPasswordField password;
    JButton loginButton;
    public LoginGUI() {
        username = new JTextField();
        password = new JPasswordField();
        loginButton = new JButton("Student Login");
        add(username);
        add(password);
        add(loginButton);
        setSize(300, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(null);
        setVisible(true);
    }
    public static void main(String[] args) {
        new LoginGUI();
    }
}`,
    options: [
      'JTextField',
      'JButton',
      'JTextArea',
      'JPasswordField',
    ],
    correctIndex: 3,
    explanation:
      'The GUI component which is used to input the password field is JPasswordField.',
  },
  {
    id: '2024-a10-q5',
    year: 2024,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC24-CS36',
    questionNumber: 5,
    question: 'What does this Java code snippet create?',
    code: `import javax.swing.*;
public class NPTEL {
    public static void main(String[] args) {
        JFrame frame = new JFrame("NPTEL Java Course");
        String[] colors = {"Red", "Green", "Blue"};
        JComboBox<String> comboBox = new JComboBox<>(colors);
        comboBox.setBounds(50, 50, 90, 20);
        frame.add(comboBox);
        frame.setSize(300, 200);
        frame.setLayout(null);
        frame.setVisible(true);
    }
}`,
    options: [
      'A frame with a list of colors displayed as buttons',
      'A frame with a combo box containing options "Red", "Green", and "Blue"',
      'A frame with radio buttons for selecting colors',
      'A frame with checkboxes for selecting colors',
    ],
    correctIndex: 1,
    explanation:
      'The code snippet creates a JComboBox with the options "Red", "Green", and "Blue", and adds it to a JFrame.',
  },
  {
    id: '2024-a10-q6',
    year: 2024,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC24-CS36',
    questionNumber: 6,
    question: 'What does this Java code snippet do?',
    code: `import java.net.*;

public class NPTEL {
    public static void main(String[] args) {
        try {
            InetAddress address = InetAddress.getByName("nptel.ac.in");
            System.out.println("Host Name: " + address.getHostName());
            System.out.println("IP Address: "+ address.getHostAddress());
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}`,
    options: [
      'Just prints the IP address of the local machine',
      'Prints the IP address and host name of the local machine',
      'Prints the IP address and host name of "nptel.ac.in"',
      'Just prints the IP address of "nptel.ac.in"',
    ],
    correctIndex: 2,
    explanation:
      'The code snippet retrieves and prints the IP address and host name of the specified domain "nptel.ac.in". Output: Host Name: nptel.ac.in IP Address: 216.239.34.21',
  },
  {
    id: '2024-a10-q7',
    year: 2024,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC24-CS36',
    questionNumber: 7,
    question: 'What does this Java code snippet do?',
    code: `import java.sql.*;

public class NPTEL {
    public static void main(String[] args) {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/mydatabase",
                "username", "password");
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM employees");
            while (rs.next()) {
                System.out.println(rs.getString(1)+" "+rs.getString(2));
            }
            con.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}`,
    options: [
      'Connects to a MySQL database, retrieves data from the "employees" table, and prints it',
      'Inserts data into the "employees" table of a MySQL database',
      'Deletes data from the "employees" table of a MySQL database',
      'Updates data in the "employees" table of a MySQL database',
    ],
    correctIndex: 0,
    explanation:
      'The code snippet establishes a connection to a MySQL database, executes a SELECT query to retrieve data from the "employees" table, and prints the results.',
  },
  {
    id: '2024-a10-q8',
    year: 2024,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC24-CS36',
    questionNumber: 8,
    question: 'What does this Java code snippet do?',
    code: `import java.sql.*;
public class NPTEL {
    public static void main(String[] args) {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/mydatabase",
                "username", "password");
            String query="INSERT INTO employees (name,age)VALUES(?, ?)";
            PreparedStatement pstmt = con.prepareStatement(query);
            pstmt.setString(1, "John");
            pstmt.setInt(2, 30);
            int rowsAffected = pstmt.executeUpdate();
            System.out.println(rowsAffected + " row(s) inserted.");
            con.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}`,
    options: [
      'Retrieves data from the "employees" table',
      'Inserts a new employee record into the "employees" table',
      'Updates employee records in the "employees" table',
      'Deletes employee records from the "employees" table',
    ],
    correctIndex: 1,
    explanation:
      'The code snippet inserts a new employee record with name "John" and age 30 into the "employees" table of a MySQL database using a PreparedStatement.',
  },
  {
    id: '2024-a10-q9',
    year: 2024,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC24-CS36',
    questionNumber: 9,
    question: 'What additional code is needed at #1 to complete this Java program to send a message?',
    code: `import java.net.*;
public class NPTEL {
    public static void main(String[] args) {
        try {
            DatagramSocket socket = new DatagramSocket();
            InetAddress address = InetAddress.getByName(
                "localhost");
            String message = "Hello, UDP Server!";
            DatagramPacket packet = new DatagramPacket(
                message.getBytes(),
                message.length(),
                address,
                9876);
            // #1 (MISSING CODE)
            socket.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}`,
    options: [
      'socket.receive(packet);',
      'Socket.Send(packet);',
      'Socket.send(packet);',
      'socket.send(packet);',
    ],
    correctIndex: 3,
    explanation:
      'Java is case sensitive. A socket.send() function needs to be called to send the packet to the server.',
  },
  {
    id: '2024-a10-q10',
    year: 2024,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC24-CS36',
    questionNumber: 10,
    question: 'What is missing in this Java program?',
    code: `public class NPTEL {
    public static void main(String[] args) {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/mydatabase",
                "username", "password");
            String query="INSERT INTO employees(name, age)VALUES (?, ?)";
            PreparedStatement pstmt = con.prepareStatement(query);
            pstmt.setString(1, "John");
            pstmt.setInt(2, 30);
            int rowsAffected = pstmt.executeUpdate();
            System.out.println(rowsAffected + " row(s) inserted.");
            con.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}`,
    options: [
      'Retrieving the number of employees',
      'Deleting employee records',
      'Updating employee records',
      'Importing necessary JDBC libraries',
    ],
    correctIndex: 3,
    explanation:
      'The program lacks the import statements for the necessary JDBC libraries like java.sql.* .',
  },

  // ============================================================================
  // 2024 ASSIGNMENT 11
  // ============================================================================
  {
    id: '2024-a11-q1',
    year: 2024,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC24-CS36',
    questionNumber: 1,
    question: 'What is the correct order to close database resources?',
    options: [
      'Connection then Statement then ResultSet',
      'ResultSet then Statement then Connection',
      'Statement then Connection then ResultSet',
      'Statement then ResultSet then Connection',
    ],
    correctIndex: 1,
    explanation:
      'When manually closing database resources, they should be closed in the reverse order from which they were opened. This means that the ResultSet object is closed before the Statement object and the Statement object is closed before the Connection object.',
  },
  {
    id: '2024-a11-q2',
    year: 2024,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC24-CS36',
    questionNumber: 2,
    question: 'How many types of JDBC drivers there?',
    options: [
      '3',
      '4',
      '8',
      '10',
    ],
    correctIndex: 1,
    explanation:
      'There are 4 types of JDBC drivers: Type-1 driver or JDBC-ODBC bridge driver, Type-2 driver or Native-API driver, Type-3 driver or Network Protocol driver, Type-4 driver or Thin driver.',
  },
  {
    id: '2024-a11-q3',
    year: 2024,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC24-CS36',
    questionNumber: 3,
    question: 'What is the correct sequence to create a database connection?\ni. Import JDBC packages.\nii. Open a connection to the database.\niii. Load and register the JDBC driver.\niv. Execute the statement object and return a query resultset.\nv. Create a statement object to perform a query.\nvi. Close the resultset and statement objects.\nvii. Process the resultset.\nviii. Close the connection.',
    options: [
      'i, ii, iii, v, iv, vii, viii, vi',
      'i, iii, ii, v, iv, vii, vi, viii',
      'ii, i, iii, iv, viii, vii, v, vi',
      'i, iii, ii, iv, v, vi, vii, viii',
    ],
    correctIndex: 1,
    explanation:
      'To create a database connection in Java, we must follow the sequence given below: 1. Import JDBC packages. 2. Load and register the JDBC driver. 3. Open a connection to the database. 4. Create a statement object to perform a query. 5. Execute the statement object and return a query resultset. 6. Process the resultset. 7. Close the resultset and statement objects. 8. Close the connection.',
  },
  {
    id: '2024-a11-q4',
    year: 2024,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC24-CS36',
    questionNumber: 4,
    question: 'Which of the following is correct about connection pooling?',
    options: [
      'Application server like WebLogic, WebSphere, JBoss and Tomcat provides the facilities to configure connection pooling.',
      'Components like Apache Commons DBCP Component can be used to configure connection pooling.',
      'Both of the above.',
      'None of the above.',
    ],
    correctIndex: 2,
    explanation:
      'If you use an application server like WebLogic, WebSphere, JBoss, Tomcat. , then your application server provides the facilities to configure for connection pooling. If you are not using an application server then components like Apache Commons DBCP Component can be used.',
  },
  {
    id: '2024-a11-q5',
    year: 2024,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC24-CS36',
    questionNumber: 5,
    question: 'Which of the following is used to test the operation?',
    options: [
      'JDBC API',
      'JDBC Driver manager',
      'JDBC Test suite',
      'JDBC-ODBC Bridge Drivers',
    ],
    correctIndex: 2,
    explanation:
      'JDBC Test suite: It is used to test the operation(such as insertion, deletion, updation) being performed by JDBC Drivers.',
  },
  {
    id: '2024-a11-q6',
    year: 2024,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC24-CS36',
    questionNumber: 6,
    question: 'The JDBC architecture consists of _____________ to access a database.',
    options: [
      'three-tier processing models',
      'two-tier processing models',
      'two-tier and three-tier processing models',
      'None of the above',
    ],
    correctIndex: 2,
    explanation:
      'The JDBC architecture consists of two-tier and three-tier processing models to access a database.',
  },
  {
    id: '2024-a11-q7',
    year: 2024,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC24-CS36',
    questionNumber: 7,
    question: 'Which of these obtains a Connection?',
    options: [
      'Connection.getConnection(url)',
      'Driver.getConnection(url)',
      'DriverManager.getConnection(url)',
      'new Connection(url)',
    ],
    correctIndex: 2,
    explanation:
      'Option C is the correct answer because DriverManager is the class used in JDBC to get a Connection.',
  },
  {
    id: '2024-a11-q8',
    year: 2024,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC24-CS36',
    questionNumber: 8,
    question: 'Which class provides methods to create a client-side socket in Java?',
    options: [
      'ServerSocket',
      'NetSocket',
      'Socket',
      'ClientSocket',
    ],
    correctIndex: 2,
    explanation:
      'The Socket class in the java.net package is used to create client-side sockets.',
  },
  {
    id: '2024-a11-q9',
    year: 2024,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC24-CS36',
    questionNumber: 9,
    question: 'What does JDBC stand for?',
    options: [
      'Java Database Connectivity',
      'Java Database Connection',
      'Java Database Control',
      'Java Database Connector',
    ],
    correctIndex: 0,
    explanation:
      'JDBC stands for Java Database Connectivity.',
  },
  {
    id: '2024-a11-q10',
    year: 2024,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC24-CS36',
    questionNumber: 10,
    question: 'Which method can be used to query for a single object using JdbcTemplate?',
    options: [
      'queryForObject()',
      'queryForList()',
      'query()',
      'singleQuery()',
    ],
    correctIndex: 0,
    explanation:
      'The queryForObject() method of JdbcTemplate is used to query for a single object.',
  },

  // ============================================================================
  // 2024 ASSIGNMENT 12
  // ============================================================================
  {
    id: '2024-a12-q1',
    year: 2024,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC24-CS36',
    questionNumber: 1,
    question: 'Which of the following statements are correct and would NOT cause a compilation error?',
    code: `i. float[] = new float(3);
ii. float f1[] = new float[];
iii. float[] f2 = new float[3];
iv. float f3[] = new float[3];
v. float f4[]= { 1.0f, 2.0f, 2.0f };
vi. float f5[] = new float[] { 1.0f, 2.0f, 3.0f};`,
    options: [
      'iii, iv, v, vi',
      'i, ii, iii, iv',
      'ii, iii, v, vi',
      'i, ii, iv, vi',
    ],
    correctIndex: 0,
    explanation:
      'Option iii, iv, v and vi are syntactically correct for declaration of an array.',
  },
  {
    id: '2024-a12-q2',
    year: 2024,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC24-CS36',
    questionNumber: 2,
    question: 'What is the result, if the following program is executed?',
    code: `public class NPTEL {
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
      '"finally"',
      '"exception finished"',
      '"finally exception finished"',
      'Compilation fails',
    ],
    correctIndex: 2,
    explanation:
      'The program is syntactically correct and here for two try blocks, there is one catch block.',
  },
  {
    id: '2024-a12-q3',
    year: 2024,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC24-CS36',
    questionNumber: 3,
    question: 'What is the output of the following program?',
    code: `public class NPTEL {
   public static void main(String[] args) {
       String str = "Programming with java - nptel.";
       System.out.println(str.charAt(13+4) + str.substring(13+5, 13+8));
    }
}`,
    options: [
      'java',
      'ava',
      'java - nptel',
      'with',
    ],
    correctIndex: 0,
    explanation:
      'str.charAt(17) returns \'j\' and str.substring(18,21) returns \'ava\' and they are printed together.',
  },
  {
    id: '2024-a12-q4',
    year: 2024,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC24-CS36',
    questionNumber: 4,
    question: 'If you run this program the how many threads will be executed altogether?',
    code: `class NPTEL extends Thread {
    public void run() {
        System.out.println("I am from Run…");
    }
}

class MyProgram {
    public static void main(String[] args) {
        NPTEL t = new NPTEL();
        t.start();
    }
}`,
    options: [
      'One thread only.',
      'Two threads only.',
      'Three threads only.',
      'No thread will run in this case.',
    ],
    correctIndex: 1,
    explanation:
      'Here, two thread objects will be in execution: One is the thread due to the execution of the main() method and other is the run() of the object t.',
  },
  {
    id: '2024-a12-q5',
    year: 2024,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC24-CS36',
    questionNumber: 5,
    question: 'Which of the following method is used to set a frame, say f with size 300 × 200 pixels?',
    code: `JFrame f = new JFrame();`,
    options: [
      'f.setSize(300, 200);',
      'f.setSize(200, 300);',
      'f.paint(300, 200);',
      'f.setVisible(300, 200);',
    ],
    correctIndex: 0,
    explanation:
      'The setSize(300,200) method is used to do the job. Other are either syntactically not valid or not appropriate.',
  },
  {
    id: '2024-a12-q6',
    year: 2024,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC24-CS36',
    questionNumber: 6,
    question: 'Which of the following control expressions are valid for an if statement?\ni. Any integer expression.\nii. Any Boolean expression.\niii. A String object.\niv. Any expression with mixed arithmetic.',
    options: [
      'only ii',
      'ii, iii',
      'ii,iv',
      'i, ii',
    ],
    correctIndex: 0,
    explanation:
      'Any expression with Boolean or integer variables are valid. The condition will evaluate to zero (false) or no-zero (true) values. Other options are not valid.',
  },
  {
    id: '2024-a12-q7',
    year: 2024,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC24-CS36',
    questionNumber: 7,
    question: 'Which of the following options correctly initializes the elements of the numbers array with values 1, 2, 3, 4, and 5?',
    code: `public class NPTEL {
    public static void main(String[] args) {
        int[] numbers = new int[5];
        // #1 : Missing code block
        System.out.println("First element: " + numbers[0]);
    }
}`,
    options: [
      'numbers = {1, 2, 3, 4, 5};',
      'for (int i = 1; i < numbers.length; i++) {\nnumbers[i] = i;\n}',
      'numbers[] = {1, 2, 3, 4, 5};',
      'numbers = new int[]{1, 2, 3, 4, 5};',
    ],
    correctIndex: 3,
    explanation:
      'numbers = new int[]{1, 2, 3, 4, 5}; is the correct answer because it initializes the numbers array with values 1, 2, 3, 4, and 5 using array initializer syntax.',
  },
  {
    id: '2024-a12-q8',
    year: 2024,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC24-CS36',
    questionNumber: 8,
    question: 'Which of the following options correctly extracts and prints the word "World" from the str string?',
    code: `public class StringExample {
    public static void main(String[] args) {
        String str = "Hello, World!";
        //#1 Missing code block
    }
}`,
    options: [
      'System.out.println(str.substring(7, 12));',
      'System.out.println(str.subString(7, 12));',
      'System.out.println(str.extract(7, 12));',
      'System.out.println(str.substr(7, 13));',
    ],
    correctIndex: 0,
    explanation:
      'System.out.println(str.substring(7, 12)); is the correct answer because the substring() method extracts a substring from the str string starting from index 7 (inclusive) to index 12 (exclusive), which results in the substring "World".',
  },
  {
    id: '2024-a12-q9',
    year: 2024,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC24-CS36',
    questionNumber: 9,
    question: 'What will be the output of this program?',
    code: `public class NPTEL {
    public static void main(String[] args) {
        String str1 = "Hello";
        String str2 = "Hello";
        String str3 = new String("Hello");
        System.out.print((str1 == str2) + " ");
        System.out.print(str1 == str3);
    }
}`,
    options: [
      'true false',
      'false true',
      'true true',
      'false false',
    ],
    correctIndex: 0,
    explanation:
      'str1 and str2 are string literals and will be interned to the same memory location, so str1 == str2 will be true. However, str3 is created using the new keyword, so it will be stored in a different memory location, leading str1 == str3 to be false.',
  },
  {
    id: '2024-a12-q10',
    year: 2024,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC24-CS36',
    questionNumber: 10,
    question: 'What will be the output of this program?',
    code: `public class NPTEL {
    public static void main(String[] args) {
        try {
            int num = 10 / 0;
            System.out.println(num);
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic exception occurred");
        } finally {
            System.out.println("Finally block executed");
        }
    }
}`,
    options: [
      'Compilation ERROR',
      '"Finally block executed"',
      '"Arithmetic exception occurred\nFinally block executed"',
      'Runtime ERROR',
    ],
    correctIndex: 2,
    explanation:
      'The division by zero will throw an ArithmeticException, which will be caught in the catch block. Then, the finally block will be executed.',
  },
];
