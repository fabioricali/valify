<div align="center">
<br/><br/>
<img width="220" src="https://raw.githubusercontent.com/fabioricali/valify/master/extra/logo-valify.png" title="Valify"/>
<br/>
Validates data to easy way in JavaScript.
<br/><br/><br/>
<a href="https://travis-ci.org/fabioricali/valify" target="_blank"><img src="https://travis-ci.org/fabioricali/valify.svg?branch=master" title="Build Status"/></a>
<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>
<br/><br/><br/>
</div>

Valify was created to easily validate data structures. With a simple syntax it is ideal in many contexts for example in REST API

**Documentation**
- [Installation](#installation)
    - [Browser](#browser)
- [Basic usage](#basic-usage)
- [Model options](#model-options)
- [Field options](#field-options)
- [Error object](#error-object)
- [Default values](#default-values)
- [Nested models](#nested-models)
- [Promises](#using-promise)
- [Detect unknown fields](#detect-unknown-fields)
- [Auto cast](#auto-cast)
- [Manipulate data](#manipulate-data)
- [Immutability](#immutability)
- [Undefined values](#undefined-values)
- [Define custom types](#define-custom-type)
    - [Use multiple rules together](#use-multiple-rules-together)
    - [Arguments](#arguments-in-custom-type)
- [Locale](#locale)
- [Types](#available-types)
- [Upgrade to V4](#upgrade-to-v4)

### Installation
```
npm install --save valify
```

#### Browser
```html
<script src="https://unpkg.com/valify/dist/valify.min.js"></script>
```

### Basic usage
```javascript
const Valify = require('valify');

// Define a model
const userModel = new Valify({
    firstName: 'string',
    lastName: 'string',
    age: 'int?', // this is not required
    role: {
        type: 'string',
        default: 'editor'
    },
    colors: ['string'],
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

### Model options
|Property|Type|Default|Description|
|-|-|-|-|
|`usePromise`|`boolean`|`false`|If you need to use with Promise must just add usePromise to model settings. [Details](#using-promise)|
|`detectUnknown`|`boolean`|`false`|If you need to define a strict model where all the fields correspond to those defined, you can set detectUnknown to true. [Details](#detect-unknown-fields)|
|`autoCast`|`boolean`|`false`|Sometimes you may need to cast a string (where possible) to a primitive type. You can set autoCast to true. [Details](#auto-cast)|
|`returnImmutable`|`boolean`|`false`|Valify model returns also the data that you have passed for the validation, if you want an immutable data, set returnImmutable to true. [Details](#immutability)|
|`overwriteUndefined`|`boolean`|`false`|If you need manage undefined value with a default value, set overwriteUndefined to true, obviously works only if default is set. [Details](#undefined-values)|

### Field options
|Property|Type|Default|Description|
|-|-|-|-|
|`type`|`object`,`array`,`string`,`function`|`null`|Type of control|
|`required`|`boolean`|`true`|Indicates if the field is required|
|`default`|`any`|`null`|Default value|
|`allowNull`|`boolean`|`false`|Allow null value, overwrites all checks|
|`allowEmpty`|`boolean`|`true`|Allow empty value, works for `string`, `array` and `object`|
|`locale`|`object`|`object`|An object that contains locale strings that overwrites those globals|
|`convert`|`function`|`null`|A function to manipulate/conversion data|
|`onError`|`function`|`null`|A function triggered when an check fails|

### Error object
Valify in case of errors returns an object with 2 properties:
- `message` is the first error occurred
- `fields` is an array of all errors occurred

```
{
    message: '"aParam.other.lastName" is required',
    fields: [
        {
            path: 'aParam.other.lastName', 
            message: '"aParam.other.lastName" is required', 
            field: 'lastName',
            type: 'string'
        }
    ]
}
```

### Default values
You can set a default value for each field, this setting overwrites `required` property to `false`.

```javascript
const Valify = require('valify');

// Define a model
const userModel = new Valify({
    name: 'string',
    role: {
        type: 'string',
        default: 'editor'
    }
});

// A data object
const data = {
    name: 'Mike Ricali'
};

try {
    userModel(data); //=> {name: 'Mike Ricali'}
} catch(e) {
    console.log(e.message, e.fields);
}
```

### Nested models
It's possible also add nested model, for example you could have an array field like below:

```javascript

const userModel = new Valify({
    firstName: 'string',
    lastName: 'string',
    records: [
        new Valify({
            id: 'int',
            accessOn: 'date',
            otherNested: new Valify({
                color: 'string'
            })
        })
    ]
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
            fields: [{field: 'lastName', message: 'lastName is required', path: 'lastName'}]
        }
     */
});

```

### Detect unknown fields
If you need to define a strict model where all the fields correspond to those defined, you can set `detectUnknown` to true.

```javascript

const userModel = new Valify({
    firstName: 'string',
    lastName: 'string',
    email: 'email'
}, {
    detectUnknown: true
});

try {
    userModel({
        firstName: 'Mike',
        lastName: 'Storm',
        email: 'test@test.net',
        role: 'admin',
        age: 26,
    })
} catch (e) {
    console.log(e.message); //Unknown fields were detected: role, age
}

```

### Auto cast
Sometimes you may need to cast a string (where possible) to a primitive type. You can set `autoCast` to true.

```javascript

const userModel = new Valify({
    firstName: 'string',
    lastName: 'string',
    email: 'email',
    aBoolean: 'boolean',
    aNumber: 'number',
    aUndefined: 'undefined',
    aNull: 'null'
}, {
    autoCast: true
});

try {
    userModel({
        firstName: 'Mike',
        lastName: 'Storm',
        email: 'test@test.net',
        role: 'admin',
        aBoolean: 'true',
        aNumber: '52',
        aUndefined: 'undefined',
        aNull: 'null'
    })
    //... done
} catch (e) {
    
}

```

### Manipulate data
You may need to manipulate data before the validation.

```javascript
// Define a model
const userModel = new Valify({
    firstName: {
        type: 'string',
        convert: value => value.toUpperCase()
    },
    lastName: {
        type: 'string',
        convert: value => value.toUpperCase()
    },
    age: {
        type: 'number',
        convert: value => parseInt(value)
    }
});

// A data object
const data = {
    firstName: 'Mike',
    lastName: 'Ricali',
    age: '25'
};

userModel(data);

console.log(data.firstName, data.lastName, data.age, typeof data.age); //=> MIKE RICALI 25 number
```

- Convert function returns: 
    - `value`, current value
    - `data`, a copy of origin data object
    - `be`, a library used for several validations. More info on <a href="https://be.js.org/docs.html"><strong>beJS</strong></a>
    

### Immutability
Valify model returns also the data that you have passed for the validation, if you want an immutable data, set `returnImmutable` to true.
```javascript
const userModel = new Valify({
    firstName: 'string',
    lastName: {
        type: 'string',
        convert: value => value.toUpperCase()
    },
    email: 'email'
}, {returnImmutable: true});

const data = {
    firstName: 'Mike',
    lastName: 'Storm',
    email: 'test@test.net'
};

const newData = userModel(data);

console.log(data.lastName, newData.lastName);
//=> Storm, STORM
```

### Undefined values
If you need manage undefined value with a default value, set `overwriteUndefined` to true, obviously works only if `default` is set.
```javascript
const userModel = new Valify({
    aNumber: 'int',
    lastName: {
        type: 'string',
        default: 'Mike'
    }
},{
    overwriteUndefined: true
});

const a = ['hello'];

try {
    userModel({
        aNumber: 24,
        lastName: a[1] //=> index at 1 is undefined but will be applied default value "mike"
    });
    done();
} catch (e) {}
```

### Define custom type
There are different ways to define custom types:

##### 1) Globally, using static method `addType` or `addTypes` if you want add more than one type
```javascript

Valify.addType('mycustom1', (value, data) => {
    console.log(data);
    return value === 10;
});

// it's also possible returns a string as error like below
Valify.addType('mycustom2', (value) => {
    if (value !== 10)
        return 'ops... must be 10'
});

// One method to add several types
Valify.addTypes([
    {
        name: 'mycustom3',
        fn: value => value === 'hello'
    },
    {
        name: 'mycustom4',
        fn: value => value === 'world'
    }
]);

// Define a model
const userModel = new Valify({
    aNumber: 'mycustom1',
    otherNumber: 'mycustom2'
});

// A data object
const data = {
    aNumber: 9,
    otherNumber: 11,
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
        type: value => typeof value === 'string'
    },
    // or 
    aBoolean: value => typeof value === 'boolean'
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

#### Use multiple rules together
If you need to define multiple checks in one type, you can do this:

```javascript
new Valify({
    myString: value => {
        if (typeof value !== 'string')
            return 'must be a string';
        if (value.length < 5)
            return 'must be greater than 5 chars';
        if (value.length > 10)
            return 'must be less than 10 chars';
    }
})
```  

#### Arguments in custom type
- Inside all custom type function are passed 3 arguments: 
    - `value`, current value
    - `data`, a copy of origin data object
    - `be`, a library used for several validations. More info on <a href="https://be.js.org/docs.html"><strong>beJS</strong></a>
    
Example

```javascript
new Valify({
    color0: 'string',
    color1: (value, data, be) => {
        if (!be.string(value))
            return 'must be a string';
        if (value === data.color0)
            return 'must be different of color0';
    }
})
```  

### Locale
You can set locale string in two ways:

##### 1) Globally, using static method `setLocale`
```javascript

Valify.setLocale({
    TYPE_FAIL: 'this type has failed'
});

```

**Default strings**

|Name|Default|
|-|-|
|`UNKNOWN_TYPE`|`Unknown type: "{type}"`|
|`TYPE_FAIL`|`"{path}" expects "{type}" but receives: {dataField}`|
|`TYPE_ARRAY_FAIL`|`"{path}" expects array of "{type}" but receives: {dataField}`|
|`TYPE_FUNCTION_FAIL`|`"{path}" receives: {dataField}`|
|`FIELD_REQUIRED`|`"{path}" is required`|
|`DATA_REQUIRED`|`Data is required and must be an object`|
|`FIELD_CANNOT_EMPTY`|`"{path}" cannot be empty`|
|`UNKNOWN_DETECTED`|`Unknown fields were detected: {unknown}`|

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
    - **`FIELD_CANNOT_EMPTY`**

### Available types

All types that you can use:

- JavaScript standard
    - `arguments`
    - `array`
    - `boolean`
    - `buffer`
    - `date`
    - `error`
    - `float32array`
    - `float64array`
    - `function`
    - `generatorfunction`
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
    
- Extra    
    - `alpha`
    - `alphanumeric`
    - `any`
    - `datestring`
    - `email`
    - `float`
    - `int`
    - `ip`
    - `timestring`
    - `uuid`
    - `url`

### Upgrade to V4
- **Breaking changes**
    - **Changed** in locale strings {field} with {path}
    - **Changed** `convert` position, now is before all checks
    - **Removed** validators, use custom types instead

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/fabioricali/Valify/blob/master/CHANGELOG.md">here</a>

## License
Valify is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>