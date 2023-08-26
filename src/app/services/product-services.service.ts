import { Injectable , OnInit} from '@angular/core';
import { Store } from '../Models/store';
import { Card } from '../Models/card';
import { IProduct } from '../Models/iproduct';
import { ICategories } from '../Models/icategories';
import { DiscountOffers } from '../Models/discount-offers';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService  implements OnInit{
  
  client: string = "";
  cardArr:Card[]=[];
  store:Store = new Store("Buma",["Cairo"],"https://i.postimg.cc/BvKw80Bx/favicon.png")
  categories: ICategories[] = [];
  products: IProduct[]= [];
  tenPercent:string = "";
  
  date: Date= new Date();
  showImage:boolean = true;
  filteredProducts:IProduct[]=[];

  card:string ="1234567894561236"

  constructor() {
    this.tenPercent = DiscountOffers.TEN_PERCENT;
    this.client= "Asmaa";
    this.categories=[
      {id:1,name:"Vehicles"},
      {id:2,name:"Headphones"},
      {id:3,name:"Mobile & Tablet"},
      {id:4,name:"Fashion"},
      {id:5,name:"Electronics"}
      ]
    this.products=[
        {id: 1,
          Name: "Toyota",
          Quantity: 3,
          Price: 500000,
          Img: "../../../assets/images/car1.jfif",
          CategoryID: 1,
          CategoryName:"Vehicles",
          Details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!"
        },
        {id: 2,
          Name: "Rice Cooker",
          Quantity: 30,
          Price: 7000,
          Img: "../../../assets/images/Cooker.jfif",
          CategoryID: 5,
          CategoryName:"Electronics",
          Details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!"
        },
        {id: 3,
          Name: "LG TV",
          Quantity: 5,
          Price: 100000,
          Img: "../../../assets/images/LG.jfif",
          CategoryID: 5,
          CategoryName:"Electronics",
          Details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!"
        },
        {id: 4,
          Name: "Dior Watch",
          Quantity: 40,
          Price: 1000,
          Img: "../../../assets/images/fashion2.jfif",
          CategoryID: 4,
          CategoryName:"Fashion",
          Details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!"
        },
        {id: 5,
          Name: "Lacoste Bag",
          Quantity: 10,
          Price: 5000,
          Img: "../../../assets/images/fashion1.jfif",
          CategoryID: 4,
          CategoryName:"Fashion",
          Details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!"
        },
        {id: 6,
          Name: "Samsung",
          Quantity: 10,
          Price: 7000,
          Img: "../../../assets/images/phone1.jpg",
          CategoryID: 3,
          CategoryName:"Mobile & Tablet",
          Details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!"
        },
        {id: 7,
          Name: "Headphone 1",
          Quantity: 20,
          Price: 600,
          Img: "../../../assets/images/headphone1.jpg",
          CategoryID: 2,
          CategoryName:"Headphones",
          Details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!"
        },
        {id: 8,
          Name: "Headphone 2",
          Quantity: 20,
          Price: 700,
          Img: "../../../assets/images/headphone2.jpg",
          CategoryID: 2,
          CategoryName:"Headphones",
          Details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!"
        },
        {id: 9,
          Name: "Headphone 3",
          Quantity: 20,
          Price: 500,
          Img: "../../../assets/images/headphone3.jpg",
          CategoryID: 2,
          CategoryName:"Headphones",
          Details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!"
        },
        {id: 10,
          Name: "Mercedes",
          Quantity: 10,
          Price: 1000000,
          Img: "../../../assets/images/car2.jfif",
          CategoryID: 1,
          CategoryName:"Vehicles",
          Details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!"
        },
        {id: 11,
          Name: "Motorcycle",
          Quantity: 50,
          Price: 10000,
          Img: "../../../assets/images/moto1.jfif",
          CategoryID: 1,
          CategoryName:"Vehicles",
          Details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!"
        },
        {id: 12,
          Name: "Toshiba",
          Quantity: 5,
          Price: 500000,
          Img: "../../../assets/images/toshiba.jfif",
          CategoryID: 5,
          CategoryName:"Electronics",
          Details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!"
        },
        {id: 13,
          Name: "Dior Watch",
          Quantity: 10,
          Price: 8000,
          Img: "../../../assets/images/fashion3.jfif",
          CategoryID: 1,
          CategoryName:"Fashion",
          Details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!"
        },
        {id: 14,
          Name: "IPhone",
          Quantity: 10,
          Price: 20000,
          Img: "../../../assets/images/phone2.jpg",
          CategoryID: 3,
          CategoryName:"Mobile & Tablet",
          Details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste dignissimos, harum voluptates, error facilis at sit nemo vitae ipsum officia inventore repellat ipsam. Corporis commodi quis porro laboriosam et!"
        }
      ];
  }  
  
  ngOnInit(): void {
    this.filteredProducts=this.products;
  }

  getDiscount(price: number,disc: number):number{
    return price - (price * disc /100);
  }
  addToCard(item:IProduct,count:any){
    count = parseInt(count);
    let isFound=this.cardArr.find((c: Card)=>c.name==item.Name)
    if(isFound && count <= item.Quantity){
      isFound.count +=count;
      this.showMessage();
      this.MinusQuantity(item,count); 
    }else{
      if(count <= item.Quantity){
        // let newCard:Card={ name:`${item.Name}`,price:item.Price,count:1}      
        // this.cardArr.push(newCard);
        this.showMessage();
        this.MinusQuantity(item,count);
      }else{
        alert(`Sorry! we don't have enough ${item.Name}`);
      }

    }
    // console.log(this.cardArr);
  }



  showMessage(){
    let hideLogo = document.getElementById("logo");
    setTimeout(()=>{
      if(hideLogo){
        hideLogo.innerHTML=`<div class="fs-5 border p-2">Thanks for Shopping ${this.client} ^_^</div>`;
      }
    },100);
    setTimeout(()=>{
      if(hideLogo){
        hideLogo.innerHTML =`<img src="${this.store.logo}" alt="logo" width="30px" class="me-2">
        <span class="fs-5">Welcome ${this.client}</span>`
     }
    },5000);
  }

  MinusQuantity(item:IProduct,count:number){
    let newPrd = this.products.find((prd:IProduct)=> prd.Name == item.Name)
    
    if(newPrd){
      this.products[newPrd.id-1].Quantity -= count; 
      console.log(this.products[newPrd.id-1].Quantity, this.products);
    }
  }

  PlusQuantity(item:Card){
    let newPrd = this.products.find((prd:IProduct)=> prd.Name == item.name)
    
    if(newPrd){
      this.products[newPrd.id-1].Quantity +=item.count; 
      console.log(this.products[newPrd.id-1].Quantity);
    }
  }

  calcTotalPrice(item:Card):number{
    return item.price * item.count;
  }

  deleteFromCard(item:Card){
    this.PlusQuantity(item);
    this.cardArr = this.cardArr.filter((ele:Card)=> ele.name != item.name)
  }

  
  filtername: string=''
  
  // set listFilter(value:string) {
  //   this.filtername= value;
  //   this.filteredProducts = this.performFilter(value);
  // }
  
  // filter data
  // performFilter(filterValue:string):IProduct[]{
  //   // const id = this.categories.findIndex(cat => cat.name.includes(filterValue))
  //   if(filterValue == "All Categories"){
  //     return this.products
  //   }else{
  //   return this.products.filter((prd:IProduct)=>prd.CategoryName.includes(filterValue));
  //   }
  // }

  filtername2: string=''
  // filter data
  performFilterByName(filterValue:string){
    this.filtername2= filterValue;
    this.filteredProducts = this.products.filter((prd:IProduct)=>prd.Name.includes(filterValue));
  }

  performFilterByPrice(min:string, max:string){
    this.filteredProducts = this.products.filter((prd:IProduct)=>prd.Price > parseInt(min) && prd.Price < parseInt(max));
  }

  editProduct(item:Card):IProduct[]{
    let newPrd = this.products.find((prd:IProduct)=> prd.Name == item.name)
    
    if(newPrd){
      this.products[newPrd.id-1].Quantity +=item.count; 
      console.log(this.products[newPrd.id-1].Quantity, this.products);
    }
    return this.products;
  }

  getProductByID(id : number) : IProduct | undefined{
    return this.products.find((prd:IProduct)=> prd.id == id)
  }

  getProductByCategoryID(id : number) : IProduct | undefined{
    return this.products.find((prd:IProduct)=> prd.CategoryID == id)
  }

  getProductByCategoryName(name : string) : IProduct | undefined{
    return this.products.find((prd:IProduct)=> prd.CategoryName == name)
  }

  getProductByName(name : string) : IProduct | undefined{
    return this.products.find((prd:IProduct)=> prd.Name == name)
  }

  ProductsIds():number[]{
    return this.products.map((prd) => prd.id);
  }

}
