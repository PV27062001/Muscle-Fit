  import {React,useState,useEffect} from 'react'
  import './bmi.css'    
  import {list1a,list1b,list1c,list1d,list1e,list1f,list1g,
          list2a,list2b,list2c,list2d,list2e,list2f,list2g,
          list3a,list3b,list3c,list3d,list3e,list3f,list3g,
          list4a,list4b,list4c,list4d,list4e,list4f,list4g
          } from './BmiData'
  import Nutrition from '../Nutrition';
  import "../NutritionCalculator.css"
  import { Pie } from "react-chartjs-2";

  let calorie=0;
  let res=0;
  let bmiResult = localStorage.getItem('bmiResult');
  let bmiResults = [];
  
  function Bmi2() {
      const [bmi,setbmi]=useState({
          weight: "",
          height: "",
          age: "",
          gender: "",
          physicalActivity: 0,
      })   
      const [flag,setflag] = useState(false)
      const [bmiFlag,setbmiFlag] = useState(false)
      const [chartData, setChartData] = useState({});

      
      // const [bmiResult, setBmiResult] = useState("");

      // const handleClear = () => {
      //   setBmiResult("");
      // };
    
      const handleRefresh = () => {
        window.location.reload();
      };

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
        let w = parseFloat(bmi.weight);
        let h = parseFloat(bmi.height);
        res = w / (h * h / 10000);
        res = Math.round(res * 100) / 100;
      
        localStorage.setItem('bmiResult', res);

        document.querySelector("#bmiDisplay").innerHTML = res < 18.5 ? `Your BMI is ${res} ,underweight` : res < 25
          ? `Your BMI is ${res} ,Normalweight` : res < 30 ? `Your BMI is ${res} ,Overweight` : `Your BMI is ${res} ,Obese`;
        let g = bmi.gender;

        console.log(g);
        if (g === "F") {
          if (bmi.physicalActivity === "1") {
            calorie = (655.1 + (9.563 * parseInt(bmi.weight)) + (1.850 * parseInt(bmi.height)) - (4.676 * parseInt(bmi.age))) * 1.55;
          } else if (bmi.physicalActivity === "2") {
            calorie = (655.1 + (9.563 * parseInt(bmi.weight)) + (1.850 * parseInt(bmi.height)) - (4.676 * parseInt(bmi.age))) * 1.725;
          } else if (bmi.physicalActivity === "3") {
            calorie = (655.1 + (9.563 * parseInt(bmi.weight)) + (1.850 * parseInt(bmi.height)) - (4.676 * parseInt(bmi.age))) * 1.9;
          }
        } else {
          if (bmi.physicalActivity === "1") {
            calorie = (66.47 + (13.75 * parseInt(bmi.weight)) + (5.003 * parseInt(bmi.height)) - (6.755 * parseInt(bmi.age))) * 1.55;
          } else if (bmi.physicalActivity === "2") {
            calorie = (66.47 + (13.75 * parseInt(bmi.weight)) + (5.003 * parseInt(bmi.height)) - (6.755 * parseInt(bmi.age))) * 1.725;
          } else if (bmi.physicalActivity === "3") {
            calorie = (66.47 + (13.75 * parseInt(bmi.weight)) + (5.003 * parseInt(bmi.height)) - (6.755 * parseInt(bmi.age))) * 1.9;
          }
        }        
        console.log(calorie);
        setbmi({
          weight: "",
          height: "",
          age: "",
          gender: "",
          physicalActivity: 0,
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
        <input type="number" step="0.01" min="0" placeholder="Weight(kg)" name="weight" value={bmi.weight} onChange={onchange} required autoComplete="on"/>
        <h2>Height</h2>
        <input type="number" min="0" step="0.01" placeholder="Height(cm)" name="height" value={bmi.height} onChange={onchange} required autoComplete="on"/>
        <h2>Age</h2>
        <input type="number" min="0" placeholder="Age" name="age" value={bmi.age} onChange={onchange} required autoComplete="on"/>
        <h2>Gender</h2>
        <br></br>
        <div class="bmi-gender">
        <label><input type="radio" name="gender" value="M" onChange={onchange} required autoComplete="off"/>Male</label>
        <label><input type="radio" name="gender" value="F" onChange={onchange} required autoComplete="off"/>Female</label>  
        </div>
        <br></br>
        <h2>Physical Activity</h2>
        <br></br>
        <div class="bmi-radio">
        <label><input type="radio" name="physicalActivity" value="1" onChange={onchange}  />Low</label>
        <label><input type="radio" name="physicalActivity" value="2" onChange={onchange}  />Medium</label>
        <label><input type="radio" name="physicalActivity" value="3" onChange={onchange}  />Heavy</label>
        </div>
        <div class="bmi-buttons">
        <button type="submit">Submit</button>
        <button onClick={() => window.history.back()}>Back</button>
        </div>      
          </form>
      </div>
  }

  
////  intro
  function calorieIntro()
  {
    return(
      <div className="calorie-intro"><h1>CALCULATE THE BMI TO GENERATE DIET</h1></div>
    );
  }

//// under Weight
  function calorie1()
  {
    return (
      <><div className="heading"><h1>2500 Calories/day </h1></div>
      <div className="calorie-container">
        <br></br>
        <div className="calorie-card">
          <div className="card-header">
            <h1>Sunday</h1>
          </div>
          <div className="card-body">
            <ul>
              {list3a.map((item) => {
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
              {list3b.map((item) => {
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
              {list3c.map((item) => {
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
              {list3d.map((item) => {
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
              {list3e.map((item) => {
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
              {list3f.map((item) => {
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
              {list3g.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div></>
    );
  }

////    Normal weight
    function calorie2()
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

////     over wEIGHT
    function calorie3()
    {
      return (
        <><div className="heading"><h1>1800 Calories/day </h1></div>
        <div className="calorie-container">
          <br></br>
          <div className="calorie-card">
            <div className="card-header">
              <h1>Sunday</h1>
            </div>
            <div className="card-body">
              <ul>
                {list4a.map((item) => {
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
                {list4b.map((item) => {
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
                {list4c.map((item) => {
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
                {list4d.map((item) => {
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
                {list4e.map((item) => {
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
                {list4f.map((item) => {
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
                {list4g.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        </div></>
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
      if(calorie == 0){
        return calorieIntro();
      }
      if (calorie < 2000) {
        return calorie4(); // Obese 
      } 
      if (calorie >= 2000 && calorie < 3000) {
        return calorie3(); // Maintain Weight
      }
      if (calorie >= 3000 && calorie < 3500) {
        return calorie2(); // Gain weight
      }
      if (calorie >= 3500) {
        return calorie1(); // Gain weight 
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
            <div className='Calorie-result'>{"Your AMR is : " +  (Math.round(calorie)) + " calories per day"}</div> 
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
          {/* {/* <button onClick={handleClear}>Clear</button> */}
          {/* <button onClick={handleRefresh}>Refresh</button>  */}
        </div>
      </div>
    </div>
  );
} 

export default Bmi2
