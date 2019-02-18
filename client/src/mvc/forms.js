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

const postForm = `
<form style="position: relative;">
<h2 class="text-center">Create laureate</h2>
<fieldset class="form-group p-left-sm p-right-sm">
  <legend class="form-legend text-center py-xs">Personal data</legend>
    <div class="container">
      <div class="row" style="justify-content: space-around;">
        <div class="col-sm-5">
          <div class="col-sm-12">
            <label for="firstname" class="form-label my-xxs">Firstname</label>
            <input class="form-control form-control-animated" type="text" id="firstname">
          </div>
          <div class="col-sm-12">
            <label for="id" class="form-label my-xxs">ID</label>
            <input class="form-control form-control-animated" type="text" id="id">
          </div>
        </div>
      <div class="col-sm-5">
        <div class="col-sm-12">
          <label for="surname" class="form-label my-xxs">Surname</label>
          <input class="form-control form-control-animated" type="text" id="surname">
        </div>
        <div class="col-sm-12">
          <label for="gender" class="form-label my-xxs">Gender</label>
          <select data-name="gender" class="dropdown-secondary">
            <option class="dropdown-secondary__option" data-id="male">Male</option>
            <option class="dropdown-secondary__option" data-id="female">Female</option>
          </select>
        </div>
    </div>
    </div>
  </div>
</fieldset>
<fieldset class="form-group p-left-sm p-right-sm">
  <legend class="form-legend text-center py-xs">Bio</legend>
  <div class="container">
    <div class="row" style="justify-content: space-around;">
      <div class="col-sm-5">
        <div class="col-sm-12">
          <label for="born" class="form-label my-xxs">Date of birth</label>
          <input class="form-control form-control-animated" type="text" id="born">
        </div>
        <div class="col-sm-12">
          <label for="bornCity" class="form-label my-xxs">City of birth</label>
          <input class="form-control form-control-animated" type="text" id="bornCity">
        </div>
        <div class="col-sm-12">
          <label for="bornCountry" class="form-label my-xxs">Country of birth</label>
          <input class="form-control form-control-animated" type="text" id="bornCountry">
        </div>
        <div class="col-sm-12">
          <label for="bornCountry" class="form-label my-xxs">Country code</label>
          <input class="form-control form-control-animated" type="text" id="bornCountryCode">
        </div>
      </div>
      <div class="col-sm-5">
        <div class="col-sm-12">
          <label for="born" class="form-label my-xxs">Date of death</label>
          <input class="form-control form-control-animated" type="text" id="died">
        </div>
        <div class="col-sm-12">
          <label for="bornCity" class="form-label my-xxs">City of death</label>
          <input class="form-control form-control-animated" type="text" id="diedCity">
        </div>
        <div class="col-sm-12">
          <label for="bornCountry" class="form-label my-xxs">Country of death</label>
          <input class="form-control form-control-animated" type="text" id="diedCountry">
        </div>
        <div class="col-sm-12">
          <label for="bornCountry" class="form-label my-xxs">Country Code</label>
          <input class="form-control form-control-animated" type="text" id="diedCountryCode">
        </div>
      </div>
    </div>
  </div>
</fieldset>
<fieldset class="form-group p-left-sm p-right-sm">
  <legend class="form-legend text-center py-xs">Prizes</legend>
  <div class="container">
    <div class="row" style="justify-content: space-around;">
      <div class="col-sm-5">
        <label for="year" class="form-label my-xxs">Year</label>
        <input class="form-control form-control-animated" type="text" id="year">
      </div>
      <div class="col-sm-5">
        <label for="surname" class="form-label my-xxs">Category</label>
        <select class="dropdown-secondary" data-name="category">
          <option class="dropdown-secondary__option">Chemistry</option>
          <option class="dropdown-secondary__option">Physics</option>
          <option class="dropdown-secondary__option">Medicine</option>
          <option class="dropdown-secondary__option">Peace</option>
          <option class="dropdown-secondary__option">Literature</option>
        </select>
      </div>
      <div class="col-sm-12">
        <label for="motivation" class="form-label my-xxs">Motivation</label>
        <textarea class="form-control form-control-animated" name="motivation" placeholder="Motivation" id="motivation"></textarea>
      </div>
      <div class="col-sm-3">
        <label for="year" class="form-label my-xxs">Year</label>
        <input type="text" class="form-control form-control-animated">
      </div>
      <div class="col-sm-3">
        <label for="city" class="form-label my-xxs">City</label>
        <input type="text" class="form-control form-control-animated">
      </div>
      <div class="col-sm-3">
        <label for="country" class="form-label my-xxs">Country</label>
        <input type="text" class="form-control form-control-animated">
      </div>
    </div>
  </div>
</fieldset>
<div class="form-submit my-xs m-auto">
  <button type="submit" class="btn btn-secondary">Submit</button>
</div>
<button class="btn btn-form-close">+</button>
</form>`

