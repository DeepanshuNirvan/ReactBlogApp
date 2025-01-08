export default function ContactForm() {
    return (
        <div className="container d-flex justify-content-center" style={{ "marginTop": "8%", "marginBottom": "4%" }}>
            <div className="w-50 border rounded bg-dark shadow-lg">
                <form className="m-5">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label text-white">Name</label>
                        <input type="text" className="form-control " id="name" name="name" placeholder="Enter the name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label text-white">Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="comment" className="form-label text-white">Comment</label>
                        <br />
                        <textarea className="form-control" placeholder="Comments..."></textarea>
                    </div>
                    <button type="submit" className="btn btn-warning">Send Message</button>
                </form>
            </div>
        </div>)
}