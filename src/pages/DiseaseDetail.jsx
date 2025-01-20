import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { diseases } from "../data";

const DiseaseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const disease = diseases.find((d) => d.id === parseInt(id));

  if (!disease) {
    return <p>Penyakit tidak ditemukan.</p>;
  }

  return (
    <div className="p-8">
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Kembali
      </button>
      <h1 className="text-2xl font-bold mb-4">{disease.name}</h1>
      <img
        src={disease.image}
        alt={disease.name}
        className="w-full h-60 object-cover rounded-md mb-4"
      />
      <p>{disease.description}</p>
      <h3 className="font-bold mt-4">Gejala:</h3>
      <ul className="list-disc ml-6">
        {disease.symptoms.map((symptom, index) => (
          <li key={index}>{symptom}</li>
        ))}
      </ul>
    </div>
  );
};

export default DiseaseDetail;
