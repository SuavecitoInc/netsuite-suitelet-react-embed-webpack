# NetSuite SuiteLet

> SuiteScript 2.1

## Setup

This example shows you how you can use a SuiteLet (SP_StarterSuiteLet) and a RESTLet (SP_StarterAPI) to create an embedded React App in NetSuite.

### SuiteLet Record Create

Create a new script and deployment record for the SP_StarterSuiteLet SuiteLet Script. Customization > Scripting > Scripts > New.

Create a new param for Bundle URL with an id of \_sp_starter_bundle_url.

Deploy and add the bundles file cabinet url as the script param value.

### RESTLet Record Create

Create a new script and deployment record for the SP_StarterAPI RESTLet Script. Customization > Scripting > Scripts > New.

### RESTLets

> SP_StarterAPI.ts

This RESTLet takes an arg of a SKU and returns the item's information.

Payload:

```json
{
  "sku": "P001NN"
}
```

Response: ~700ms

```json
{
  "recordType": "assemblyitem",
  "id": "24867",
  "values": {
    "internalid": [
      {
        "value": "24867",
        "text": "24867"
      }
    ],
    "custitem_sp_item_sku": "P001NN",
    "displayname": "Original Hold Pomade",
    "upccode": "859896004001"
  }
}
```
