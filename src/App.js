import './App.css';
import React from 'react';
import DataFetch from './components/DataFetch';
import ComponentC from './components/ComponentC';
import Counter1 from './components/Counter1';
import Component2 from './components/Component2';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div>
      Akshay is learning!!
      {/* <DataFetch /> */}
      {/* <UserContext.Provider value={'Akshay'}>
        <ChannelContext.Provider value={'My Channel'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
       */}
       <Component2 />
    </div>
  );
}

export default App;
