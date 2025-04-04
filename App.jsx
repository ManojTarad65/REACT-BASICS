import React from 'react'

const App = () => {
 const obj = [{

  name: 'Manoj',

  age: 25,
  city: 'Bangalore'
  

 }, {
  name: 'japu',
  age:24,
  city: 'jaipur'

  }]

  return (
    <div className="list">
  
       <div>{obj.name}</div>
       <div>{obj.age}</div>
       <div>{obj.city}</div>
            <div>{obj.map((item) => <div> {item.name} {item.age} {item.city}</div>)}</div>
    </div>
  )
}

export default App
