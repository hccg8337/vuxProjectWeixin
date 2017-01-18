export const showAlert = ({dispatch}, message = '') => {
  if(!message) {
    return false
  }
  dispatch('SHOW_ALERT', {
    type: 'alert',
    message: message,
    onClose: noop
  })
}

export const showConfirm = ({dispatch}, data = {}) => {
  if(!data.message) {
    return false
  }
  data.type = 'confirm'
  if(typeof data.onClose != 'function') {
    data.onClose = noop
  }
  if(typeof data.onConfirm != 'function') {
    data.onConfirm = noop
  }
  dispatch('SHOW_ALERT', data)
}

export const hideAlert = ({dispatch}) => dispatch('HIDE_ALERT')
