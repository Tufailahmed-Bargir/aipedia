function SubmitTool() {
    return (  
        <>
        <div class="container">
<div class="border card"><div class="p-5 card-body"><h2 class="mb-4 fw-semi-bold">Submit a Request</h2><form class=""><div class="mb-3"><label class="form-label" for="name">Your Name <span class="text-danger">*</span></label><input placeholder="Your Name" required="" type="text" id="name" class="form-control"/></div><div class="mb-3"><label class="form-label" for="company">Company <span class="text-danger">*</span></label><input placeholder="Company" required="" type="text" id="company" class="form-control"/></div><div class="mb-3"><label class="form-label" for="email">Email Address <span class="text-danger">*</span></label><input placeholder="Email address here" required="" type="text" id="email" class="form-control"/></div><div class="mb-3"><label class="form-label" for="subject">Subject </label><select name="" class="form-select" id="subject"><option value="" class="text-muted" selected="">Select</option><option value="1" class="text-dark">General</option><option value="2" class="text-dark">Accounts</option><option value="3" class="text-dark">Payment</option></select></div><div class="mb-3"><label class="form-label" for="description">Description</label><textarea rows="3" placeholder="Write down here" id="description" class="form-control"></textarea></div><button type="submit" class="btn btn-primary">Submit</button></form></div></div>
</div>
        </>
    );
}

export default SubmitTool;