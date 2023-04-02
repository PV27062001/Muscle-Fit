import {React,useState} from 'react'
import './bmi.css'
import {list1a,list1b,list1c,list1d,list1e,list1f,list1g} from './BmiData'
import Nutrition from '../Nutrition';
import "../NutritionCalculator.css"


let calorie=0;
let res=0;

function Bmi2() {
    
    const [bmi,setbmi]=useState({
        bweight: "",
        bheight: "",
        bage: "",
        bgender: "",
        bphysicalActivity: 0,
    })
    
    const [flag,setflag] = useState(false)
    const [bmiFlag,setbmiFlag] = useState(false)
    const [chartData, setChartData] = useState({});

    
    
    function onchange(event){
        console.log(bmi);
       
        setbmi({
            ...bmi,
            [event.target.name]: event.target.value,
        })
        
        return;
    }
    
    function onsubmit(event){
        event.preventDefault()
        let w = parseFloat(bmi.bweight);
        let h = parseFloat(bmi.bheight);
        res = w/(h*h);

        res = Math.round(res * 100) / 100
        document.querySelector("#bmiDisplay").innerHTML=`YOUR BMI: ${res}`;
        
        let g = bmi.bgender;

        console.log(g);
        if(g==="F")
            calorie=((655.1 + 9.6*parseFloat(bmi.bweight) + 190*parseFloat(bmi.bheight))/(4.7*parseInt(bmi.bage)))*bmi.bphysicalActivity;
        else
            calorie=((66.5 + 13.8*parseFloat(bmi.bweight) + 500*parseFloat(bmi.bheight))/(6.8*parseInt(bmi.bage)))*bmi.bphysicalActivity;

            setbmi({
                bweight: "",
                bheight: "",
                bage: "",
                bgender: "",
                bphysicalActivity: 0,
            })
          
            const data = {
              labels: ['BMI', 'Remaining'],
              datasets: [
                {
                  data: [res, 25 - res],
                  backgroundColor: ['#FF6384', '#36A2EB'],
                  hoverBackgroundColor: ['#FF6384', '#36A2EB']
                }
              ]
            };
            setChartData(data);
            
        setflag(true);

        return;
    }
    
    
    function BmiCalculator()
    {
        return <div>
    <h1><center>  BMI CALCULATOR</center></h1>
        <form className="bmi-form" onSubmit={onsubmit}>
      <h2>Weight</h2>
      <input type="number" step="0.01" min="0" placeholder="Weight(kg)" name="bweight" value={bmi.bweight} onChange={onchange} required autoComplete="on"/>
      <h2>Height</h2>
      <input type="number" min="0" step="0.01" placeholder="Height(m)" name="bheight" value={bmi.bheight} onChange={onchange} required autoComplete="on"/>
      <h2>Age</h2>
      <input type="number" min="0" placeholder="Age" name="bage" value={bmi.bage} onChange={onchange} required autoComplete="on"/>
      <h2>Gender</h2>
      <br></br>
      <div class="bmi-gender">
      <label><input type="radio" name="bgender" value="M" onChange={onchange} required autoComplete="off"/>Male</label>
      <label><input type="radio" name="bgender" value="F" onChange={onchange} required autoComplete="off"/>Female</label>  
      </div>
      <br></br>
      <h2>Physical Activity</h2>
      <br></br>
      <div class="bmi-radio">
      <label><input type="radio" name="bphysicalActivity" value="1" onChange={onchange} required autoComplete="off"/>Low</label>
      <label><input type="radio" name="bphysicalActivity" value="2" onChange={onchange} required autoComplete="off"/>Medium</label>
      <label><input type="radio" name="bphysicalActivity" value="3" onChange={onchange} required autoComplete="off"/>Heavy</label>
      </div>
      <div class="bmi-buttons">
      <button type="submit">Submit</button>
      <button onClick={() => window.history.back()}>Back</button>
      </div>      
        </form>
    </div>
}

function calorie1()
{
  return(
  <div className="card-header">
              <h1>in development</h1>
          </div>
  );
}


function Calorie2() {
  return (
    <div className="calorie-container">
      <div className="calorie-card">
        <div className="card-header">
          <h1>Sunday</h1>
        </div>
        <div className="card-body">
          <ul>
            {list1a.map((item) => {
              return <li>{item}</li>
            })}
          </ul>
        </div>
      </div>
      <div className="calorie-card">
        <div className="card-header">
          <h1>Monday</h1>
        </div>
        <div className="card-body">
          <ul>
            {list1b.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="calorie-card">
        <div className="card-header">
          <h1>Tuesday</h1>
        </div>
        <div className="card-body">
          <ul>
            {list1c.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="calorie-card">
        <div className="card-header">
          <h1>Wednesday</h1>
        </div>
        <div className="card-body">
          <ul>
            {list1d.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="calorie-card">
        <div className="card-header">
          <h1>Thursday</h1>
        </div>
        <div className="card-body">
          <ul>
            {list1e.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="calorie-card">
        <div className="card-header">
          <h1>Friday</h1>
        </div>
        <div className="card-body">
          <ul>
            {list1f.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="calorie-card">
        <div className="card-header">
          <h1>Saturday</h1>
        </div>
        <div className="card-body">
          <ul>
            {list1g.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}


  function calorie3()
  {
    return(
    <div className="card-header">
                <h1>in development</h1>
            </div>
    );
  }
  

function Calorie(){

if(res < 25)
return calorie1();

if( res >= 25 && res <= 30)
  return Calorie2();

if(res > 30)
  return calorie3();

}

    return (
        <div className="bmi-grid">
            <div className="bmi-grid1">
                <h1>BMI</h1>
                <div className="nutrition-wrapper">
                <Nutrition className="nutrition"></Nutrition>
              </div>
            <div className="bmi-calc" onClick={()=>{
                setflag(false)
                setbmiFlag(false)
            }}></div>
            </div>
            <div className="bmi-grid2">
            <div className="bmi-grid2-color">
                { !bmiFlag && BmiCalculator() }
                <div className="bmi-result">
                {!bmiFlag && <div id="bmiDisplay"></div>}
                <br></br>
                {flag && !bmiFlag && <button onClick={()=>{setbmiFlag(true)} }>Click here for Diet Recommendation</button>}
                </div>
                {bmiFlag && Calorie()}
            </div>
            </div>
        </div>
    )
}

export default Bmi2
