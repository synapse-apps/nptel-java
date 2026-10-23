import { QuizQuestion } from './types';

export const questions2023Phase3: QuizQuestion[] = [
  // ============================================================================
  // 2023 ASSIGNMENT 09
  // ============================================================================
  {
    id: '2023-a9-q1',
    year: 2023,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC23-CS36',
    questionNumber: 1,
    question: 'Which of the following Swing components inherently support the WindowListener interface?',
    options: [
      'Swing frames (JFrame)',
      'Swing checkboxes (JCheckBox)',
      'Swing dialogs (JDialog)',
      'Swing combo boxes (JComboBox)',
    ],
    correctIndex: 0,
    correctIndexes: [0, 2],
    explanation:
      'Swing frames (JFrame) and Swing dialogs (JDialog) Swing components inherently support the WindowListener interface.',
  },
  {
    id: '2023-a9-q2',
    year: 2023,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC23-CS36',
    questionNumber: 2,
    question: 'Which class in Swing provides a graphical way to display images, icons, or custom graphics?',
    options: [
      'JImage',
      'JLabel',
      'JImageIcon',
      'JDialog',
    ],
    correctIndex: 1,
    explanation:
      'JLabel is used to display images, icons, or custom graphics.',
  },
  {
    id: '2023-a9-q3',
    year: 2023,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC23-CS36',
    questionNumber: 3,
    question: 'Which event listener interface is commonly used to handle user actions like button clicks in Swing?',
    options: [
      'ActionListener',
      'MouseListener',
      'KeyListener',
      'WindowListener',
    ],
    correctIndex: 0,
    explanation:
      'ActionListener interface is commonly used to handle user actions like button clicks in Swing.',
  },
  {
    id: '2023-a9-q4',
    year: 2023,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC23-CS36',
    questionNumber: 4,
    question: 'What is/are the way(s) to create a Frame in Java Swing?',
    options: [
      'By creating the object of Frame class (association)',
      'By extending Frame class (inheritance)',
      'By importing a package named JFrame',
      'By declaring a class with name JFrame',
    ],
    correctIndex: 0,
    correctIndexes: [0, 1],
    explanation:
      'We can create a frame component by creating the object of Frame class (association) and by extending Frame class (inheritance).',
  },
  {
    id: '2023-a9-q5',
    year: 2023,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC23-CS36',
    questionNumber: 5,
    question: 'Which method is used to add a component to a JPanel in Java Swing?',
    options: [
      'add ( )',
      'addComponent( )',
      'addElement( )',
      'insertComponent( )',
    ],
    correctIndex: 0,
    explanation:
      'add( ) - method is used to add a component to a JPanel in Java Swing . Other options are not valid in the context of JPanel.',
  },
  {
    id: '2023-a9-q6',
    year: 2023,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC23-CS36',
    questionNumber: 6,
    question: 'Which of the following(s) is/are interface(s) of java.awt package?',
    options: [
      'Button',
      'Paint',
      'Dialog',
      'Shape',
    ],
    correctIndex: 1,
    correctIndexes: [1, 3],
    explanation:
      'Paint, Shape are interfaces of java.awt package.',
  },
  {
    id: '2023-a9-q7',
    year: 2023,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC23-CS36',
    questionNumber: 7,
    question: 'Which AWT layout manager is often used to create a responsive grid of components that automatically adjusts to the container\'s size?',
    options: [
      'BorderLayout',
      'GridLayout',
      'GridBagLayout',
      'BoxLayout',
    ],
    correctIndex: 1,
    explanation:
      'GridLayout manager is often used to create a responsive grid of components that automatically adjusts to the container\'s size',
  },
  {
    id: '2023-a9-q8',
    year: 2023,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC23-CS36',
    questionNumber: 8,
    question: 'Which Swing component is used for allowing users to select files and directories from the file system?',
    options: [
      'JFileChooser',
      'JFileSelector',
      'JFilePicker',
      'JFileDialog',
    ],
    correctIndex: 0,
    explanation:
      'JFileChooser is the Swing component used to select files and directories from the file system.',
  },
  {
    id: '2023-a9-q9',
    year: 2023,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC23-CS36',
    questionNumber: 9,
    question: 'What is the primary disadvantage of using AWT over Swing for GUI development?',
    options: [
      'AWT components are not well-suited for complex layouts.',
      'AWT lacks support for event handling.',
      'AWT components are heavyweight and platform-dependent.',
      'AWT does not support graphics rendering.',
    ],
    correctIndex: 2,
    explanation:
      'AWT components are heavyweight and platform-dependent.',
  },
  {
    id: '2023-a9-q10',
    year: 2023,
    assignmentId: 9,
    assignmentLabel: 'Assignment 09',
    courseCode: 'NOC23-CS36',
    questionNumber: 10,
    question: 'Which of the following is/are valid alignment option(s) for components in a FlowLayout?',
    options: [
      'LEFT',
      'TOP',
      'BOTTOM',
      'LEADING',
    ],
    correctIndex: 0,
    correctIndexes: [0, 3],
    explanation:
      'The following are valid alignment options for components in a FlowLayout in Java: LEFT, RIGHT, CENTER, LEADING, TRAILING.',
  },

  // ============================================================================
  // 2023 ASSIGNMENT 10
  // ============================================================================
  {
    id: '2023-a10-q1',
    year: 2023,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC23-CS36',
    questionNumber: 1,
    question: 'Which of the following statement(s) is(are) true?',
    options: [
      'TCP is not reliable.',
      'UDP is not reliable.',
      'TCP is fast and UDP is slow.',
      'In HTTPS, all communication between two computers are encrypted.',
    ],
    correctIndex: 1,
    correctIndexes: [1, 3],
    explanation:
      'TCP is a reliable but slow. HTTPS is the secure version of HTTP, where all communications between two computers are encrypted.',
  },
  {
    id: '2023-a10-q2',
    year: 2023,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC23-CS36',
    questionNumber: 2,
    question: 'Which of the following statement(s) is/are true?',
    options: [
      'DatagramSocket is a UDP endpoint API .',
      'DatagramSocket is a TCP server API .',
      'ServerSocket is a TCP server API.',
      'ServerSocket is a TCP client API.',
    ],
    correctIndex: 0,
    correctIndexes: [0, 2],
    explanation:
      'ServerSocket is a TCP server API, and will typically accept connections from client sockets. DatagramSocket is a UDP endpoint API and is used to send and receive datagram packets.',
  },
  {
    id: '2023-a10-q3',
    year: 2023,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC23-CS36',
    questionNumber: 3,
    question: 'Which of the following is/are interface(s) present in java.net package?',
    options: [
      'InetAddress',
      'URLConnection',
      'SocketOptions',
      'HttpURLConnection',
    ],
    correctIndex: 2,
    explanation:
      'SocketOptions is an interface in java.net package.',
  },
  {
    id: '2023-a10-q4',
    year: 2023,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC23-CS36',
    questionNumber: 4,
    question: 'Which of the following statement(s) is/are true?',
    options: [
      'URL is the acronym for Uniform Resource Locator.',
      'A URL takes the form of a string that describes how to find a resource on the Internet.',
      'URLs have two main components: the protocol needed to access the resource and the location of the resource.',
      'The URL class is present in the java.net package.',
    ],
    correctIndex: 0,
    correctIndexes: [0, 1, 2, 3],
    explanation:
      'All statements are valid.',
  },
  {
    id: '2023-a10-q5',
    year: 2023,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC23-CS36',
    questionNumber: 5,
    question: 'In the following URL, identify the Resource name? https://nptel.ac.in',
    options: [
      'https',
      'nptel.ac.in',
      'ac.in',
      'https://nptel.ac.in',
    ],
    correctIndex: 1,
    explanation:
      'Resource name is nptel.ac.in.',
  },
  {
    id: '2023-a10-q6',
    year: 2023,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC23-CS36',
    questionNumber: 6,
    question: 'Which of the following is/are application layer protocol(s)?',
    options: [
      'TCP',
      'UDP',
      'HTTP',
      'FTP',
    ],
    correctIndex: 2,
    correctIndexes: [2, 3],
    explanation:
      'TCP,UDP are transport layer protocols.',
  },
  {
    id: '2023-a10-q7',
    year: 2023,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC23-CS36',
    questionNumber: 7,
    question: 'In the socket programming, for an IP address, which can be used to find the host name and IP address of a client/ server?',
    options: [
      'The ServerSocket class',
      'The Socket class',
      'The InetAddress class',
      'The Connection interface',
    ],
    correctIndex: 2,
    explanation:
      'An object of the InetAddress class is used to obtain the IP address and the host name of a client/ server computer connected in a network.',
  },
  {
    id: '2023-a10-q8',
    year: 2023,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC23-CS36',
    questionNumber: 8,
    question: 'Which of the following statement(s) is/are true?',
    options: [
      'Addresses belongs to a Low-Level API.',
      'Sockets belong to High-Level API.',
      'URIs and URLs are Low-Level API.',
      'Interfaces are High-Level API.',
    ],
    correctIndex: 0,
    explanation:
      'The java.net package can be roughly divided in two sections: - A Low Level API, which deals with the following abstractions: - Addresses, which are networking identifiers, like IP addresses. - Sockets, which are basic bidirectional data communication mechanisms. - Interfaces, which describe network interfaces. - A High Level API, which deals with the following abstractions: - URIs, which represent Universal Resource Identifiers. - URLs, which represent Universal Resource Locators. - Connections, which represents connections to the resource pointed to by URLs.',
  },
  {
    id: '2023-a10-q9',
    year: 2023,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC23-CS36',
    questionNumber: 9,
    question: 'Which of the following statement(s) is/are true?',
    options: [
      'DatagramSocket implements Object.',
      'DatagramSocket implements Closeable.',
      'DatagramSocket extends Object.',
      'DatagramSocket extends Closeable.',
      'DatagramSocket extends Object implements Closeable',
    ],
    correctIndex: 4,
    explanation:
      'public class DatagramSocket extends Object implements Closeable is the class that represents a socket for sending and receiving datagram packets.',
  },
  {
    id: '2023-a10-q10',
    year: 2023,
    assignmentId: 10,
    assignmentLabel: 'Assignment 10',
    courseCode: 'NOC23-CS36',
    questionNumber: 10,
    question: 'Which of the following is/are application layer protocol(s)?',
    options: [
      'TCP',
      'UDP',
      'ARP',
      'SMTP',
    ],
    correctIndex: 3,
    explanation:
      'TCP, UDP are transport layer protocols. ARP is a Network - IP layer protocol. SMTP is Application layer protocol.',
  },

  // ============================================================================
  // 2023 ASSIGNMENT 11
  // ============================================================================
  {
    id: '2023-a11-q1',
    year: 2023,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC23-CS36',
    questionNumber: 1,
    question: 'Which of the following statements is true regarding the executeQuery( ) method of the java.sql.Statement interface in Java Database Connectivity (JDBC)?',
    options: [
      'The executeQuery( ) method is used to execute a DELETE statement.',
      'The executeQuery( ) method is used to execute a SELECT statement.',
      'The executeQuery( ) method is used to execute an INSERT statement.',
      'The executeQuery( ) method is used to execute an UPDATE statement.',
    ],
    correctIndex: 1,
    explanation:
      'The executeQuery( ) method is used to execute a SELECT statement.',
  },
  {
    id: '2023-a11-q2',
    year: 2023,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC23-CS36',
    questionNumber: 2,
    question: 'In JDBC, which component is responsible for managing a connection to the database?',
    options: [
      'DriverManager',
      'Connection',
      'Statement',
      'ResultSet',
    ],
    correctIndex: 0,
    explanation:
      'DriverManager is responsible for managing a connection to the database.',
  },
  {
    id: '2023-a11-q3',
    year: 2023,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC23-CS36',
    questionNumber: 3,
    question: 'What is the primary purpose of a PreparedStatement in JDBC?',
    options: [
      'To execute stored procedures.',
      'To execute SQL queries with parameters.',
      'To execute batch updates.',
      'To retrieve metadata about the database.',
    ],
    correctIndex: 1,
    explanation:
      'The PreparedStatement interface is used to execute parameterized SQL statements in JDBC.',
  },
  {
    id: '2023-a11-q4',
    year: 2023,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC23-CS36',
    questionNumber: 4,
    question: 'Which exception is commonly thrown when there is a failure in JDBC database connectivity?',
    options: [
      'FileNotFoundException',
      'NullPointerException',
      'SQLException',
      'ClassNotFoundException',
    ],
    correctIndex: 2,
    explanation:
      'SQLException is thrown when there is a failure in JDBC database connectivity.',
  },
  {
    id: '2023-a11-q5',
    year: 2023,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC23-CS36',
    questionNumber: 5,
    question: 'What is a "JDBC driver" in the context of database connectivity?',
    options: [
      'A database management system.',
      'A Java class for executing SQL queries.',
      'A software component that provides a bridge between Java applications and a specific database.',
      'A tool for generating SQL statements.',
    ],
    correctIndex: 2,
    explanation:
      'JDBC driver: A software component that provides a bridge between Java applications and a specific database.',
  },
  {
    id: '2023-a11-q6',
    year: 2023,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC23-CS36',
    questionNumber: 6,
    question: 'Which package in Java contains the classes and interfaces for JDBC?',
    options: [
      'java.sql',
      'java.io',
      'java.db',
      'java.net',
    ],
    correctIndex: 0,
    explanation:
      'java.sql package in Java contains the classes and interfaces for JDBC.',
  },
  {
    id: '2023-a11-q7',
    year: 2023,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC23-CS36',
    questionNumber: 7,
    question: 'Which method is used to execute a batch of SQL statements in JDBC?',
    options: [
      'executeBatch( )',
      'executeUpdateBatch( )',
      'executeBatchUpdate( )',
      'executeUpdate( )',
    ],
    correctIndex: 0,
    explanation:
      'Batch updates in JDBC allow multiple SQL statements to be executed in a single transaction. They can be used for any type of SQL statement, including INSERT, UPDATE, and DELETE. Batch updates are executed when the batch is executed, either explicitly using the executeBatch( ) method or implicitly when the batch size limit is reached. Batch updates can be rolled back using the rollback( ) method.',
  },
  {
    id: '2023-a11-q8',
    year: 2023,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC23-CS36',
    questionNumber: 8,
    question: 'Which method is used to move the cursor to the next row in a ResultSet?',
    options: [
      'nextRow( )',
      'next( )',
      'moveNext( )',
      'moveRow( )',
    ],
    correctIndex: 1,
    explanation:
      'The next() method moves the cursor to the next row.',
  },
  {
    id: '2023-a11-q9',
    year: 2023,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC23-CS36',
    questionNumber: 9,
    question: 'Which type of JDBC driver is also known as the "Thin driver"?',
    options: [
      'Type 1 driver',
      'Type 2 driver',
      'Type 3 driver',
      'Type 4 driver',
    ],
    correctIndex: 3,
    explanation:
      'JDBC: Type 4 - Thin Driver The thin driver converts JDBC calls directly into the vendor-specific database protocol. That is why it is known as thin driver. It is fully written in Java language.',
  },
  {
    id: '2023-a11-q10',
    year: 2023,
    assignmentId: 11,
    assignmentLabel: 'Assignment 11',
    courseCode: 'NOC23-CS36',
    questionNumber: 10,
    question: 'Which type of JDBC driver is a pure Java driver that communicates with the database using a middleware server?',
    options: [
      'Type 1 driver',
      'Type 2 driver',
      'Type 3 driver',
      'Type 4 driver',
    ],
    correctIndex: 2,
    explanation:
      'JDBC: Type 3 - Network Protocol The network protocol driver uses middleware (application server) that converts JDBC calls directly or indirectly into the vendor-specific database protocol. It is fully written in java.',
  },

  // ============================================================================
  // 2023 ASSIGNMENT 12
  // ============================================================================
  {
    id: '2023-a12-q1',
    year: 2023,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC23-CS36',
    questionNumber: 1,
    question: 'Which statement is true in case of using "this" keyword in a static method?',
    options: [
      '"this" keyword can be used in static method to access static variables only',
      '"this" keyword can\'t be used in static method',
      '"this" keyword can be used in static method',
      'None',
    ],
    correctIndex: 1,
    explanation:
      'In Java, the this keyword cannot be used in a static method because static methods have no instance context. The source answer key appears to contain an error; the correct choice is b.',
  },
  {
    id: '2023-a12-q2',
    year: 2023,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC23-CS36',
    questionNumber: 2,
    question: 'State whether the following statements are True or False.\ni) A catch can have comma-separated multiple arguments.\nii) Throwing an Exception always causes program termination.',
    options: [
      'True, False',
      'False, True',
      'True, True',
      'False, False',
    ],
    correctIndex: 3,
    explanation:
      'A catch block takes a single exception parameter, and throwing an exception does not always terminate the program because it can be caught. Therefore, both statements are false.',
  },
  {
    id: '2023-a12-q3',
    year: 2023,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC23-CS36',
    questionNumber: 3,
    question: 'Which of the following contains both date and time?',
    options: [
      'java.io.date',
      'java.sql.date',
      'java.util.date',
      'java.util.dateTime',
    ],
    correctIndex: 2,
    explanation:
      'java.util.date contains both date and time. Whereas, java.sql.date contains only date.',
  },
  {
    id: '2023-a12-q4',
    year: 2023,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC23-CS36',
    questionNumber: 4,
    question: 'In Graphics class which method is used to draws a rectangle with the specified width and height?',
    options: [
      'public void drawRect(int x, int y, int width, int height)',
      'public abstract void fillRect(int x, int y, int width, int height)',
      'public abstract void drawLine(int x1, int y1, int x2, int y2)',
      'public abstract void drawOval(int x, int y, int width, int height)',
    ],
    correctIndex: 0,
    explanation:
      'Graphics.drawRect(int x, int y, int width, int height) draws the outline of a rectangle with the specified width and height.',
  },
  {
    id: '2023-a12-q5',
    year: 2023,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC23-CS36',
    questionNumber: 5,
    question: 'Which of the following control expressions are valid for an if statement?',
    options: [
      'Any integer expression.',
      'Any Boolean expression.',
      'A String object.',
      'Any expression with mixed arithmetic.',
    ],
    correctIndex: 1,
    explanation:
      'In Java if accepts only boolean expression',
  },
  {
    id: '2023-a12-q6',
    year: 2023,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC23-CS36',
    questionNumber: 6,
    question: 'Consider the following program:\nWhat is the output of the Java program given above?',
    codeNote: 'Program image unavailable in the source PDF.',
    options: [
      'No output',
      'GOAT',
      'DOMESTIC',
      'Compiler error',
    ],
    correctIndex: 3,
    explanation:
      'The program image is unavailable in the source PDF. The answer key gives option d (Compiler error): case statements must start with "case" or "default".',
  },
  {
    id: '2023-a12-q7',
    year: 2023,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC23-CS36',
    questionNumber: 7,
    question: 'Consider the following program:\nWhat is the output of the following program?',
    codeNote: 'Program image unavailable in the source PDF.',
    options: [
      'java',
      'ava',
      'y java',
      'january',
    ],
    correctIndex: 1,
    explanation:
      'The program image is unavailable in the source PDF. The answer key gives option b (ava).',
  },
  {
    id: '2023-a12-q8',
    year: 2023,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC23-CS36',
    questionNumber: 8,
    question: 'Which of the following statements would cause a compilation error?',
    options: [
      'float[] = new float(3);',
      'float f2[] = new float[];',
      'float[] f1 = new float[3];',
      'float f3[] = new float[3];',
      'float f5[]={ 1.0f, 2.0f, 2.0f };',
      'float f4[] = new float[] { 1.0f, 2.0f, 3.0f};',
    ],
    correctIndex: 0,
    correctIndexes: [0, 1],
    explanation:
      'Option (c), (d), (e) and (f) are syntactically correct for declaration of an array. (a), (b) will cause error.',
  },
  {
    id: '2023-a12-q9',
    year: 2023,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC23-CS36',
    questionNumber: 9,
    question: 'Consider the following piece of code in Java.\nWhat is the result, if the above-mentioned program is executed?',
    code: `public class Test {
public static void aMethod() throws Exception {
try {
throw new Exception();
}
finally {
System.out.print("finally ");
}
}
public static void main(String args[]){
try {
aMethod();
}
catch (Exception e) {

System.out.print("exception ");
} finally {
System.out.print("finally ");
}
System.out.print("finished ");
}
}`,
    options: [
      'finally',
      'finally exception finally finished',
      'finally exception finished',
      'Compilation fails',
    ],
    correctIndex: 1,
    explanation:
      'The program is syntactically correct and here for two try blocks.',
  },
  {
    id: '2023-a12-q10',
    year: 2023,
    assignmentId: 12,
    assignmentLabel: 'Assignment 12',
    courseCode: 'NOC23-CS36',
    questionNumber: 10,
    question: 'Which is a component in AWT that can contain another components like buttons, textfields, labels etc.?',
    options: [
      'Window',
      'Container',
      'Panel',
      'Frame',
    ],
    correctIndex: 1,
    explanation:
      'The Container is a component in AWT that can contain another components like buttons, textfields, labels etc. The classes that extends Container class are known as container such as Frame, Dialog and Panel.',
  },
];
