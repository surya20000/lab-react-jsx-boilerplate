import './App.css'
import elephant from "./images/elephant.jpeg";


function App(props) {

  // code here
  const ha = props.myData();
  return(
    <>
     <div className=''><h1>Kalvium Gallery</h1></div>
     <div className='body'>
     {
        ha.map((item,index) =>{
          return(
            <div key={index}>
              <img src={item.img} alt="" />
            </div>
          )
        })
      }
     </div>
    </>
  )
}

export default App;
