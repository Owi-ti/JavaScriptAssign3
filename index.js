

class Mkulima{
    constructor(){
        this.farms = [];
        this.groceryVendor = [];
        this.product = [];
        this.addFarm = (farmId, farmName, farmer, phone, address) => {
            this.farms.push({farmId,farmName,farmer,phone,address})
        }
        this.removeFarm = (farmId) => {
            let particular = this.farms.find(item => item.farmId ===farmId);
            let farmIndex = this.farms.indexOf(particular);
            this.farms.splice(farmIndex, 1); 
        }
        this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
            let particularFarm = this.farms.find(item => item.farmId ===farmId)
            particularFarm.farmId =newFarmId;
            particularFarm.farmName =newFarmName;
            particularFarm.farmer =newFarmerName;
            particularFarm.phone =newPhone;
            particularFarm.address =newAddress;
        }
        this.getFarm = (Id)=>{
            console.log(this.farms.find(object=>object.farmId===Id))
        }
        this.addProduct = (productId, productName, price) => {
            this.product.push({productId,productName,price})

        }
        this.removeProduct = (productId) => {
            let particular = this.product.find(item => item.productId ===productId);
            let productIndex = this.product.indexOf(particular);
            this.product.splice(productIndex, 1); 
        }
        this.updateProduct = function(productId,newProductId,newProductName,newPrice){
            let Product = this.product.find(item => item.productId ===productId)
            Product.productId =newProductId;
            Product.productName = newProductName;
            Product.price = newPrice;
        }
        this.getProduct = (Id)=>{
            console.log(this.product.find(object=>object.productId===Id))
        }
        this.printProducts = ()=>{
            console.log(this.product)
        }
        this.calculateOrderCost = (productId,quantity)=>{
            let Product = this.product.find(object=>object.productId===productId);
            console.log(`${quantity} ${Product.productName} for KES ${quantity*Product.price}`);
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

  MkulimaFarm.addProduct("101","pan",120);
  MkulimaFarm.addProduct("111","pen",10);
  MkulimaFarm.addProduct("120","book",500);
  console.log(MkulimaFarm.product);

MkulimaFarm.updateProduct("101","202","paint",120);
console.log(MkulimaFarm.product);

MkulimaFarm.getProduct("202");

MkulimaFarm.printProducts();

MkulimaFarm.calculateOrderCost("120",20); 