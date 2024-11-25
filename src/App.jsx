
import Card from './pages/AssingmentTwo/Card.jsx'
import Button from './pages/AssingmentThree/Button.jsx'
import Student from './pages/AssingmentFour/Student.jsx'
import UserGreeting from './pages/AssingmentFive/UserGreeting.jsx'
import List from './pages/AssignmentSix/List.jsx'
import ClickButton from './pages/AssignmentSeven/ClickButton.jsx'
//import CicaPic from './pages/AssignmentSeven/CicaPic.jsx' --not used
import MyComponent from './pages/Assignment(8+11)/MyComponent.jsx'
import Counter from './pages/Assignment(8+11)/Counter.jsx'
import MyChangeEvent from './pages/AssignmentNine/MyChangeEvent.jsx'
import ColorPicker from './pages/AssignmentTen/ColorPicker.jsx'
import UpdaterLearn from './pages/AssignmentTwelve/UpdateLearn.jsx'
import FoodList from './pages/AssignmentThirteen/FoodList.jsx'
import CarList from './pages/AssignmentFourteen/CarList.jsx'
import ToDoList from './pages/AssignmentFifteen/ToDoList.jsx'
import UseEffectHook from './pages/AssignmentSixteen/useEffectHook.jsx'
import DigitalClock from './pages/AssugnmentSeventeen/DigitalClock.jsx'
import ComponentA from './pages/AssingmentEighteen/ComponentA.jsx'
import UseRefHook from './pages/AssignmentNineteen/useRefHook.jsx'
//import StopWatch from './pages/AssignmentTwenty/StopWatch.jsx' --not done

import { Routes, Route, BrowserRouter } from 'react-router'
import Home from './pages/Home'
import AssignmentOne from "./pages/Assignment1"


function App() {


      const fruits = [{id: 1, name: "apple", calories: 95},
                      {id: 2, name: "orange", calories: 45},
                      {id: 3, name: "banana", calories: 105}]

      const vegetables = [{id: 4, name: "potato", calories: 110},
                          {id: 5, name: "celery", calories: 15},
                          {id: 6, name: "carrots", calories: 25}]

      return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path='' element={<Home />}/>
              <Route path='/egyeske' element={<AssignmentOne />}/>
              <Route path='/kett' element={<Card />} />
              <Route path='/har' element={<Button />} />
              <Route path='/negy' element={
                                            <>
                                            <Student name="SpongeBob" age={30} isStudent={true}/>
                                            <Student name="Jocika" age={21} isStudent={true}/>
                                            <Student name="Buzi Kornel" age={20} isStudent={false}/>
                                            <Student />
                                            </>
                                          }/>
              <Route path='/ot' element={ 
                                          <>
                                          <UserGreeting IsLoggedIn={true} username="Zsalmi"/>
                                          </>
                                        }/>
              <Route path='/hat' element={  //if the array have no elements then the changes returning null
                                            <>
                                            {fruits.length > 0 && <List  items={fruits} category="Fruits"/>}
                                            {vegetables.length > 0 && <List  items={vegetables} category="Vegetables"/>}
                                            </>
                                          }/>
              <Route path='/het' element={<ClickButton />}/>
              <Route path='/nyoc' element={<MyComponent />}/>
              <Route path='/kilenc' element={<MyChangeEvent />}/>
              <Route path='/tiz' element={<ColorPicker />}/>
              <Route path='/tizegy' element={<Counter />}/>
              <Route path='/tizket' element={<UpdaterLearn />}/>
              <Route path='/tizhar' element={<FoodList />}/>
              <Route path='/tiznegy' element={<CarList />}/>
              <Route path='/tizot' element={<ToDoList />}/>
              <Route path='/tizhat' element={<UseEffectHook />}/>
              <Route path='/tizhet' element={<DigitalClock />}/>
              <Route path='/tiznyoc' element={<ComponentA />}/>
              <Route path='/tizkil' element={<UseRefHook />}/>
            </Routes>
          </BrowserRouter>
        </>
      )
    }

export default App
