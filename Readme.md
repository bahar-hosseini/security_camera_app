# Security Camera

### Overview
This is a web application that gives operators a wide range of capabilities to thoroughly manage a
network of surveillance cameras in a building or facility. These capabilities include:
1. Operators need to login to the system.
2. Operators can view past footage from each camera in previous days.
3. The system will alert the operator if a camera goes offline.
4. The application has motion detection capability and alert the operator upon detecting a motion.
This function can be turned on/off as an option to the operator.
5. The application has sound detection capability and alert the operator upon detecting a sound.
This function can be turned on/off as an option to the operator.
6. In addition to the above, the application has face detection capability. Similarly, this option can
also be turned on or off as the operator desires.

The application is designed with a responsive user interface that is optimized for both desktop and mobile devices.

### Homepage and Login
![Login](/docs/login.gif)

### Live Videos of all Rooms
![Rooms](/docs/all-rooms-01.png)

### History and Live
![Features](/docs/History-live.gif)

### Motion Detection 
![<Motion](/docs/motion-detection.gif)

### Sound Detection
![Sound](/docs/sound-detection.gif)

### Face Detection
![Face-Detection](/docs/face-detection.gif)

---

### Tech Stack
- Node
- Express
- React
- React Router
- MongoDB
- Axios
- JWT
- bcryptjs
- React-Bootstrap
- Jest
- @tensorflow/tfjs"
- @testing-library/react
- aws S3


### Getting Started
1. Run `npm i` in both frontend and backend folders
2. Create .env file based on .env.example
3. Run  `npm run dev` in root directory of the project
4. Running Jest Test  `npm test`


### Seed Database

#### Import data:
```
npm run data:import
```

#### Destroy data:
```
npm run data:destroy
```

### Test 

For optimal performance, it is recommended that you turn off each switch before switching on another one.

The video in Room 1 has sound for checking the sound detection feature.

#### If you are experiencing issues accessing motion detection or sound detection features, it might be needed to disable the same origin policy in your browser. [disable same origin policy in your browser ](https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome)

---
### Future Steps:
1.	Using OpenCV library for motion detection
2.	Extending the face detection mode to history videos
3.	Expanding test coverage by writing more test cases that cover a wider range of code.
4.	Integrating more TensorFlow models in the application



