import React from 'react';

const Cultural = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Cultural Heritage */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://imgs.search.brave.com/mM6cSuiBv50D5vDocZIo5YmyAbedXj-dtC0I-u8MCX0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9saWRpZnkuY29t/L2Jsb2cvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTQvMDYvTWFo/YWJhbGlwdXJhbS5q/cGc"
            alt="Cultural Heritage"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">Cultural Heritage</h3>
            <p className="text-gray-600">
              Explore ancient temples, historical monuments, and architecture
              that narrates the rich history of our ancestors.
            </p>
          </div>
        </div>

        {/* Traditional Festivals */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://imgs.search.brave.com/pYU9l88UlEvG7Oa-ole3_AkTGVfHjCeTbPEafH9zZQM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudHJhdmVsdHJp/YW5nbGUuY29tL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTcvMTIvYmFpc2Fr/aGktZmVzdGl2YWwt/b2YtaW5kaWEuanBn"
            alt="Traditional Festivals"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">Traditional Festivals</h3>
            <p className="text-gray-600">
              Experience the vibrant colors and customs of our cultural festivals,
              filled with music, dance, and celebration.
            </p>
          </div>
        </div>

        {/* Local Art and Handicrafts */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://imgs.search.brave.com/6aYagc-lzcgTo37wP3B3fPPZyIy50ZswLgu8rgGGzwI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/eWVoYWluZGlhLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wNy82LXdvb2Rl/bi1jYXJ2aW5ncy5q/cGc"
            alt="Local Art and Handicrafts"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">Local Art and Handicrafts</h3>
            <p className="text-gray-600">
              Discover the intricate craftsmanship of local artisans, from pottery to
              handwoven textiles, each piece tells a unique story.
            </p>
          </div>
        </div>

        {/* Cultural Cuisine */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://imgs.search.brave.com/mfiXSi7kdlgL-FxCfDYPHWchi9tTtsW-Jb1rfRMit0s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zYW5k/aW5teXN1aXRjYXNl/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wMS9Qb3B1/bGFyLUluZGlhbi1G/b29kLURpc2hlcy5q/cGc"
            alt="Cultural Cuisine"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">Cultural Cuisine</h3>
            <p className="text-gray-600">
              Savor the flavors of traditional dishes made from local ingredients,
              offering a true taste of our culture.
            </p>
          </div>
        </div>

        {/* Cultural Dance and Music */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://imgs.search.brave.com/ehl3hd5MZuh3Qn7XLeusm_6yknZGcGFGkwReSx6rXg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3VsdHVyYWxpbmRp/YS5uZXQvaWxpaW1h/Z2VzL0Vhc3QlMjBJ/bmRpYS5qcGc"
            alt="Cultural Dance and Music"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">Cultural Dance and Music</h3>
            <p className="text-gray-600">
              Enjoy performances of traditional dance and music, passed down through
              generations, reflecting the soul of our community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cultural;
