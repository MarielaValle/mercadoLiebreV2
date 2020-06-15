const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


let productController={
    
    raiz :function(req,res,next){  

        let productsInSale=[];

        products.forEach(function(product){
           
            if(product.category == 'in-sale'){
                
                productsInSale.push(product)
                
            }  
              
        });    
        
        res.render('product',{'productsInSale':productsInSale});  
        
    }
      
};

module.exports=productController