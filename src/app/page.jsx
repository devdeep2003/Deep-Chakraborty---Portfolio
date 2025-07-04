import React from 'react';

const About = () => {
  return (
    <div className="mx-10 my-8 text-white">
      
      <h1 className="text-4xl font-bold mb-4 text-blue-700">About Me</h1>
      <p className="text-lg mb-6 leading-relaxed">
        Hello! I'm <span className="font-semibold text-white">Deep Chakraborty</span>, a passionate and detail-oriented developer based in India. I specialize in building modern web and mobile applications using technologies like <span className="font-medium">React, React Native, Firebase, Supabase</span>, and <span className="font-medium">Node.js</span>.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">Skills & Technologies</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li><strong>Languages: </strong>C/C++, Javascript, Python</li>
        <li><strong>Frontend:</strong> React, Tailwind CSS, JavaScript, HTML/CSS, Expo Router</li>
        <li><strong>Mobile:</strong> React Native, Firebase Auth, Push Notifications</li>
        <li><strong>Backend:</strong> Node.js, Express, Supabase, Firestore</li>
        <li><strong>Tools:</strong> Git, VS Code, Postman, Figma (basics), Vercel, Netlify</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">Experience</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">User Interface Engineer, Pyramid AI Hub, Lawrenceville, GA</h3>
        <p className="text-sm italic text-gray-300">Oct 2024 – Jan 2025</p>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-lg leading-relaxed">
          <li>Built performant UI components using React for a retail anomaly detection system.</li>
          <li>Collaborated in a 2-member team to develop and enhance responsive frontend features.</li>
          <li>Optimized UI to reduce load times by 30%, significantly improving user experience.</li>
          <li>Followed agile methodology and actively participated in code reviews and peer debugging.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">My Journey</h2>
      <p className="text-lg leading-relaxed mb-4">
        I started my coding journey during college and quickly developed a love for full-stack development. Over time, I've worked on a variety of projects—from society management apps to AI-powered Travel itinerary planner — each helping me learn and grow.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">Goals</h2>
      <p className="text-lg leading-relaxed mb-6">
        I'm currently focused on mastering frontend frameworks like Next JS and backend systems like Express JS, improving performance optimization in mobile apps, and contributing to open-source projects. I aim to build products that are not only functional but also user-friendly and impactful.
      </p>

      <p className="text-lg italic">
        “Code is like humor. When you have to explain it, it’s bad.” – Cory House
      </p>
    </div>
  );
};

export default About;
