import BasicExample from '@/app/Components/navbar'
import Footer from '@/app/Components/footer';

function Login() {
    return (

        <>
   {/* <BasicExample/> */}
 
    <main class="position-relative">
        <div class="pattern-square">
         
        <section class="py-5 py-lg-8">
           <div class="container">
              <div class="row">
                 <div class="col-xl-4 offset-xl-4 col-md-12 col-12">
                    <div class="text-center">
                     <img class="d-block mx-auto " src="https://1000logos.net/wp-content/uploads/2023/02/ChatGPT-Logo.png" alt="" width="150" height="70"/>
                       <h1 class="mb-1">Create Account</h1>
                       <p class="mb-0">Sign up now and get free account instant.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>
       
        <section>
           <div class="container">
              <div class="row justify-content-center mb-6">
                 <div class="col-xl-5 col-lg-6 col-md-8 col-12">
                    <div class="card shadow-sm mb-3">
                       <div class="card-body">
                          <form class="needs-validation mb-6" action="/create" method="post">
                             <div class="mb-3">
                                <label for="signupFullnameInput" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="name" name="name" />
                                <div class="invalid-feedback">Please enter full name</div>
                             </div>

                             <div class="mb-3">
                                <label for="signupEmailInput" class="form-label">
                                   Email
                                   <span class="text-danger">*</span>
                                </label>
                                <input type="email" class="form-control" id="email" name="email"/>
                                <div class="invalid-feedback">Please enter email.</div>
                             </div>
                             <div class="mb-3">
                                <label for="formSignUpPassword" class="form-label">Password</label>
                                <div class="password-field position-relative">
                                   <input type="password" class="form-control fakePassword" id="password" name="password" />
                                   <span><i class="bi bi-eye-slash passwordToggler"></i></span>
                                   <div class="invalid-feedback">Please enter password.</div>
                                </div>
                             </div>
                             <div class="mb-3">
                                <label for="formSignUpConfirmPassword" class="form-label">Confirm Password</label>
                                <div class="password-field position-relative">
                                   <input type="password" class="form-control fakePassword" id="formSignUpConfirmPassword" />
                                   <span><i class="bi bi-eye-slash passwordToggler"></i></span>
                                   <div class="invalid-feedback">Please enter password.</div>
                                </div>
                             </div>
                             <div class="mb-3">
                                <div class="mb-4 d-flex align-items-center justify-content-between">
                                   <div class="form-check">
                                      <input class="form-check-input" type="checkbox" id="signupCheckTextCheckbox"/>
                                      <label class="form-check-label ms-2" for="signupCheckTextCheckbox">
                                         <a href="#">Terms of Use</a>
                                         &amp;
                                         <a href="#">Privacy Policy</a>
                                      </label>
                                   </div>
                                </div>
                             </div>

                             <div class="d-grid">
                                <button class="btn btn-primary" type="submit">Sign Up</button>
                             </div>
                          </form>

                          <span>Sign up with your social network.</span>
                          <div class="d-grid mt-3">
                             <a href="#" class="btn btn-google">
                                <span class="me-2">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                                   </svg>
                                </span>
                                Continue with Google
                             </a>
                          </div>
                          <div class="d-grid mt-2">
                             <a href="#" class="btn btn-facebook">
                                <span class="me-2">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                   </svg>
                                </span>
                                Continue with Facebook
                             </a>
                          </div>
                       </div>
                    </div>

                    <span>
                       Already have an account?
                       <a href="/sign-up" class="text-primary">Sign in here.</a>
                    </span>
                 </div>
              </div>
              <div class="row">
                 <div class="col-lg-12">
                    <div class="text-center">
                       <div class="small mb-3 mb-lg-0 text-body-tertiary">
                          Copyright ©
                          <span class="text-primary"><a href="#">Block Bootstrap 5 Theme</a></span>
                          | Designed by
                          <span class="text-primary"><a href="#">CodesCandy</a></span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
    
        
        </div>
       
        
     </main>
{/* <Footer/> */}
        </>
      );
}

export default Login;