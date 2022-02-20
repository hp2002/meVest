import React from "react";
import './Resources.css';

const resourceLinks = [{
    name: "LifeAt",
    link: "https://lifeat.io",
    desc: " Life at virtual space is a website that provides a live virtual space with pre-recorded broadcasts. By visiting the website, you can choose a virtual space freely according to the category they belong to.",

},
{
    name: "Canada Mental Health Resources",
    link: "https://www.canada.ca/en/public-health/services/mental-health-services/mental-health-get-help.html",
    desc: "It's important to get help if you or someone you know is going through a crisis or thinking about suicide. Help is available. Learn about the resources available to you.",
},
{
    name: "Scientific Guide on Staying Motivated",
    link: "https://jamesclear.com/motivation",
    desc: "The Scientific Guide on How to Get and Stay Motivated",
},
{
    name: "Sticking to a Habit: The Definitive Guide",
    link: "https://zenhabits.net/sticky/",
    desc: "Some insight into sticking to a habit",
}
];

const charitiesLinks =[{

    name: "Against Malaria Foundation Canada",
    link: "https://www.againstmalaria.com/Default.aspx",
    desc: ""

},
{

    name: "Canadian Foodgrains Bank",
    link: "https://foodgrainsbank.ca/",
    desc: ""

},
{

    name: "The Citizens' Foundation Canada",
    link: "https://tcfcanada.org/",
    desc: ""

},
{

    name: "JUMP Math",
    link: "https://jumpmath.org/ca/",
    desc: ""

},
{

    name: "Operation Eyesight Universal",
    link: "https://operationeyesight.com/",
    desc: ""

},

]

export default function Resources() {

    const mappedResources = resourceLinks.map((ele)=>{
        return(<li><a href={ele.link}>{ele.name}</a>: {ele.desc}</li>);
    })

    const mappedCharities = charitiesLinks.map((ele)=>{
        return(<li><a href={ele.link}>{ele.name}</a> {ele.desc}</li>);
    })

    return(
    <div className="resources">
        <h2>📖Resources📖</h2>
        <ul>
            {mappedResources}
        </ul>

        <h2>❤️Charities❤️</h2>
        <ul>
            {mappedCharities}
        </ul>
    </div>)
}