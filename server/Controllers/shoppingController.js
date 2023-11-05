const Shopping = require('../Models/shoppingModel.js');



const addtocart = async (req, res) => {
  try {
      const { user_id, count} = req.body;
      const productId = req.params.id;

      console.log('productId:', productId);
      console.log('user_id:', user_id);
      console.log('count:', count);
     

      await Shopping.addtocart(productId, user_id, count);

      res.status(201).json({ success: true, message: 'Product added successfully' });
  } catch (err) {
      console.error(err);
      res.status(400).json({ success: false, error: 'Product added failed' });
  }
};


const getcartproducts = async (req, res, next) => {

    try {
      const shoppingcart = await Shopping.getcartproducts();

      const modifiedResponse = {
        success: true,
        shoppingcart: shoppingcart.map(item => {
          return {
            id: item.id,
            name: item.product_name,
            details: item.product_detail,
            category: item.category,
            images: JSON.parse(item.image), 
            price: item.total_price,
            counts: item.count
          };
        })
      };
      res.status(200).json(modifiedResponse); 
      res.status(200).json({ success: true, shoppingcart });
    } 
    catch (err) {
        console.error(err);
        res.status(400).json({ success: false, error: 'Error in getting shoppingcarts' });
      }
    };

    const deleteproduct = async (req, res) => {
      try {
          const productId = req.params.id;
  
        await Shopping.deleteproduct(productId);
  
  
          res.status(200).json({ success: true, message: 'Product deleted successfully'});
      } catch (error) {
          console.error(error);
          res.status(500).json({ success: false, error: 'Internal server error' });
      }
  };

  const totalprice = async (req, res) => {
    try {
      const total =  await Shopping.totalprice();

  

        res.status(200).json({ success: true, total });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};
    module.exports = {
        addtocart,
        getcartproducts,
        deleteproduct,
        totalprice
      };