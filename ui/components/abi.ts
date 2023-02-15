const abi = {
  "source": {
    "hash": "0x55d40b1b7ea8dbba3f36723a2bc943dc88d8b10586dd2ccd1509f8b49657744d",
    "language": "ink! 3.4.0",
    "compiler": "rustc 1.69.0-nightly"
  },
  "contract": {
    "name": "todo_list",
    "version": "0.1.0",
    "authors": [
      "Ganesh oli"
    ]
  },
  "V3": {
    "spec": {
      "constructors": [
        {
          "args": [
            {
              "label": "init_value",
              "type": {
                "displayName": [
                  "bool"
                ],
                "type": 7
              }
            }
          ],
          "docs": [],
          "label": "new",
          "payable": false,
          "selector": "0x9bae9d5e"
        }
      ],
      "docs": [],
      "events": [
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "item",
              "type": {
                "displayName": [
                  "TodoItem"
                ],
                "type": 5
              }
            }
          ],
          "docs": [],
          "label": "ItemCreated"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "item",
              "type": {
                "displayName": [
                  "TodoItem"
                ],
                "type": 5
              }
            }
          ],
          "docs": [],
          "label": "ItemUpdated"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "item_id",
              "type": {
                "displayName": [
                  "TodoItemId"
                ],
                "type": 4
              }
            }
          ],
          "docs": [],
          "label": "ItemRemoved"
        }
      ],
      "messages": [
        {
          "args": [
            {
              "label": "item_name",
              "type": {
                "displayName": [
                  "String"
                ],
                "type": 6
              }
            },
            {
              "label": "priority",
              "type": {
                "displayName": [
                  "Prioritise"
                ],
                "type": 8
              }
            }
          ],
          "docs": [],
          "label": "create_todo_item",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "Result"
            ],
            "type": 10
          },
          "selector": "0xbc82dad0"
        },
        {
          "args": [
            {
              "label": "item_id",
              "type": {
                "displayName": [
                  "TodoItemId"
                ],
                "type": 4
              }
            }
          ],
          "docs": [],
          "label": "update_todo_item",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "Result"
            ],
            "type": 10
          },
          "selector": "0xaf253ecf"
        },
        {
          "args": [],
          "docs": [],
          "label": "get_todo_list",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "Vec"
            ],
            "type": 13
          },
          "selector": "0xda72eabd"
        },
        {
          "args": [],
          "docs": [],
          "label": "get_all_list",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "Vec"
            ],
            "type": 13
          },
          "selector": "0xe7cec897"
        },
        {
          "args": [
            {
              "label": "item_id",
              "type": {
                "displayName": [
                  "TodoItemId"
                ],
                "type": 4
              }
            }
          ],
          "docs": [],
          "label": "remove_todo_item",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "Result"
            ],
            "type": 10
          },
          "selector": "0x71ab0786"
        },
        {
          "args": [],
          "docs": [],
          "label": "get_todo_length",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "i32"
            ],
            "type": 4
          },
          "selector": "0x43d225ee"
        }
      ]
    },
    "storage": {
      "struct": {
        "fields": [
          {
            "layout": {
              "cell": {
                "key": "0x0000000000000000000000000000000000000000000000000000000000000000",
                "ty": 0
              }
            },
            "name": "owner"
          },
          {
            "layout": {
              "cell": {
                "key": "0x0100000000000000000000000000000000000000000000000000000000000000",
                "ty": 3
              }
            },
            "name": "item"
          },
          {
            "layout": {
              "cell": {
                "key": "0x0200000000000000000000000000000000000000000000000000000000000000",
                "ty": 4
              }
            },
            "name": "item_id"
          }
        ]
      }
    },
    "types": [
      {
        "id": 0,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "type": 1,
                  "typeName": "[u8; 32]"
                }
              ]
            }
          },
          "path": [
            "ink_env",
            "types",
            "AccountId"
          ]
        }
      },
      {
        "id": 1,
        "type": {
          "def": {
            "array": {
              "len": 32,
              "type": 2
            }
          }
        }
      },
      {
        "id": 2,
        "type": {
          "def": {
            "primitive": "u8"
          }
        }
      },
      {
        "id": 3,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "name": "offset_key",
                  "type": 9,
                  "typeName": "Key"
                }
              ]
            }
          },
          "params": [
            {
              "name": "K",
              "type": 4
            },
            {
              "name": "V",
              "type": 5
            }
          ],
          "path": [
            "ink_storage",
            "lazy",
            "mapping",
            "Mapping"
          ]
        }
      },
      {
        "id": 4,
        "type": {
          "def": {
            "primitive": "i32"
          }
        }
      },
      {
        "id": 5,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "name": "owner",
                  "type": 0,
                  "typeName": "AccountId"
                },
                {
                  "name": "item_name",
                  "type": 6,
                  "typeName": "String"
                },
                {
                  "name": "is_completed",
                  "type": 7,
                  "typeName": "bool"
                },
                {
                  "name": "priority",
                  "type": 8,
                  "typeName": "Prioritise"
                }
              ]
            }
          },
          "path": [
            "todo_list",
            "todo_list",
            "TodoItem"
          ]
        }
      },
      {
        "id": 6,
        "type": {
          "def": {
            "primitive": "str"
          }
        }
      },
      {
        "id": 7,
        "type": {
          "def": {
            "primitive": "bool"
          }
        }
      },
      {
        "id": 8,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "index": 0,
                  "name": "HIGH"
                },
                {
                  "index": 1,
                  "name": "LOW"
                },
                {
                  "index": 2,
                  "name": "MEDIUM"
                }
              ]
            }
          },
          "path": [
            "todo_list",
            "todo_list",
            "Prioritise"
          ]
        }
      },
      {
        "id": 9,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "type": 1,
                  "typeName": "[u8; 32]"
                }
              ]
            }
          },
          "path": [
            "ink_primitives",
            "Key"
          ]
        }
      },
      {
        "id": 10,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 11
                    }
                  ],
                  "index": 0,
                  "name": "Ok"
                },
                {
                  "fields": [
                    {
                      "type": 12
                    }
                  ],
                  "index": 1,
                  "name": "Err"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 11
            },
            {
              "name": "E",
              "type": 12
            }
          ],
          "path": [
            "Result"
          ]
        }
      },
      {
        "id": 11,
        "type": {
          "def": {
            "tuple": []
          }
        }
      },
      {
        "id": 12,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "index": 0,
                  "name": "ItemNotExists"
                },
                {
                  "index": 1,
                  "name": "NotAOwner"
                }
              ]
            }
          },
          "path": [
            "todo_list",
            "todo_list",
            "TodoError"
          ]
        }
      },
      {
        "id": 13,
        "type": {
          "def": {
            "sequence": {
              "type": 5
            }
          }
        }
      }
    ]
  }
};

export default abi;