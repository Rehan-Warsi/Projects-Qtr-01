interface conversionRates {
      [currency: string]: number;
} 

interface mainCurrencies {
    [currency: string]: conversionRates;
}

const parityRates:mainCurrencies = {
    "USD":{
        "PKR": 296.42,
        "GBP": 0.81,
        "EUR": 0.94,
        "AUD": 1.53,
        "CAD": 1.35,
        "INR": 83.09,
        "BDT": 109.57,
        "AED": 3.67,
        "SAR": 3.65
    },
 
    "PKR":{
        "USD": 0.0034,
        "GBP": 0.0027,
        "EUR": 0.00329,
        "AUD": 0.0052,
        "CAD": 0.0046,
        "INR": 0.28,
        "BDT": 0.37,
        "AED": 0.012,
        "SAR": 0.013
    },

    "GBP":{
        "USD": 1.24,
        "PKR": 367.15,
        "EUR": 1.16,
        "AUD": 1.92,
        "CAD": 1.62,
        "INR": 102.92,
        "BDT": 135.71,
        "AED": 4.55,
        "SAR": 4.65
    },

    "EURO": {
        "USD": 1.07,
        "PKR": 316.23,
        "GBP": 0.86,
        "AUD": 1.66,
        "CAD": 1.44,
        "INR": 88.66,
        "BDT": 116.92,
        "AED": 3.92,
        "SAR": 4.00
    },

    "AUD": {
        "USD"  : 0.64,
        "PKR"  : 190.91,
        "GBP"  : 0.52,
        "EURO" : 0.60,
        "CAD"  : 0.87,
        "INR"  : 53.51,
        "BDT"  : 70.57,
        "AED"  : 2.37,
        "SAR"  : 2.42
    },

    "CAD": {
        "USD"  : 0.74,
        "PKR"  : 219.21,
        "GBP"  : 0.60,
        "EURO" : 0.69,
        "AUD"  : 1.15,
        "INR"  : 61.45,
        "BDT"  : 81.04,
        "AED"  : 2.72,
        "SAR"  : 2.77
    },
    
    "INR": {
        "USD"  : 0.012,
        "PKR"  : 3.57,
        "GBP"  : 0.0097,
        "EURO" : 0.011,
        "AUD"  : 0.019,
        "CAD"  : 0.016,
        "BDT"  : 1.32,
        "AED"  : 0.044,
        "SAR"  : 0.045
    },

    "BDT": {
        "USD"  : 0.0091,
        "PKR"  : 2.71,
        "GBP"  : 0.0074,
        "EURO" : 0.0086,
        "AUD"  : 0.014,
        "CAD"  : 0.012,
        "INR"  : 0.76,
        "AED"  : 0.034,
        "SAR"  : 0.034
    },

    "AED": {
        "USD"  : 0.27,
        "PKR"  : 80.70,
        "GBP"  : 0.22,
        "EURO" : 0.26,
        "AUD"  : 0.42,
        "CAD"  : 0.37,
        "INR"  : 22.62,
        "BDT"  : 29.83,
        "SAR"  : 1.02
    },

    "SAR": {
        "USD"  : 0.27,
        "PKR"  : 79.02,
        "GBP"  : 0.22,
        "EURO" : 0.25,
        "AUD"  : 0.41,
        "CAD"  : 0.36,
        "INR"  : 22.15,
        "BDT"  : 29.21,
        "AED"  : 0.98
    },
}   

export {parityRates}