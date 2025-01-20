import React, { useState } from "react";
import { Search, ChevronRight, ArrowLeft } from "lucide-react";

// Sample data - ganti dengan data sebenarnya
const diseases = [
  {
    id: 1,
    name: "Busuk Daun",
    description: "Penyakit yang menyerang daun cabai",
    detailDescription: `
      Penyakit busuk daun adalah salah satu penyakit yang paling umum menyerang tanaman cabai.
      Penyakit ini disebabkan oleh jamur Phytophthora capsici yang dapat menyebar dengan cepat
      terutama dalam kondisi lembab.
    `,
    symptoms: ["Daun menguning", "Bercak coklat", "Daun layu"],
    treatment: [
      "Kurangi kelembaban di sekitar tanaman",
      "Aplikasikan fungisida yang sesuai",
      "Pangkas daun yang terinfeksi"
    ],
    prevention: [
      "Gunakan bibit yang sehat",
      "Atur jarak tanam yang tepat",
      "Drainase yang baik"
    ],
    image: "/img/daun_busuk.jpg"
  },
  {
    id: 2,
    name: "Layu Fusarium",
    description: "Penyakit yang menyerang akar cabai",
    detailDescription: `
      Layu Fusarium adalah penyakit yang disebabkan oleh jamur Fusarium oxysporum.
      Penyakit ini menyerang sistem pembuluh tanaman, menyebabkan gangguan transportasi
      air dan nutrisi.
    `,
    symptoms: ["Tanaman layu", "Daun menguning", "Akar membusuk"],
    treatment: [
      "Cabut dan musnahkan tanaman yang terinfeksi",
      "Gunakan fungisida sistemik",
      "Perbaiki drainase tanah"
    ],
    prevention: [
      "Rotasi tanaman",
      "Gunakan varietas tahan",
      "Sterilisasi media tanam"
    ],
    image: "/img/fusarium.jpg"
  },
  {
    id: 3,
    name: "Antraknosa",
    description: "Penyakit yang menyerang buah cabai",
    detailDescription: `
      Antraknosa adalah penyakit yang disebabkan oleh jamur Colletotrichum spp.
      Penyakit ini menimbulkan bercak hitam atau luka pada buah cabai yang
      akhirnya membusuk.
    `,
    symptoms: ["Bercak hitam pada buah", "Buah membusuk", "Buah kering"],
    treatment: [
      "Gunakan fungisida berbahan aktif mancozeb atau chlorothalonil",
      "Buang buah yang terinfeksi",
      "Jaga kebersihan kebun"
    ],
    prevention: [
      "Tanam varietas cabai yang tahan",
      "Pangkas daun bawah yang dekat tanah",
      "Rotasi tanaman secara rutin"
    ],
    image: "/img/antraknosa.jpg"
  },
  {
    id: 4,
    name: "Kutu Daun",
    description: "Serangan hama pada daun cabai",
    detailDescription: `
      Kutu daun adalah hama yang menyerang daun tanaman cabai dengan cara menghisap
      cairan daun, menyebabkan daun mengeriting dan terganggu pertumbuhannya.
    `,
    symptoms: ["Daun mengeriting", "Bercak kuning pada daun", "Pertumbuhan terhambat"],
    treatment: [
      "Semprotkan insektisida alami seperti neem oil",
      "Gunakan predator alami seperti kepik",
      "Hindari penggunaan pestisida kimia berlebihan"
    ],
    prevention: [
      "Jaga kebersihan lingkungan kebun",
      "Tanam tanaman penghalau seperti marigold",
      "Periksa tanaman secara rutin"
    ],
    image: "/img/kutu_daun.jpg"
  },
  {
    id: 5,
    name: "Layu Bakteri",
    description: "Penyakit yang menyerang sistem pembuluh tanaman",
    detailDescription: `
      Layu bakteri adalah penyakit yang disebabkan oleh bakteri Ralstonia solanacearum.
      Penyakit ini menyebabkan layunya tanaman secara tiba-tiba meskipun kondisi tanah
      terlihat cukup lembap.
    `,
    symptoms: ["Tanaman layu mendadak", "Akar busuk", "Batang menghitam"],
    treatment: [
      "Musnahkan tanaman yang terinfeksi",
      "Lakukan pengapuran tanah",
      "Gunakan bakterisida yang sesuai"
    ],
    prevention: [
      "Gunakan benih yang tahan penyakit",
      "Perbaiki drainase tanah",
      "Rotasi tanaman dengan jenis non-solanaceae"
    ],
    image: "/img/pater.jpg"
  }
];


