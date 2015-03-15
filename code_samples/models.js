window.code = window.code || {};

window.code.models = {
"models": {
    "User": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{ "properties" : { "id" : { "type" : "integer", "format" : "int64" }, "username" : { "type" : "string" }, "firstName" : { "type" : "string" }, "lastName" : { "type" : "string" }, "email" : { "type" : "string" }, "password" : { "type" : "string" }, "phone" : { "type" : "string" }, "userStatus" : { "type" : "integer", "format" : "int32", "description" : "User Status" } }, "xml" : { "name" : "User" } }'
        }
    ]},
    "Category": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{ "properties" : { "id" : { "type" : "integer", "format" : "int64" }, "name" : { "type" : "string" } }, "xml" : { "name" : "Category" } }'
        }
    ]},
    "Pet": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{ "required" : [ "name", "photoUrls" ], "properties" : { "id" : { "type" : "integer", "format" : "int64" }, "category" : { "$ref" : "#/definitions/Category" }, "name" : { "type" : "string", "example" : "doggie" }, "photoUrls" : { "type" : "array", "items" : { "type" : "string" } }, "tags" : { "type" : "array", "items" : { "$ref" : "#/definitions/Tag" } }, "status" : { "type" : "string", "description" : "pet status in the store" } }, "xml" : { "name" : "Pet" } }'
        }
    ]},
    "Tag": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{ "properties" : { "id" : { "type" : "integer", "format" : "int64" }, "name" : { "type" : "string" } }, "xml" : { "name" : "Tag" } }'
        }
    ]},
    "Order": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{ "properties" : { "id" : { "type" : "integer", "format" : "int64" }, "petId" : { "type" : "integer", "format" : "int64" }, "quantity" : { "type" : "integer", "format" : "int32" }, "shipDate" : { "type" : "string", "format" : "date-time" }, "status" : { "type" : "string", "description" : "Order Status" }, "complete" : { "type" : "boolean" } }, "xml" : { "name" : "Order" } }'
        }
    ]},
  }
}
