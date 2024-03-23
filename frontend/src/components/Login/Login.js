import React from 'react'

export const Login = () => {
  return (
    <div class="gradient-container">
      <div class="container align-items-center">
        <div class="row justify-content-center abe">
          <div class="col-md-3 col-lg-3 col-sm-3 col-xl-3">

            <div class="login-container rounded">
              <h3 class="text-center mb-4">Iniciar sesión</h3>
              <form>
                <div class="form-group">
                   
                  <input type="email" class="form-control input_text_login" id="email" placeholder="Email" />
                </div>
                <div class="form-group">
                   
                  <input type="password" class="form-control  input_text_login" id="password" placeholder="Password" />
                </div>
                <button type="submit" class="btn btn-outline-light button_login">Log in</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>






  )
}
