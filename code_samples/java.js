window.code = window.code || {};

window.code.java = {
  "UserApi": {
    "createUser": {
      "java": [
        {
          "header": "request",
          "syntax": "java",
          "content": "new UserApi().createUser(body)"
        }      ]
    },
    "createUsersWithArrayInput": {
      "java": [
        {
          "header": "request",
          "syntax": "java",
          "content": "new UserApi().createUsersWithArrayInput(body)"
        }      ]
    },
    "createUsersWithListInput": {
      "java": [
        {
          "header": "request",
          "syntax": "java",
          "content": "new UserApi().createUsersWithListInput(body)"
        }      ]
    },
    "loginUser": {
      "java": [
        {
          "header": "request",
          "syntax": "java",
          "content": "new UserApi().loginUser(username, password)"
        }      ]
    },
    "logoutUser": {
      "java": [
        {
          "header": "request",
          "syntax": "java",
          "content": "new UserApi().logoutUser()"
        }      ]
    },
    "getUserByName": {
      "java": [
        {
          "header": "request",
          "syntax": "java",
          "content": "new UserApi().getUserByName(username)"
        }      ]
    },
    "updateUser": {
      "java": [
        {
          "header": "request",
          "syntax": "java",
          "content": "new UserApi().updateUser(username, body)"
        }      ]
    },
    "deleteUser": {
      "java": [
        {
          "header": "request",
          "syntax": "java",
          "content": "new UserApi().deleteUser(username)"
        }      ]
    },
  },
  "PetApi": {
    "updatePet": {
      "java": [
        {
          "header": "request",
          "syntax": "java",
          "content": "new PetApi().updatePet(body)"
        }      ]
    },
    "addPet": {
      "java": [
        {
          "header": "request",
          "syntax": "java",
          "content": "new PetApi().addPet(pet)"
        }      ]
    },
    "findPetsByStatus": {
      "java": [
        {
          "header": "request",
          "syntax": "java",
          "content": "new PetApi().findPetsByStatus(status)"
        }      ]
    },
    "findPetsByTags": {
      "java": [
        {
          "header": "request",
          "syntax": "java",
          "content": "new PetApi().findPetsByTags(tags)"
        }      ]
    },
    "getPetById": {
      "java": [
        {
          "header": "request",
          "syntax": "java",
          "content": "new PetApi().getPetById(petId)"
        }      ]
    },
    "updatePetWithForm": {
      "java": [
        {
          "header": "request",
          "syntax": "java",
          "content": "new PetApi().updatePetWithForm(petId, name, status)"
        }      ]
    },
    "deletePet": {
      "java": [
        {
          "header": "request",
          "syntax": "java",
          "content": "new PetApi().deletePet(api_key, petId)"
        }      ]
    },
  },
  "StoreApi": {
    "placeOrder": {
      "java": [
        {
          "header": "request",
          "syntax": "java",
          "content": "new StoreApi().placeOrder(body)"
        }      ]
    },
    "getOrderById": {
      "java": [
        {
          "header": "request",
          "syntax": "java",
          "content": "new StoreApi().getOrderById(orderId)"
        }      ]
    },
    "deleteOrder": {
      "java": [
        {
          "header": "request",
          "syntax": "java",
          "content": "new StoreApi().deleteOrder(orderId)"
        }      ]
    },
  },
}
