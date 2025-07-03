import React from 'react';

const Extra = () => {
  return (
    <div className="mx-10 my-8 text-white">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Beyond Code</h1>
      <p className="text-lg mb-6 leading-relaxed">
        While I’m deeply passionate about development, my college life has been equally enriched with
        hands-on experiences in <span className="font-semibold text-white">sports, event management, and music</span>. These extracurriculars have helped me develop
        leadership, discipline, and creativity—qualities I bring into every project I build.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">Leadership & Event Management</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Event Management Co-Lead, BongoJo (Bengali Club, VIT-AP):</strong> Spearheaded cultural
          events like Saraswati Puja with 200+ attendees, driving higher engagement and turnout.
        </li>
        <li>
          <strong>Discipline Committee Member, Vitopia Festival:</strong> Helped streamline crowd control,
          reducing disruptions by 20% during VIT-AP’s flagship event.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">Athletics & Sports</h2>
      <p className="text-lg leading-relaxed mb-4">
        I was an active football player during my university years and contributed to my hostel team’s
        victory in the <span className="font-semibold">intra-hostel football championship</span>. Sports taught me resilience, team dynamics, and how to thrive under pressure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">Music & Performing Arts</h2>
      <p className="text-lg leading-relaxed mb-4">
        I’ve performed as a <span className="font-semibold">guitarist in my college band</span> for multiple events and festivals. We’ve also
        secured wins in inter-college band competitions, making music not just a passion, but a platform
        for expression and teamwork.
      </p>

      <p className="text-lg italic">
        “A balanced life builds a better developer. Code by day, create by passion.”
      </p>
    </div>
  );
};

export default Extra;
