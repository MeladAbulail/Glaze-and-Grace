import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditItem = () => {
  const [item, setItem] = useState({
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: null,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setItem({ ...item, [name]: files[0] });
      if (files.length > 0) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImagePreview(e.target.result);
        };
        reader.readAsDataURL(files[0]);
      }
    } else {
      setItem({ ...item, [name]: value });
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append('id', item.id);
    formData.append('title', item.title);
    formData.append('price', item.price);
    formData.append('description', item.description);
    formData.append('category', item.category);
    formData.append('image', item.image);

    axios
      .put(`https://fakestoreapi.com/products/${item.id}`, formData)
      .then((response) => {
        setIsEditing(false);
        console.log('Item updated:', response.data);
      })
      .catch((error) => {
        console.error('Error updating item:', error);
      });
  };

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/1')
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.error('Error fetching item:', error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center p-4 rounded-lg bg-[#F9EFE6] mx-auto w-full md:w-[calc(100% - 3rem)] max-w-screen-xl md:space-x-4 justify-center">
      {isEditing ? (
        <div className="text-left">
          <label>Username</label>
          <input
            type="text"
            name="title"
            value={item.title}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <label>Email</label>
          <input
            type="number"
            name="price"
            value={item.price}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <label>New Password</label>
          <input
            type="text"
            name="category"
            value={item.category}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <div>
            <h2>Image</h2>
            <input
              type="file"
              name="image"
              onChange={handleInputChange}
              className="p-2 mb-2 border rounded"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Item Preview"
                style={{ width: '200px', height: '200px' }}
              />
            )}
          </div>

          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[#17403C] text-white rounded hover-bg-[#DBC9B1] mb-2"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="text-left">
          <h2 className="text-2xl font-semibold">{item.title}</h2>
          <p>Price: ${item.price}</p>
          <p>{item.description}</p>
          <p>Category: {item.category}</p>
          <img src={item.image} alt={item.title} className="max-w-xs" />
          <button
            onClick={handleEdit}
            className="px-4 py-2 bg-[#17403C] text-white rounded hover-bg-[#DBC9B1] mt-4"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default EditItem;