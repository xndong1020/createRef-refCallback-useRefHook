import React from 'react'

// ref 必须是第二个参数
const MyInput = (props, ref) => {
  return <input type="text" ref={ref} {...props} />
}

export default React.forwardRef(MyInput)

