class Mkulima {
  
    constructor() {
      this.farms = [];
      this.products = [];
      this.orders = [];
      this.addFarm= function(farmId,name,farmer,phone,address){
            this.farms.push({farmId,name,farmer,phone,address})
      }
      this.removeFarm=function(id){
         let targetFarm= this.farms.find(item=>item.farmId===id)
         let farmIndex=this.farms.indexOf(targetFarm)
         this.farms.splice(farmIndex,1)
      }
      this.updateFarm=function(oldId,newFarmId, newName, newFarmer, newPhone, newAddress){
              let targetFarm= this.farms.find(item=>item.farmId===oldId)
              targetFarm.farmId = newFarmId
              targetFarm.name=newName
              targetFarm.farmer=newFarmer
              targetFarm.phone=newPhone
              targetFarm.address=newAddress
      }
      this.getFarm=function(id){
          console.log(this.farms.find(object=>object.farmId===id))
      }
      this.addProduct= function(productId,name,price){
          this.farms.push({productId,name,price})
    }
    this.removeProduct=function(id){
       let productIndex= this.products.findIndex(item=>item.productId===id)
       this.farms.splice(productIndex,1)
    }
    this.updateProduct=function(oldId,newId, newName, newPrice){
            let product= this.products.find(item=>item.productId===oldId)
            product.productId=newId
            product.name=newName
            product.price=newPrice
    }
    this.getProducta=function(id){
      console.log(this.products.find(product=>product.farmId===id))
     }
  
  
    this.printProducts=function(){
      console.log(this.products)
     }
     this.calculateOrderCost=function(id,quantity){
      let product= this.products.find(item=>item.productId===id)
      console.log(`For ${quantity} of ${product.name}, the cost of your order is ${product.price*quantity}`)
      this.orders.push(product)
      this.order
  
     }
  }
  }
  
  let MkulimaFarm= new Mkulima()
  MkulimaFarm.addFarm("200","sugarcage plantation","Kelly","0783930474","Manila,Phillipine")
  MkulimaFarm.addFarm("888","Rice plantation","Klein","0756443637","Mwea,Nanyuki")
  MkulimaFarm.addFarm("208","Coffee plantation","Ilham","075674937","Accra, Ghana")
  

  MkulimaFarm.updateFarm("200","188","Wheat plantation","Brandy","074736428","Uasin Gishu")
  
  console.log(MkulimaFarm.farms)
  
  MkulimaFarm.getFarm("188")

  MkulimaFarm.addProduct("101","pain",120);
  MkulimaFarm.addProduct("111","pen",10);
  MkulimaFarm.addProduct("120","book",500);
console.log(MkulimaFarm.products);

console.log(MkulimaFarm.products);

MkulimaFarm.updateProduct("101","202","paint",120);
console.log(MkulimaFarm.products);

MkulimaFarm.getProduct("111");

MkulimaFarm.printProducts();

MkulimaFarm.calculateOrderCost("20",120); 