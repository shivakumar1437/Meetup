import React from 'react'

const RegisterContext = React.createContext({
  inputName: '',
  meetingMsg: '',
  isEmpty: false,
  onClickChangeName: () => {},
  onClickMeetingName: () => {},
  goToHomeRoute: () => {},
  onChangeEmpty: () => {},
  onSetDefaultValues: () => {},
})

export default RegisterContext
