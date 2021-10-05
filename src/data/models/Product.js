// import { Model } from "@nozbe/watermelondb";
// import { field, relation } from "@nozbe/watermelondb/decorators";

// export default class Product extends Model {
//   static table = "Product";

//   static associations = {
//     reviews: { type: "has_many", foreignKey: "Id_type" }
//   };

//   @field("Id") Id;
//   @field("Title") Title;
//   @field("Quantity") Quantity;
//   @field("Unity") Unity;

//   @children("Product") Product;
// }