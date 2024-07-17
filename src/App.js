import logo from './logo.svg';
import './App.css';
import React from 'react';
import { SelectDemo } from './internalUI/select';
function optionGenerator(params) {
  const p = params.relationships || params.children
  return Object.keys(p).map(el => {
    return {
      value: p[el].categoryId,
      label: p[el].categoryValue,
      ...p[el].children ? { options: optionGenerator(p[el]) } : {}
    }
  })
}
function App() {
  const [state, setstate] = React.useState([]);
  React.useEffect(() => {
    fetch('https://gist.githubusercontent.com/hdck007/75477ccf582b786a94e1955a1a4f6064/raw/fbf6120d9848e71fac9c13a16f0c495ea06fa2d9/category-relation.json')
      .then(el => el.json())
      .then(el => {
        setstate(optionGenerator(el))
      }).catch(e => console.log(e))
  }, []);
  return (
    <div className='App' style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <SelectDemo options={state} label='Select category' />
    </div>
  );
}

export default App;
