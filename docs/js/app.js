
    const schema = {
  "asyncapi": "3.0.0",
  "id": "urn:iqb-specifications:acp-scale-base",
  "defaultContentType": "application/json",
  "info": {
    "title": "acp-scale-base",
    "description": "Specification for assessment content package: Base Scale.",
    "license": {
      "name": "CC0 1.0",
      "url": "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    "version": " - click on schema id to expand",
    "contact": {
      "name": "Home of iqb-specifications (German only)",
      "url": "https://iqb-specifications.github.io/"
    }
  },
  "channels": {
    "iqb_data_structures": {
      "address": "iqb_data_structures",
      "messages": {
        "select_schema": {
          "payload": {
            "$id": "acp-scale-base@0.4",
            "$schema": "http://json-schema.org/draft-07/schema#",
            "title": "Assessment Content Package: Base Scale",
            "description": "Specification for assessment content package scale of type 'base'.",
            "type": "object",
            "properties": {
              "id": {
                "description": "Identifier referred by other scales and assessment output.",
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "name": {
                "description": "Language tagged text",
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "lang": {
                      "description": "ISO-language code",
                      "type": "string",
                      "minLength": 1,
                      "pattern": "^[a-z]{2}$",
                      "x-parser-schema-id": "<anonymous-schema-4>"
                    },
                    "value": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-5>"
                    }
                  },
                  "required": [
                    "lang",
                    "value"
                  ],
                  "additionalProperties": false,
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "minItems": 1,
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "description": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.name",
              "method": {
                "description": "Way how to process the item values.",
                "type": "string",
                "enum": [
                  "SCORE_SUM",
                  "SCORE_RATIO",
                  "SCORE_MEAN",
                  "SCORE_MEDIAN",
                  "WLE",
                  "CODE_COUNT"
                ],
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "methodParameters": {
                "description": "Depending on the method, different parameters may specify the processing.",
                "oneOf": [
                  {
                    "description": "Parameters for the processing method SCORE_RATIO.",
                    "type": "object",
                    "properties": {
                      "maxValue": {
                        "description": "If methodParameters is not given, the number of items will be taken as maxValue",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-9>"
                      }
                    },
                    "required": [
                      "maxValue"
                    ],
                    "additionalProperties": false,
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  },
                  {
                    "description": "Parameters for the processing method CODE_COUNT.",
                    "type": "object",
                    "properties": {
                      "codeValue": {
                        "description": "Value of code to be counted",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-11>"
                      }
                    },
                    "required": [
                      "codeValue"
                    ],
                    "additionalProperties": false,
                    "x-parser-schema-id": "<anonymous-schema-10>"
                  }
                ],
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "items": {
                "description": "List of all items providing it's value to this scale",
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "description": "Identifier referring to unique identifier of item in unit list.",
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-14>"
                    },
                    "parameters": {
                      "type": "array",
                      "description": "List of item values relevant for processing",
                      "items": {
                        "type": "object",
                        "properties": {
                          "key": {
                            "type": "string",
                            "enum": [
                              "LOGIT_FULL_CREDIT",
                              "LOGIT_PARTIAL_CREDIT_1",
                              "LOGIT_PARTIAL_CREDIT_2",
                              "LOGIT_PARTIAL_CREDIT_3"
                            ],
                            "x-parser-schema-id": "<anonymous-schema-17>"
                          },
                          "value": {
                            "type": "string",
                            "x-parser-schema-id": "<anonymous-schema-18>"
                          }
                        },
                        "required": [
                          "key"
                        ],
                        "additionalProperties": false,
                        "x-parser-schema-id": "<anonymous-schema-16>"
                      },
                      "x-parser-schema-id": "<anonymous-schema-15>"
                    },
                    "weight": {
                      "type": "number",
                      "default": 1,
                      "x-parser-schema-id": "<anonymous-schema-19>"
                    }
                  },
                  "required": [
                    "id"
                  ],
                  "additionalProperties": false,
                  "x-parser-schema-id": "<anonymous-schema-13>"
                },
                "minItems": 1,
                "x-parser-schema-id": "<anonymous-schema-12>"
              },
              "minItemNumber": {
                "description": "Minimum number of items in responses for this scale to be reported; set '0' for unlimited",
                "type": "number",
                "default": 0,
                "x-parser-schema-id": "<anonymous-schema-20>"
              }
            },
            "required": [
              "id",
              "method",
              "items"
            ],
            "additionalProperties": false,
            "$defs": {
              "languageTaggedText": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.name",
              "itemValueType": {
                "type": "string",
                "enum": [
                  "FULL_CREDIT",
                  "NO_CREDIT",
                  "MISSING"
                ]
              },
              "methodParametersScoreRatio": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.methodParameters.oneOf[0]",
              "methodParametersCodeCount": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.methodParameters.oneOf[1]",
              "itemInScale": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.items.items"
            },
            "x-parser-schema-id": "acp-scale-base@0.4"
          },
          "x-parser-unique-object-id": "select_schema",
          "x-parser-message-name": "select_schema"
        }
      },
      "x-parser-unique-object-id": "iqb_data_structures"
    }
  },
  "components": {
    "schemas": {
      "acp-scale-base": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload"
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":false},"sidebar":{"showOperations":"byDefault"},"showOperations":false};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  