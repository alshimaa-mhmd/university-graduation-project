// context/ThemeContext.js
import { createContext } from 'react';

const DataContext = createContext(null); // pass a default value or null
const JobContext = createContext(null); // pass a default value or null

export default DataContext;
export { JobContext };