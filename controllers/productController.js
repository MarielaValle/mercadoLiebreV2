const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const formatPrice = (price,discount) => toThousand(Math.round(price*(1-(discount/100))));

let productController={

    raiz: (req, res) => {
		const productsVisited = products.filter(product => product.category === "visited");
        const productsInSale = products.filter(product => product.category === "in-sale");
		res.render("product", {productsVisited, productsInSale,toThousand,formatPrice});
	},

    detail:(req,res) => {
           
		   let id = req.params.id 
		   products.forEach(function(product){
           if(product.id==id){
			   producto=product
		   }
		    

		   });
			
		   res.render('detail',{producto, toThousand, formatPrice}); 
	},
	

}

module.exports = productController;    