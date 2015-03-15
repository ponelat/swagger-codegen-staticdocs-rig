window.code = window.code || {};

window.code.curl = {
  "UserApi": {
    "createUser": {
      "curl": [
        {
          "header": "request",
          "syntax": "bash",
          "content": "curl -X post \'http://petstore.swagger.wordnik.com/v2\'"
        }
      ]
    },
    "createUsersWithArrayInput": {
      "curl": [
        {
          "header": "request",
          "syntax": "bash",
          "content": "curl -X post \'http://petstore.swagger.wordnik.com/v2\'"
        }
      ]
    },
    "createUsersWithListInput": {
      "curl": [
        {
          "header": "request",
          "syntax": "bash",
          "content": "curl -X post \'http://petstore.swagger.wordnik.com/v2\'"
        }
      ]
    },
    "loginUser": {
      "curl": [
        {
          "header": "request",
          "syntax": "bash",
          "content": "curl -X get \'http://petstore.swagger.wordnik.com/v2\'"
        }
      ]
    },
    "logoutUser": {
      "curl": [
        {
          "header": "request",
          "syntax": "bash",
          "content": "curl -X get \'http://petstore.swagger.wordnik.com/v2\'"
        }
      ]
    },
    "getUserByName": {
      "curl": [
        {
          "header": "request",
          "syntax": "bash",
          "content": "curl -X get \'http://petstore.swagger.wordnik.com/v2\'"
        }
      ]
    },
    "updateUser": {
      "curl": [
        {
          "header": "request",
          "syntax": "bash",
          "content": "curl -X put \'http://petstore.swagger.wordnik.com/v2\'"
        }
      ]
    },
    "deleteUser": {
      "curl": [
        {
          "header": "request",
          "syntax": "bash",
          "content": "curl -X delete \'http://petstore.swagger.wordnik.com/v2\'"
        }
      ]
    },
  },
  "PetApi": {
    "updatePet": {
      "curl": [
        {
          "header": "request",
          "syntax": "bash",
          "content": "curl -X put \'http://petstore.swagger.wordnik.com/v2\'"
        }
      ]
    },
    "addPet": {
      "curl": [
        {
          "header": "request",
          "syntax": "bash",
          "content": "curl -X post \'http://petstore.swagger.wordnik.com/v2\'"
        }
      ]
    },
    "findPetsByStatus": {
      "curl": [
        {
          "header": "request",
          "syntax": "bash",
          "content": "curl -X get \'http://petstore.swagger.wordnik.com/v2\'"
        }
      ]
    },
    "findPetsByTags": {
      "curl": [
        {
          "header": "request",
          "syntax": "bash",
          "content": "curl -X get \'http://petstore.swagger.wordnik.com/v2\'"
        }
      ]
    },
    "getPetById": {
      "curl": [
        {
          "header": "request",
          "syntax": "bash",
          "content": "curl -X get \'http://petstore.swagger.wordnik.com/v2\'"
        }
      ]
    },
    "updatePetWithForm": {
      "curl": [
        {
          "header": "request",
          "syntax": "bash",
          "content": "curl -X post \'http://petstore.swagger.wordnik.com/v2\'"
        }
      ]
    },
    "deletePet": {
      "curl": [
        {
          "header": "request",
          "syntax": "bash",
          "content": "curl -X delete \'http://petstore.swagger.wordnik.com/v2\'\ \n  -H 'api_key:{ api_key }'"
        }
      ]
    },
  },
  "StoreApi": {
    "placeOrder": {
      "curl": [
        {
          "header": "request",
          "syntax": "bash",
          "content": "curl -X post \'http://petstore.swagger.wordnik.com/v2\'"
        }
      ]
    },
    "getOrderById": {
      "curl": [
        {
          "header": "request",
          "syntax": "bash",
          "content": "curl -X get \'http://petstore.swagger.wordnik.com/v2\'"
        }
      ]
    },
    "deleteOrder": {
      "curl": [
        {
          "header": "request",
          "syntax": "bash",
          "content": "curl -X delete \'http://petstore.swagger.wordnik.com/v2\'"
        }
      ]
    },
  },
}
