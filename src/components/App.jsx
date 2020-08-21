import React from 'react'
import { useSelector } from 'react-redux'
import FormPosts from './FormPosts'
import Posts from './Posts'
import FetchedPosts from './FetchedPosts'
import Alert from './Alert'

const App = () => {

  const alert = useSelector(state => state.app.alert)

  return (
    <div className="container-fluid pt-3">
      {alert && <Alert text={alert.text} />}
      <h4>Forms</h4>
      <div className="row">
        <div className="col">
          <FormPosts />
        </div>
        <div className="col"></div>
      </div>
      <hr/>
      <div className="row">
        <div className="col">
          <h4>Синхронные посты</h4>
          <Posts />
        </div>
        <div className="col">
          <h4>Асинхронные посты</h4>
          <FetchedPosts />
        </div>
      </div>
    </div>
  )
}

export default App
