sharp
=====

Security &amp; Home Automation with Raspberry Pi (SHARP)

##What is SHARP?
---
Sharp is planned to be an extensible home automation & security framework, based initially around Raspberry Pi devices, but with plans to extend to other hardware and software.  

###Current Version: 0.01

##The Technologies
---
Initially, development is being done with the following technologies:

- Hardware
  - Raspberry Pi B+
  - Existing Wired Home Alarm Sensors
  - WinBook TW700 (as a simple home console running a web UI)
  - Samsung Galaxy Note 2 (initial target mobile app UI)
  - SparqEE Raspberry Pi Shield (future)
- Software
  - Raspbian OS
  - node.js for most functionality
  - redis
- Services
  - Amazon AWS for cloud-based hosting of server (optional - can be hosted at home)
  - Twilio for text/voice-messaging (optional)
		
##The Scope
---
This is an admittedly far-reaching project.  The intention is to first create the framework, and then add different elements of modular functionality to it.  

- Underlying Fundamentals
  - Security: All components will be developed with security in mind.  Network connections will be encrypted and strongly authenticated.  User interfaces will be secured with a PIN for end-user access and stronger authentication for administrative access.  
  - Robustness: All components will be developed for maximum robustness.  Connectivity will be monitored and backup connectivity will be considered.  Dependencies on outside services will be as limited as possible for basic functionality.  
  - Simplicity: UIs will be designed for ease of use and configuration will be as simple and straightforward as possible.  Some electronics ability may be required for interfacing to wired alarm sensors.  

- v1.0 Goals
  - Replacement of existing alarm service and monthly monitoring fee with SMS, Voice, and Mobile Application notifications to configurable list of contacts.  
  - Interfacing existing wired burglar alarm sensors to Raspberry Pi base station.  
  - Interfacing existing wired smoke and flame sensors to Raspberry Pi base station.
  - Basic Android Mobile Application functionality.
  - Web Console

- v2.0 Goals
  - Interfacing with wireless sensors.
  - Initial Home Automation functionality
    - Lighting control & scheduling
  - Initial Home Audio System functionality
	- Ability to connect to speakers and play music to those speakers from home console or mobile application.
	- Ability to connect BlueTooth audio player and play music to speakers. 

- Future Release Goals
  - iOS Mobile Application
  - ???
		