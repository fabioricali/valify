# Valify

Validates data to easy and clean way.

### Installation
```
npm install --save valify
```

### Basic usage
```javascript
const Valify = require('valify');

// Define a model
const userModel = Valify({
    firstName: {
        type: 'string',
        required: true
    },
    lastName: {
        type: string,
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
```