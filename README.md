# TCP-UDP Visualizer

A modern, interactive React app that visually demonstrates the core differences between TCP and UDP protocols using real-time animations and engaging UI.

## 🚀 Features

- **TCP Panel:**
  - Simulates the TCP three-way handshake (SYN, SYN-ACK, ACK) with animated steps.
  - Visualizes reliable message delivery with packet travel and acknowledgment.
  - Animated server icon and dynamic UI using Framer Motion.

- **UDP Panel:**
  - Simulates UDP's connectionless, unreliable delivery (random packet drop simulation).
  - Visualizes message travel and possible loss.
  - Clean, animated UI for sender and receiver.

- **Message Panel:**
  - Send custom messages to see how each protocol handles delivery.
  - Loader and feedback animations for a modern user experience.

- **Modern UI/UX:**
  - Built with React, Framer Motion, and Tailwind CSS (utility classes).
  - Responsive, visually appealing card layouts.
  - Animated backgrounds, icons, and transitions.

## 🛠️ Tech Stack
- React (with Context API)
- Framer Motion (for animations)
- Tailwind CSS (utility-first styling)
- Vite (for fast development)




## 📚 How It Works
- **TCP:**
  - Shows the handshake process and reliable delivery.
  - Message always reaches the receiver after handshake.
- **UDP:**
  - No handshake; message may be dropped (simulated with random chance).
  - Receiver may or may not get the message.



## 📝 Learning Goals
- Understand and visualize the difference between TCP and UDP.
- Practice React state management and Context API.
- Build modern, animated UIs with Framer Motion.
- Apply real-world networking concepts in code.

## 📦 Folder Structure
```
src/
  Components/
    MessagePanel.jsx
    TCPPanel.jsx
    UDPPanel.jsx
    Header.jsx
  Context/
    MessageContext.jsx
  App.jsx
  main.jsx
```

## 🙌 Credits
- [React](https://react.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## 📄 License
This project is open source and free to use for learning and demonstration purposes.

> Created by [Shivam Upmanyu]. Inspired by real-world networking and a passion for interactive learning.
