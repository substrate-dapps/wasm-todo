const abi = {
  "source": {
    "hash": "0xed45fb2b028dba0d1f4a00fe3365888f4abff44acb8a42141719b3b136be4954",
    "language": "ink! 3.4.0",
    "compiler": "rustc 1.69.0-nightly"
  },
  "contract": {
    "name": "voting_contract",
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
              "label": "initial_value",
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
              "label": "proposal",
              "type": {
                "displayName": [
                  "Proposal"
                ],
                "type": 5
              }
            }
          ],
          "docs": [],
          "label": "ProposalCreated"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "proposal",
              "type": {
                "displayName": [
                  "Proposal"
                ],
                "type": 5
              }
            }
          ],
          "docs": [],
          "label": "GetProposal"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "user",
              "type": {
                "displayName": [
                  "User"
                ],
                "type": 10
              }
            }
          ],
          "docs": [],
          "label": "UserCreated"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "proposal",
              "type": {
                "displayName": [
                  "Proposal"
                ],
                "type": 5
              }
            }
          ],
          "docs": [],
          "label": "ProposalStatusChanged"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "proposal",
              "type": {
                "displayName": [
                  "String"
                ],
                "type": 6
              }
            }
          ],
          "docs": [],
          "label": "ProposalVoted"
        }
      ],
      "messages": [
        {
          "args": [
            {
              "label": "proposal_name",
              "type": {
                "displayName": [
                  "String"
                ],
                "type": 6
              }
            }
          ],
          "docs": [],
          "label": "create_proposal",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "Result"
            ],
            "type": 14
          },
          "selector": "0xf9fb13d3"
        },
        {
          "args": [
            {
              "label": "id",
              "type": {
                "displayName": [
                  "ProposalId"
                ],
                "type": 4
              }
            }
          ],
          "docs": [],
          "label": "change_proposal_status",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "Result"
            ],
            "type": 14
          },
          "selector": "0x2871339c"
        },
        {
          "args": [
            {
              "label": "user_account",
              "type": {
                "displayName": [
                  "AccountId"
                ],
                "type": 0
              }
            },
            {
              "label": "user_name",
              "type": {
                "displayName": [
                  "String"
                ],
                "type": 6
              }
            }
          ],
          "docs": [],
          "label": "register_user",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "Result"
            ],
            "type": 14
          },
          "selector": "0xf093f13c"
        },
        {
          "args": [
            {
              "label": "vote",
              "type": {
                "displayName": [
                  "Vote"
                ],
                "type": 17
              }
            },
            {
              "label": "id",
              "type": {
                "displayName": [
                  "ProposalId"
                ],
                "type": 4
              }
            }
          ],
          "docs": [],
          "label": "vote_proposal",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "Result"
            ],
            "type": 14
          },
          "selector": "0x946595e4"
        },
        {
          "args": [],
          "docs": [],
          "label": "get_active_proposal",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "Vec"
            ],
            "type": 11
          },
          "selector": "0x70fa23c8"
        },
        {
          "args": [],
          "docs": [],
          "label": "get_all_proposal",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "Vec"
            ],
            "type": 11
          },
          "selector": "0xe5bb7d65"
        },
        {
          "args": [],
          "docs": [],
          "label": "get_all_users",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "Vec"
            ],
            "type": 18
          },
          "selector": "0x72ee46c2"
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
            "name": "proposal"
          },
          {
            "layout": {
              "cell": {
                "key": "0x0200000000000000000000000000000000000000000000000000000000000000",
                "ty": 9
              }
            },
            "name": "user"
          },
          {
            "layout": {
              "cell": {
                "key": "0x0300000000000000000000000000000000000000000000000000000000000000",
                "ty": 4
              }
            },
            "name": "proposal_id"
          },
          {
            "layout": {
              "cell": {
                "key": "0x0400000000000000000000000000000000000000000000000000000000000000",
                "ty": 4
              }
            },
            "name": "user_id"
          },
          {
            "layout": {
              "cell": {
                "key": "0x0500000000000000000000000000000000000000000000000000000000000000",
                "ty": 12
              }
            },
            "name": "voted"
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
                  "type": 8,
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
                  "name": "proposal_name",
                  "type": 6,
                  "typeName": "String"
                },
                {
                  "name": "vote_aye",
                  "type": 4,
                  "typeName": "i32"
                },
                {
                  "name": "vote_nye",
                  "type": 4,
                  "typeName": "i32"
                },
                {
                  "name": "total_vote",
                  "type": 4,
                  "typeName": "i32"
                },
                {
                  "name": "proposal_status",
                  "type": 7,
                  "typeName": "bool"
                }
              ]
            }
          },
          "path": [
            "voting_contract",
            "voting_contract",
            "Proposal"
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
        "id": 9,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "name": "offset_key",
                  "type": 8,
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
              "type": 10
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
        "id": 10,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "name": "user_name",
                  "type": 6,
                  "typeName": "String"
                },
                {
                  "name": "user_account",
                  "type": 0,
                  "typeName": "AccountId"
                },
                {
                  "name": "voted_proposal",
                  "type": 11,
                  "typeName": "Vec<Proposal>"
                }
              ]
            }
          },
          "path": [
            "voting_contract",
            "voting_contract",
            "User"
          ]
        }
      },
      {
        "id": 11,
        "type": {
          "def": {
            "sequence": {
              "type": 5
            }
          }
        }
      },
      {
        "id": 12,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "name": "offset_key",
                  "type": 8,
                  "typeName": "Key"
                }
              ]
            }
          },
          "params": [
            {
              "name": "K",
              "type": 13
            },
            {
              "name": "V",
              "type": 7
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
        "id": 13,
        "type": {
          "def": {
            "tuple": [
              0,
              4
            ]
          }
        }
      },
      {
        "id": 14,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 15
                    }
                  ],
                  "index": 0,
                  "name": "Ok"
                },
                {
                  "fields": [
                    {
                      "type": 16
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
              "type": 15
            },
            {
              "name": "E",
              "type": 16
            }
          ],
          "path": [
            "Result"
          ]
        }
      },
      {
        "id": 15,
        "type": {
          "def": {
            "tuple": []
          }
        }
      },
      {
        "id": 16,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "index": 0,
                  "name": "NotOwner"
                },
                {
                  "index": 1,
                  "name": "ProposalNotFound"
                },
                {
                  "index": 2,
                  "name": "AccountNotRegistered"
                },
                {
                  "index": 3,
                  "name": "ProposalStatusError"
                },
                {
                  "index": 4,
                  "name": "AlreadyVoted"
                }
              ]
            }
          },
          "path": [
            "voting_contract",
            "voting_contract",
            "VotingProposalError"
          ]
        }
      },
      {
        "id": 17,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "index": 0,
                  "name": "Aye"
                },
                {
                  "index": 1,
                  "name": "Nye"
                }
              ]
            }
          },
          "path": [
            "voting_contract",
            "voting_contract",
            "Vote"
          ]
        }
      },
      {
        "id": 18,
        "type": {
          "def": {
            "sequence": {
              "type": 10
            }
          }
        }
      }
    ]
  }
};

export default abi;