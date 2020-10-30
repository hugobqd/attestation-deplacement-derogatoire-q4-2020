export function storeInputs () {
  /**
   * Init submit button and inputs
   */

  const GENERATE_BTN = document.getElementById('generate-btn')

  const INPUTS = Array.from(document.getElementsByClassName('form-control'))
  const INPUTS_TO_STORE = INPUTS.filter((item) => {
    if (item.id !== 'field-heuresortie' && item.id !== 'field-datesortie') {
      return true
    }
    return false
  })
  console.log(INPUTS_TO_STORE)

  /**
   * Check and get LocalStorage,
   * Output values in inputs
   */

  if (localStorage.getItem('fieldsData')) {
    const localData = JSON.parse(localStorage.getItem('fieldsData'))

    localData.forEach((item) => {
      console.log('item', item.id, item.val)
      document.getElementById(item.id).value = item.val
    })
  }

  /**
   * Set LocalStorage on submit
   */

  GENERATE_BTN.addEventListener('click', async (event) => {
    const fieldsData = INPUTS_TO_STORE.filter((item) => item.value)
      .filter((item) => item.checkValidity())
      .map((item) => {
        console.log(item.checkValidity())
        return { id: item.id, val: item.value }
      })

    localStorage.setItem('fieldsData', JSON.stringify(fieldsData))
  })
}
