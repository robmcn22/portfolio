// Visual grid categorizing your technical toolkit (Languages, Data/ML Libraries, Web/DevOps Tools).

import React from 'react';

export default function Skills() {
  const skillCategories = [ //UPDATE
    { title: "Languages", skills: ["#"] }, //["Python", "SQL", "R", "JavaScript", "HTML/CSS"]
    { title: "Machine Learning", skills: ["#"] }, //["Scikit-Learn", "XGBoost", "PyTorch", "TensorFlow"]
    { title: "Data & Analysis", skills: ["#"] }, //["Pandas", "NumPy", "Matplotlib", "Tableau"]
    { title: "Tools & Web", skills: ["#"] } //["Git", "Docker", "React", "Tailwind CSS"]
  ];

  return (
    // add padding above and below the section
    <section id="skills" className="max-w-5xl mx-auto px-6 py-30 mb-10"> 
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="font-semibold text-lg text-gray-900 mb-4 border-b pb-2">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill, i) => (
                <li key={i} className="text-gray-600">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}