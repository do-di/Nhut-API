define({ "api": [
  {
    "type": "post",
    "url": "/deleteBranch/",
    "title": "Delete Branch",
    "name": "Delete_Branch",
    "group": "Branches",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of branch that you want to delete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updatesuccessfully",
            "description": "<p>Update Successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  \"message\": 'deleted'\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "failedtodelete",
            "description": "<p>failed to delete</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"failed to delete\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/BranchController.php",
    "groupTitle": "Branches",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000/api/deleteBranch/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/getAllBranches/",
    "title": "Get All Branches",
    "name": "GetAllBranches",
    "group": "Branches",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Branch.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Branch.</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "created_at",
            "description": "<p>Time of created Branch.</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Time of updated Branch.</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "deleted_at",
            "description": "<p>Time of deleted Branch.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Sequence of Branch.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[{\"id\":1,\"name\":\"ABC\",\n  \"created_at\":\"2021-02-09 03:46:51\",\n  \"updated_at\":\"2021-02-09 03:46:51\",\n  \"deleted_at\":null,\n  \"Sequence\":3},...]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Not",
            "description": "<p>Found Branches</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Branch Not Found!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/BranchController.php",
    "groupTitle": "Branches",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000/api/getAllBranches/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/searchBranch/",
    "title": "Get Branches with Name",
    "name": "GetBranches",
    "group": "Branches",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Branch</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Branch.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Branch.</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "created_at",
            "description": "<p>Time of created Branch.</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Time of updated Branch.</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "deleted_at",
            "description": "<p>Time of deleted Branch.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Sequence of Branch.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [{\"id\":1,\"name\":\"ABC\",\n \"created_at\":\"2021-02-09 03:46:51\",\n \"updated_at\":\"2021-02-09 03:46:51\",\n \"deleted_at\":null,\n \"Sequence\":3},...]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "null",
            "description": "<p>Not found Branch with name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Branch Not Found!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/BranchController.php",
    "groupTitle": "Branches",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000/api/searchBranch/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/updateSequence/Branch",
    "title": "Update Sequence Branches",
    "name": "UpdateSequenceBranch",
    "group": "Branches",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "objectSequenceChange",
            "description": "<p>Object have change sequence</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "[{\"id\":1,\"Sequence\":4},\n{\"id\":2,\"Sequence\":5}]",
          "type": "Object[]"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updatesuccessfully",
            "description": "<p>Update Successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  \"message\": \"update successfully\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "23505",
            "description": "<p>Sequence value already exists</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "22P02",
            "description": "<p>Invalid data</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Default",
            "description": "<p>Update failure</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Sequence value already exists\",\n  \"id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/BranchController.php",
    "groupTitle": "Branches",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000/api/updateSequence/Branch"
      }
    ]
  },
  {
    "type": "post",
    "url": "/updateBranch/",
    "title": "Update Branch",
    "name": "Update_Branch",
    "group": "Branches",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of branch that you want to update</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of branch that you want to update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updatesuccessfully",
            "description": "<p>Update Successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"update successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "failedtodelete",
            "description": "<p>failed to delete</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 404 Not Found\n {\n\"message\": \"branch was not exists\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/BranchController.php",
    "groupTitle": "Branches",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000/api/updateBranch/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/deleteProduct/",
    "title": "Delete Product",
    "name": "Delete_Product",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of product that you want to delete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updatesuccessfully",
            "description": "<p>Update Successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  \"message\": 'deleted'\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "failedtodelete",
            "description": "<p>failed to delete</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"failed to delete\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ProductController.php",
    "groupTitle": "Products",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000/api/deleteProduct/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/searchProduct/",
    "title": "Get Products with Name and Branch",
    "name": "GetProduct",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Product</p>"
          },
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "branch_id",
            "description": "<p>Branch ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "created_at",
            "description": "<p>Time of created Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Time of updated Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "deleted_at",
            "description": "<p>Time of deleted Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Sequence of Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n  \"id\": 3,\n  \"Sequence\": 18,\n  \"Name\": \"ABC_Product_Test_010\",\n  \"Branch_id\": \"1\",\n  \"created_at\": \"2021-02-17 07:23:14\",\n  \"updated_at\": \"2021-02-17 07:23:14\",\n  \"deleted_at\": null,\n  \"branch\": {\n  \"id\": 1,\n  \"name\": \"ABC\",\n  \"created_at\": \"2021-02-17 07:23:14\",\n  \"updated_at\": \"2021-02-17 07:27:26\",\n  \"deleted_at\": null,\n  \"Sequence\": 3}\n   }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "null",
            "description": "<p>Not found Branch with name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Product Not Found!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ProductController.php",
    "groupTitle": "Products",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000/api/searchProduct/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/updateSequence/Product",
    "title": "Update Sequence Products",
    "name": "UpdateSequenceProducts",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "objectSequenceChange",
            "description": "<p>Object have change sequence</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "[{\"id\":1,\"Sequence\":4},\n{\"id\":2,\"Sequence\":5}]",
          "type": "Object[]"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updatesuccessfully",
            "description": "<p>Update Successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  \"message\": \"update successfully\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "23505",
            "description": "<p>Sequence value already exists</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "22P02",
            "description": "<p>Invalid data</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Default",
            "description": "<p>Update failure</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Sequence value already exists\",\n  \"id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ProductController.php",
    "groupTitle": "Products",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000/api/updateSequence/Product"
      }
    ]
  },
  {
    "type": "post",
    "url": "/updateProduct/",
    "title": "Update Product",
    "name": "Update_Product",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of product that you want to update</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of product that you want to update</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "branch_id",
            "description": "<p>Branch id of product that you want to update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updatesuccessfully",
            "description": "<p>Update Successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"update successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "failedtodelete",
            "description": "<p>failed to delete</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 404 Not Found\n {\n\"message\": \"branch was not exists\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ProductController.php",
    "groupTitle": "Products",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000/api/updateProduct/"
      }
    ]
  }
] });
