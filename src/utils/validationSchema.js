const biddingsValidationSchema = {
    name: {
        notEmpty: {
            errorMessage: "Name cannot be empty"
        },
        isString: {
            errorMessage: "Name must be a string"
        }
    },
    starting_bid: {
        notEmpty: {
            errorMessage: "Starting bid cannot be empty"
        },
        isInt: {
            errorMessage: "Starting bid must be a number"
        }
    },
    increment: {
        notEmpty: {
            errorMessage: "Increment cannot be empty"
        },
        isInt: {
            errorMessage: "Increment must be a number"
        }
    }
}

module.exports = {biddingsValidationSchema};