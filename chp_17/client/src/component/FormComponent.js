import React from 'react'

export default function FormComponent(props) {
    return (
        <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <input
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <input
            name="age"
            placeholder="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        <hr />
        <h1>info Detail</h1>
        <h2>First Name</h2> : <h3>{}</h3>
        <h2>Last Name</h2> : <h3>{}</h3>
        <h2>Age</h2> : <h3>{}</h3>
      </div>
    )
}
