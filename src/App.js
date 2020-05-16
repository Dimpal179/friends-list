import React from 'react';

import './App.css';

const App = () => (<PersonList />)

const PersonList = () => {
  const people = [
    {
      img: 17, name: 'Dimpal', job: 'Developer'
    },
    {
      img: 80, name: 'pratima', job: 'Professer'
    },
    {
      img: 26, name: 'Anjna', job: 'Designer'
    }
  ]
  return (
    <section>
<Person Person={people[0]} >
I am Software developer with more than 2 years experience in .net development.
</Person>
<Person Person={people[1]}/>
<Person Person={people[2]}/>
    </section>
    
  )
}

const Person = (props) => {
  const{img,name,job}=props.Person;
  const{children}=props;
  const url = `https://randomuser.me/api/portraits/thumb/women/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
       <i> {children}</i>
      </div>
    </div>
  )
};



export default App;