const item = {
  year: 1900,
  city: 'Riga',
  country: 'Latvia'
}
const editForm = `
<form style="position: relative;">
<h2 class="text-center">Edit laureate</h2>
<fieldset class="form-group p-left-sm p-right-sm">
  <legend class="form-legend text-center py-xs">Personal data</legend>
    <div class="container">
      <div class="row" style="justify-content: space-around;">
        <div class="col-sm-5">
          <div class="col-sm-12">
            <label for="firstname" class="form-label my-xxs">Firstname</label>
            <input class="form-control form-control-animated" type="text" id="firstname">
          </div>
          <div class="col-sm-12">
            <label for="id" class="form-label my-xxs">ID</label>
            <input class="form-control form-control-animated" type="text" id="id">
          </div>
        </div>
      <div class="col-sm-5">
        <div class="col-sm-12">
          <label for="surname" class="form-label my-xxs">Surname</label>
          <input class="form-control form-control-animated" type="text" id="surname">
        </div>
        <div class="col-sm-12">
          <label for="gender" class="form-label my-xxs">Gender</label>
          <select data-name="gender" class="dropdown-secondary">
            <option class="dropdown-secondary__option" data-id="male">Male</option>
            <option class="dropdown-secondary__option" data-id="female">Female</option>
          </select>
        </div>
    </div>
    </div>
  </div>
</fieldset>
<fieldset class="form-group p-left-sm p-right-sm">
  <legend class="form-legend text-center py-xs">Bio</legend>
  <div class="container">
    <div class="row" style="justify-content: space-around;">
      <div class="col-sm-5">
        <div class="col-sm-12">
          <label for="born" class="form-label my-xxs">Date of birth</label>
          <input class="form-control form-control-animated" type="text" id="born">
        </div>
        <div class="col-sm-12">
          <label for="bornCity" class="form-label my-xxs">City of birth</label>
          <input class="form-control form-control-animated" type="text" id="bornCity">
        </div>
        <div class="col-sm-12">
          <label for="bornCountry" class="form-label my-xxs">Country of birth</label>
          <input class="form-control form-control-animated" type="text" id="bornCountry">
        </div>
        <div class="col-sm-12">
          <label for="bornCountry" class="form-label my-xxs">Country code</label>
          <input class="form-control form-control-animated" type="text" id="bornCountryCode">
        </div>
      </div>
      <div class="col-sm-5">
        <div class="col-sm-12">
          <label for="born" class="form-label my-xxs">Date of death</label>
          <input class="form-control form-control-animated" type="text" id="died">
        </div>
        <div class="col-sm-12">
          <label for="bornCity" class="form-label my-xxs">City of death</label>
          <input class="form-control form-control-animated" type="text" id="diedCity">
        </div>
        <div class="col-sm-12">
          <label for="bornCountry" class="form-label my-xxs">Country of death</label>
          <input class="form-control form-control-animated" type="text" id="diedCountry">
        </div>
        <div class="col-sm-12">
          <label for="bornCountry" class="form-label my-xxs">Country Code</label>
          <input class="form-control form-control-animated" type="text" id="diedCountryCode">
        </div>
      </div>
    </div>
  </div>
</fieldset>
<fieldset class="form-group p-left-sm p-right-sm">
  <legend class="form-legend text-center py-xs">Prizes</legend>
  <div class="container">
    <div class="row" style="justify-content: space-around;">
      <div class="col-sm-5">
        <label for="year" class="form-label my-xxs">Year</label>
        <input class="form-control form-control-animated" type="text" id="year">
      </div>
      <div class="col-sm-5">
        <label for="surname" class="form-label my-xxs">Category</label>
        <select class="dropdown-secondary" data-name="category">
          <option class="dropdown-secondary__option">Chemistry</option>
          <option class="dropdown-secondary__option">Physics</option>
          <option class="dropdown-secondary__option">Medicine</option>
          <option class="dropdown-secondary__option">Peace</option>
          <option class="dropdown-secondary__option">Literature</option>
        </select>
      </div>
      <div class="col-sm-12">
        <label for="motivation" class="form-label my-xxs">Motivation</label>
        <textarea class="form-control form-control-animated" name="motivation" placeholder="Motivation" id="motivation"></textarea>
      </div>
      <div class="col-sm-3">
        <label for="year" class="form-label my-xxs">Year</label>
        <input type="text" class="form-control form-control-animated" value=${item.year}>
      </div>
      <div class="col-sm-3">
        <label for="city" class="form-label my-xxs">City</label>
        <input type="text" class="form-control form-control-animated" value="${item.city}">
      </div>
      <div class="col-sm-3">
        <label for="country" class="form-label my-xxs">Country</label>
        <input type="text" class="form-control form-control-animated" value="${item.country}">
      </div>
    </div>
  </div>
</fieldset>
<div class="form-submit my-xs m-auto">
  <button type="submit" class="btn btn-secondary">Submit</button>
</div>
</form>
<button class="btn btn-form-close">+</button>
`

const deleteForm = `
<form style="position: relative;">
  <h2 class="text-center">Delete laureate</h2>
  <label for="id" class="form-label my-xxs">ID</label>
  <input class="form-control form-control-animated" type="text" id="id">
  <button type="submit" class="btn btn-secondary my-xs">Submit</button>
</form>
<button class="btn btn-form-close">+</button>
`

export default { createLaureateForm, postForm, editForm, deleteForm }