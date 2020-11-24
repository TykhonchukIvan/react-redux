export function checkValidation(value){

  const validLog = /[-_0-9a-z]/i;
  let valid = null

  if (value.length < 3) {
    valid = {
      data: null,
      isErrorStatus: true,
      message: 'Must contain at least three characters'
    }
  }
  else if (value.trim() === '') {
    valid = {
      data: null,
      isErrorStatus: true,
      message: 'Must contain characters'
    }
  }
  else if (validLog.test(value) !== true) {
    valid = {
      data: null,
      isErrorStatus: true,
      message: 'Must contain latin characters'
    }
  }
  else {
    valid = {
      data: value,
      isErrorStatus: false,
      message: 'Success'
    }
  }

  return valid
}