import Link from "next/link";

function Pricing() {
    return ( 

        <>
          <section id="pricing">
    <div class="container">
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h2 class="display-4 fw-normal">Submit a tool</h2>
        <p class="fs-5 text-body-secondary"> Aipedia is committed to advertising quality tools and technology products to our community. Select a listing type below or contact sales to learn more.</p>
      </div>
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Basic</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$0<small class="text-body-secondary fw-light">/mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>5 Matches Per Day</li>
                <li>10 Messages Per Day</li>
                <li>Unlimited App Usage</li>
              </ul>
              <form action="/sign-up" method="post">
             <Link href="/Signup"> <button type="submit" class="w-100 btn btn-lg btn-outline-dark">Sign up for free</button></Link>
            </form>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Medium</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$29<small class="text-body-secondary fw-light">/mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Unlimited Matches</li>
                <li>Unlimited Messages</li>
                <li>Unlimited App Usage</li>
              </ul>
              <form action="/pay" method="get">
             <Link href="https://buy.stripe.com/test_dR6bIT5ycfcV5uEbIL"><button type="submit" class="w-100 btn btn-lg btn-dark">Get started</button></Link> 
              </form>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm border-dark">
            <div class="card-header py-3 text-bg-dark border-dark">
              <h4 class="my-0 fw-normal">Advance</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$39<small class="text-body-secondary fw-light">/mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Pirority Listing</li>
                <li>Unlimited Matches & Messages</li>
                <li>Unlimited App Usage</li>
              </ul>
              <Link href='https://buy.stripe.com/test_6oEeV5gcQ2q9g9ieUW'><button type="button" class="w-100 btn btn-lg btn-dark">Contact us</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   
 
        </>
     );
}

export default Pricing;