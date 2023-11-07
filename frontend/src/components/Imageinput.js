import React, { useState } from 'react';

const ImageInput = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />

      {selectedImage && (
        <img
          src={selectedImage}
          alt="Selected"
          style={{ maxWidth: '100%', maxHeight: '300px' }}
        />
      )}
    </div>
  );
};

export default ImageInput;