// Card Component
const Card = ({ disease, onClick }) => (
  <div
    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
    onClick={() => onClick(disease.id)}
  >
    <img
      src={disease.image}
      alt={disease.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{disease.name}</h3>
      <p className="text-gray-600 text-sm mb-3">{disease.description}</p>
      <div className="flex items-center text-green-600 text-sm">
        Lihat detail
        <ChevronRight size={16} className="ml-1" />
      </div>
    </div>
  </div>
);

// Check Component
const Check = ({ symptoms, selectedSymptoms, setSelectedSymptoms }) => {
  const toggleSymptom = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {symptoms.map((symptom) => (
        <button
          key={symptom}
          onClick={() => toggleSymptom(symptom)}
          className={`px-3 py-1.5 rounded-full text-sm transition-colors ${selectedSymptoms.includes(symptom)
            ? 'bg-green-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {symptom}
        </button>
      ))}
    </div>
  );
};

// Detail Page Component
const DiseaseDetail = ({ disease, onBack }) => (
  <div className="min-h-screen bg-gray-100">
    <div className="max-w-4xl mx-auto px-8 py-6">
      <button
        onClick={onBack}
        className="flex items-center text-green-600 hover:text-green-700 mb-6 font-semibold"
      >
        <ArrowLeft size={20} className="mr-2" />
        Kembali ke daftar penyakit
      </button>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <img
          src={disease.image}
          alt={disease.name}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{disease.name}</h1>
          <p className="text-gray-700 mb-6">{disease.detailDescription}</p>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">Gejala</h2>
              <ul className="list-disc pl-5 space-y-2">
                {disease.symptoms.map((symptom, index) => (
                  <li key={index} className="text-gray-700">{symptom}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Penanganan</h2>
              <ul className="list-disc pl-5 space-y-2">
                {disease.treatment.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Pencegahan</h2>
              <ul className="list-disc pl-5 space-y-2">
                {disease.prevention.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main App Component
export const HomePage = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDisease, setSelectedDisease] = useState(null);

  const allSymptoms = Array.from(
    new Set(diseases.flatMap((disease) => disease.symptoms))
  );

  const filteredDiseases = selectedSymptoms.length
    ? diseases.filter((disease) =>
      selectedSymptoms.every((symptom) => disease.symptoms.includes(symptom)) &&
      disease.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : diseases.filter((disease) =>
      disease.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleDiseaseClick = (id) => {
    const disease = diseases.find(d => d.id === id);
    setSelectedDisease(disease);
  };

  if (selectedDisease) {
    return <DiseaseDetail disease={selectedDisease} onBack={() => setSelectedDisease(null)} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Sistem Diagnosis Penyakit Cabai</h1>
          <p className="text-lg opacity-90">
            Identifikasi penyakit pada tanaman cabai Anda dengan mudah dan akurat
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-6">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Cari penyakit..."
            className="w-full pl-10 pr-4 shadow-sm py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Symptoms Selection */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Pilih Gejala yang Terlihat</h2>
          <Check
            symptoms={allSymptoms}
            selectedSymptoms={selectedSymptoms}
            setSelectedSymptoms={setSelectedSymptoms}
          />
        </div>

        {/* Results Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Hasil Diagnosis
            <span className="text-sm font-normal text-gray-500 ml-2">
              ({filteredDiseases.length} penyakit ditemukan)
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDiseases.length > 0 ? (
              filteredDiseases.map((disease) => (
                <Card
                  key={disease.id}
                  disease={disease}
                  onClick={handleDiseaseClick}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12 bg-white rounded-lg">
                <p className="text-gray-500">Tidak ada penyakit yang sesuai dengan kriteria yang dipilih</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
