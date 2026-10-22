import { QuizQuestion } from './types';

export const questions2025Phase3: QuizQuestion[] = [
  // ============================================================================
  // 2025 ASSIGNMENT 09 (Pages 85–94, labeled Assignment X in PDF)
  // ============================================================================
  {
    id: '2025-a9-q1',
    year: 2025,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC25-CS57',
    questionNumber: 1,
    question:
      'Which Swing component is best suited for displaying a drop-down list of selectable options?',
    options: ['JButton', 'JComboBox', 'JTextField', 'JPanel'],
    correctIndex: 1,
    explanation:
      'JComboBox is a Swing component that provides a drop-down list from which users can select one option.',
  },
  {
    id: '2025-a9-q2',
    year: 2025,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC25-CS57',
    questionNumber: 2,
    question: 'What will be the output of the following Java code?',
    code: `import javax.swing.*;
import java.awt.*;

public class SwingExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Example");
        frame.setLayout(new FlowLayout());
        frame.add(new JButton("Button 1"));
        frame.add(new JButton("Button 2"));
        frame.setSize(300, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}`,
    options: [
      'A frame with two buttons labeled “Button 1” and “Button 2”.',
      'A frame with only one button labeled “Button 2”.',
      'Compilation Error.',
      'Runtime Error.',
    ],
    correctIndex: 0,
    explanation:
      'The FlowLayout layout manager arranges components in a row. Here, both buttons are added and displayed in the frame.',
  },
  {
    id: '2025-a9-q3',
    year: 2025,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC25-CS57',
    questionNumber: 3,
    question: 'Which of the following is true about the JLabel component in Java Swing?',
    options: [
      'It is used only for displaying text.',
      'It can display text and icons.',
      'It cannot be added to a JPanel.',
      'It generates mouse events by default.',
    ],
    correctIndex: 1,
    explanation:
      'JLabel can display both text and images/icons. It is commonly used for non-interactive purposes in Swing GUIs.',
  },
  {
    id: '2025-a9-q4',
    year: 2025,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC25-CS57',
    questionNumber: 4,
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
    id: '2025-a9-q5',
    year: 2025,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC25-CS57',
    questionNumber: 5,
    question:
      'What should replace // INSERT CODE HERE to create a JFrame with a JButton labeled "Click Me"?',
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
    id: '2025-a9-q6',
    year: 2025,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC25-CS57',
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
      'panel.setLayout(new GridLayout());',
      'panel.addFlowLayout();',
      'panel.appendLayout(new FlowLayout());',
      'panel.setLayout(new FlowLayout());',
    ],
    correctIndex: 3,
    explanation:
      'The setLayout() method is used to define the layout manager for a panel. FlowLayout is the default layout for JPanel.',
  },
  {
    id: '2025-a9-q7',
    year: 2025,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC25-CS57',
    questionNumber: 7,
    question: 'What will the following Java program output?',
    code: `import javax.swing.*;

public class LabelExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Label Demo");
        JLabel label = new JLabel("Welcome to Swing");
        frame.setSize(250, 100);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}`,
    options: [
      'A frame with the label "Welcome to Swing".',
      'A frame with no visible label.',
      'Compilation Error.',
      'Runtime Error.',
    ],
    correctIndex: 1,
    explanation:
      'The JLabel has to be added to the frame using add(). The frame is visible, but the label is not displayed as it has not been added.',
  },
  {
    id: '2025-a9-q8',
    year: 2025,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC25-CS57',
    questionNumber: 8,
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
    id: '2025-a9-q9',
    year: 2025,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC25-CS57',
    questionNumber: 9,
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
    diagramType: 'swing-dialog-solution',
    options: [
      'The program exits',
      'A message dialog with the text "Welcome to the course" is displayed',
      'The button label changes to "Welcome to the course"',
      'Nothing happens',
    ],
    correctIndex: 1,
    explanation:
      'The code creates a button with label “Click Me” and in the frame titled “NPTEL Java Course”. A action listener is defined that opens a new message dialog with the text “Welcome to the course” when the button is clicked.',
  },
  {
    id: '2025-a9-q10',
    year: 2025,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC25-CS57',
    questionNumber: 10,
    question:
      'The container displays a number of components in a column, with extra space going between the first two components.\nWhich of the following layout manager(s) most naturally suited for the described layout?',
    diagramType: 'boxlayout-column',
    options: ['BoxLayout', 'FlowLayout', 'BorderLayout', 'GridLayout'],
    correctIndex: 0,
    explanation:
      'BoxLayout lays out components in either a column or a row. You can specify extra space using an invisible component.',
  },

  // ============================================================================
  // 2025 ASSIGNMENT 10 (Pages 95–104)
  // ============================================================================
  {
    id: '2025-a10-q1',
    year: 2025,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC25-CS57',
    questionNumber: 1,
    question: 'Which Swing component is used to create a button?',
    options: ['JLabel', 'JButton', 'JTextField', 'JPanel'],
    correctIndex: 1,
    explanation:
      'JButton is used to create a clickable button in a Swing-based GUI.',
  },
  {
    id: '2025-a10-q2',
    year: 2025,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC25-CS57',
    questionNumber: 2,
    question: 'What does a toggle button in Java do?',
    options: [
      'It switches between two states, like on/off or enabled/disabled.',
      'It only changes the color of the button when clicked.',
      'It displays text inside the button.',
      'It opens a new window when clicked.',
    ],
    correctIndex: 0,
    explanation:
      'A toggle button allows users to switch between two states, such as "on" or "off." It behaves like a checkbox, but it is represented as a button.',
  },
  {
    id: '2025-a10-q3',
    year: 2025,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC25-CS57',
    questionNumber: 3,
    question:
      'What is the primary purpose of SQL(Structured Query Language) in Java application ?',
    options: [
      'To create and amange user interfaces',
      'To interact with databases for data retrieval and manipulation',
      'To performa systme-level operation like file management',
      'To handle memory allocation in Java programs',
    ],
    correctIndex: 1,
    explanation:
      'SQL is used in Java applications primarily to connect to databases, retrieve data, update records, and perform other database operations, making it essential for handling data within applications.',
  },
  {
    id: '2025-a10-q4',
    year: 2025,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC25-CS57',
    questionNumber: 4,
    question:
      'Which method is used in Java to check if a network interface is up and running?',
    options: ['isActive()', 'isUp()', 'isRunning()', 'isConnected()'],
    correctIndex: 1,
    explanation:
      'In Java, the isUp() method is used to check whether a network interface is up and running. This method is part of the NetworkInterface class from the java.net package.',
  },
  {
    id: '2025-a10-q5',
    year: 2025,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC25-CS57',
    questionNumber: 5,
    question:
      'Which of the following are considered as basic networking components in Java?',
    options: [
      'Socket and ServerSocket',
      'String and Integer',
      'JFrame and Jbutton',
      'Scanner and System',
    ],
    correctIndex: 0,
    explanation:
      'In Java, Socket and ServerSocket are the primary components used for establishing client-server communication. These classes belong to the java.net package and are fundamental to networking in Java. String, Integer, JFrame, JButton, Scanner, and System are not used for basic networking functionality.',
  },
  {
    id: '2025-a10-q6',
    year: 2025,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC25-CS57',
    questionNumber: 6,
    question:
      'In context of the following URL, identify the correct option.\nhttps://nptel.ac.in',
    options: [
      'There is no protocol provided in the above link.',
      'The website provides a secure connection.',
      'The given link is incomplete and hence cannot open a website.',
      'The ac.in refers to the domain.',
    ],
    correctIndex: 1,
    explanation:
      'Resource name is nptel.ac.in. The protocol used is https and hence provides a secure connection to the website. The link is complete in all aspects and hence can open a website (if hosted). The ac.in portion of the website is top-level domain part and not a path.',
  },
  {
    id: '2025-a10-q7',
    year: 2025,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC25-CS57',
    questionNumber: 7,
    question: 'Which of the following is/are application layer protocol(s)?',
    options: ['TCP', 'UDP', 'ARP', 'SMTP'],
    correctIndex: 3,
    explanation:
      'TCP, UDP are transport layer protocols. ARP is a Network - IP layer protocol. SMTP is Application layer protocol.',
  },
  {
    id: '2025-a10-q8',
    year: 2025,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC25-CS57',
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
    id: '2025-a10-q9',
    year: 2025,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC25-CS57',
    questionNumber: 9,
    question: 'Which class provides methods to work with URLs?',
    options: ['URLConnection', 'HttpURL', 'NetURL', 'URL'],
    correctIndex: 3,
    explanation:
      'The URL class provides methods to work with Uniform Resource Locators.',
  },
  {
    id: '2025-a10-q10',
    year: 2025,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC25-CS57',
    questionNumber: 10,
    question: 'Which class in Java is used to create a server socket?',
    options: [
      'Socket',
      'ServerSocket',
      'DatagramSocket',
      'HttpURLConnection',
    ],
    correctIndex: 1,
    explanation:
      'ServerSocket is used to listen for incoming connections on a specific port, enabling communication with clients in server-client applications.',
  },

  // ============================================================================
  // 2025 ASSIGNMENT 11 (Pages 105–114)
  // ============================================================================
  {
    id: '2025-a11-q1',
    year: 2025,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC25-CS57',
    questionNumber: 1,
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
    id: '2025-a11-q2',
    year: 2025,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC25-CS57',
    questionNumber: 2,
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
    id: '2025-a11-q3',
    year: 2025,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC25-CS57',
    questionNumber: 3,
    question:
      'Identify the error in the following code and select the corrected statement:\nWhat is the correct statement to replace the line with error (stmt.execute("SELECT * FROM users");)?',
    code: `import java.sql.*;

public class ResultSetExample {
    public static void main(String[] args) throws SQLException {
        Connection connection =
            DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb",
            "user", "password");
        Statement stmt = connection.createStatement();
        ResultSet rs = stmt.execute("SELECT * FROM users"); // Error
        while (rs.next()) {
            System.out.println(rs.getString("username"));
        }
        connection.close();
    }
}`,
    options: [
      'ResultSet rs = stmt.executeQuery("SELECT * FROM users");',
      'ResultSet rs = stmt.runQuery("SELECT * FROM users");',
      'ResultSet rs = stmt.execute("users SELECT * FROM");',
      'ResultSet rs = stmt.fetch("SELECT * FROM users");',
    ],
    correctIndex: 0,
    explanation:
      'The executeQuery method is used to execute SQL queries that return a ResultSet.',
  },
  {
    id: '2025-a11-q4',
    year: 2025,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC25-CS57',
    questionNumber: 4,
    question:
      'What will the following Java program output if the database contains a table products with a column name and three rows: Laptop, Phone, and Tablet?',
    code: `import java.sql.*;

public class DisplayProducts {
    public static void main(String[] args) {
        try {
            Connection conn =
                DriverManager.getConnection("jdbc:mysql://localhost:3306/store", "root",
                "pass");
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT name FROM products");
            while (rs.next()) {
                System.out.println(rs.getString("name"));
            }
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}`,
    options: [
      'Compilation Error',
      'Runtime Error',
      'Laptop\nPhone\nTablet',
      'No Output',
    ],
    correctIndex: 2,
    explanation:
      'The program fetches and displays all rows from the name column in the products table using a ResultSet.',
  },
  {
    id: '2025-a11-q5',
    year: 2025,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC25-CS57',
    questionNumber: 5,
    question:
      'Complete the following code to insert a new user into a users table.\nWhat should replace // INSERT CODE HERE ?',
    code: `import java.sql.*;

public class InsertUser {
    public static void main(String[] args) {
        try {
            Connection conn =
                DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root",
                "password");
            String query = "INSERT INTO users (username, email) VALUES (?, ?)";

            PreparedStatement pstmt = // INSERT CODE HERE;
            pstmt.setString(1, "john_doe");
            pstmt.setString(2, "john@example.com");
            pstmt.executeUpdate();
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}`,
    options: [
      'conn.createStatement(query);',
      'conn.prepareStatement(query);',
      'conn.execute(query);',
      'conn.runStatement(query);',
    ],
    correctIndex: 1,
    explanation:
      'The prepareStatement method prepares the SQL query for execution, allowing the use of parameterized inputs.',
  },
  {
    id: '2025-a11-q6',
    year: 2025,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC25-CS57',
    questionNumber: 6,
    question: `Which of the following SQL operations can be executed using the executeUpdate method in JDBC?
I. INSERT INTO users (id, name) VALUES (1, 'Alice');
II. UPDATE users SET name='Bob' WHERE id=1;
III. DELETE FROM users WHERE id=1;
IV. SELECT * FROM users;`,
    options: [
      'I, II, and III',
      'Only I and II',
      'Only I',
      'I, II, III and IV',
    ],
    correctIndex: 0,
    explanation:
      'The executeUpdate method is used for SQL operations that modify data (INSERT, UPDATE, DELETE). It cannot be used for SELECT queries, which return a ResultSet.',
  },
  {
    id: '2025-a11-q7',
    year: 2025,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC25-CS57',
    questionNumber: 7,
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
  {
    id: '2025-a11-q8',
    year: 2025,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC25-CS57',
    questionNumber: 8,
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
    id: '2025-a11-q9',
    year: 2025,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC25-CS57',
    questionNumber: 9,
    question:
      'Which method executes a simple query and returns a single Result Set object?',
    options: ['executeQuery()', 'executeUpdate()', 'execute()', 'run()'],
    correctIndex: 0,
    explanation:
      'The executeQuery() method is used to execute a simple SQL query that returns a single ResultSet object.',
  },
  {
    id: '2025-a11-q10',
    year: 2025,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC25-CS57',
    questionNumber: 10,
    question:
      'Which package in Java contains the classes and interfaces for JDBC?',
    options: ['java.sql', 'java.io', 'java.db', 'java.net'],
    correctIndex: 0,
    explanation:
      'java.sql package in Java contains the classes and interfaces for JDBC.',
  },

  // ============================================================================
  // 2025 ASSIGNMENT 12 (Pages 115–124)
  // ============================================================================
  {
    id: '2025-a12-q1',
    year: 2025,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC25-CS57',
    questionNumber: 1,
    question: 'What is the correct way to create a thread in Java?',
    options: [
      'Implementing the Runnable interface',
      'Extending the Thread class',
      'Both A and B',
      'None of the above',
    ],
    correctIndex: 2,
    explanation:
      'In Java, a thread can be created either by extending the Thread class or by implementing the Runnable interface.',
  },
  {
    id: '2025-a12-q2',
    year: 2025,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC25-CS57',
    questionNumber: 2,
    question: 'Which method starts a thread in Java?',
    options: ['start()', 'run()', 'execute()', 'init()'],
    correctIndex: 0,
    explanation:
      'The start() method is used to begin execution of a new thread.',
  },
  {
    id: '2025-a12-q3',
    year: 2025,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC25-CS57',
    questionNumber: 3,
    question: 'Which layout arranges components in a row-based order?',
    options: ['GridLayout', 'FlowLayout', 'BorderLayout', 'CardLayout'],
    correctIndex: 1,
    explanation:
      'FlowLayout arranges components in a row, in the order they are added.',
  },
  {
    id: '2025-a12-q4',
    year: 2025,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC25-CS57',
    questionNumber: 4,
    question: 'What does the setSize(400, 300); method do in a JFrame?',
    options: [
      'Sets the width to 300 and height to 400',
      'Sets the width to 400 and height to 300',
      'Maximizes the Jframe',
      'Closes the Jframe',
    ],
    correctIndex: 1,
    explanation:
      'The setSize(width, height) method sets the size of the JFrame, where 400 is the width and 300 is the height.',
  },
  {
    id: '2025-a12-q5',
    year: 2025,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC25-CS57',
    questionNumber: 5,
    question: 'What does the ResultSet object contain in JDBC?',
    options: [
      'Only non-null records from a table',
      'All records from a table, including null values',
      'Only null records',
      'A single column from a table',
    ],
    correctIndex: 1,
    explanation:
      'The ResultSet object contains all records from the table, including those with null values.',
  },
  {
    id: '2025-a12-q6',
    year: 2025,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC25-CS57',
    questionNumber: 6,
    question:
      'What will be the output of\nSystem.out.println("hello".length());?',
    options: ['3', '5', '6', '4'],
    correctIndex: 1,
    explanation:
      'The length() method returns the number of characters in a string. "hello" has 5 characters.',
  },
  {
    id: '2025-a12-q7',
    year: 2025,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC25-CS57',
    questionNumber: 7,
    question: 'What is the correct way to declare an array in Java?',
    options: [
      'int arr = new int(5);',
      'int[] arr = new int[5];',
      'array arr = new int[5];',
      'int arr[] = new int();',
    ],
    correctIndex: 1,
    explanation:
      'In Java, an array is declared using int[] arr = new int[5]; where 5 is the size.',
  },
  {
    id: '2025-a12-q8',
    year: 2025,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC25-CS57',
    questionNumber: 8,
    question: 'What will be printed by the following code?',
    code: `System.out.println("Java".charAt(1));`,
    options: ['J', 'a', 'v', 'A'],
    correctIndex: 1,
    explanation:
      'Indexing in Java starts from 0, so charAt(1) returns the second character, which is a.',
  },
  {
    id: '2025-a12-q9',
    year: 2025,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC25-CS57',
    questionNumber: 9,
    question: 'What is printed when this code runs?',
    code: `try {
    System.out.println("Try block");
} finally {
    System.out.println("Finally block");
}`,
    options: [
      'Only "Try block"',
      'Only "Finally block"',
      '"Try block" followed by "Finally block"',
      'Compilation error',
    ],
    correctIndex: 2,
    explanation:
      'The finally block always executes, even if no exception occurs.',
  },
  {
    id: '2025-a12-q10',
    year: 2025,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC25-CS57',
    questionNumber: 10,
    question: 'Which Java GUI framework is lightweight?',
    options: ['AWT', 'Swing', 'Both A and B', 'None'],
    correctIndex: 1,
    explanation:
      'Swing is a lightweight GUI framework compared to AWT, which is heavyweight.',
  },
];
