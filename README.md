## Title

    Dynamic-Daigram-Flow

## 1. Objective

    The goal of this project is to develop a React application that creates an interactive diagram flow using the React Flow library. The diagram will be generated dynamically based on input metadata in JSON format, which defines nodes (such as shapes or elements in the diagram) and edges (connections between nodes). This allows users to visualize relationships interactively. The application should support adding, removing, and editing nodes and edges through user interactions, making it flexible for creating custom flows like process diagrams or mind maps. By the end, you'll have a responsive app that handles dynamic data, with tools for metadata input and state management, suitable for beginners learning React and diagram libraries.
    

## Tech Stack

- **Programming Language and Framework**: JavaScript with React (version 18 or later recommended for hooks and context).
- **Libraries**:
    - React Flow: For rendering interactive diagrams (install via npm).
    - Optional: React Context or Redux for state management; use built-in React hooks if keeping it simple.
- **Development Environment**:
    - Node.js (version 16 or higher) and npm (or yarn) for package management.
    - A code editor like Visual Studio Code (VS Code) for writing and debugging code.
- **Hardware Specifications**: A computer with at least 4GB RAM, a modern web browser (e.g., Chrome, Firefox) for testing, and internet access for installing packages and accessing documentation.
- **Other Tools**: Git for version control (optional but recommended), and a terminal/command prompt for running commands.
No special hardware is required beyond a standard development setup. Ensure your system has permissions to install global packages if needed.

## Completion Instructions

Follow these steps sequentially to build the application. Each step includes explanations and commands where applicable, assuming you're starting from scratch. Take your time, test after each major step, and refer to the React Flow documentation for details.

### Step 1: Set Up the React Project

- Open your terminal and create a new React app using Create React App (CRA), which sets up a basic structure.
- Run: `npx create-react-app dynamic-diagram-flow`.
- Navigate into the project folder: `cd dynamic-diagram-flow`.
- Start the development server: `npm start`. This opens the app in your browser at `http://localhost:3000`. Verify it runs without errors.

### Step 2: Install Required Libraries

- Stop the server if running (Ctrl+C in terminal).
- Install React Flow: `npm install reactflow`.
- If using Redux for state management (optional for advanced handling): `npm install redux react-redux`.
- Restart the server: `npm start`. This ensures all dependencies are available.

### Step 3: Define the Metadata JSON Structure

- Create a new file in `src` called `metadata.json`.
- Structure it as an object with two arrays: "nodes" and "edges".
- For nodes: Each node should have properties like id (unique string), type (e.g., "default"), position (object with x and y coordinates), and data (object with label or other info).
- For edges: Each edge should have id, source (node id), target (node id), and optional type (e.g., "smoothstep").
- Test by adding sample data (see Example Codes section for a snippet).

### Step 4: Implement State Management

- Decide on state management: Use React's useState and useEffect hooks for simplicity, or Context API for sharing state across components.
- In `src/App.js`, import necessary hooks.
- Create state variables for nodes and edges, initializing them from the metadata JSON.
- Use useEffect to load the metadata on component mount.

### Step 5: Set Up the React Flow Component

- In `src/App.js` or a new component like `src/components/Diagram.js`, import ReactFlow from 'reactflow'.
- Wrap your app in a ReactFlowProvider if needed for advanced features.
- Render a <ReactFlow> component, passing nodes and edges as props.
- Add event handlers like onNodesChange and onEdgesChange to update state dynamically.
- Include basic styling: Import 'reactflow/dist/style.css' to make the diagram look good.

### Step 6: Add Interactivity for Nodes and Edges

- Implement functions to add a new node: Generate a unique id, set default position, and update the nodes state array.
- For edges: Create a function to connect two nodes by adding an edge object to the edges state.
- Handle removal: Filter out the selected node/edge from state on delete.
- For editing: Use a form to update node data (e.g., label) and reflect changes in state.

### Step 7: Create UI for Metadata Input

- Build a sidebar component (e.g., `src/components/Sidebar.js`) using CSS for positioning (fixed or absolute).
- Use a modal library like react-modal (install if needed: `npm install react-modal`) or a simple div for input.
- Include forms with inputs for node/edge properties (e.g., id, label, source/target).
- On form submit, call functions to add/edit nodes/edges and update state.

### Step 8: Make the Diagram Responsive

- Use CSS to set the ReactFlow container to 100% width and height of its parent.
- Wrap the diagram in a div with flexbox or grid for layout.
- Test on different screen sizes: Resize browser window and check if nodes/edges adjust without overlapping.
- Add media queries in CSS for mobile views if needed.

