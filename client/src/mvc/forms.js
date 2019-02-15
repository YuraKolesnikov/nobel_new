const createLaureateForm = {
  /* Input type text */
  bio: [
    { name: 'id',               placeholder: 'ID' },
    { name: 'firstname',        placeholder: 'Firstname'},
    { name: 'surname',          placeholder: 'Surname'},
    { name: 'born',             placeholder: 'Born'},
    { name: 'died',             placeholder: 'Died'},
    { name: 'bornCountry',      placeholder: 'Born Country'},
    { name: 'bornCountryCode',  placeholder: 'Born country code'},
    { name: 'bornCity',         placeholder: 'Born city'},
    { name: 'diedCountry',      placeholder: 'Died Country'},
    { name: 'diedCountryCode',  placeholder: 'Died country code'},
    { name: 'diedCity',         placeholder: 'Died city'}
  ],
  gender: { type: 'select', options: ['Male', 'Female']},
  prizes: {
    year: { 
      tag: 'input', 
      type: 'text', 
      name: 'year', 
      placeholder: 'Year' 
    },
    category: { 
      tag: 'select', 
      options: ['Chemistry', 'Physics', 'Medicine', 'Peace', 'Literature'] 
    },
    motivation: { 
      tag: 'textarea', 
      name: 'motivation', 
      placeholder: 'Motivation', 
      size: { cols: 20, rows: 3 } 
    }
  },
  /* Input type text */
  affiliations: [
    { name: 'name',     placeholder: 'Name' },
    { name: 'city',     placeholder: 'City' },
    { name: 'Country',  placeholder: 'Country' }
  ]
}

export default { createLaureateForm }