  import {React,useState,useEffect} from 'react'
  import './bmi.css'    
  import {list1a,list1b,list1c,list1d,list1e,list1f,list1g,list2a,list2b,list2c,list2d,list2e,list2f,list2g} from './BmiData'
  import Nutrition from '../Nutrition';
  import "../NutritionCalculator.css"
  import { Pie } from "react-chartjs-2";

  let calorie=0;
  let res=0;
  let bmiResult = localStorage.getItem('bmiResult');
  let bmiResults = [];

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

      function onsubmit(event) {
        event.preventDefault();
        let w = parseFloat(bmi.bweight);
        let h = parseFloat(bmi.bheight);
        res = w / (h * h);
        res = Math.round(res * 100) / 100;
      
        localStorage.setItem('bmiResult', res);

        document.querySelector("#bmiDisplay").innerHTML = res < 18.5 ? `Your BMI is ${res} ,underweight` : res < 25
          ? `Your BMI is ${res} ,Normalweight` : res < 30 ? `Your BMI is ${res} ,Overweight` : `Your BMI is ${res} ,Obese`;
        let g = bmi.bgender;

        console.log(g);
        if (g === "F") calorie = ((655.1 + 9.6 * parseFloat(bmi.bweight) + 190 * parseFloat(bmi.bheight))  / (4.7 * parseInt(bmi.bage))) * bmi.bphysicalActivity;

        else calorie = ((66.5 + 13.8 * parseFloat(bmi.bweight) + 500 * parseFloat(bmi.bheight))  / (6.8 * parseInt(bmi.bage))) * bmi.bphysicalActivity;
        console.log(calorie);
        setbmi({
          bweight: "",
          bheight: "",
          bage: "",
          bgender: "",
          bphysicalActivity: 0,
        });
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
        <label><input type="radio" name="bphysicalActivity" value="1" onChange={onchange}  />Low</label>
        <label><input type="radio" name="bphysicalActivity" value="2" onChange={onchange}  />Medium</label>
        <label><input type="radio" name="bphysicalActivity" value="3" onChange={onchange}  />Heavy</label>
        </div>
        <div class="bmi-buttons">
        <button type="submit">Submit</button>
        <button onClick={() => window.history.back()}>Back</button>
        </div>      
          </form>
      </div>
  }

  ///    UNDER Weight

    function calorie1()
    {
      return (
        <><div className="heading"><h1>2000 Calories/day </h1></div>
        <div className="calorie-container">
          <br></br>
          <div className="calorie-card">
            <div className="card-header">
              <h1>Sunday</h1>
            </div>
            <div className="card-body">
              <ul>
                {list2a.map((item) => {
                  return <li>{item}</li>;
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
                {list2b.map((item) => {
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
                {list2c.map((item) => {
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
                {list2d.map((item) => {
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
                {list2e.map((item) => {
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
                {list2f.map((item) => {
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
                {list2g.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        </div></>
      );
    }

////     Normal Weigth

    function calorie2()
    {
      return(
        <div className="card-header">
                  <h1>in development</h1>
                  <br></br>
              </div>
      );
    }

 ////     over wEIGHT

    function calorie3()
    {
      return(
      <div className="card-header">
                  <h1>in development</h1>
                  <br></br>
              </div>
      );
    }


  ////    OBESE

  function calorie4() {
    return (
      <><div className="heading"><h1>1600 Calories/day </h1></div><div className="calorie-container">
        <div className="calorie-card">
          <div className="card-header">
            <h1>Sunday</h1>
          </div>
          <div className="card-body">
            <ul>
              {list1a.map((item) => {
                return <li>{item}</li>;
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
      </div></>
    );
  }

    function Calorie() {
      if (calorie < 18.5) {
        return calorie1(); // Underweight
      }
      if (calorie >= 18.5 && calorie <= 24.9) {
        return calorie2(); // Normal weight
      }
      if (calorie >= 25 && calorie <= 29.9) {
        return calorie3(); // Overweight
      }
      if (calorie >= 30) {
        return calorie4(); // Obese
      }
    }


    // function CalorieToLoseWeight()
    // {
    //   if(calorie <18.5)
    //   {
    //     return calorie1();
    //   }
    // }
    
    // const [calorieFunction, setCalorieFunction] = useState(Calorie);


  return (
    <div className="bmi-grid">
      <div className="bmi-grid1">
        <h1>BMI</h1>
        <div className="bmi-calc" onClick={() => {
          setflag(false)
          setbmiFlag(false)
        }}></div>
      </div>
      <div className="bmi-grid2">
        <div className="bmi-grid2-color">
          {!bmiFlag && BmiCalculator()}
          <div className="bmi-result">
            {!bmiFlag && <div id="bmiDisplay"></div>}
            {/* <div className='Calorie-result'>{"Your recommended daily Calorie intake is : " +  (Math.round(calorie)) + "k" }</div>  */}
            <br></br>
            {!bmiFlag ? (
                <button onClick={() => setbmiFlag(true)}>Click here for Diet Recommendation</button>
              ) : (
                <>
                  {Calorie()}
                  <br/><br/>
                  <button onClick={() => setbmiFlag(false)}>Go back</button>
                </>
              )}
            {/* {chartData && <Pie data={chartData} />} */} 
          </div>
          <div className='bmi-result'>{"Your older BMI : " +  bmiResult}</div> 
        </div>
      </div>
    </div>
  );
  
  } 

  export default Bmi2
