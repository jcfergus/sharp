sharp
=====

Security &amp; Home Automation with Raspberry Pi (SHARP)

##What is SHARP?
Sharp is planned to be an extensible home automation & security framework, based initially around Raspberry Pi devices, but with plans to extend to other hardware and software.  

###Current Version: 0.01

##The Technologies
Initially, development is being done with the following technologies:

- Hardware
  - Raspberry Pi B+
  - Existing Wired Home Alarm Sensors
  - WinBook TW700 (as a simple home console running a web UI)
  - Samsung Galaxy Note 2 (initial target mobile app UI)
  - SparqEE Raspberry Pi Shield or Adafruit FONA (future)
- Software
  - Raspbian OS
  - node.js for core functionality - lightweight, designed for asynchronous tasks
  - Twitter Bootstrap for UI (subject to change)
  - redis for persistent and transient storage
- Services
  - Amazon AWS for cloud-based hosting of server (optional - can be hosted at home)
  - Twilio for text/voice-messaging (optional)
		
##The Scope
This is an admittedly far-reaching project.  The intention is to first create the framework, and then add different elements of modular functionality to it.  

- Underlying Fundamentals
  - Security: All components will be developed with security in mind.  Network connections will be encrypted and strongly authenticated.  User interfaces will be secured with a PIN for end-user access and stronger authentication for administrative access.  
  - Robustness: All components will be developed for maximum robustness.  Connectivity will be monitored and backup connectivity will be considered.  Dependencies on outside services will be as limited as possible for basic functionality.  
  - Simplicity: UIs will be designed for ease of use and configuration will be as simple and straightforward as possible.  Some electronics ability may be required for interfacing to wired alarm sensors.
  - Modularity: All software interfaces should be modular so functionality is not dependent on brand of hardware.   

- v1.0 Goals
  - Replacement of existing alarm service and monthly monitoring fee with SMS, Voice, and Mobile Application notifications to configurable list of contacts.  
  - Interfacing existing wired burglar alarm sensors to Raspberry Pi base station.  
  - Interfacing existing wired smoke and flame sensors to Raspberry Pi base station.
  - Basic Android Mobile Application functionality.
  - Web Console

- v2.0 Goals
  - Interfacing with Z-Wave wireless sensors (Lowe's Iris, et al.)
  - Initial Home Automation functionality
    - Lighting control & scheduling
  - Initial Home Audio System functionality
	- Ability to connect to speakers and play music to those speakers from home console or mobile application.
	- Ability to connect BlueTooth audio player and play music to speakers. 
  - Cellular Connectivity (SparqEE or FONA) 
  
- Possible Future Release Goals
  - iOS Mobile Application
  - Home Theater Control
  - DVR Functionality
  - OpenPBX Integration
  - Security Camera Integration
  - Newsfeed on Home Console when idle
  - Programmable thermostat integration
  - Additional Sensor Types
  - Sprinkler/Irrigation Control
  - Sump Pump Monitoring
  - TBD???
  
##The Architecture
SHARP is a network-oriented architecture which is designed for multiple layers of redundancy in connectivity, and to be expanded simply to add new functionality.  It consists of three primary classes of elements, and optionally may rely on other cloud-based services.

####Classes of Elements
- _SharpServer_ - SharpServer is the central "brain" of SHARP.  It consists of a message queue system with multiple queues, plugins for processing messages from the other elements, and a web-based UI for configuration and administration of the SHARP system.  The SharpServer may be hosted on-premise if you have a reliable network connection, static IP address (or dynamic DNS) and are allowed to run simple HTTP-based services, or may be hosted in an off-premise hosting environment (recommended).  
- _SharpStation_ - SharpStations are the interfaces between the SharpServer and the variety of sensors and devices that the SHARP project will support.  The current design for the SharpStation is Raspberry Pi-based, but could be expanded to other devices (such as BeagleBone, Arduino, Spark Core, etc) in the future (if you're interested in helping, e-mail jferg@thedotin.net).
- _SharpUI_ - SharpUI is the interface between the user and the SharpServer.  SharpUI will initially be a web-based UI which can be run in a browser, or in a full-screen kiosk mode on a touch-screen device.  Administrative UI will be segregated from end-user UI.  

####Connectivity
<img src="docs/SHARP Architecture.png">

[PDF](docs/SHARP Architecture.pdf) | [Visio](docs/SHARP Architecture.vsd)


