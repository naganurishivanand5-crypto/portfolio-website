const projects = {

blind:{

title:"Smart Blind Stick",

description:`

<h3>Introduction</h3>

<p>
The Smart Blind Stick is an assistive device designed to help visually
impaired people navigate safely and independently. It uses ultrasonic
sensors to detect obstacles and alerts the user through a buzzer or
vibration mechanism.
</p>

<h3>Objective</h3>

<ul>
<li>Provide safe navigation for visually impaired people.</li>
<li>Detect obstacles before collision.</li>
<li>Improve mobility and independence.</li>
<li>Reduce accidents while walking.</li>
</ul>

<h3>Components Required</h3>

<ul>
<li>Arduino Uno</li>
<li>Ultrasonic Sensor (HC-SR04)</li>
<li>Buzzer</li>
<li>Vibration Motor</li>
<li>Battery</li>
<li>Switch</li>
<li>Connecting Wires</li>
<li>Walking Stick</li>
</ul>

<h3>Working Principle</h3>

<ol>
<li>The ultrasonic sensor continuously emits sound waves.</li>
<li>The waves reflect from nearby obstacles.</li>
<li>The sensor measures the distance to obstacles.</li>
<li>The Arduino processes the sensor data.</li>
<li>If an obstacle is detected within a specific range, the buzzer and vibration motor activate.</li>
<li>The user receives alerts and changes direction safely.</li>
</ol>

<h3>Block Diagram</h3>

<pre>
Ultrasonic Sensor
        │
        ▼
     Arduino
        │
 ┌──────┴──────┐
 ▼             ▼
Buzzer   Vibration Motor
        │
        ▼
      User
</pre>

<h3>Features</h3>

<ul>
<li>Obstacle detection</li>
<li>Audio alerts using buzzer</li>
<li>Vibration feedback</li>
<li>Portable design</li>
<li>Low power consumption</li>
<li>Easy to use</li>
</ul>

<h3>Advantages</h3>

<ul>
<li>Enhances safety for visually impaired people.</li>
<li>Reduces chances of accidents.</li>
<li>Cost-effective solution.</li>
<li>Portable and lightweight.</li>
<li>Easy maintenance.</li>
</ul>

<h3>Applications</h3>

<ul>
<li>Assistive technology for blind individuals.</li>
<li>Indoor navigation.</li>
<li>Outdoor navigation.</li>
<li>Smart healthcare solutions.</li>
</ul>

<h3>Future Enhancements</h3>

<ul>
<li>GPS navigation support.</li>
<li>Voice guidance system.</li>
<li>IoT-based emergency alerts.</li>
<li>AI-powered object recognition.</li>
<li>Mobile application integration.</li>
</ul>

<h3>Conclusion</h3>

<p>
The Smart Blind Stick is an innovative assistive technology that helps
visually impaired people move safely and independently. By combining
ultrasonic sensors, Arduino, and alert systems, the project improves
mobility, safety, and confidence for users in their daily lives.
</p>

<h3>Short Viva Answer</h3>

<p>
A Smart Blind Stick is an electronic walking aid that uses ultrasonic
sensors to detect obstacles and alerts the user through a buzzer and
vibration system. It helps visually impaired people navigate safely and
avoid collisions.
</p>

`

},

solar:{

title:"Solar Power Bank for Mobile Charging",

description:`

<h3>Introduction</h3>
<p>
A Solar Power Bank is a portable charging device that uses solar energy
to charge its internal battery and supply power to electronic devices
such as smartphones, tablets, Bluetooth speakers, and other USB-powered gadgets.
It is an eco-friendly solution that reduces dependence on conventional electricity
and provides backup power in outdoor and emergency situations.
</p>

<h3>Objective</h3>
<ul>
<li>Utilize renewable solar energy for charging electronic devices.</li>
<li>Provide a portable power source in areas with limited electricity.</li>
<li>Promote green energy and energy conservation.</li>
<li>Develop a cost-effective and sustainable charging system.</li>
</ul>

<h3>Components Required</h3>
<ul>
<li>Solar Panel (5V–6V)</li>
<li>Rechargeable Lithium-ion Battery (3.7V)</li>
<li>TP4056 Battery Charging Module</li>
<li>DC-DC Boost Converter (3.7V to 5V)</li>
<li>USB Output Port</li>
<li>Switch</li>
<li>LED Indicators</li>
<li>Connecting Wires</li>
<li>Enclosure/Case</li>
</ul>

<h3>Working Principle</h3>
<ol>
<li>Solar panel captures sunlight and converts it into electrical energy.</li>
<li>TP4056 charging module safely charges the lithium-ion battery.</li>
<li>Battery stores the electrical energy for later use.</li>
<li>Boost converter increases voltage from 3.7V to 5V.</li>
<li>USB port supplies 5V output to charge mobile devices.</li>
</ol>

<h3>Block Diagram</h3>

<pre>
Solar Panel
     │
     ▼
TP4056 Charging Module
     │
     ▼
Li-ion Battery
     │
     ▼
Boost Converter (3.7V → 5V)
     │
     ▼
USB Output Port
     │
     ▼
Mobile Phone
</pre>

<h3>Advantages</h3>
<ul>
<li>Uses renewable and clean energy.</li>
<li>Portable and easy to carry.</li>
<li>Useful during power outages.</li>
<li>Environment-friendly.</li>
<li>Reduces electricity consumption.</li>
<li>Ideal for outdoor activities and remote locations.</li>
</ul>

<h3>Applications</h3>
<ul>
<li>Mobile phone charging</li>
<li>Camping and trekking</li>
<li>Emergency backup power</li>
<li>Rural and remote areas</li>
<li>Disaster relief operations</li>
<li>Outdoor events and travel</li>
</ul>

<h3>Limitations</h3>
<ul>
<li>Charging speed depends on sunlight intensity.</li>
<li>Less effective during cloudy or rainy weather.</li>
<li>Requires sufficient exposure to sunlight.</li>
<li>Limited battery storage capacity.</li>
</ul>

<h3>Future Enhancements</h3>
<ul>
<li>Larger solar panels for faster charging.</li>
<li>Battery level display using LCD/OLED.</li>
<li>Wireless charging capability.</li>
<li>Multiple USB output ports.</li>
<li>Smart charging and overcharge protection.</li>
<li>IoT-based battery monitoring.</li>
</ul>

<h3>Conclusion</h3>
<p>
The Solar Power Bank project demonstrates the practical use of solar energy
for portable power applications. It provides a sustainable, eco-friendly,
and reliable solution for charging electronic devices, especially in areas
where access to electricity is limited. This project promotes renewable
energy usage and contributes to a greener future.
</p>

`

},

vending:{

title:"Environmental Conscious Reverse Vending Machine",

description:`

<h3>Introduction</h3>

<p>
An Environmental Conscious Reverse Vending Machine (RVM) is an automated
system that encourages people to recycle waste materials such as plastic
bottles, aluminum cans, and glass bottles. Unlike a traditional vending
machine that dispenses products, a reverse vending machine accepts recyclable
items from users and rewards them with points, coupons, or incentives.
</p>

<p>
The main objective of this project is to promote environmental sustainability,
reduce plastic pollution, and increase public participation in recycling activities.
</p>

<h3>Problem Statement</h3>

<ul>
<li>Environmental pollution caused by improper waste disposal.</li>
<li>Increase in landfill waste.</li>
<li>Harm to wildlife and ecosystems.</li>
<li>Wastage of recyclable resources.</li>
</ul>

<h3>Objectives</h3>

<ul>
<li>Encourage recycling among the public.</li>
<li>Reduce environmental pollution.</li>
<li>Automate waste collection and segregation.</li>
<li>Provide rewards for responsible disposal.</li>
<li>Support sustainable waste management practices.</li>
</ul>

<h3>Working Principle</h3>

<ol>
<li>User inserts a plastic bottle or aluminum can.</li>
<li>Sensors detect material type, size, shape and weight.</li>
<li>Microcontroller validates whether the item is recyclable.</li>
<li>Accepted items are directed into separate collection bins.</li>
<li>User receives rewards such as coupons, points or cashback.</li>
<li>System records recycling statistics and reward information.</li>
</ol>

<h3>Hardware Components</h3>

<ul>
<li>Arduino Uno / ESP32</li>
<li>IR Sensor</li>
<li>Ultrasonic Sensor</li>
<li>Load Cell with HX711 Module</li>
<li>Servo Motor</li>
<li>LCD Display (16x2 or OLED)</li>
<li>QR Scanner (Optional)</li>
<li>GSM/Wi-Fi Module</li>
<li>Plastic Collection Bin</li>
<li>Power Supply</li>
</ul>

<h3>Software Components</h3>

<ul>
<li>Arduino IDE</li>
<li>Embedded C/C++</li>
<li>IoT Dashboard</li>
<li>Database for Reward Management</li>
</ul>

<h3>Block Diagram</h3>

<pre>
Plastic Bottle / Can
         │
         ▼
      Sensors
(IR + Weight Sensor)
         │
         ▼
 Microcontroller
 (Arduino/ESP32)
         │
   ┌─────┴─────┐
   ▼           ▼
LCD Display  Servo Motor
                 │
                 ▼
          Collection Bin
                 │
                 ▼
          Reward System
</pre>

<h3>Features</h3>

<ul>
<li>Automatic waste detection</li>
<li>Material identification</li>
<li>User reward mechanism</li>
<li>Real-time monitoring</li>
<li>Smart waste segregation</li>
<li>Eco-friendly operation</li>
<li>IoT integration for analytics</li>
</ul>

<h3>Advantages</h3>

<ul>
<li>Promotes recycling habits.</li>
<li>Reduces plastic waste.</li>
<li>Saves landfill space.</li>
<li>Creates environmental awareness.</li>
<li>Supports smart city initiatives.</li>
<li>Generates recyclable raw materials.</li>
</ul>

<h3>Applications</h3>

<ul>
<li>Colleges and Universities</li>
<li>Shopping Malls</li>
<li>Railway Stations</li>
<li>Airports</li>
<li>Corporate Offices</li>
<li>Public Parks</li>
<li>Smart Cities</li>
</ul>

<h3>Future Enhancements</h3>

<ul>
<li>AI-based material recognition.</li>
<li>Mobile application integration.</li>
<li>UPI-based reward system.</li>
<li>Solar-powered operation.</li>
<li>Cloud monitoring dashboard.</li>
<li>Carbon footprint tracking.</li>
</ul>

<h3>Conclusion</h3>

<p>
The Environmental Conscious Reverse Vending Machine is a smart recycling
solution that motivates people to dispose of recyclable waste responsibly.
By combining sensors, microcontrollers, and reward systems, the project
helps reduce environmental pollution, promotes sustainable waste management,
and contributes to a cleaner and greener future.
</p>

<h3>Short Viva Answer</h3>

<p>
An Environmental Conscious Reverse Vending Machine is an automated recycling
machine that accepts plastic bottles and cans, identifies recyclable materials
using sensors, stores them separately, and rewards users for recycling.
Its purpose is to reduce pollution and encourage environmentally responsible behavior.
</p>

`

}

};

function openProject(project){

document.getElementById("projectTitle").innerHTML =
projects[project].title;

document.getElementById("projectDescription").innerHTML =
projects[project].description;

document.getElementById("projectModal").style.display =
"block";

}

function closeProject(){

document.getElementById("projectModal").style.display =
"none";

}

window.onclick = function(event){

const modal =
document.getElementById("projectModal");

if(event.target == modal){

modal.style.display = "none";

}

}