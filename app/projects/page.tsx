"use client";
import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Kişisel Portföy Sitesi",
      description:
        "Next.js ve React kullanılarak yapılan bir kişisel web sitesi.",
      link: "https://portfolio-example.com",
    },
    {
      title: "Blog Uygulaması",
      description: "Dinamik bir blog platformu.",
      link: "https://blog-example.com",
    },
    {
      title: "E-Ticaret Platformu",
      description: "Kullanıcı dostu bir e-ticaret uygulaması.",
      link: "https://ecommerce-example.com",
    },
  ];

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Projelerim</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="card shadow-md bg-base-100">
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer">
                Projeyi Görüntüle
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
