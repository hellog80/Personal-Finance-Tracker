<html>
  <body>
    <h1>Personal Finance Tracker</h1>
    <br>
    A web application built with JavaScript that allows users to track their income, expenses, and savings. It provides intuitive data visualizations, category management, and financial insights to help users stay on top of their finances.
    <br>
    <h2>Features</h2>
      <ui>
        <li>Track Income and Expenses: Add, edit, and categorize income and expense entries.</li>
        <li> Data Visualization: Get insights into your spending with charts (Pie chart for categories, Line chart for savings over time).</li>
         <li>Savings Goals: Set savings goals and track progress.</li>
         <li>Filter by Category/Date: Easily filter your transactions by category or date range.</li>
         <li>Responsive Design: Optimized for mobile and desktop usage.</li>
         <li>LocalStorage/IndexedDB: Data is saved locally, ensuring you don't lose your records.</li>
      </ui>
    <h2>Tech Stack</h2>
    <ui>
      <li>Frontend: HTML5, CSS3, JavaScript (ES6+)</li>
      <li>Backend: Node.js, Express (Optional if adding a backend for persistent data storage)</li>
      <li>Data Visualization: Chart.js</li>
      <li>Storage: LocalStorage or IndexedDB (for local data persistence)</li>
    </ui>
    <h2>Getting Started</h2>
      <h3>Prerequisites</h3>
      <ui>
      <li>Node.js installed on your machine (only if using the optional backend)</li>
      <li>A modern browser that supports ES6+</li>
      </ui>
    <h2>Installation</h2>
      <ui>
      <li>Clone the repository:<br>&nbsp;&nbsp;&nbsp;<code>git clone https://github.com/hellog80/personal-finance-tracker.git</code></li>
      <li>Navigate into the project directory:<br>&nbsp;&nbsp;&nbsp;<code>cd personal-finance-tracker</code></li>
      <li>Install dependencies (only required if using the optional backend):<br>&nbsp;&nbsp;&nbsp;<code>npm install</code></li>
      <li>Run the application:<br>&nbsp;&nbsp;&nbsp;<code>npm start</code></li>
      </ui>
     <h2>Usage</h2>
      <ui>
      <li><b>Add Income/Expense</b>: Input the amount, category, and description, and the app will automatically add it to the transaction list.</li>
      <li><b>Set Savings Goals</b>: Define a savings goal, and the app will track how close you are to reaching it based on your income and expenses.</li>
      <li><b>View Visualizations</b>: Navigate to the "Insights" tab to see pie charts of expenses by category and line charts of savings over time.</li>
      </ui>
    <h2>License</h2>
      <ui>
      <li>This project is licensed under the MIT License - see the LICENSE file for details.</li>
      </ui>
  </body>
</html>
