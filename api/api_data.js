define({ "api": [
  {
    "type": "post",
    "url": "/provider/accept_org_invite/",
    "title": "Accept a family invite",
    "name": "AcceptOrgInvites",
    "group": "Administrator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "invite",
            "description": "<p>An object with the user and organization id.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"userId\": 1,\n  \"organizationId\": 3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object with success as true.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/administrator.js",
    "groupTitle": "Administrator"
  },
  {
    "type": "post",
    "url": "/admin/create/",
    "title": "Create New Administrator",
    "name": "CreateAdmin",
    "group": "Administrator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>The user object that you want to create.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"firstName\": 'Pranav',\n  \"lastName\": 'Sathy',\n  \"email\": 'sathyp@rpi.edu',\n  \"password\": 'test'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"1\",\n  \"firstName\": \"Pranav\",\n  \"lastName\": \"Sathy\",\n  \"email\": \"sathyp@rpi.edu\",\n  \"password\": \"test\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object representing the admin object in the database.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/administrator.js",
    "groupTitle": "Administrator"
  },
  {
    "type": "get",
    "url": "/admin/get/:email",
    "title": "Request Administrator information",
    "name": "GetAdmin",
    "group": "Administrator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Admins unique email.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"1\",\n  \"ssn\": \"123456789\",\n  \"familyId\": \"1\",\n  \"firstName\": \"Pranav\",\n  \"lastName\": \"Sathy\",\n  \"email\": \"sathyp@rpi.edu\",\n  \"password\": \"test\",\n  \"organization\": {\n    \"id\": \"1\",\n    \"name\": \"Primary Practice\"\n     ...\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object representing the admin object in the database.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>A statement that the requested email was invalid.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/administrator.js",
    "groupTitle": "Administrator"
  },
  {
    "type": "post",
    "url": "/client/reject_org_invite/",
    "title": "Reject an organization invite",
    "name": "RejectOrgInvites",
    "group": "Administrator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "invite",
            "description": "<p>An object with the user and organization id.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"userId\": 1,\n  \"organizationId\": 3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object with success as true.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/administrator.js",
    "groupTitle": "Administrator"
  },
  {
    "type": "post",
    "url": "/appt/create/",
    "title": "Create New Appointment",
    "name": "CreateAppointment",
    "group": "Appointments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>number</p> ",
            "optional": false,
            "field": "clientId",
            "description": "<p>The ID of the client</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>number</p> ",
            "optional": false,
            "field": "providerId",
            "description": "<p>The ID of the provider</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>number</p> ",
            "optional": false,
            "field": "state",
            "description": "<p>[1: Requested, 2: Modified, 3: Approved]</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "info",
            "description": "<p>Miscellaenous pre-appt information</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "comments",
            "description": "<p>Doctor comments for the appointments.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON object of the appointment.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/appointments.js",
    "groupTitle": "Appointments"
  },
  {
    "type": "get",
    "url": "/appt/client/:id",
    "title": "Get appointments for a client",
    "name": "GetClientAppts",
    "group": "Appointments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the client we want appointments for</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON object with all appointments.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/appointments.js",
    "groupTitle": "Appointments"
  },
  {
    "type": "get",
    "url": "/appt/provider/:id",
    "title": "Get appointments for a provider",
    "name": "GetProviderAppts",
    "group": "Appointments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the provider we want appointments for</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON object with all appointments.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/appointments.js",
    "groupTitle": "Appointments"
  },
  {
    "type": "post",
    "url": "/appt/update/",
    "title": "Update An Appointment",
    "name": "UpdateAppointment",
    "group": "Appointments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>object</p> ",
            "optional": false,
            "field": "query",
            "description": "<p>An object with clientId, providerId and dateRequested</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>object</p> ",
            "optional": false,
            "field": "update",
            "description": "<p>An object with [optional], info, comments, dateRequested, state</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON object of the updated appointment.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/appointments.js",
    "groupTitle": "Appointments"
  },
  {
    "type": "post",
    "url": "/client/accept_fam_invite/",
    "title": "Accept a family invite",
    "name": "AcceptFamInvites",
    "group": "Client",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "invite",
            "description": "<p>An object with the client and family id.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"clientId\": 1,\n  \"familyId\": 3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object with success as true.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/client.js",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/client/accept_org_invite/",
    "title": "Accept an organization invite",
    "name": "AcceptOrgInvites",
    "group": "Client",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "invite",
            "description": "<p>An object with the user and organization id.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"userId\": 1,\n  \"organizationId\": 3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object with success as true.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/client.js",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/client/create/",
    "title": "Create New Client",
    "name": "CreateUser",
    "group": "Client",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>The user object that you want to create.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"ssn\": 123456789,\n  \"firstName\": 'Pranav',\n  \"lastName\": 'Sathy',\n  \"email\": 'sathyp@rpi.edu',\n  \"password\": 'test'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"1\",\n  \"ssn\": \"123456789\",\n  \"firstName\": \"Pranav\",\n  \"lastName\": \"Sathy\",\n  \"email\": \"sathyp@rpi.edu\",\n  \"password\": \"test\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object representing the client object in the database.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/client.js",
    "groupTitle": "Client"
  },
  {
    "type": "get",
    "url": "/client/get/:email",
    "title": "Request Client information",
    "name": "GetClient",
    "group": "Client",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Clients unique email.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"1\",\n  \"ssn\": \"123456789\",\n  \"familyId\": \"1\",\n  \"firstName\": \"Pranav\",\n  \"lastName\": \"Sathy\",\n  \"email\": \"sathyp@rpi.edu\",\n  \"password\": \"test\",\n  \"family\": {\n    \"id\": \"1\",\n    \"name\": \"Test Family\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object representing the client object in the database.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>A statement that the requested email was invalid.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/client.js",
    "groupTitle": "Client"
  },
  {
    "type": "get",
    "url": "/client/get_family_invtes/:client_id",
    "title": "Get Family Invites",
    "name": "GetFamilyInvites",
    "group": "Client",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "client_id",
            "description": "<p>The client ID we want invites for.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"1\",\n  \"name\": \"Test Family\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object representing the invite object in the database.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/client.js",
    "groupTitle": "Client"
  },
  {
    "type": "get",
    "url": "/client/get_org_invtes/:client_id",
    "title": "Get Organization Invites",
    "name": "GetOrgInvites",
    "group": "Client",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "client_id",
            "description": "<p>The client ID we want invites for.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"1\",\n  \"name\": \"Test Family\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object representing the invite object in the database.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/client.js",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/client/reject_fam_invite/",
    "title": "Reject a family invite",
    "name": "RejectFamInvites",
    "group": "Client",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "invite",
            "description": "<p>An object with the client and family id.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"clientId\": 1,\n  \"familyId\": 3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object with success as true.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/client.js",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/client/reject_org_invite/",
    "title": "Reject an organization invite",
    "name": "RejectOrgInvites",
    "group": "Client",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "invite",
            "description": "<p>An object with the user and organization id.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"userId\": 1,\n  \"organizationId\": 3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object with success as true.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/client.js",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/family/create/",
    "title": "Create New Family",
    "name": "CreateFamily",
    "group": "Family",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "family",
            "description": "<p>The family object that you want to create.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Test Family\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"name\": \"Test Family\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object representing the family object in the database.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/family.js",
    "groupTitle": "Family"
  },
  {
    "type": "get",
    "url": "/family/getMembers/:id",
    "title": "Get Family",
    "name": "GetMembers",
    "group": "Family",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The family ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object representing the clients.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/family.js",
    "groupTitle": "Family"
  },
  {
    "type": "post",
    "url": "/family/invite/",
    "title": "Invite a user to a family",
    "name": "InviteFamily",
    "group": "Family",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "invite",
            "description": "<p>The client id and family id to send invites for.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"clientId\": 1,\n  \"familyId\": 3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"clientId\": 1,\n  \"familyId\": 3\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object representing the invite object in the database.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/family.js",
    "groupTitle": "Family"
  },
  {
    "type": "post",
    "url": "/file/upload/",
    "title": "Upload a file to the server",
    "name": "UploadFile",
    "group": "File",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>Success object</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/file.js",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/organization/create/",
    "title": "Create New Organization",
    "name": "CreateOrganization",
    "group": "Organization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "org",
            "description": "<p>The org object that you want to create.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": 'Primary Health Care',\n  \"state\": 'NY',\n  \"address\": '123 Test Lane',\n  \"zip\": '12345',\n  \"phone\": \"1234567890\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"name\": 'Primary Health Care',\n  \"state\": 'NY',\n  \"address\": '123 Test Lane',\n  \"zip\": '12345',\n  \"phone\": \"1234567890\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object representing the organization object in the database.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/organization.js",
    "groupTitle": "Organization"
  },
  {
    "type": "get",
    "url": "/organization/providers/:org_id",
    "title": "Get all doctors in an organization",
    "name": "GetDoctors",
    "group": "Organization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>number</p> ",
            "optional": false,
            "field": "org_id",
            "description": "<p>The organization ID to get doctors for</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object with array of doctors.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/organization.js",
    "groupTitle": "Organization"
  },
  {
    "type": "get",
    "url": "/organization/get/:org_id",
    "title": "Get all people in an organization",
    "name": "GetPeople",
    "group": "Organization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>number</p> ",
            "optional": false,
            "field": "org_id",
            "description": "<p>The organization ID to get people for</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object with the whole.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/organization.js",
    "groupTitle": "Organization"
  },
  {
    "type": "post",
    "url": "/organization/invite/",
    "title": "Invite a user to an organization",
    "name": "InviteOrganization",
    "group": "Organization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "invite",
            "description": "<p>The user id and organization id to send invites for.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"userId\": 1,\n  \"organizationId\": 3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"userId\": 1,\n  \"organizationId\": 3\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object representing the invite object in the database.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/organization.js",
    "groupTitle": "Organization"
  },
  {
    "type": "post",
    "url": "/provider/accept_org_invite/",
    "title": "Accept a family invite",
    "name": "AcceptOrgInvites",
    "group": "Provider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "invite",
            "description": "<p>An object with the user and organization id.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"userId\": 1,\n  \"organizationId\": 3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object with success as true.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/provider.js",
    "groupTitle": "Provider"
  },
  {
    "type": "post",
    "url": "/provider/create/",
    "title": "Create New Provider",
    "name": "CreateProvider",
    "group": "Provider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>The user object that you want to create.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"ssn\": 123456789,\n  \"npi\": 123456789,\n  \"firstName\": \"Pranav\",\n  \"lastName\": \"Sathy\",\n  \"email\": \"sathyp@rpi.edu\",\n  \"password\": \"test\",\n  \"prefix\": \"Dr.\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"1\",\n  \"ssn\": 123456789,\n  \"npi\": 123456789,\n  \"firstName\": \"Pranav\",\n  \"lastName\": \"Sathy\",\n  \"email\": \"sathyp@rpi.edu\",\n  \"password\": \"test\",\n  \"prefix\": \"Dr.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object representing the provider object in the database.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/provider.js",
    "groupTitle": "Provider"
  },
  {
    "type": "post",
    "url": "/provider/assignSpecialization/",
    "title": "Assign a Specializatoin to Doctors",
    "name": "CreateProvider",
    "group": "Provider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "assignment",
            "description": "<p>The object with provider email and their code.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"test@provider.com\",\n  \"code\": \"101YA0400X\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  success: true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object with success variable set to true.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/provider.js",
    "groupTitle": "Provider"
  },
  {
    "type": "get",
    "url": "/client/get_org_invtes/:admin_id",
    "title": "Get a clients invites",
    "name": "GetOrgInvites",
    "group": "Provider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "admin_id",
            "description": "<p>The admin ID we want invites for.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"1\",\n  \"name\": \"Test Family\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object representing the invite object in the database.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/administrator.js",
    "groupTitle": "Provider"
  },
  {
    "type": "get",
    "url": "/provider/get_org_invtes/:provider_id",
    "title": "Get a providers invites",
    "name": "GetOrgInvites",
    "group": "Provider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "provider_id",
            "description": "<p>The provider ID we want invites for.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"1\",\n  \"name\": \"Test Family\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object representing the invite object in the database.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/provider.js",
    "groupTitle": "Provider"
  },
  {
    "type": "get",
    "url": "/provider/get/:email",
    "title": "Request Provider information",
    "name": "GetProvider",
    "group": "Provider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Provider unique email.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"1\",\n  \"ssn\": \"123456789\",\n  \"familyId\": \"1\",\n  \"firstName\": \"Pranav\",\n  \"lastName\": \"Sathy\",\n  \"email\": \"sathyp@rpi.edu\",\n  \"password\": \"test\",\n  \"organization\": {\n    \"id\": \"1\",\n    \"name\": \"Primary Provider\",\n    \"state\": \"NY\",\n    \"address\": \"123 Test Lane\",\n    \"zip\": \"12345\",\n    \"phone\": \"123456790\"\n  },\n  \"specializations\": [\n    {\n      \"code\": \"Some long code\",\n             \"specialization\": \"Surgeon\"\n    }\n  ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object representing the admin object in the database.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>A statement that the requested email was invalid.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/provider.js",
    "groupTitle": "Provider"
  },
  {
    "type": "post",
    "url": "/provider/reject_org_invite/",
    "title": "Reject an organization invite",
    "name": "RejectOrgInvites",
    "group": "Provider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "invite",
            "description": "<p>An object with the user and organization id.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"userId\": 1,\n  \"organizationId\": 3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object with success as true.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err",
            "description": "<p>An error statement regarding what went wrong.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/provider.js",
    "groupTitle": "Provider"
  }
] });