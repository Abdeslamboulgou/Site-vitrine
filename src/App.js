import React, { useEffect } from "react";
import {Redirect,useHistory,useLocation ,Route , Switch} from 'react-router-dom'
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Project1, Project2, Project3 } from "./pages/Projects";
import { AnimatePresence } from "framer-motion";
function App() {
  const location= useLocation()
  const history= useHistory()

  useEffect(() => {
            const handleScrollToElement =(e) => {
              const url =window.location.origin +"/"

              /* after et befor sont deux noms de route */
              const wheelRouter =(after,befor) => {
              if(e.wheelDeltaX< 0){
                setTimeout(() => {
                 history.push(after)
                },600)
              } else if(e.wheelDeltaX>0){
                setTimeout(() => {
                      history.push(befor)
                    },600)
              }
            }
            switch (window.location.href.toString()) {
              case url:
                  if(e.wheelDeltaX < 0){
                    setTimeout(() => {
                    history.push('projet1')
                  },600)
                  }
                  break;
              case url +"projet1":
                setTimeout(() => {
                       wheelRouter("projet2","")
                       },600)
                  break;
                  case url +"projet2":
                    setTimeout(() => {
                       wheelRouter("projet3","projet1")
                       },600)
                  break;
                  case url +"projet3":
                    setTimeout(() => {
                       wheelRouter("contact","projet2")
                       },600)

                  break;
                  case url +"contact":
                         if(e.wheelDeltaX > 0){
                           setTimeout(() => {
                           history.push("projet3")
                           },600)
                         }
                  break;
              default:
                console.log('awt7a7 a L7sn')
                break;
            }
          }
          window.addEventListener('wheel',handleScrollToElement)
  },[history])
  return (
    <AnimatePresence>
<Switch location={location} key={location.pathname}>
        <Route exact path='/'  component={Home}/>
        <Route exact path='/projet1'  component={Project1}/>
        <Route exact path='/projet2'  component={Project2}/>
        <Route exact path='/projet3'  component={Project3}/>
        <Route exact path='/contact'  component={Contact}/>
        <Redirect to='/' />
</Switch>
</AnimatePresence>

  );
}

export default App;
