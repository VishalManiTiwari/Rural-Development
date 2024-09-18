import React from "react";

const Pilgrimage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Holy Temples */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://live.staticflickr.com/1199/5102840578_553be830bc_b.jpg"
            alt="Holy Temples"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">Holy Temples</h3>
            <p className="text-gray-600">
              Visit sacred temples known for their spiritual significance, where pilgrims gather for prayer, meditation, and devotion.
            </p>
          </div>
        </div>

        {/* Sacred Rivers */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiArw6ksgXy0jTzBQDNWsUzCLIMRrk5XaqVz7JntzoFtI7A_0Xo7lMdB8Vpo_fxtlCHmYioWa6LOg4F3LCMBCodlVx_4Au9qeclNeYk_2_19WbTa1qswc62CHrdYsK235wF83S2CVD9L8tstN-4EHi9F-UGGUTgrNgpqy11BtOeZ4l-K2SclqMgPfcxTg/s800/HD-wallpaper-narmada-river-ultra-nature-landscape-scenery-river-water-clouds-sunlight-india-narmada.jpg"
            alt="Sacred Rivers"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">Sacred Rivers</h3>
            <p className="text-gray-600">
              Experience the holiness of sacred rivers, where pilgrims bathe to purify their souls and partake in ancient rituals.
            </p>
          </div>
        </div>

        {/* Holy Mountains */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://www.tibettravel.org/blog/wp-content/uploads/2018/02/kailash-mount.jpg"
            alt="Holy Mountains"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">Holy Mountains</h3>
            <p className="text-gray-600">
              Embark on pilgrimages to sacred mountains, revered for their spiritual energy and believed to be abodes of deities.
            </p>
          </div>
        </div>

        {/* Pilgrim Paths */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://3.bp.blogspot.com/-YQzGLmVb7nY/UrAdli_mpXI/AAAAAAAABIw/InbVvpC3P1E/s1600/Indian+Pilgrims.jpg"
            alt="Pilgrim Paths"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">Pilgrim Paths</h3>
            <p className="text-gray-600">
              Walk along the sacred paths that pilgrims have traveled for centuries, connecting with the history and spiritual essence of the journey.
            </p>
          </div>
        </div>

        {/* Spiritual Retreats */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://s3.scoopwhoop.com/anj/e,ek/57099973.jpg"
            alt="Spiritual Retreats"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">Spiritual Retreats</h3>
            <p className="text-gray-600">
              Engage in spiritual retreats that offer serene environments for meditation, reflection, and personal transformation.
            </p>
          </div>
        </div>

        {/* Sacred Monasteries */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://www.lifeberrys.com/img/article/phodong-monastery-1698479825-lb.jpg"
            alt="Sacred Monasteries"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">Sacred Monasteries</h3>
            <p className="text-gray-600">
              Visit peaceful monasteries where monks practice centuries-old rituals and pilgrims find solace in spiritual practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pilgrimage;
