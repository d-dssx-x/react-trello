export const CHANGE_LIST_TITLE = 'CHANGE_LIST_TITLE'
export const ADD_NEW_LIST = 'ADD_NEW_LIST'

export const ADD_NEW_TASK = 'ADD_NEW_TASK'
export const SWITCH_CARDS = 'SWITCH_CARDS'
export const CHENGE_STATUS = 'CHANGE_STATUS'
export const CHANGE_TITLE = 'CHANGE_TITLE'
export const ADD_DESC = 'ADD_DESC'
export const ADD_COVER_COLOR = 'ADD_COVER_COLOR'
export const CHANGE_TAG = 'CHANGE_TAG'


export const CHANGE_TAG_TITLE = 'CHANGE_TAG_TITLE'


export const changeListTitle = (values) => {
  return {
    type: CHANGE_LIST_TITLE,
    values: {
      ...values,
    },
  }
}


export const addNewTask = (values) => {
  return {
    type: ADD_NEW_TASK,
    values: {
      ...values,
    },
  }
}

export const addNewList = (values) => {
  return {
    type: ADD_NEW_LIST,
    values: {
      ...values,
    },
  }
}

export const switchCards = (values) => {
  return {
    type: SWITCH_CARDS,
    values: {
      ...values,
    },
  }
}

export const changeStatus = (values) => {
  return {
    type: CHENGE_STATUS,
    values: {
      ...values,
    },
  }
}


export const changeTitle = (values) => {
  return {
    type: CHANGE_TITLE,
    values: {
      ...values,
    },
  }
}


export const addDesc = (values) => {
  return {
    type: ADD_DESC,
    values: {
      ...values,
    },
  }
}


export const addCoverColor = (values) => {
  return {
    type: ADD_COVER_COLOR,
    values: {
      ...values,
    },
  }
}


export const changeTagTitle = (values) => {
  return {
    type: CHANGE_TAG_TITLE,
    values: {
      ...values,
    },
  }
}

export const changeTag = (values) => {
  return {
    type: CHANGE_TAG,
    values: {
      ...values,
    },
  }
}
