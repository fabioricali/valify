# Valify

Validates data to easy and clean way.

<a href="https://travis-ci.org/fabioricali/valify" target="_blank"><img src="https://travis-ci.org/fabioricali/valify.svg?branch=master" title="Build Status"/></a>
<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>

**Documentation**
- [Installation](#installation)
- [Basic usage](#basic-usage)
- [Field configuration](#field-configuration)
- [Validators](#validators)
- [Nested models](#nested-models)
- [Promises](#using-promise)
- [Manipulate data](#manipulate-data)
- [Define custom types](#define-custom-type)
- [Multi-type function](#multi-type-function)
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
    createdAt: {
        type: 'date',
        default: new Date()
    }
});

// A data object
const data = {
    firstName: 'Mike'
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
|`locale`|`object`|`object`|An object that contains locale strings|
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

### Nested models
```javascript

const userModel = new Valify({
    lastName: 'string',
    firstName: 'string',
    record: new Valify({
        id: 'int',
        lastAccess: 'date'
    })
});
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

Valify.addType('mycustom', value => {
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

### Multi-type function
You can also define multi type in this ways:
```javascript

const userModel = new Valify({
    firstName: [
        {
            fn: value => false,
            message: 'failed! wrong type for firstName'
        }
    ],
    // or
    lastName: {
        type:[
            {
                fn: value => false,
                message: 'failed! wrong type for lastName'
            },
            {
                fn: value => true,
                message: 'failed! wrong type for lastName'
            }
        ]
    },
    // or
    role: {
        type: [
            value => typeof value === 'string', 'value must be a string',
            value => value.length === 3, 'value must be length 3 chars'
        ]
    }
});

```

- Inside all custom type function is passed a second argument that is <a href="https://be.js.org/docs.html"><strong>beJS</strong></a>, a library used for several validations. Example:
```javascript
new Valify({
    role: {
        type: [
            (value, validation) => validation.stringLength(value, 3), 'value must be a string long 3 chars',
        ]
    }
})
```

***Remember:*** 
- your type function must be always return a boolean
- use anyway the [validators](#validators) for your multi checks because it's the right way

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