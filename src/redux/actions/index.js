import {
  CHANGE_LIST_TITLE,
  ADD_COVER_COLOR,
  ADD_DESC, ADD_NEW_LIST,
  SWITCH_CARDS,
  ADD_NEW_TASK,
  CHANGE_TAG,
  CHANGE_TAG_TITLE,
  CHANGE_TITLE,
  CHENGE_STATUS,
  ADD_CHECKLIST,
  CHANGE_TITLE_CHECKLIST,
  ADD_NEW_ITEM_CHECKLIST,
  CHEKED_ITEM_CHECKLIST,
  CHENGE_ITEM_TITLE_CHECKLIST,
  DELETE_CHECKLIST,
  DELETE_ITEM_CHECKLIST} from '../types'

export const changeListTitle = (values) => {
  return {
    type: CHANGE_LIST_TITLE,
    values: {
      id: values.id,
      title: values.title,
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


export const addCheckList = (values) => {
  return {
    type: ADD_CHECKLIST,
    id: values.id,
  }
}


export const changeChecklistTitle = (values) => {
  return {
    type: CHANGE_TITLE_CHECKLIST,
    values: {
      id: values.id,
      title: values.title,
    },
  }
}


export const addNewItemChecklist = (values) => {
  return {
    type: ADD_NEW_ITEM_CHECKLIST,
    values: {
      id: values.id,
      title: values.title,
    },
  }
}


export const checkdItemChecklist = (values) => {
  return {
    type: CHEKED_ITEM_CHECKLIST,
    values: {
      id: values.id,
      owner: values.owner,
      done: values.done,
    },
  }
}


// export const CHENGE_ITEM_TITLE_CHECKLIST

export const changeItemTitleChecklist = (values) => {
  return {
    type: CHENGE_ITEM_TITLE_CHECKLIST,
    values: {
      owner: values.owner,
      id: values.id,
      title: values.title,
    },
  }
}


export const deleteChecklist = (values) => {
  return {
    type: DELETE_CHECKLIST,
    values: {
      owner: values.owner,
    },
  }
}


export const deleteItemChecklist = (values) => {
  return {
    type: DELETE_ITEM_CHECKLIST,
    values: {
      owner: values.owner,
      id: values.id,
    },
  }
}
