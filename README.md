# Valify

Validates data to easy and clean way.

<a href="https://travis-ci.org/fabioricali/valify" target="_blank"><img src="https://travis-ci.org/fabioricali/valify.svg?branch=master" title="Build Status"/></a>
<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>

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
    console.log(e.message);
}
```

#### Using promise
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
            last: 'lastName is required',
            fields: [{field: 'lastName', message: 'lastName is required'}]
        }
     */
});

```

#### Manipulate data
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

#### Define custom type
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
    console.log(e.message);
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
    console.log(e.message);
} 
```

##### Multi-type function
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

***Remember:*** your type function must be always return a boolean

#### Locale
You can set locale string in tow ways:

##### 1) Globally, using static method `setLocale`
```javascript

Valify.setLocale({
    TYPE_FAIL: 'this type has failed'
});

```

- Available strings
    - **`UNKNOWN_TYPE`**, default: ***`Unknown type: "{type}"`***
    - **`TYPE_FAIL`**, default: ***`{field} expects {type} but receives: {dataField}`***
    - **`TYPE_FUNCTION_FAIL`**, default: ***`{field} receives: {dataField}`***
    - **`FIELD_REQUIRED`**, default: ***`{field} is required`***
    - **`DATA_REQUIRED`**, default: ***`Data is required and must be an object`***

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

#### Available types
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