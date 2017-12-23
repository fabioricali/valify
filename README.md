# Valify

Validates data to easy and clean way.

<a href="https://travis-ci.org/fabioricali/valify" target="_blank"><img src="https://travis-ci.org/fabioricali/valify.svg?branch=master" title="Build Status"/></a>
<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>

**Documentation**
- [Installation](#installation)
- [Basic usage](#basic-usage)
- [Field configuration](#field-configuration)
- [Validators](#validators)
    - [Available validators](#available-validators)
- [Nested models](#nested-models)
- [Promises](#using-promise)
- [Manipulate data](#manipulate-data)
- [Define custom types](#define-custom-type)
- [Locale](#locale)
- [Types](#available-types)

### Installation
```
npm install --save valify
```

### Basic usage
```javascript
const Valify = require('valify');

// Define a model
const userModel = new Valify({
    firstName: {
        type: 'string',
        required: true
    },
    lastName: {
        type: 'string',
        required: true
    },
    role: {
        type: 'string',
        default: 'editor'
    },
    colors: {
        type: ['string']
    },
    createdAt: {
        type: 'date',
        default: new Date()
    }
});

// A data object
const data = {
    firstName: 'Mike',
    lastName: 'Ricali',
    role: 'owner',
    colors: ['red', 'yellow', 'orange']
};

// Validate userModel
try {
    userModel(data);
} catch(e) {
    console.log(e.message, e.fields);
}
```

### Field configuration

|Property|Type|Default|Description|
|-|-|-|-|
|`type`|`object`,`array`,`string`,`function`|`null`|Type of control|
|`required`|`boolean`|`false`|Indicates if the field is required|
|`default`|`any`|`null`|Default value|
|`allowNull`|`boolean`|`false`|Allow null value, overwrites all checks|
|`locale`|`object`|`object`|An object that contains locale strings that overwrites those globals|
|`validate`|`object`|`null`|An object that contains the validators|
|`convert`|`function`|`null`|A function to manipulate data|
|`onError`|`function`|`null`|A function triggered when an check fails|

### Validators
You can validate your model with the validators
```javascript
const userModel = new Valify({
    firstName: {
        type: 'string',
        validate: {
            upperCase: true
        }
    },
    eta: {
        type: 'int',
        validate: {
            min: 18
        }
    },
    otherNumber: {
        type: 'int',
        validate: {
            max: {
                args: 56,
                msg: 'this is a custom error message, the number must be 56'
            }
        }
    },
    // custom validator
    color: {
        type: 'string',
        validate: {
            checkColor(value) {
                if (value !== 'red')
                    throw new Error('the color must be red!');
            }
        }
    }
});
```

#### Available validators

Below there are some default validators

|Name|Description|Default message|
|-|-|-|
|`email`|Check if string is a valid email|{0} is a not valid email|
|`url`|Check if is a valid url|{0} is a not valid url|
|`ip`|Check if is a valid IP format|{0} is a not valid IP|
|`uuid`|Check if is a valid UUID format|{0} is a not valid UUID|
|`creditCard`|Check if is a valid credit card format|{0} is a not valid credit card|
|`camelCase`|Check if is a valid camelCase format|the string must be in the camelCase format|
|`kebabCase`|Check if is a valid kebabCase format|the string must be in the kebabCase format|
|`snakeCase`|Check if is a valid snakeCase format|the string must be in the snakeCase format|
|`capitalized`|Check if value is capitalized|the string must be capitalized instead it is {0}|
|`lowerCase`|Check if value is lowercase|the string must be lowerCase instead it is {0}|
|`upperCase`|Check if value is uppercase|the string must be upperCase instead it is {0}|
|`min`|Check if value number or string length is greater than or equal to a number|the number must be greater than or equal to {1} instead it is {0}|
|`max`|Check if value number or string length is lesser than or equal to a number|the number must be lesser than or equal to {1} instead it is {0}|
|`dateBetween`|Check if a date is between two dates|the date must be between {1} and {2} instead it is {0}|

```javascript
new Valify({
    myField: {
        type: '...',
        validate: {
            email: true,
            url: true,
            ip: true,
            uuid: true,
            creditCard: true,
            camelCase: true,
            kebabCase: true,
            snakeCase: true,
            capitalized: true,
            lowerCase: true,
            upperCase: true,
            min: 5,
            max: 10,
            dateBetween: [
                new Date('2017-12-01'), // start date
                new Date('2017-12-23')  // end date
            ]
        }
    }
})
```

**Customize error message**

```javascript
{
    validate: {
        email: {
            msg: 'your custom error message'
        },
        min: {
            args: 5,
            msg: 'an error'
        },
        dateBetween: {
            args: [
                new Date('2017-12-01'), // start date
                new Date('2017-12-23')  // end date
            ],
            msg: 'an other error'
        }
    }
}
```

- Inside all custom validator function and custom type function are passed others 2 arguments: 
    - `data`, a copy of origin data object
    - `be`, a library used for several validations. More info on <a href="https://be.js.org/docs.html"><strong>beJS</strong></a>
    
Example

```javascript
new Valify({
    color0: 'string',
    color1: {
        type: (value, data, be) => {
            return be.string(value)
        },
        validate: {
            checkColor(value, data, be) {
                if (value !== 'red')
                    throw new Error('the color must be red!');
                
                if (value === data.color0)
                    throw new Error('the color must be different of color0!');
            }
        }
    }
})
```    

### Nested models
It's possible also add nested model, for example you could have an array field like below:
```javascript

const userModel = new Valify({
    firstName: 'string',
    lastName: 'string',
    records: [new Valify({
        id: 'int',
        accessOn: 'date',
        otherNested: new Valify({
            color: 'string'
        })
    })]
});

// A data object
const data = {
    firstName: 'Mike',
    lastName: 'Ricali',
    records: [
        {
            id: 1,
            accessOn: '2017-12-23T00:01:00',
            otherNested: {
                color: 'red'
            }
        },
        {
            id: 2,
            accessOn: '2017-12-23T00:02:00',
            otherNested: {
                color: 'yellow'
            }
        },
        {
            id: 3,
            accessOn: '2017-12-23T00:03:00',
            otherNested: {
                color: 'green'
            }
        }
    ]
};

// Validate userModel
try {
    userModel(data);
} catch(e) {
    console.log(e.message, e.fields);
}
```

### Using promise
If you need to use with Promise must just add `usePromise` to model settings.

```javascript

// Define a model
const userModel = new Valify({
    firstName: {
        type: 'string',
        required: true
    },
    lastName: {
        type: 'string',
        required: true
    }
}, {
    usePromise: true
});

// A data object
const data = {
    firstName: 'Mike'
};

// Validate userModel
userModel(data).then(()=>{
    console.log('ok');
}).catch(e => {
    console.log(e);
    // An object like below
    /*
        {
            message: 'lastName is required',
            fields: [{field: 'lastName', message: 'lastName is required'}]
        }
     */
});

```

### Manipulate data
```javascript

// Define a model
const userModel = new Valify({
    firstName: {
        type: 'string',
        convert: (value) => {
            return value.toUpperCase();
        }
    },
    lastName: {
        type: 'string',
        convert: (value) => {
            return value.toUpperCase();
        }
    }
});

// A data object
const data = {
    firstName: 'Mike',
    lastName: 'Ricali'
};

userModel(data);

console.log(data.firstName, data.lastName); //=> MIKE RICALI
```

### Define custom type
There are different ways to define custom types:

##### 1) Globally, using static method `addType`
```javascript

Valify.addType('mycustom', (value, data) => {
    console.log(data);
    return value === 10;
});

// Define a model
const userModel = new Valify({
    aNumber: 'mycustom'
});

// A data object
const data = {
    aNumber: 9
};

try {
    userModel(data);
} catch(e) {
    console.log(e.message, e.fields);
} 
```

##### 2) Local, passing a function to `type` param
```javascript

// Define a model
const userModel = new Valify({
    aString: {
        type: value => {
            return typeof value === 'string'
        }
    },
    // or 
    aBoolean: value => {
        return typeof value === 'boolean'
    }
});

// A data object
const data = {
    aString: 'hello',
    aBoolean: 5
};

try {
    userModel(data);
} catch(e) {
    console.log(e.message, e.fields);
} 
```

### Locale
You can set locale string in tow ways:

##### 1) Globally, using static method `setLocale`
```javascript

Valify.setLocale({
    TYPE_FAIL: 'this type has failed'
});

```

**Available strings**

|Name|Default|
|-|-|
|`UNKNOWN_TYPE`|`Unknown type: "{type}"`|
|`TYPE_FAIL`|`{field} expects {type} but receives: {dataField}`|
|`TYPE_ARRAY_FAIL`|`{field} expects array of {type} but receives: {dataField}`|
|`TYPE_FUNCTION_FAIL`|`{field} receives: {dataField}`|
|`FIELD_REQUIRED`|`{field} is required`|
|`DATA_REQUIRED`|`Data is required and must be an object`|

##### 2) Local, into field settings
```javascript

// Define a model
const userModel = new Valify({
    aString: {
        type: 'string',
        locale: {
            TYPE_FAIL: 'this type has failed'
        }
    }
});

```

- There are only two available properties:
    - **`TYPE_FAIL`**
    - **`TYPE_ARRAY_FAIL`**
    - **`FIELD_REQUIRED`**

### Available types
- `alphanumeric`
- `argument`
- `array`
- `boolean`
- `buffer`
- `date`
- `error`
- `float`
- `float32array`
- `float64array`
- `function`
- `generatorfunction`
- `int`
- `int16array`
- `int32array`
- `int8array`
- `map`
- `null`
- `number`
- `object`
- `promise`
- `regexp`
- `set`
- `string`
- `symbol`
- `uint16array`
- `uint32array`
- `uint8array`
- `uint8clampedarray`
- `undefined`
- `weakmap`
- `weakset`

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/fabioricali/Valify/blob/master/CHANGELOG.md">here</a>

## License
Valify is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>