### Step 9: Handle Diagram State Persistence

- Use localStorage to save the current nodes and edges state (stringify and parse JSON).
- On app load, check localStorage and initialize state from it if available.
- This ensures changes persist on refresh.

### Step 10: Add Documentation and Testing

- Create a `README.md` in the project root.
- Document architecture (e.g., components overview), setup (commands to run), and usage (how to add metadata).
- Test: Manually add/remove/edit nodes, check responsiveness, and verify with sample JSON.
- Debug using browser console; fix any errors like missing ids.

### Step 11: Finalize and Package

- Clean up code: Remove unused imports, format with Prettier if installed.
- Build for production: `npm run build`.
- Include the sample metadata.json in deliverables.

## Project Structure

Organize your project files logically for easy navigation. Here's a typical structure for this React app:

- **dynamic-diagram-flow/** (root folder)
    - **node_modules/**: Auto-generated dependencies (don't edit).
    - **public/**: Static files like index.html and favicon.
    - **src/**: Main source code.
        - **components/**: Reusable UI parts.
            - Diagram.js: Contains the ReactFlow rendering logic.
            - Sidebar.js: For input forms and controls.
            - NodeForm.js: Form for adding/editing nodes.
            - EdgeForm.js: Form for adding/editing edges.
        - **assets/**: Optional folder for images or styles.
        - App.js: Main app component that ties everything together.
        - index.js: Entry point for rendering the app.
        - metadata.json: Sample JSON file for nodes and edges.
        - App.css: Styles for the app layout.
    - package.json: Lists dependencies and scripts.
    - [README.md](http://readme.md/): Project documentation.

This structure separates concerns: Components for UI, src for logic, and root for config.

### Functionality

-Define the Metadata JSON Structure
-Implement State Management
-Set Up the React Flow Component
-Add Interactivity for Nodes and Edges
-Create UI for Metadata Input
- Make the Diagram Responsive
-Handle Diagram State Persistence


#### Must Have

    React Flow: For rendering interactive diagrams.

#### Nice to Have

    Optional: React Context or Redux for state management; use built-in React hooks if keeping it simple.

### Guidelines to develop a project

- Create a new React app using Create React App (CRA), which sets up a basic structure.
- Run: `npx create-react-app dynamic-diagram-flow`.
- Navigate into the project folder: `cd dynamic-diagram-flow`.
- Start the development server: `npm start`. This opens the app in your browser at `http://localhost:3000`. Verify it runs without errors.


## Resources

### Design files

    Organize your project files logically for easy navigation. Here's a typical structure for this React app:

- **dynamic-diagram-flow/** (root folder)
    - **node_modules/**: Auto-generated dependencies (don't edit).
    - **public/**: Static files like index.html and favicon.
    - **src/**: Main source code.
        - **components/**: Reusable UI parts.
            - Diagram.js: Contains the ReactFlow rendering logic.
            - Sidebar.js: For input forms and controls.
            - NodeForm.js: Form for adding/editing nodes.
            - EdgeForm.js: Form for adding/editing edges.
        - **assets/**: Optional folder for images or styles.
        - App.js: Main app component that ties everything together.
        - index.js: Entry point for rendering the app.
        - metadata.json: Sample JSON file for nodes and edges.
        - App.css: Styles for the app layout.
    - package.json: Lists dependencies and scripts.
    - [README.md](http://readme.md/): Project documentation.

### Example Codes

Metadata JSON Example (in src/metadata.json)

```
{
  "nodes": [
    {
      "id": "1",
      "type": "default",
      "position": { "x": 100, "y": 100 },
      "data": { "label": "Start Node" }
    },
    {
      "id": "2",
      "type": "default",
      "position": { "x": 300, "y": 100 },
      "data": { "label": "End Node" }
    }
  ],
  "edges": [
    {
      "id": "e1",
      "source": "1",
      "target": "2",
      "type": "smoothstep"
    }
  ]
}

```
State Initialization in App.js

```
import { useState, useEffect } from 'react';
import metadata from './metadata.json';

function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    setNodes(metadata.nodes);
    setEdges(metadata.edges);
  }, []);

  // Rest of the code...
}

```
Adding a Node Function

```
const addNode = () => {
  const newNode = {
    id: `${nodes.length + 1}`,
    type: 'default',
    position: { x: 0, y: 0 },
    data: { label: 'New Node' }
  };
  setNodes([...nodes, newNode]);
};

```


### Third-party packages

    - React Flow: For rendering interactive diagrams (install via npm).
    - Optional: React Context or Redux for state management; use built-in React hooks if keeping it simple.
