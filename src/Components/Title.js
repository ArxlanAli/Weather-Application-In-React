import React, { Component } from 'react';

class Title extends Component{
    render(){
        return(
            <div>
                <h1>Weather Finder</h1>
                <p>Find out temperature,conditions and more...</p>

                <form onSubmit={this.props.getWeather}>
                    <input type = "text" name = "city" placeholder="city"/>
                    <input type = "text" name = "country" placeholder="country"/>
                    <input type="submit"/>
                </form>

                Temperature:
                    {this.props.temperature}
                <br/>

                City:
                    {this.props.city}
                <br/>
                Country:
                    {this.props.country}
                <br/>
                Humidity:
                    {this.props.humidity}
                 <br/>
                Description:
                    {this.props.description}
                <br/>
            </div>
        );
    };
}

export default Title;