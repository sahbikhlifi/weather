import React from 'react';

// class Form extends Component {
// render () {

// function component or statless component (just view without state using data)
const Form =(props) => {
    return (

        <form  onSubmit={props.getWeather}>
           <input className="form-group"  type="text" name="country" placeholder="Country"/>
           <input className="form-group"  type="text" name="city" placeholder="city"/>
           <button>Get Weather</button>
           </form>
    )


}
export default Form; 