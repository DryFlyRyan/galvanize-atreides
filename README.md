<h1>Flow Regulator for Galvanize Beer Taps</h1>

<h3>Project Summary</h3>

The purpose of this project is to design and implement a system by which Galvanize operations personnel can monitor keg usage within their assigned facilities as well as control the function of the tap itself.

The project will employ a web-application interface, a central deployed server, and both hardware and software to control the taps themselves.

The goal is to provide galvanize with a system that is both easy to use and easy to remotely deploy to new campuses.

<h3>Anticipated Techologies</h3>

**Frontend:**

* AngularJS
* Bootstrap w/ Styling Theme (e.g. BS Material)
* Socket.io
* D3.js / chart.js


**Server:**

* Node.js
* Express
* Socket.io
* OAuth2 via Passport's LinkedIn strategy
* Untappd Web Services
* AWS
* PostgreSQL

**Raspberry Pi**

* Python (ideally)
* Node.js / Express (fallback)
* Socket.io
* MongoDB

<h3>Anticipated Hardware</h3>

***Disclaimer:***

  * [Raspberry Pi 3 Canakit Starter](http://www.amazon.com/gp/product/B01C6Q2GSY?keywords=raspberry%20pi%203&qid=1457215916&ref_=sr_1_3&s=pc&sr=1-3) - $80
  * Soleniod Valve - (still vetting out some good options here) - $30
  * [Liquid Flow Meter](https://www.adafruit.com/products/828) - $10
  * Resistors (I have a bunch of these, so I'll put the system together and then document what's necessary)
  * Bread Board - ~$15 (assuming we can't get a usb interface to work with the relay and flow meter)
  * 12 VDC 1000 ma power adapter - $10
  * Slimline Case - (Looking for an appropriate model for this as we speak)

<h3>UI Breakdown</h3>

**Frontend Views:**

* "On Tap" -

    This view will serve as the only publicly accessible view and will serve as a landing page for folks looking to see what is on tap at their local Galvanize campus and what time the taps open. This also gives the option of using monitors to display the same information next to taps. Ideally we will be able to pull in beer ratings and recent comments from Untappd to give additional information.

* Login -

    This will likely be simply a modal window that will initiate the OAuth2 process that will be initiated by the server. A successful login will bring the user to the dashboard.

* Dashboard -

    This view will give authorized users access to the devices that they have read access to. This view will be populated by recent graphs demonstrating the flow-meter output from each of the Pi units (i.e. beers poured, amount remaining), current beers on tap, etc. The dashboard will also allow users to add new kegs and associate them with devices (populated by the Untappd API) as well as setting a manual override for a limited amount of time on a device.

* Device Editing

    This view will simply allow for the updating of schedules for each of the devices that a user has write access to.

* DB Additions

    This view allows for users to add devices, users, and campuses based on their access level.

* Reporting

    This will be a vital feature, no doubt, but one that will likely evolve over time as staff use data becomes more available. Initial data will likely be able to be exported in a limited number of ways and will be limited to campus-centric reporting. I'll continue to work with operations staff to develop more tuned reporting functionality after the system goes live.

[<h3>Initial ERD</h3>](./project_docs/KegControlERD.png)
