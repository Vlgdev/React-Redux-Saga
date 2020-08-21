import React from 'react'
import { connect } from 'react-redux'
import { createPost, showAlert } from '../redux/actions'

class FormPosts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  submitHandler = () => {
    event.preventDefault()

    const {title} = this.state

    if (!title.trim()) {
      this.props.showAlert('Вы ничего не ввели')
      return
    }

    const newPost = {
      title: title.trim(),
      id: Date.now().toString()
    }
    
    this.props.createPost(newPost)
    this.setState(prev => ({...prev, title: ''}))
  }

  changeHandler = () => {
    this.setState(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
              <div className="form-group">
                <label htmlFor="posts-title">Введите название поста</label>
                <input
                  type="text"
                  className="form-control"
                  id="posts-title"
                  name="title"
                  value={this.state.title}
                  onChange={this.changeHandler}
                />
              </div>
              <button className="btn btn-success" type="submit">
                Добавить
              </button>
            </form>
    )
  }
}

const mapDispatchToProps = {
    createPost, showAlert
}

export default connect(null, mapDispatchToProps)(FormPosts)