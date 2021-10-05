import { appSchema, tableSchema } from "@nozbe/watermelondb";

export const mySchema = appSchema({
  version: 2,
  tables: [
    tableSchema({
      name: "Product",
      columns: [
        { name: "Id", type: "number", isIndexed: true},
        { name: "Id_type", type: "number"},
        { name: "Title", type: "string" },
        { name: "Quantity", type: "number" },
        { name: "Unity", type: "string" },
      ]
    }),
    tableSchema({
      name: "Type",
      columns: [
        { name: "Id", type: "number", isIndexed: true  },
        { name: "Periodicity", type: "string" },
        { name: "Title", type: "string" }
      ]
    })
  ]
});