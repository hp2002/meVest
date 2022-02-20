import React from "react";
import Form from 'react-bootstrap/Form'
import './GoalSetting.css'

export default function GoalSetting(props) {

    function handleSubmit(event) {
        event.preventDefault();
    }

    return(
    <Form className = "GoalSetting">
        <Form.Label className = 'goal-title'>Set your goal for this month!</Form.Label>
        <Form.Control onSubmit={handleSubmit} onChange={(e)=>props.changeGoal(e.target.value)}/>
    </Form>)
}