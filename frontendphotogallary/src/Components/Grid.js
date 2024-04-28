import React from 'react';

const Grid = ({ photos }) => {
  return (
    <div>
      <h1 className="text-center mt-4">Our Gallery</h1>
      <div className="container mt-4">
        <div className="row">
          {photos.map(({ photo, _id }) => {
            return (
              <div key={_id} className="col-md-4 mb-3">
                <div className="card">
                  <img
                    src={`http://localhost:5000/uploads/${photo}`}
                    className="card-img-top"
                    alt="grid_image"
                  />
                  <div className="card-body">
                    {/* If you want to add additional information or buttons */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Grid;
