const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



let productOpt2Controller={

    raiz:(req,res)=>{

    let productsInSale=[];    
    products.forEach(function(product){
     
      if (product.category=="in-sale"){
         
          productsInSale.push(product)   
          
      }
      
    });
    
    let productsVisited=[];    
    products.forEach(function(product){
     
      if (product.category=="visited"){
         
          productsVisited.push(product)   
          
      }
      
    });
  res.render('productOpt2',{productsInSale,productsVisited}) 
   
}

}

module.exports = productOpt2Controller;