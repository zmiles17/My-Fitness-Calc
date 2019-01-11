import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => (
    <nav hidden={true}>
        <Link to={`/`}>Home</Link>
        <br></br>
        <Link to={`/bmi`}>Body Mass Index (BMI)</Link>
        <br></br>
        <Link to={`/bmr`}>Basal Metabolic Rate (BMR)</Link>
        <br></br>
        <Link to={`/one-rep-max`}>One Rep Max (1RM)</Link>
        <br></br>
        <Link to={`/VO2-max`}>Maximal Oxygen Uptake (VO2 Max)</Link>
        <br></br>
        <Link to={`/target-hr`}>Target Heart Rate (THR)</Link>
        <br></br>
        <Link to={`/body-fat-percent`}>Body Fat Percent</Link>
    </nav>
)

export default Nav;